import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WaitlistForm from '@/components/waitlist-form';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <div className="relative isolate flex h-dvh flex-col items-center justify-center overflow-hidden">
        <div className="bg-gradient-radial-hero absolute inset-0 -z-10" />
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            <span className="text-glow bg-gradient-to-r from-primary via-accent-magenta to-accent bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Innovation Starts Here.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Stalliq is your new launchpad for creating, testing, and deploying
            next-generation ideas. Get early access and be part of the future.
          </p>
          <div className="mt-8 w-full max-w-lg">
            <WaitlistForm />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
