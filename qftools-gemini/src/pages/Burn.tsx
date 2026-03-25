import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { formatDistanceToNow } from 'date-fns';
import { PageTransition } from '@/components/PageTransition';
import { NumberScroller } from '@/components/NumberScroller';
import { Identity } from '@/components/Identity';
import { NETWORK_STATS, QNS_BURNS, TRANSFERS } from '@/lib/mockData';

export function Burn() {
  const [displayBurn, setDisplayBurn] = useState(0);

  useEffect(() => {
    // Animate from 0 to totalBurned over 2 seconds
    const duration = 2000;
    const start = performance.now();
    const target = NETWORK_STATS.totalBurned;

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayBurn(target * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // Combine QFPay burns and QNS burns for the recent feed
  const qfpayBurns = TRANSFERS.filter(t => t.isQFPayTransfer && t.burnAmount).map(t => ({
    id: `burn-qfpay-${t.id}`,
    source: 'qfpay' as const,
    amount: t.burnAmount!,
    triggerTx: 'QFPay transfer',
    triggerAccount: t.from,
    block: t.block,
    timestamp: t.timestamp,
  }));

  const recentBurns = [...QNS_BURNS, ...qfpayBurns]
    .sort((a, b) => b.block - a.block)
    .slice(0, 15);

  // Generate chart data (cumulative burn over 12 points)
  const width = 600;
  const height = 200;
  const chartPoints = Array.from({ length: 12 }).map((_, i) => {
    const x = (i / 11) * width;
    // Simulate exponential-ish growth
    const yVal = Math.pow(i / 11, 2) * NETWORK_STATS.totalBurned;
    const y = height - (yVal / NETWORK_STATS.totalBurned) * height;
    return `${x},${y}`;
  }).join(' L ');
  const pathData = `M 0,${height} L ${chartPoints} L ${width},${height} Z`;

  return (
    <PageTransition>
      <div className="pt-16 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="font-display text-[48px] font-bold text-white flex items-baseline justify-center">
            <NumberScroller value={displayBurn} decimals={3} />
            <span className="text-white/40 font-body text-2xl ml-2 font-medium">QF</span>
          </div>
          <p className="font-body text-sm text-white/40 mt-2">QF burned forever</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-[#111111] border border-white/5 border-t-2 border-t-[#0052FF] rounded-xl p-6"
          >
            <div className="font-body text-xs text-white/40 uppercase tracking-wider">QFPay Transfers</div>
            <div className="font-display text-2xl font-semibold text-white mt-2">
              {NETWORK_STATS.qfpayBurned.toLocaleString(undefined, { minimumFractionDigits: 3 })} QF
            </div>
            <div className="font-body text-xs text-white/30 mt-1">0.1% of every transfer</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-[#111111] border border-white/5 border-t-2 border-t-[#00D179] rounded-xl p-6"
          >
            <div className="font-body text-xs text-white/40 uppercase tracking-wider">QNS Registrations</div>
            <div className="font-display text-2xl font-semibold text-white mt-2">
              {NETWORK_STATS.qnsBurned.toLocaleString(undefined, { minimumFractionDigits: 3 })} QF
            </div>
            <div className="font-body text-xs text-white/30 mt-1">5% of every registration</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 w-full overflow-hidden relative"
        >
          <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="w-full h-[200px] overflow-visible">
            <defs>
              <linearGradient id="burnGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(232, 93, 37, 0.15)" />
                <stop offset="100%" stopColor="rgba(232, 93, 37, 0)" />
              </linearGradient>
            </defs>
            <path
              d={pathData}
              fill="url(#burnGradient)"
              className="transition-all duration-1000"
            />
            <path
              d={`M ${chartPoints}`}
              fill="none"
              stroke="#E85D25"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 font-mono text-[11px] text-white/30">
            <span>5 days ago</span>
            <span>Today</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-12"
        >
          <h2 className="font-display text-lg font-semibold text-white mb-4">Recent Burns</h2>
          
          <div className="flex flex-col">
            {recentBurns.map((burn, i) => (
              <motion.div
                key={burn.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                className="py-4 border-b border-white/5 flex flex-col gap-1 hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#E85D25]">
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body font-semibold text-white">
                    {burn.amount.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 5 })} QF burned
                  </span>
                  <span className="font-body text-sm text-white/50">·</span>
                  <span className="font-body text-sm text-white/50 flex items-center gap-1">
                    {burn.triggerTx} by
                    <Link to={`/explorer/${burn.triggerAccount}`} className="hover:opacity-80 transition-opacity inline-flex">
                      <Identity address={burn.triggerAccount} showAvatar={false} />
                    </Link>
                  </span>
                </div>
                <div className="font-body text-xs text-white/30 ml-6">
                  Block {burn.block.toLocaleString()} · {formatDistanceToNow(new Date(burn.timestamp), { addSuffix: true })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
