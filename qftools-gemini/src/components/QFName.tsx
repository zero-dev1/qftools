import React from 'react';
import { cn } from '@/lib/utils';

interface QFNameProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function QFName({ name, size = 'md', className }: QFNameProps) {
  return (
    <span className={cn("font-body font-medium text-white", className)}>
      {name}<span className="text-[#00D179]">.qf</span>
    </span>
  );
}
