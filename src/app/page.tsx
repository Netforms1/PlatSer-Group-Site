import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BrandValues } from '@/components/sections/BrandValues';
import { Composition } from '@/components/sections/Composition';
import { Certified } from '@/components/sections/Certified';
import { Benefits } from '@/components/sections/Benefits';
import { Promo } from '@/components/sections/Promo';
import { Reviews } from '@/components/sections/Reviews';
import { News } from '@/components/sections/News';
import { Club } from '@/components/sections/Club';

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero (#hero) — добавит автор */}
        <BrandValues />
        {/* Products (#products) — добавит автор */}
        {/* WhereToBuy (#where) — добавит автор */}
        <Composition />
        <Certified />
        <Benefits />
        <Promo />
        <Reviews />
        <News />
        <Club />
      </main>
      <Footer />
    </>
  );
}
