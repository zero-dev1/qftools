import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const PAGE_META: Record<string, { title: string; description: string; image: string }> = {
  '/': {
    title: 'QFTools — Explorer for QF Network',
    description: 'The human-readable layer of QF Network. Search accounts, track burns, explore activity.',
    image: 'https://qftools.xyz/og/default.png',
  },
  '/explorer': {
    title: 'Explorer — QFTools',
    description: 'Real-time activity, transfers, and accounts on QF Network',
    image: 'https://qftools.xyz/og/explorer.png',
  },
  '/burn': {
    title: 'Burn Dashboard — QFTools',
    description: 'Track QF burned forever across QFPay, QNS, and more',
    image: 'https://qftools.xyz/og/burn.png',
  },
  '/tokens': {
    title: 'Token Directory — QFTools',
    description: 'Verified tokens deployed on QF Network',
    image: 'https://qftools.xyz/og/tokens.png',
  },
  '/gas': {
    title: 'Gas Tracker — QFTools',
    description: 'Real-time gas prices and fee history on QF Network',
    image: 'https://qftools.xyz/og/gas.png',
  },
  '/accounts': {
    title: 'Accounts — QFTools',
    description: 'All funded accounts and balances on QF Network',
    image: 'https://qftools.xyz/og/accounts.png',
  },
};

const BOT_UA = /bot|crawl|spider|slurp|facebookexternalhit|Twitterbot|WhatsApp|LinkedInBot|Discordbot|TelegramBot|Googlebot/i;

// Try multiple possible paths for the built index.html
function getIndexHtml(): string {
  const candidates = [
    join(process.cwd(), 'dist', 'index.html'),
    join(__dirname, '..', 'dist', 'index.html'),
    join(__dirname, 'dist', 'index.html'),
  ];

  for (const p of candidates) {
    if (existsSync(p)) {
      return readFileSync(p, 'utf-8');
    }
  }

  throw new Error(`index.html not found. Tried: ${candidates.join(', ')}`);
}

function getMeta(path: string) {
  const cleanPath = path.split('?')[0].split('#')[0];

  // Exact match
  if (PAGE_META[cleanPath]) return { meta: PAGE_META[cleanPath]!, cleanPath };

  // Dynamic account pages: /explorer/axe.qf or /explorer/5Dco...
  if (cleanPath.startsWith('/explorer/')) {
    const id = cleanPath.replace('/explorer/', '');
    const displayName = id.endsWith('.qf') ? id : `${id.slice(0, 8)}…`;
    return {
      meta: {
        title: `${displayName} — QFTools`,
        description: `Account details and activity for ${displayName} on QF Network`,
        image: 'https://qftools.xyz/og/accounts.png',
      },
      cleanPath,
    };
  }

  // Fallback
  return { meta: PAGE_META['/']!, cleanPath };
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const ua = req.headers['user-agent'] || '';
    const path = req.url || '/';

    let html = getIndexHtml();

    // Not a bot — serve SPA as-is
    if (!BOT_UA.test(ua)) {
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
      return res.send(html);
    }

    // Bot — inject route-specific OG tags
    const { meta, cleanPath } = getMeta(path);

    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
      .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.title}"`)
      .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.description}"`)
      .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${meta.image}"`)
      .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="https://qftools.xyz${cleanPath}"`)
      .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${meta.title}"`)
      .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${meta.description}"`)
      .replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${meta.image}"`);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');
    return res.send(html);

  } catch (err) {
    // If anything fails, redirect to root so the site still works
    console.error('og-meta function error:', err);
    res.setHeader('Location', '/');
    return res.status(302).end();
  }
}
