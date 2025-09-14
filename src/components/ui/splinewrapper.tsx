"use client";

import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("./spline").then(mod => mod.SplineScene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      Loading 3D...
    </div>
  ),
});

export default SplineScene;
