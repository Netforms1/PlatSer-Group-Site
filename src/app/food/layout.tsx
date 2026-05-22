import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Корм для собак и кошек',
  description:
    'Полнорационные холистик корма PlatSer Group для собак и кошек. Гипоаллергенные рационы с натуральным мясом, без глютена. Одобрено ветеринарами России.',
  alternates: { canonical: '/food' },
  openGraph: {
    title: 'PlatSer Group — холистик корм для собак и кошек',
    description:
      'Vitamin-Rich Formula: 43.8% мяса, 0% глютена, гипоаллергенный класс холистик.',
    url: '/food',
  },
};

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
