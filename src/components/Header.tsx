'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation, site } from '@/data/site';
import { PillButton } from '@/components/ui/PillButton';
import { cn } from '@/lib/cn';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="top"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={cn(
            'flex items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-300 md:px-6',
            scrolled ? 'glass shadow-pill' : 'bg-transparent'
          )}
        >
          <a
            href="#top"
            className="group flex items-center gap-2 text-white"
            aria-label={site.brand}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 shadow-glow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="6" cy="10" r="1.6" />
                <circle cx="10" cy="6" r="1.6" />
                <circle cx="14" cy="6" r="1.6" />
                <circle cx="18" cy="10" r="1.6" />
                <path d="M7 17c0-3 2.5-5 5-5s5 2 5 5-2.5 4-5 4-5-1-5-4z" />
              </svg>
            </span>
            <span className="font-display text-base font-semibold tracking-tight md:text-lg">
              PlatSer <span className="text-sky2-400">Group</span>
            </span>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <PillButton as="span" variant="primary">
                Вступить в PlatSer Club
              </PillButton>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Открыть меню"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hairline text-white lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-3xl glass p-4 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-white/85 hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href={site.vk}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <PillButton as="span" variant="primary" className="w-full justify-between">
                      Вступить в PlatSer Club
                    </PillButton>
                  </a>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
