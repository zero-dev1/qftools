import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

const PAGE_META: Record<string, { title: string; description: string; image: string }> = {
  '/': {
    title: 'QFTools — Explorer for QF Network',
    description: 'The human-readable layer of QF Network',
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

export default function handler(req: VercelRequest, res: VercelResponse) {
  const ua = req.headers['user-agent'] || '';
  const path = req.url || '/';

  // Not a bot — serve the SPA normally
  if (!BOT_UA.test(ua)) {
    const html = readFileSync(join(__dirname, '..', 'dist', 'index.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    return res.send(html);
  }

  // Bot — inject correct OG tags
  let html = readFileSync(join(__dirname, '..', 'dist', 'index.html'), 'utf-8');

  // Match known pages or check for account/explorer detail pages
  const cleanPath = path.split('?')[0];
  let meta = PAGE_META[cleanPath];

  // Dynamic account pages: /explorer/axe.qf or /explorer/5Dco...
  if (!meta && cleanPath.startsWith('/explorer/')) {
    const id = cleanPath.replace('/explorer/', '');
    const displayName = id.endsWith('.qf') ? id : `${id.slice(0, 8)}…`;
    meta = {
      title: `${displayName} — QFTools`,
      description: `Account details and transfers for ${displayName} on QF Network`,
      image: 'https://qftools.xyz/og/accounts.png',
    };
  }

  // Fallback
  if (!meta) {
    meta = PAGE_META['/']!;
  }

  // Replace meta tags
  html = html
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.title}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.description}"`)
    .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${meta.image}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="https://qftools.xyz${cleanPath}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${meta.title}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${meta.description}"`)
    .replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${meta.image}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  return res.send(html);
}
