import Header from '@/components/layout/header';
import { SplineSceneBasic } from '@/components/ui/splite';

export default function Home() {
  return (
    <div className="main-container relative flex h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <SplineSceneBasic />
      </main>
    </div>
  );
}
