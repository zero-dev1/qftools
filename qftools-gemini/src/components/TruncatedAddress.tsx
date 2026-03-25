import React from 'react';
import { cn } from '@/lib/utils';

interface TruncatedAddressProps {
  address: string;
  chars?: number;
  className?: string;
}

export function TruncatedAddress({ address, chars = 6, className }: TruncatedAddressProps) {
  if (!address) return null;
  const truncated = `${address.slice(0, chars)}...${address.slice(-chars)}`;
  return (
    <span className={cn("font-mono text-white/50", className)}>
      {truncated}
    </span>
  );
}
