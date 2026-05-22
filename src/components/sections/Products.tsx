'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { products, breedCategories } from '@/data/products';
import { cn } from '@/lib/cn';
import { PillButton } from '@/components/ui/PillButton';

type Category = 'all' | 'small' | 'medium';

const filters: { id: Category; label: string }[] = [
  { id: 'all', label: 'Все корма' },
  ...breedCategories.map((c) => ({ id: c.id as Category, label: c.label })),
];

export function Products() {
  const [filter, setFilter] = useState<Category>('all');
  const [activeId, setActiveId] = useState<string | null>(null);

  const visible =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

  const active = products.find((p) => p.id === activeId);

  return (
    <section
      id="products"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-mesh-blue opacity-60" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-sky2-400">
              Каталог
            </div>
            <h2 className="font-display text-5xl font-bold leading-[1.05] text-white md:text-6xl">
              Наша <span className="text-brand-400 glow-text">продукция</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/65">
              Линейка Vitamin-Rich Formula — гипоаллергенный холистик с разными
              источниками белка для любого темперамента и возраста.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition',
                  filter === f.id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white',
                )}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-brand-500 shadow-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => setActiveId(p.id)}
                onMouseLeave={() => setActiveId(null)}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur transition hover:border-brand-400/40 hover:shadow-glow"
              >
                <div
                  className={cn(
                    'absolute -right-20 -top-20 -z-0 h-64 w-64 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60',
                    p.accent,
                  )}
                />

                <div className="relative flex justify-center pt-4">
                  <PackageMock product={p} />
                </div>

                <div className="relative mt-6 flex flex-wrap gap-1.5">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/70"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="relative mt-3 text-xs uppercase tracking-[0.2em] text-white/45">
                  {p.category === 'small' ? 'Для мелких пород' : 'Для средних пород'}
                </div>

                <h3 className="relative mt-2 text-balance text-xl font-medium leading-tight text-white">
                  {p.name}
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>

                <div className="relative mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/5 bg-black/20 px-3 py-3">
                  <Spec label="мяса" value={`${p.proteinPercent}%`} />
                  <Spec label="глютена" value="0%" />
                  <Spec label="фасовка" value={p.weight} />
                </div>

                <div className="relative mt-6 flex items-center justify-between">
                  <PillButton className="text-xs">Подробнее</PillButton>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveId(activeId === p.id ? null : p.id)
                    }
                    className="text-xs uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
                  >
                    Состав
                  </button>
                </div>

                <AnimatePresence>
                  {active?.id === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative overflow-hidden"
                    >
                      <ul className="mt-5 space-y-1.5 border-t border-white/5 pt-4 text-sm text-white/70">
                        {p.composition.map((c) => (
                          <li key={c} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-sky2-400" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <p className="rounded-full border border-dashed border-white/15 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/50">
            Корм для кошек — скоро
          </p>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-lg font-semibold text-white">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-white/45">
        {label}
      </div>
    </div>
  );
}

function PackageMock({
  product,
}: {
  product: (typeof import('@/data/products'))['products'][number];
}) {
  return (
    <div className="relative h-48 w-32 rotate-[-3deg] transition-transform duration-500 group-hover:rotate-[2deg] md:h-56 md:w-36">
      <div
        className={cn(
          'absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br opacity-60 blur-xl',
          product.accent,
        )}
      />
      <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-black shadow-2xl ring-1 ring-white/10">
        <div
          className={cn(
            'absolute inset-x-0 top-0 h-1 bg-gradient-to-r',
            product.accent,
          )}
        />
        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
            <Paw className="h-3 w-3 text-black" />
          </div>
          <span className="text-[8px] font-bold uppercase tracking-wider text-white/80">
            PlatSer
          </span>
        </div>
        <div className="absolute inset-x-3 top-12">
          <div className="text-[9px] font-semibold uppercase tracking-wider text-white/60">
            Vitamin-Rich
          </div>
          <div className="text-[9px] font-semibold uppercase tracking-wider text-white/60">
            Formula
          </div>
        </div>
        <div className="absolute inset-x-3 top-24">
          <div className="font-display text-xl font-bold leading-none text-white">
            {product.proteinPercent}%
          </div>
          <div className="text-[8px] uppercase text-white/50">
            {product.protein.toLowerCase()}
          </div>
        </div>
        <div className="absolute inset-x-3 top-36">
          <div className="font-display text-base font-semibold leading-none text-white/90">
            0%
          </div>
          <div className="text-[8px] uppercase text-white/50">глютена</div>
        </div>
        <div className="absolute bottom-2 left-3 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white">
          {product.weight}
        </div>
      </div>
    </div>
  );
}

function Paw({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <ellipse cx="12" cy="16" rx="4.5" ry="3.5" />
      <ellipse cx="6" cy="11" rx="2" ry="2.5" />
      <ellipse cx="18" cy="11" rx="2" ry="2.5" />
      <ellipse cx="9" cy="7" rx="1.6" ry="2.2" />
      <ellipse cx="15" cy="7" rx="1.6" ry="2.2" />
    </svg>
  );
}
