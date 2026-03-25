import React, { useMemo } from 'react';

interface GradientAvatarProps {
  address: string;
  size: number;
  className?: string;
}

function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function GradientAvatar({ address, size, className }: GradientAvatarProps) {
  const { h1, h2 } = useMemo(() => {
    const hash = hashString(address || 'default');
    const h1 = Math.abs(hash % 360);
    const h2 = Math.abs((hash * 13) % 360);
    return { h1, h2 };
  }, [address]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`rounded-full ${className || ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad-${address}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={`hsl(${h1}, 70%, 40%)`} />
          <stop offset="100%" stopColor={`hsl(${h2}, 70%, 20%)`} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill={`url(#grad-${address})`} />
    </svg>
  );
}
