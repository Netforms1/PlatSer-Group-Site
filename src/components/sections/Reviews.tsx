'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PillButton } from '@/components/ui/PillButton';
import { StarIcon } from '@/components/ui/Icon';

const reviews = [
  {
    name: 'Анна К.',
    rating: 5,
    text: 'Перевела свою таксу на PlatSer полгода назад — шерсть стала шелковистой, а зубы заметно чище. Ест с удовольствием, никаких проблем с пищеварением.',
  },
  {
    name: 'Дмитрий С.',
    rating: 5,
    text: 'Корм с индейкой — настоящее спасение для нашей кошки-аллергика. Перестали слезиться глаза, шерсть перестала сыпаться. Спасибо за честный состав!',
  },
  {
    name: 'Елена М.',
    rating: 5,
    text: 'Заказывала на WB по промокоду, доставка быстрая. Гранулы пахнут настоящим мясом, а не химией. Лабрадор уплетает за обе щеки. Будем брать ещё.',
  },
];

function Stars({ count = 5, filled = 5 }: { count?: number; filled?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon
          key={i}
          size={18}
          className={i < filled ? 'text-yellow-400' : 'text-white/15'}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Отзывы"
              title="Мы гордимся доверием наших покупателей"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <Stars filled={5} />
              <span className="text-sm uppercase tracking-widest text-sky2-300">
                Средняя оценка
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-7xl font-bold leading-none text-white md:text-8xl glow-text"
            >
              4.9
              <span className="text-3xl font-medium text-white/40 md:text-4xl"> / 5</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://www.wildberries.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PillButton
                  as="span"
                  variant="primary"
                  icon={<StarIcon size={14} className="text-accent-pink" />}
                >
                  Посмотреть отзывы на WB
                </PillButton>
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {reviews.map((review, idx) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl glass p-6 md:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/30 text-sm font-semibold text-white">
                      {review.name.charAt(0)}
                    </span>
                    <span className="font-medium text-white">{review.name}</span>
                  </div>
                  <Stars filled={review.rating} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                  {review.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
