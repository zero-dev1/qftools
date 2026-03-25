import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SearchModal } from './SearchModal';

export function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-14 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md z-40">
        <div className="max-w-[1440px] mx-auto h-full px-6 md:px-20 lg:px-[124px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1">
            <span className="font-display font-semibold text-base text-white">QF</span>
            <span className="font-display font-semibold text-base text-white/50">Tools</span>
          </Link>
          
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <NavLink
              to="/explorer"
              className={({ isActive }) =>
                `relative font-body font-medium text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white/70'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Explorer
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/tokens"
              className={({ isActive }) =>
                `relative font-body font-medium text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white/70'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Tokens
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/gas"
              className={({ isActive }) =>
                `relative font-body font-medium text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white/70'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Gas
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/burn"
              className={({ isActive }) =>
                `relative font-body font-medium text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white/70'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Burn
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
