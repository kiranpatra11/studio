"use client";

import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}
