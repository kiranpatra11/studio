"use client";

import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';

export default function Home() {
  return (
    <div className="relative min-h-dvh bg-black">
      <Header />
      <main>
        <div className="h-screen">
          <Hero />
        </div>
        <Features />
      </main>
    </div>
  );
}