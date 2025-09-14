import WaitlistForm from '@/components/waitlist-form';
import { generateHeroAnimation } from '@/ai/flows/generate-hero-animation';

const brandColors = ['#2CCCC3', '#FACD3D', '#5626C4', '#E60576'];

export default async function Hero() {
  let animationDataUri = '';
  try {
    const result = await generateHeroAnimation({
      brandColors,
      stylePreference: 'Futuristic Cosmic Wave',
    });
    animationDataUri = result.animationDataUri;
  } catch (error) {
    console.error('Failed to generate hero animation:', error);
    // Fallback to a simple gradient
  }

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black py-24 text-center">
      <div className="absolute inset-0 -z-20">
        {animationDataUri ? (
          <div
            className="h-full w-full scale-125 bg-cover bg-center opacity-30 blur-xl"
            style={{ backgroundImage: `url("${animationDataUri}")` }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-accent-purple/20 via-primary/20 to-accent-magenta/20" />
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-radial-hero" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-glow bg-gradient-to-r from-primary via-accent-magenta to-accent bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Innovation Starts Here.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Stalliq is your new launchpad for creating, testing, and deploying
            next-generation ideas. Get early access and be part of the future.
          </p>
          <div className="mx-auto mt-10 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
