import Header from '@/components/layout/header';
import { SplineSceneBasic } from '@/components/ui/splite';

export default function Home() {
  return (
    <div className="relative flex h-dvh flex-col bg-black">
      <Header />
      <div className="absolute inset-0 -z-10 bg-gradient-radial-hero" />
      <div className="background-lighting" />
      <main className="flex-1">
        <SplineSceneBasic />
      </main>
    </div>
  );
}
