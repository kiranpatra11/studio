'use client';

import WaitlistForm from '@/components/waitlist-form';
import { useEffect, useState } from 'react';

export default function Hero() {

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black py-24 text-center">
      <div className="absolute inset-0 -z-20">
        <div className="h-full w-full bg-black" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-radial-hero" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-glow bg-gradient-to-r from-primary via-accent-magenta to-accent bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Innovation Starts Here.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Stalliq is your new launchpad for creating, testing, and deploying
            next-generation ideas. Get early access and be part of the future.
          </p>
          <div className="mx-auto mt-10 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
