'use client';

import { motion } from 'framer-motion';
import { site } from '@/data/site';
import { PillButton } from '@/components/ui/PillButton';

export function Promo() {
  return (
    <section id="promo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16"
          style={{
            background:
              'radial-gradient(80% 100% at 0% 0%, #1E5BD8 0%, #0B265E 60%, #05070D 100%)',
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-sky2-400/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 shine animate-shine opacity-60 mix-blend-overlay"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hairline px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white"
              >
                Акция месяца
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl glow-text"
              >
                −15%
                <span className="block text-2xl font-medium text-white/85 sm:text-3xl md:text-4xl">
                  на первый заказ
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-base text-white/85 md:text-lg"
              >
                Промокод{' '}
                <span className="rounded-md bg-white px-2 py-1 font-mono text-sm font-semibold tracking-widest text-ink-950">
                  PLATSER15
                </span>{' '}
                действует на Wildberries и OZON до конца месяца.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-stretch gap-3 lg:items-end"
            >
              <a
                href={site.marketplaces.wildberries}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PillButton as="span" variant="primary" className="w-full justify-between">
                  Купить на Wildberries
                </PillButton>
              </a>
              <a
                href={site.marketplaces.ozon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PillButton as="span" variant="primary" className="w-full justify-between">
                  Купить на OZON
                </PillButton>
              </a>
              <span className="mt-1 text-center text-xs text-white/60 lg:text-right">
                Доставка по всей России
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
