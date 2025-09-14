import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import ProductPreview from '@/components/sections/product-preview';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Separator className="my-16 md:my-24" />
        <Features />
        <Separator className="my-16 md:my-24" />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  );
}
