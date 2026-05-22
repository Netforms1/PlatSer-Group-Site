'use client';

import { motion } from 'framer-motion';
import { PillButton } from '@/components/ui/PillButton';
import { DocIcon } from '@/components/ui/Icon';

function CatSilhouette() {
  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32 md:h-40 md:w-40" fill="currentColor">
      <path d="M30 25l10 18a40 38 0 0 1 40 0l10-18-4 22a32 30 0 1 1-52 0z" />
      <circle cx="48" cy="60" r="3" fill="#05070D" />
      <circle cx="72" cy="60" r="3" fill="#05070D" />
      <path d="M55 70l5 4 5-4" stroke="#05070D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M30 90q30 18 60 0" stroke="#05070D" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function DogSilhouette() {
  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32 md:h-40 md:w-40" fill="currentColor">
      <path d="M25 35q-5-10 4-15t12 8l3 8a40 36 0 0 1 32 0l3-8q3-13 12-8t4 15l-3 12a34 34 0 1 1-67 0z" />
      <circle cx="48" cy="62" r="3" fill="#05070D" />
      <circle cx="72" cy="62" r="3" fill="#05070D" />
      <ellipse cx="60" cy="75" rx="5" ry="3.5" fill="#05070D" />
    </svg>
  );
}

function VetSeal() {
  return (
    <div className="relative flex h-56 w-56 items-center justify-center md:h-64 md:w-64">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-brand-500/50 blur-3xl animate-pulse-glow"
      />
      <svg viewBox="0 0 220 220" className="h-full w-full">
        <defs>
          <path
            id="vet-seal-path"
            d="M110,110 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0"
          />
          <linearGradient id="vet-seal-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3673E5" />
            <stop offset="100%" stopColor="#1E5BD8" />
          </linearGradient>
        </defs>

        <circle cx="110" cy="110" r="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="110" cy="110" r="92" fill="url(#vet-seal-grad)" />
        <circle cx="110" cy="110" r="92" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <circle cx="110" cy="110" r="78" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

        <text fill="white" fontSize="12" fontWeight="600" letterSpacing="2">
          <textPath href="#vet-seal-path" startOffset="2%">
            ОДОБРЕНО ВЕТЕРИНАРАМИ РОССИИ · ОДОБРЕНО ВЕТЕРИНАРАМИ ·
          </textPath>
        </text>

        <g transform="translate(110 110)">
          <circle r="44" fill="rgba(255,255,255,0.12)" />
          <circle r="44" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <rect x="-6" y="-26" width="12" height="52" rx="2" fill="white" />
          <rect x="-26" y="-6" width="52" height="12" rx="2" fill="white" />
        </g>

        <g transform="translate(110 175)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" fill="none">
          <path d="M-14 0c0-4 2-6 4-6s2 2 0 6c-2 4-4 4-4 0z" />
          <path d="M14 0c0-4-2-6-4-6s-2 2 0 6c2 4 4 4 4 0z" />
          <line x1="0" y1="-8" x2="0" y2="8" />
        </g>
      </svg>
    </div>
  );
}

export function Certified() {
  return (
    <section id="certified" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] glass p-8 md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                'radial-gradient(60% 50% at 20% 50%, rgba(30,91,216,0.25) 0%, transparent 60%), radial-gradient(40% 50% at 80% 50%, rgba(79,180,232,0.18) 0%, transparent 60%)',
            }}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center justify-center gap-6 text-white/85 lg:justify-start">
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CatSilhouette />
              </motion.div>
              <motion.div
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <DogSilhouette />
              </motion.div>
            </div>

            <div className="flex justify-center">
              <VetSeal />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-balance text-lg leading-relaxed text-white/85 md:text-xl">
                С PlatSer Group вы можете быть уверены: ваш любимец получает то, что создано с любовью и знанием дела
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <a href="/certificate.pdf" target="_blank" rel="noopener noreferrer">
                  <PillButton
                    as="span"
                    variant="primary"
                    icon={<DocIcon size={16} />}
                  >
                    Сертификат соответствия
                  </PillButton>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
