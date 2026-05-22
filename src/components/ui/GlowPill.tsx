import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

type GlowPillProps = {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizes: Record<NonNullable<GlowPillProps['size']>, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export function GlowPill({ children, className, size = 'md' }: GlowPillProps) {
  return (
    <span className={cn('relative inline-flex items-center justify-center', className)}>
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-brand-500/60 blur-2xl animate-pulse-glow"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-brand-500/30 blur-md"
      />
      <span
        className={cn(
          'relative rounded-full bg-brand-500/15 hairline text-white font-medium backdrop-blur-md',
          sizes[size]
        )}
      >
        {children}
      </span>
    </span>
  );
}
