import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { formatDistanceToNow } from 'date-fns';
import { PageTransition } from '@/components/PageTransition';
import { NumberScroller } from '@/components/NumberScroller';
import { Identity } from '@/components/Identity';
import { BurnBadge } from '@/components/BurnBadge';
import { NETWORK_STATS, TRANSFERS, ACCOUNTS } from '@/lib/mockData';

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2500) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[loopNum % words.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export function Home() {
  const [blockNumber, setBlockNumber] = useState(NETWORK_STATS.currentBlock);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const placeholders = [
    "Search alice.qf",
    "Search 15893042",
    "Search 0x7a2b...9f1e"
  ];
  
  const placeholderText = useTypewriter(placeholders);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockNumber(prev => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery) {
      navigate(`/explorer/${searchQuery}`);
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col items-center pt-8 pb-12">
        <div className="flex items-center gap-2 font-body text-[13px] text-white/40 mb-8">
          <span>Block <NumberScroller value={blockNumber} /></span>
          <span>·</span>
          <span>{NETWORK_STATS.fundedAccounts} accounts</span>
          <span>·</span>
          <span>{NETWORK_STATS.totalTransfers} transfers</span>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-[#00D179] animate-sync-pulse" />
            <span className="capitalize">{NETWORK_STATS.syncStatus}</span>
          </div>
        </div>

        <div className="w-full sticky top-16 z-30">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white/30">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full h-14 bg-[#111111] border border-white/10 rounded-xl pl-12 pr-16 font-body text-white placeholder:text-transparent outline-none focus:border-white/20 transition-colors duration-200"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            {!searchQuery && (
              <div className="absolute inset-y-0 left-12 right-16 flex items-center pointer-events-none overflow-hidden">
                <span className="font-body text-white/30 whitespace-nowrap">
                  {placeholderText}
                  <span className="animate-pulse border-r-2 border-white/30 ml-[1px] h-4 inline-block align-middle" />
                </span>
              </div>
            )}
            <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
              <div className="text-[10px] font-mono text-white/30 border border-white/10 rounded px-1.5 py-0.5">⌘K</div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-display text-lg font-semibold text-white">Activity</h2>
            <Link to="/explorer/accounts" className="font-body text-sm text-white/50 hover:text-white/70 transition-colors">
              View Leaderboard →
            </Link>
          </div>
          
          <div className="flex flex-col">
            {TRANSFERS.map((tx, i) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="py-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Link to={`/explorer/${tx.from}`} className="hover:opacity-80 transition-opacity">
                    <Identity address={tx.from} />
                  </Link>
                  <span className="text-white/30 mx-2 font-body">→</span>
                  <Link to={`/explorer/${tx.to}`} className="hover:opacity-80 transition-opacity">
                    <Identity address={tx.to} />
                  </Link>
                </div>
                
                <div className="flex flex-col sm:items-end gap-1">
                  <div className="flex items-center">
                    <span className="font-body font-semibold text-[15px] text-white">
                      {tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="font-body text-white/50 ml-1">QF</span>
                    {tx.isQFPayTransfer && tx.burnAmount && (
                      <BurnBadge amount={tx.burnAmount} />
                    )}
                  </div>
                  <div className="font-body text-xs text-white/30">
                    Block {tx.block.toLocaleString()} · {formatDistanceToNow(new Date(tx.timestamp), { addSuffix: true })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
