'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export default function Hero() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen">
      <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden rounded-none border-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full items-center justify-center text-center">
          {/* Centered content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Interactive 3D
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
          </div>

          {/* Spline scene */}
          <div className="absolute inset-0 z-0">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
