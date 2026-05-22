'use client';

import { motion } from 'framer-motion';
import { brandValues } from '@/data/content';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getValueIcon } from '@/components/ui/Icon';

export function BrandValues() {
  return (
    <section id="brand" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade opacity-60"
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="О бренде"
          title="Создаём корм, которому доверяют ветеринары и любят питомцы"
          subtitle="PlatSer Group — это команда профессионалов, объединённых одной целью: дать каждому коту и собаке заботу, которую они заслуживают."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brandValues.map((value, idx) => {
            const Icon = getValueIcon(value.icon);
            return (
              <motion.article
                key={value.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-5 rounded-3xl glass p-6 transition-shadow hover:shadow-glow"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow">
                  <Icon />
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-full bg-brand-500/60 blur-xl"
                  />
                </div>

                <h3 className="font-display text-xl font-semibold text-white">
                  {value.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {value.text}
                </p>

                <div
                  aria-hidden
                  className="mt-auto h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
