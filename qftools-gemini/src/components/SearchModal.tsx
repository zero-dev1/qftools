import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ACCOUNTS } from '@/lib/mockData';
import { GradientAvatar } from './GradientAvatar';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filtered = ACCOUNTS.filter(a => {
    if (!query) return false;
    const q = query.toLowerCase();
    return a.qfName?.toLowerCase().includes(q) || a.address.toLowerCase().includes(q);
  }).slice(0, 5);

  const handleSelect = (id: string) => {
    navigate(`/explorer/${id}`);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (filtered.length > 0) {
        handleSelect(filtered[0].qfName || filtered[0].address);
      } else if (query) {
        navigate(`/explorer/${query}`);
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-lg bg-[#111111] border border-white/10 rounded-2xl overflow-hidden pointer-events-auto"
            >
              <div className="flex items-center px-4 h-14 border-b border-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white/30 mr-3">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search a .qf name or address..."
                  className="flex-1 bg-transparent border-none outline-none font-body text-white placeholder:text-white/30"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="text-[10px] font-mono text-white/30 border border-white/10 rounded px-1.5 py-0.5 ml-2">ESC</div>
              </div>
              
              {query && (
                <div className="py-2">
                  {filtered.length > 0 ? (
                    filtered.map(account => (
                      <button
                        key={account.address}
                        onClick={() => handleSelect(account.qfName || account.address)}
                        className="w-full flex items-center px-4 py-3 hover:bg-white/[0.02] transition-colors text-left"
                      >
                        <GradientAvatar address={account.address} size={24} className="mr-3 shrink-0" />
                        <div className="flex flex-col overflow-hidden">
                          {account.qfName ? (
                            <span className="font-body font-medium text-white truncate">
                              {account.qfName}<span className="text-[#00D179]">.qf</span>
                            </span>
                          ) : (
                            <span className="font-mono text-sm text-white/50 truncate">
                              {account.address}
                            </span>
                          )}
                          {account.qfName && (
                            <span className="font-mono text-xs text-white/30 truncate mt-0.5">
                              {account.address}
                            </span>
                          )}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center font-body text-sm text-white/30">
                      No results found for "{query}"
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
