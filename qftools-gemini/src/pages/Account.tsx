import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { formatDistanceToNow } from 'date-fns';
import { PageTransition } from '@/components/PageTransition';
import { GradientAvatar } from '@/components/GradientAvatar';
import { QFName } from '@/components/QFName';
import { Identity } from '@/components/Identity';
import { BurnBadge } from '@/components/BurnBadge';
import { EmptyState } from '@/components/EmptyState';
import { ACCOUNTS, TRANSFERS } from '@/lib/mockData';

export function Account() {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  const account = ACCOUNTS.find(a => a.qfName === id || a.address === id);
  const isAddress = id?.startsWith('5') && id.length === 48;
  const address = account?.address || (isAddress ? id : '');

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };

  if (!account && !isAddress) {
    return (
      <PageTransition>
        <EmptyState
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
          title="Account not found"
          description="This address or .qf name doesn't exist on the network."
        />
      </PageTransition>
    );
  }

  const displayAccount = account || {
    address: address as string,
    freeBalance: 0,
    reservedBalance: 0,
    nonce: 0,
  };

  const totalBalance = displayAccount.freeBalance + displayAccount.reservedBalance;
  const accountTransfers = TRANSFERS.filter(tx => tx.from === address || tx.to === address);

  return (
    <PageTransition>
      <div className="pt-12 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.4 }}
          >
            <GradientAvatar address={address as string} size={80} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mt-4"
          >
            {displayAccount.qfName ? (
              <h1 className="font-display text-[28px] font-semibold">
                <span className="text-white">{displayAccount.qfName}</span>
                <span className="text-[#00D179]">.qf</span>
              </h1>
            ) : (
              <h1 className="font-mono text-sm text-white/70 break-all px-4">
                {address}
              </h1>
            )}

            {displayAccount.qfName && (
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="font-mono text-xs text-white/30">{address}</span>
                <button
                  onClick={handleCopy}
                  className="text-white/30 hover:text-white/70 transition-colors relative"
                  title="Copy address"
                >
                  {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#00D179]">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M13.887 3.182c.32-.313.689-.546 1.088-.682.767-.26 1.604-.26 2.37 0a2.983 2.983 0 011.088.682c.32.313.546.689.682 1.088.26.767.26 1.604 0 2.37a2.983 2.983 0 01-.682 1.088l-8.5 8.5a.75.75 0 01-.212.15l-3.5 1.5a.75.75 0 01-.98-.98l1.5-3.5a.75.75 0 01.15-.212l8.5-8.5zM12.113 4.95l7.164 7.164-1.06 1.06-7.164-7.164 1.06-1.06zM3.5 16.5l2.25-.964-1.286-1.286L3.5 16.5z" clipRule="evenodd" />
                      <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V9.5a.75.75 0 011.5 0V16a2.5 2.5 0 01-2.5 2.5H4A2.5 2.5 0 011.5 16V4A2.5 2.5 0 014 1.5h6.5a.75.75 0 010 1.5H4z" />
                    </svg>
                  )}
                </button>
              </div>
            )}

            {displayAccount.bio && (
              <p className="mt-2 font-body text-sm text-white/50 max-w-md mx-auto line-clamp-2 px-4">
                {displayAccount.bio}
              </p>
            )}

            {!displayAccount.qfName && (
              <div className="mt-2 font-body text-xs text-white/30">
                This address doesn't have a .qf name yet. <a href="https://dotqf.xyz" target="_blank" rel="noreferrer" className="text-[#00D179] hover:underline">Claim one →</a>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="mt-6"
          >
            <div className="font-display text-[36px] font-bold text-white flex justify-center items-baseline">
              {totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-white/40 font-body text-lg ml-1 font-medium">QF</span>
            </div>
            <div className="mt-1 font-body text-[13px] text-white/40">
              {displayAccount.freeBalance.toLocaleString()} free · {displayAccount.reservedBalance.toLocaleString()} reserved
            </div>
            <div className="mt-0.5 font-body text-xs text-white/30">
              {displayAccount.nonce} transactions
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="mt-10"
        >
          <h2 className="font-display text-lg font-semibold text-white mb-4">Activity</h2>
          
          {accountTransfers.length > 0 ? (
            <div className="flex flex-col">
              {accountTransfers.map((tx, i) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
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
                        {tx.from === address ? '-' : '+'}{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
          ) : (
            <EmptyState
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="No activity yet"
              description="This account hasn't made any transfers."
            />
          )}
        </motion.div>
      </div>
    </PageTransition>
  );
}
