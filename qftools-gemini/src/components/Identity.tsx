import React from 'react';
import { ACCOUNTS } from '@/lib/mockData';
import { QFName } from './QFName';
import { TruncatedAddress } from './TruncatedAddress';
import { GradientAvatar } from './GradientAvatar';
import { cn } from '@/lib/utils';

interface IdentityProps {
  address: string;
  showAvatar?: boolean;
  avatarSize?: number;
  className?: string;
}

export function Identity({ address, showAvatar = true, avatarSize = 24, className }: IdentityProps) {
  const account = ACCOUNTS.find(a => a.address === address);
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showAvatar && <GradientAvatar address={address} size={avatarSize} className="shrink-0" />}
      {account?.qfName ? (
        <QFName name={account.qfName} />
      ) : (
        <TruncatedAddress address={address} />
      )}
    </div>
  );
}
