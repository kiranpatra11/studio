"use client";

import Header from '@/components/layout/header';
import Features from '@/components/sections/features';
import ProductPreview from '@/components/sections/product-preview';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <div className="main-container relative flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <Features />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  );
}
