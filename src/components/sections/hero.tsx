'use client';

import WaitlistForm from '@/components/waitlist-form';
import { Spotlight } from '@/components/ui/spotlight';
import SplineWrapper from "@/components/ui/splinewrapper";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-black py-24">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-8 px-4 text-left md:grid-cols-2 md:px-6">
        <div className="flex flex-col items-start">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-glow bg-gradient-to-r from-primary via-accent-magenta to-accent bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Innovation Starts Here.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Stalliq is your new launchpad for creating, testing, and deploying
            next-generation ideas. Get early access and be part of the future.
          </p>
          <div className="mt-10 w-full max-w-md">
            <WaitlistForm />
          </div>
        </div>
        <div className="h-[500px]">
          <SplineWrapper scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
