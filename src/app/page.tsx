"use client";

import ConfettiBackground from '@/components/ui/confetti-background';
import Header from '@/components/layout/header';

export default function Home() {
  return (
    <div className="main-container relative flex h-dvh flex-col">
      <ConfettiBackground />
      <Header />
      <main className="flex-1 z-10">
        <div className="container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Stalliq is Coming Soon
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Join the waitlist to be the first to know when we launch. We are building the future of innovation.
            </p>
        </div>
      </main>
    </div>
  );
}
