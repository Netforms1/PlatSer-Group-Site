'use client';

import { motion } from 'framer-motion';
import { benefits } from '@/data/content';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getValueIcon } from '@/components/ui/Icon';

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade opacity-50"
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Польза"
          title="Преимущества нашего корма"
          subtitle="Каждый компонент рациона работает на одну цель — здоровье и долгую активную жизнь питомца."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {benefits.map((benefit, idx) => {
            const Icon = getValueIcon(benefit.icon);
            return (
              <motion.article
                key={benefit.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass p-8 transition-shadow duration-500 hover:shadow-glow md:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start gap-5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow">
                    <Icon size={28} />
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-brand-500/60 blur-xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-white/75">
                  {benefit.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
