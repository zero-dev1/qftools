import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/explorer', label: 'Explorer' },
    { path: '/tokens', label: 'Tokens' },
    { path: '/gas', label: 'Gas' },
    { path: '/burn', label: 'Burn' },
  ];

  const isActive = (path: string) => {
    if (path === '/explorer') {
      return location.pathname === '/' || location.pathname.startsWith('/explorer');
    }
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-2xl px-6 h-12 flex items-center gap-8 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        <Link
          to="/explorer"
          className="flex items-baseline gap-0.5 hover:opacity-80 transition-opacity duration-200 mr-2"
        >
          <span className="font-display font-semibold text-[15px] text-white">QF</span>
          <span className="font-display font-semibold text-[15px] text-white/40">Tools</span>
        </Link>

        <div className="w-px h-4 bg-white/[0.06]" />

        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative font-body font-medium text-[13px] transition-all duration-200 py-1 ${
              isActive(item.path)
                ? 'text-white'
                : 'text-white/40 hover:text-white/60'
            }`}
          >
            {item.label}
            {isActive(item.path) && (
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                layoutId="activeNav"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        ))}

        <div className="w-px h-4 bg-white/[0.06]" />

        {/* Cmd+K trigger */}
        <button
          onClick={() => document.dispatchEvent(new CustomEvent('open-spotlight'))}
          className="flex items-center gap-1.5 text-white/30 hover:text-white/50 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
              stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          <div className="text-[10px] font-mono text-white/20 border border-white/[0.08] rounded px-1 py-px">⌘K</div>
        </button>
      </nav>
    </div>
  );
}
