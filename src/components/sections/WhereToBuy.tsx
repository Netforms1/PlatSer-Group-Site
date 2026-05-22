'use client';

import { motion } from 'framer-motion';
import { site } from '@/data/site';

export function WhereToBuy() {
  return (
    <section id="where" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-sky2-400">
            Локации
          </div>
          <h2 className="font-display text-5xl font-bold leading-[1.05] text-white md:text-6xl">
            Где <span className="text-brand-400 glow-text">купить</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <BuyCard
            title="Маркетплейсы"
            subtitle="Доставка по всей России"
            tone="active"
            bg="from-amber-900/40 via-zinc-900 to-zinc-950"
            illustration={<DogIllustration />}
          >
            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href={site.marketplaces.wildberries}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                <span>Купить на</span>
                <span className="font-display text-base font-bold text-accent-pink">
                  wildberries
                </span>
                <ShineOverlay />
              </a>
              <a
                href={site.marketplaces.ozon}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                <span>Купить на</span>
                <span className="font-display text-base font-bold text-[#0058FF]">
                  OZON
                </span>
                <ShineOverlay />
              </a>
            </div>
          </BuyCard>

          <BuyCard
            title="Офлайн магазины"
            subtitle="Партнёрская розничная сеть"
            tone="soon"
            bg="from-zinc-800/40 via-zinc-900 to-zinc-950"
            illustration={<CatIllustration />}
          >
            <div className="mt-auto inline-flex items-center gap-3 self-start rounded-full bg-brand-500/95 px-7 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-glow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-sky2-300 opacity-80" />
                <span className="relative h-2 w-2 rounded-full bg-sky2-300" />
              </span>
              Скоро
            </div>
          </BuyCard>
        </div>
      </div>
    </section>
  );
}

function ShineOverlay() {
  return (
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  );
}

function BuyCard({
  title,
  subtitle,
  tone,
  bg,
  illustration,
  children,
}: {
  title: string;
  subtitle: string;
  tone: 'active' | 'soon';
  bg: string;
  illustration: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`group relative flex h-[420px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${bg} p-8 shadow-pill transition-shadow hover:shadow-glow`}
    >
      <div className="absolute inset-0 -z-0 opacity-30 transition-opacity duration-700 group-hover:opacity-50">
        {illustration}
      </div>
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative">
        <div className="text-2xl font-medium text-white">{title}</div>
        <div className="mt-1 text-sm text-white/55">{subtitle}</div>
      </div>

      <div className="relative mt-auto flex flex-col gap-4">{children}</div>

      {tone === 'soon' && (
        <div className="pointer-events-none absolute right-6 top-6 rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
          В разработке
        </div>
      )}
    </motion.div>
  );
}

function DogIllustration() {
  return (
    <svg
      viewBox="0 0 600 420"
      className="absolute inset-0 h-full w-full object-cover"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="dogBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3a2517" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
      </defs>
      <rect width="600" height="420" fill="url(#dogBg)" />
      <g opacity="0.9">
        <ellipse cx="300" cy="380" rx="180" ry="14" fill="#000" opacity="0.7" />
        <path
          d="M180 260 Q180 200 240 195 Q260 130 320 130 Q380 130 400 195 Q460 200 460 260 Q460 320 380 330 L260 330 Q180 320 180 260 Z"
          fill="#7a4a28"
        />
        <ellipse cx="285" cy="220" rx="6" ry="8" fill="#1a1a1a" />
        <ellipse cx="345" cy="220" rx="6" ry="8" fill="#1a1a1a" />
        <ellipse cx="315" cy="265" rx="14" ry="10" fill="#1a1a1a" />
        <path
          d="M205 180 Q190 130 215 110 Q220 145 240 175 Z"
          fill="#5a361c"
        />
        <path
          d="M425 180 Q440 130 415 110 Q410 145 390 175 Z"
          fill="#5a361c"
        />
      </g>
    </svg>
  );
}

function CatIllustration() {
  return (
    <svg
      viewBox="0 0 600 420"
      className="absolute inset-0 h-full w-full object-cover"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="catBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#252531" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
      </defs>
      <rect width="600" height="420" fill="url(#catBg)" />
      <g opacity="0.85">
        <ellipse cx="300" cy="380" rx="160" ry="12" fill="#000" opacity="0.6" />
        <path
          d="M200 270 Q200 200 260 200 Q280 140 320 140 Q360 140 380 200 Q440 200 440 270 Q440 330 360 335 L280 335 Q200 330 200 270 Z"
          fill="#8a8a90"
        />
        <path
          d="M220 200 L240 140 L265 195 Z"
          fill="#8a8a90"
        />
        <path
          d="M420 200 L400 140 L375 195 Z"
          fill="#8a8a90"
        />
        <ellipse cx="290" cy="235" rx="5" ry="7" fill="#1a1a1a" />
        <ellipse cx="350" cy="235" rx="5" ry="7" fill="#1a1a1a" />
        <path
          d="M310 260 Q320 270 330 260"
          stroke="#1a1a1a"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
}
