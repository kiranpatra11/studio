'use client';

import { SplineScene } from '@/components/ui/splite';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';

export default function Hero() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen">
      <Card className="relative h-full w-full overflow-hidden rounded-none border-none bg-black">
        <div className="absolute inset-0 z-0">
          <Spotlight
            className="-top-40 right-10 md:right-20 lg:right-32"
            fill="white"
          />
        </div>

        <div className="relative z-10 grid h-full w-full items-center md:grid-cols-5">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center justify-center p-8 text-center md:col-span-2 md:items-start md:pl-16 md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tighter text-white md:text-7xl leading-[0.9]">
              Stop Losing <span className="text-primary text-glow">$5K Per Month</span>
              <span className="block font-bold text-4xl md:text-6xl tracking-tight text-neutral-400 leading-[1.1]">on Customer Support</span>
            </h1>
            <p className="mx-auto mt-8 max-w-[500px] text-base md:text-lg text-neutral-400 md:mx-0" style={{ lineHeight: 1.6 }}>
              Our AI-powered solution resolves 80% of queries automatically, saving you time and money while delighting your customers.
            </p>
          </div>

          {/* Right Column: Robot */}
          <div
            className="relative h-full w-full md:col-span-3"
            style={{ width: '110%', marginLeft: '-5%', overflow: 'visible' }}
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="!w-full !h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
