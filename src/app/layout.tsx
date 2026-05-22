import type { Metadata, Viewport } from 'next';
import { Onest, Unbounded } from 'next/font/google';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CursorAura } from '@/components/CursorAura';
import './globals.css';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-onest',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#05070D',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://platser-group.ru'),
  title: {
    default: 'PlatSer Group — холистик корм для собак и кошек',
    template: '%s · PlatSer Group',
  },
  description:
    'Полнорационные холистик корма для собак и кошек с натуральными ингредиентами. Одобрено ветеринарами России. Доставка по всей России через Wildberries и OZON.',
  keywords: [
    'PlatSer Group',
    'корм для собак',
    'корм для кошек',
    'холистик корм',
    'гипоаллергенный корм',
    'премиум корм',
  ],
  openGraph: {
    title: 'PlatSer Group — забота о питомце начинается с миски',
    description:
      'Полнорационные холистик корма с натуральным мясом и злаками. Одобрено ветеринарами России.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${onest.variable} ${unbounded.variable} scroll-smooth`}
    >
      <body className="bg-ink-950 text-white antialiased selection:bg-brand-500/40">
        <SmoothScroll>
          <CursorAura />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
