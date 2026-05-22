import { site, footerNav, legalLinks } from '@/data/site';

function TelegramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.7 15.3l-.4 4.1c.6 0 .8-.2 1.1-.5l2.6-2.5 5.4 4c1 .5 1.7.2 2-.9l3.5-16.5c.3-1.4-.5-2-1.5-1.6L1.7 9.7c-1.4.6-1.4 1.4-.2 1.8l5.1 1.6 11.7-7.4c.6-.4 1.1-.2.6.2L9.7 15.3z" />
    </svg>
  );
}

function VkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.5 17.5c-5.4 0-8.7-3.8-8.8-10.1h2.8c.1 4.7 2.2 6.6 3.7 7v-7h2.6v4c1.6-.2 3.2-2 3.8-4h2.6c-.5 2.7-2.3 4.5-3.5 5.3 1.2.7 3.3 2.3 4.2 4.8h-2.9c-.6-1.9-2-3.5-4.1-3.6v3.6z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function LogoMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 shadow-glow">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="10" r="1.6" />
        <circle cx="10" cy="6" r="1.6" />
        <circle cx="14" cy="6" r="1.6" />
        <circle cx="18" cy="10" r="1.6" />
        <path d="M7 17c0-3 2.5-5 5-5s5 2 5 5-2.5 4-5 4-5-1-5-4z" />
      </svg>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-20 pb-12 pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-3">
              <LogoMark />
              <span className="font-display text-lg font-semibold text-white">
                PlatSer <span className="text-sky2-400">Group</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-sky2-300">
              Навигация
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-sky2-300">
              Важное
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-sky2-300">
              Связаться с нами
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-sm text-white/80 hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hairline text-white transition-colors group-hover:bg-brand-500">
                    <MailIcon />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-white/80 hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hairline text-sky2-400 transition-colors group-hover:bg-sky2-400 group-hover:text-ink-950">
                    <TelegramIcon />
                  </span>
                  Наш канал в Telegram
                </a>
              </li>
              <li>
                <a
                  href={site.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-white/80 hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hairline text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <VkIcon />
                  </span>
                  Наше сообщество ВК
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <span>© 2026 ООО «PlatSer Group» — все права защищены</span>
          <span>Сделано с заботой о питомцах</span>
        </div>
      </div>
    </footer>
  );
}
