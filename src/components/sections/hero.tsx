'use client';

import WaitlistForm from '@/components/waitlist-form';
import { Spotlight } from '@/components/ui/spotlight';
import SplineWrapper from "@/components/ui/splinewrapper";

export default function Hero() {
  return (
    <section className="relative grid min-h-dvh w-full items-center overflow-hidden bg-black py-24 lg:grid-cols-2">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      <div className="container relative z-10 mx-auto flex flex-col items-start justify-center gap-8 px-4 text-left md:px-6">
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
      </div>
       <div className="relative h-full w-full">
         <SplineWrapper scene="https://prod.spline.design/9v6-ZSp6dM1Jp32B/scene.splinecode" />
      </div>
    </section>
  );
}
