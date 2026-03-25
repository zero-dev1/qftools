import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '@/components/PageTransition';
import { GAS_DATA, CURRENT_GAS, GAS_ESTIMATES } from '@/lib/mockData';

export function Gas() {
  const maxPrice = Math.max(...GAS_DATA.map(d => d.price));
  const minPrice = Math.min(...GAS_DATA.map(d => d.price));
  
  // Create SVG path for the area chart
  const width = 600;
  const height = 180;
  
  const points = GAS_DATA.map((d, i) => {
    const x = (i / (GAS_DATA.length - 1)) * width;
    const y = height - ((d.price - minPrice) / (maxPrice - minPrice)) * height;
    return `${x},${y}`;
  }).join(' L ');
  
  const pathData = `M 0,${height} L ${points} L ${width},${height} Z`;

  return (
    <PageTransition>
      <div className="pt-8 pb-20">
        <h1 className="font-display text-[28px] font-semibold text-white mb-1">Gas</h1>
        <p className="font-body text-sm text-white/40 mb-8">Real-time gas prices on QF Network</p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <div className="font-display text-[36px] font-bold text-white flex items-baseline justify-center">
            {CURRENT_GAS}
            <span className="text-white/40 font-body text-lg ml-2 font-medium">QF</span>
          </div>
          <p className="font-body text-sm text-white/40 mt-1">Current gas price</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 w-full overflow-hidden"
        >
          <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="w-full h-[180px] overflow-visible">
            <defs>
              <linearGradient id="gasGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </linearGradient>
            </defs>
            <path
              d={pathData}
              fill="url(#gasGradient)"
              className="transition-all duration-1000"
            />
            <path
              d={`M ${points}`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-1000"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-8"
        >
          <h2 className="font-display text-base font-semibold text-white mb-4">Estimated costs</h2>
          
          <div className="flex flex-col">
            <div className="py-3 border-b border-white/5 flex justify-between items-center">
              <span className="font-body text-sm text-white/50">Send QF via QFPay</span>
              <span className="font-mono text-sm text-white">{GAS_ESTIMATES.qfpayTransfer}</span>
            </div>
            <div className="py-3 border-b border-white/5 flex justify-between items-center">
              <span className="font-body text-sm text-white/50">Register a .qf name</span>
              <span className="font-mono text-sm text-white">{GAS_ESTIMATES.qnsRegistration}</span>
            </div>
            <div className="py-3 border-b border-white/5 flex justify-between items-center">
              <span className="font-body text-sm text-white/50">Transfer a token</span>
              <span className="font-mono text-sm text-white">{GAS_ESTIMATES.tokenTransfer}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
