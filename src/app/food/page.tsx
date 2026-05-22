import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { BrandValues } from '@/components/sections/BrandValues';
import { Products } from '@/components/sections/Products';
import { WhereToBuy } from '@/components/sections/WhereToBuy';
import { Composition } from '@/components/sections/Composition';
import { Certified } from '@/components/sections/Certified';
import { Benefits } from '@/components/sections/Benefits';
import { Promo } from '@/components/sections/Promo';
import { Reviews } from '@/components/sections/Reviews';
import { News } from '@/components/sections/News';
import { Club } from '@/components/sections/Club';

export default function FoodPage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <BrandValues />
        <Products />
        <WhereToBuy />
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
