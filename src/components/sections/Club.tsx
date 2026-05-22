'use client';

import { motion } from 'framer-motion';
import { clubPerks } from '@/data/content';
import { site } from '@/data/site';
import { PillButton } from '@/components/ui/PillButton';

function VkLogo() {
  return (
    <svg viewBox="0 0 256 256" className="h-full w-full" fill="currentColor">
      <rect x="0" y="0" width="256" height="256" rx="56" fill="#0077FF" />
      <path
        fill="white"
        d="M138 184c-49 0-77-34-78-90h25c1 41 19 58 33 62v-62h23v36c14-1 28-17 33-36h23c-4 24-20 40-31 47 11 6 30 20 37 43h-26c-5-17-18-31-36-32v32z"
      />
    </svg>
  );
}

export function Club() {
  return (
    <section id="club" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-mesh-blue opacity-50"
      />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] glass p-8 md:p-14"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-brand-500 sm:text-5xl md:text-6xl lg:text-7xl glow-text"
              >
                Вступайте в<br />
                PlatSer Group
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 max-w-xl text-base text-white/75 md:text-lg"
              >
                Ваш любимец достоин лучшего — присоединяйтесь к сообществу заботливых хозяев!
              </motion.p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {clubPerks.map((perk, idx) => (
                  <motion.li
                    key={perk.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-glow">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {perk.label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div
                aria-hidden
                className="absolute -inset-10 -z-10 rounded-full bg-brand-500/40 blur-3xl animate-pulse-glow"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative aspect-square w-full"
              >
                <VkLogo />
              </motion.div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <a href={site.vk} target="_blank" rel="noopener noreferrer">
                  <PillButton as="span" variant="primary">
                    Перейти в ВКонтакте
                  </PillButton>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
