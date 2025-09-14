import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { AnimatedBackground } from '@/components/ui/open-ai-codex-animated-background';
import Features from '@/components/sections/features';
import ProductPreview from '@/components/sections/product-preview';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <div className="relative h-screen flex flex-col justify-center items-center">
        <Header />
        <AnimatedBackground />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            Stalliq Waitlist Spark
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Join the waitlist for the future of innovation.
          </p>
        </div>
      </div>
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
