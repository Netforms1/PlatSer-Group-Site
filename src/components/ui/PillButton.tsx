'use client';

import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type PillVariant = 'primary' | 'ghost' | 'blue';

type PillButtonOwnProps<E extends ElementType> = {
  as?: E;
  variant?: PillVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export type PillButtonProps<E extends ElementType = 'button'> =
  PillButtonOwnProps<E> &
    Omit<ComponentPropsWithoutRef<E>, keyof PillButtonOwnProps<E>>;

const baseStyles =
  'group relative inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-medium uppercase tracking-wide transition-all duration-300';

const variantStyles: Record<PillVariant, string> = {
  primary:
    'bg-white text-ink-950 shadow-pill hover:shadow-glow hover:-translate-y-0.5',
  blue:
    'bg-brand-500 text-white shadow-glow hover:bg-brand-400 hover:-translate-y-0.5',
  ghost:
    'bg-white/5 text-white hairline hover:bg-white/10 hover:-translate-y-0.5',
};

const arrowBgByVariant: Record<PillVariant, string> = {
  primary: 'bg-ink-950 text-white',
  blue: 'bg-white text-brand-500',
  ghost: 'bg-white text-ink-950',
};

export function PillButton<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  icon,
  children,
  className,
  ...rest
}: PillButtonProps<E>) {
  const Component = (as || 'button') as ElementType;

  return (
    <Component
      className={cn(baseStyles, variantStyles[variant], className)}
      {...rest}
    >
      {icon ? <span className="-ml-1 flex h-5 w-5 items-center justify-center">{icon}</span> : null}
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45',
          arrowBgByVariant[variant]
        )}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </span>
    </Component>
  );
}
