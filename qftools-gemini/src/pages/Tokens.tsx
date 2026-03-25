import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '@/components/PageTransition';
import { Identity } from '@/components/Identity';
import { TOKENS } from '@/lib/mockData';

export function Tokens() {
  return (
    <PageTransition>
      <div className="pt-8 pb-20">
        <h1 className="font-display text-[28px] font-semibold text-white mb-1">Tokens</h1>
        <p className="font-body text-sm text-white/40 mb-8">Deployed on QF Network</p>

        <div className="flex flex-col">
          {TOKENS.map((token, i) => (
            <motion.div
              key={token.contractAddress}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="py-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="font-body font-medium text-white">{token.name}</span>
                <span className="font-body text-sm text-white/50">{token.symbol}</span>
                {token.verified && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="font-mono text-xs text-white/30 truncate max-w-[120px]">
                  {token.contractAddress.slice(0, 6)}...{token.contractAddress.slice(-4)}
                </span>
                <Link to={`/explorer/${token.deployer}`} className="hover:opacity-80 transition-opacity">
                  <Identity address={token.deployer} showAvatar={false} className="text-sm" />
                </Link>
                <span className="font-body text-sm text-white/50 sm:w-24 sm:text-right">
                  {token.totalSupply}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 font-body text-[11px] text-white/30 text-center">
          Listing a token does not constitute an endorsement. Always DYOR.
        </p>
      </div>
    </PageTransition>
  );
}
