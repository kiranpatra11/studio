'use client'

import { Suspense, lazy } from 'react'
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-black/[0.96] relative flex overflow-hidden">
      <Spotlight />
      
      <div className="flex-shrink-0 w-[55%] p-8 relative z-20 flex flex-col items-start justify-center text-left">
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Interactive 3D
        </h1>
        <p className="mt-4 text-xl text-neutral-300 max-w-lg">
          Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
          that capture attention and enhance your design.
        </p>
      </div>

      <div className="flex-1 h-full relative z-10 ml-[-12%]">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="!w-full !h-full"
        />
      </div>
    </Card>
  )
}
