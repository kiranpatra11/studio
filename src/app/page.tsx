import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { SplineSceneBasic } from '@/components/ui/splite';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <SplineSceneBasic />
      </main>
      <Footer />
    </div>
  );
}