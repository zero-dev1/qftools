import React from 'react';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-white/5 mb-4">{icon}</div>
      <h3 className="font-display text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="font-body text-sm text-white/30">{description}</p>
    </div>
  );
}
