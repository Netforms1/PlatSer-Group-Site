'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

type SectionTitleProps = {
  level?: 1 | 2;
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionTitle({
  level = 2,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionTitleProps) {
  const alignmentCls = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={cn('max-w-3xl', alignmentCls, className)}>
      {eyebrow ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className={cn(
            'mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 hairline px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-sky2-300',
            align === 'center' && 'mx-auto'
          )}
        >
          {eyebrow}
        </motion.div>
      ) : null}

      {level === 1 ? (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-brand-500 sm:text-5xl md:text-6xl glow-text"
        >
          {title}
        </motion.h2>
      ) : (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>
      )}

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-base text-sky2-300 sm:text-lg md:text-xl"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
