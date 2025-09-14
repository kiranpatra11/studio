"use client";

import Header from '@/components/layout/header';
import Features from '@/components/sections/features';
import ProductPreview from '@/components/sections/product-preview';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Hero />
      <div className="relative z-10 flex flex-1 flex-col">
        <Header />
        <main className="flex-1 bg-transparent">
          {/* Add a spacer to push content below the header */}
          <div className="h-20" />
          <Features />
          <ProductPreview />
        </main>
        <Footer />
      </div>
    </div>
  );
}
