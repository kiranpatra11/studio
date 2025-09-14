"use client";

import Header from '@/components/layout/header';
import Features from '@/components/sections/features';
import ProductPreview from '@/components/sections/product-preview';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-transparent">
      <Hero />
      <div className="relative z-10 flex flex-1 flex-col">
        <Header />
        <main className="flex-1">
          <div className="pt-24 md:pt-32"></div>
          <Features />
          <ProductPreview />
        </main>
        <Footer />
      </div>
    </div>
  );
}
