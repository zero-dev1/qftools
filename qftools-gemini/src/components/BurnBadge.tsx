import React from 'react';

interface BurnBadgeProps {
  amount: number;
}

export function BurnBadge({ amount }: BurnBadgeProps) {
  return (
    <div className="flex items-center gap-1 ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3 h-3 text-[#E85D25]"
      >
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248z" clipRule="evenodd" />
      </svg>
      <span className="font-mono text-xs text-white/30">{amount}</span>
    </div>
  );
}
