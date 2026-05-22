'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PillButton } from '@/components/ui/PillButton';

const HeroScene = dynamic(
  () => import('@/components/three/HeroScene').then((m) => m.HeroScene),
  { ssr: false },
);

const stats = [
  { value: '43.8', suffix: '%', label: 'мяса в составе' },
  { value: '0', suffix: '%', label: 'глютена' },
  { value: '100', suffix: '%', label: 'натуральные ингредиенты' },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-blue" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #4FB4E8 1px, transparent 1px), linear-gradient(to bottom, #4FB4E8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 -z-10"
      >
        <HeroScene />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-sky2-400 opacity-70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-sky2-400" />
          </span>
          Одобрено ветеринарами России
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
        >
          Полнорационные{' '}
          <span className="glow-text text-brand-400">холистик</span> корма{' '}
          <br className="hidden md:block" />
          <span className="text-white/90">для собак и кошек</span>{' '}
          <span className="bg-gradient-to-r from-sky2-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            с натуральными ингредиентами
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg"
        >
          Тщательно отобранные натуральные компоненты, свежие мясные ингредиенты
          и полезные злаки. Каждая гранула — результат работы ветеринарных
          диетологов и собственного производства.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <PillButton as="a" href="#products">
            Каталог продукции
          </PillButton>
          <PillButton as="a" href="#where" variant="ghost">
            Где купить
          </PillButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-5 py-4"
            >
              <div className="font-display text-3xl font-bold text-white md:text-4xl">
                {s.value}
                <span className="text-sky2-400">{s.suffix}</span>
              </div>
              <div className="mt-1 text-xs text-white/60 md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <div className="text-[10px] uppercase tracking-[0.3em]">Scroll</div>
            <div className="relative h-9 w-5 rounded-full border border-white/20">
              <span className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white/70 [animation:scrollDot_1.6s_ease-in-out_infinite]" />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scrollDot {
          0%, 20% { transform: translate(-50%, 0); opacity: 1; }
          80%, 100% { transform: translate(-50%, 12px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
