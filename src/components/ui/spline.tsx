'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Prevents server-side rendering
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false })

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center text-white">
          Loading 3D...
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
