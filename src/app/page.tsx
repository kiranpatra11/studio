"use client";

import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <Hero />
    </div>
  );
}
