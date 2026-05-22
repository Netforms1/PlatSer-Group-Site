'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlowPill } from '@/components/ui/GlowPill';

const bowls = [
  {
    key: 'meat',
    label: 'Свежее мясо',
    inner:
      'radial-gradient(circle at 35% 30%, #FF8B6B 0%, #D14A2E 45%, #7A1F12 100%)',
    chunks: ['#FF5A3B', '#C73E22', '#FF7F5A', '#A2331C'],
  },
  {
    key: 'rice',
    label: 'Бурый рис',
    inner:
      'radial-gradient(circle at 35% 30%, #F2D7A6 0%, #BE8E55 50%, #6B4923 100%)',
    chunks: ['#E2B679', '#B98750', '#D9A461', '#8D6535'],
  },
  {
    key: 'veggies',
    label: 'Овощи',
    inner:
      'radial-gradient(circle at 35% 30%, #BDE992 0%, #66B23F 50%, #2E6B1F 100%)',
    chunks: ['#9CD56A', '#549E30', '#7ABF44', '#3F7A24'],
  },
  {
    key: 'vitamins',
    label: 'Витамины',
    inner:
      'radial-gradient(circle at 35% 30%, #82BAFF 0%, #2E6BD8 50%, #0F265E 100%)',
    chunks: ['#6FA8F4', '#2E6BD8', '#5C9CF1', '#1B4A9E'],
  },
];

export function Composition() {
  return (
    <section id="composition" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-mesh-blue opacity-40"
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Состав"
          title="В составе корма PlatSer Group — тщательно отобранные натуральные компоненты, свежие мясные ингредиенты и полезные злаки"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {bowls.map((bowl, idx) => (
            <motion.div
              key={bowl.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="relative aspect-square w-full max-w-[220px]">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-brand-500/30 blur-3xl"
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative h-full w-full rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 25%, #2A3458 0%, #141C36 60%, #05070D 100%)',
                    boxShadow:
                      'inset 0 -12px 30px rgba(0,0,0,0.6), 0 30px 60px -20px rgba(0,0,0,0.7), 0 0 80px -20px rgba(30,91,216,0.5)',
                  }}
                >
                  <div
                    className="absolute inset-[10%] rounded-full"
                    style={{
                      background: bowl.inner,
                      boxShadow:
                        'inset 0 8px 30px rgba(0,0,0,0.55), inset 0 -10px 30px rgba(255,255,255,0.06)',
                    }}
                  >
                    {bowl.chunks.map((color, i) => (
                      <span
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          background: color,
                          width: `${22 + i * 4}%`,
                          height: `${22 + i * 4}%`,
                          top: `${15 + (i % 2) * 35}%`,
                          left: `${10 + ((i * 23) % 60)}%`,
                          boxShadow:
                            'inset 0 -4px 6px rgba(0,0,0,0.35), inset 0 3px 5px rgba(255,255,255,0.25)',
                        }}
                      />
                    ))}
                  </div>
                  <span
                    aria-hidden
                    className="absolute left-[18%] top-[16%] h-[18%] w-[28%] rounded-full bg-white/15 blur-md"
                  />
                </motion.div>
              </div>

              <span className="font-display text-base font-semibold text-white md:text-lg">
                {bowl.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <GlowPill size="lg" className="max-w-3xl text-center">
            <span className="block px-2 text-center text-sm leading-relaxed md:text-base">
              Мы используем только проверенные источники белка и витаминов, чтобы каждый приём пищи приносил питомцу здоровье, энергию и долголетие
            </span>
          </GlowPill>
        </motion.div>
      </div>
    </section>
  );
}
