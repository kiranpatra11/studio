"use client";

import Header from '@/components/layout/header';
import Features from '@/components/sections/features';
import ProductPreview from '@/components/sections/product-preview';
import WaitlistForm from '../components/waitlist-form';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="main-container relative flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="hero"
          className="relative flex h-[calc(100vh-80px)] min-h-[600px] flex-col items-center justify-center bg-gradient-radial-hero pt-20 text-center"
        >
          <div className="container z-10 px-4 md:px-6">
            <h1 className="text-glow font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              The Future of Innovation
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Join the waitlist for Stalliq and be the first to experience our
              revolutionary platform.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </section>
        <Features />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  );
}
