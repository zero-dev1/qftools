import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '@/components/PageTransition';
import { GradientAvatar } from '@/components/GradientAvatar';
import { Identity } from '@/components/Identity';
import { ACCOUNTS } from '@/lib/mockData';

type SortType = 'total' | 'free' | 'txs';

export function Accounts() {
  const [sort, setSort] = useState<SortType>('total');

  const sortedAccounts = [...ACCOUNTS].sort((a, b) => {
    if (sort === 'total') {
      return (b.freeBalance + b.reservedBalance) - (a.freeBalance + a.reservedBalance);
    } else if (sort === 'free') {
      return b.freeBalance - a.freeBalance;
    } else {
      return b.nonce - a.nonce;
    }
  });

  const maxBalance = Math.max(...ACCOUNTS.map(a => a.freeBalance + a.reservedBalance));

  const formatLargeNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    }
    return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <PageTransition>
      <div className="pt-8 pb-20">
        <h1 className="font-display text-[28px] font-semibold text-white mb-1">Accounts</h1>
        <p className="font-body text-sm text-white/40 mb-6">All funded accounts on QF Network</p>

        <div className="flex gap-6 mb-6 border-b border-white/5 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSort('total')}
            className={`font-body text-sm pb-2 -mb-[9px] whitespace-nowrap transition-colors ${
              sort === 'total' ? 'text-white border-b border-white' : 'text-white/30 hover:text-white/50'
            }`}
          >
            Total Balance
          </button>
          <button
            onClick={() => setSort('free')}
            className={`font-body text-sm pb-2 -mb-[9px] whitespace-nowrap transition-colors ${
              sort === 'free' ? 'text-white border-b border-white' : 'text-white/30 hover:text-white/50'
            }`}
          >
            Free Balance
          </button>
          <button
            onClick={() => setSort('txs')}
            className={`font-body text-sm pb-2 -mb-[9px] whitespace-nowrap transition-colors ${
              sort === 'txs' ? 'text-white border-b border-white' : 'text-white/30 hover:text-white/50'
            }`}
          >
            Transactions
          </button>
        </div>

        <div className="flex flex-col">
          {sortedAccounts.map((account, i) => {
            const total = account.freeBalance + account.reservedBalance;
            const value = sort === 'total' ? total : sort === 'free' ? account.freeBalance : account.nonce;
            const widthPct = sort === 'txs' ? 0 : Math.max(1, (total / maxBalance) * 100);

            return (
              <motion.div
                key={account.address}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="py-3 border-b border-white/5 flex items-center justify-between hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-white/30 w-8">#{i + 1}</span>
                  <Link to={`/explorer/${account.qfName || account.address}`} className="hover:opacity-80 transition-opacity">
                    <Identity address={account.address} avatarSize={32} />
                  </Link>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-baseline">
                    <span className="font-body font-semibold text-white">
                      {sort === 'txs' ? value.toLocaleString() : formatLargeNumber(value)}
                    </span>
                    {sort !== 'txs' && <span className="font-body text-white/50 ml-1 text-sm">QF</span>}
                  </div>
                  {sort !== 'txs' && (
                    <div className="hidden sm:block w-[120px] h-1 bg-transparent rounded-full overflow-hidden">
                      <div className="h-full bg-white/10 rounded-full" style={{ width: `${widthPct}%` }} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
