'use client';

import { SplineScene } from '@/components/ui/splite';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';

export default function Hero() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen">
      <Card className="relative h-full w-full overflow-hidden rounded-none border-none bg-black">
        <div className="absolute inset-0 z-1">
          <Spotlight
            className="-top-40 right-10 md:right-20 lg:right-32"
            fill="white"
          />
        </div>
        <div className="content-foreground relative z-10 grid h-full w-full grid-cols-1 items-center md:grid-cols-2">
          <div className="flex flex-col items-center justify-center p-8 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text md:text-5xl">
              Interactive 3D
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-neutral-300">
              Bring your UI to life with beautiful 3D scenes. Create immersive
              experiences that capture attention and enhance your design.
            </p>
          </div>
          <div className="robot-container relative z-15 h-full w-full transform-gpu" style={{ transform: 'translateX(5%) scaleX(1.1)'}}>
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
