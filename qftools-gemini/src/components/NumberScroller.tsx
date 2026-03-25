import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NumberScrollerProps {
  value: number;
  decimals?: number;
  className?: string;
}

export function NumberScroller({ value, decimals = 0, className }: NumberScrollerProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const formatted = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const chars = formatted.split('');

  return (
    <span className={`inline-flex ${className || ''}`}>
      {chars.map((char, i) => {
        const isNumber = !isNaN(parseInt(char, 10));
        if (!isNumber) {
          return (
            <span key={`${i}-${char}`} className="inline-block">
              {char}
            </span>
          );
        }

        return (
          <span key={i} className="inline-flex overflow-hidden relative" style={{ width: '1ch' }}>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`${i}-${char}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="inline-block absolute"
              >
                {char}
              </motion.span>
            </AnimatePresence>
            <span className="invisible">{char}</span>
          </span>
        );
      })}
    </span>
  );
}
