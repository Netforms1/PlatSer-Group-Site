'use client';

import { motion } from 'framer-motion';
import { news } from '@/data/content';
import { SectionTitle } from '@/components/ui/SectionTitle';

const placeholders: Record<number, string> = {
  1: 'linear-gradient(135deg, #6E2BFF 0%, #B821A4 50%, #FF3D8A 100%)',
  2: 'linear-gradient(135deg, #1E5BD8 0%, #00A3FF 60%, #4FB4E8 100%)',
  3: 'linear-gradient(135deg, #1F8B5C 0%, #A9C44A 60%, #F2D14B 100%)',
};

export function News() {
  return (
    <section id="news" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Новости"
          title="Новости бренда PlatSer Group"
          subtitle="Что у нас происходит, куда мы заходим и как помогаем питомцам по всей стране."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-3xl glass transition-shadow duration-500 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ background: placeholders[item.id] }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    background:
                      'radial-gradient(80% 80% at 20% 20%, rgba(255,255,255,0.45) 0%, transparent 60%)',
                  }}
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-widest text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">
                  {item.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs uppercase tracking-widest text-white/45">
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-sky2-300 transition-colors group-hover:text-white">
                    Читать
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
