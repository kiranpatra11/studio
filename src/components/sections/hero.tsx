'use client';

import { SplineScene } from '@/components/ui/splite';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';

export default function Hero() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen">
      <Card className="relative h-full w-full overflow-hidden rounded-none border-none bg-black">
        <div className="absolute inset-0 z-10">
          <Spotlight
            className="-top-40 right-10 md:right-20 lg:right-32"
            fill="white"
          />
        </div>

        {/* Unified Layout Container */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text md:text-5xl">
            Interactive 3D
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-neutral-300">
            Bring your UI to life with beautiful 3D scenes. Create immersive
            experiences that capture attention and enhance your design.
          </p>
        </div>

        {/* Full-width container for the robot, positioned behind text */}
        <div
          className="absolute inset-0 z-0"
          style={{ width: '110%', left: '-5%' }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </Card>
    </div>
  );
}
