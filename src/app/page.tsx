import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HeroSection } from '@/components/ui/hero-odyssey';
import Features from '@/components/sections/features';
import ProductPreview from '@/components/sections/product-preview';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <HeroSection />
      <main className="flex-grow bg-black">
        <Separator className="my-16 md:my-24" />
        <Features />
        <Separator className="my-16 md:my-24" />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  );
}
