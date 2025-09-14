import { FeatureIcon } from '@/components/icons/feature-icon';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const features = [
  {
    icon: {
      shape: 'hexagon',
      gradientId: 'grad1',
    },
    title: 'Generate Ideas Instantly',
    description: 'Leverage our advanced AI to brainstorm and generate unique concepts in seconds.',
    gradientColors: {
      start: 'hsl(var(--primary))',
      end: 'hsl(var(--accent-magenta))',
    },
  },
  {
    icon: {
      shape: 'circle',
      gradientId: 'grad2',
    },
    title: 'Collaborate in Real-Time',
    description: 'Work with your team seamlessly with shared canvases and synchronized workflows.',
     gradientColors: {
      start: 'hsl(var(--accent-magenta))',
      end: 'hsl(var(--accent-purple))',
    },
  },
  {
    icon: {
      shape: 'square',
      gradientId: 'grad3',
    },
    title: 'Deploy with a Click',
    description: 'Go from prototype to production effortlessly with our integrated deployment pipeline.',
    gradientColors: {
      start: 'hsl(var(--accent-purple))',
      end: 'hsl(var(--accent))',
    },
  },
];

export default function Features() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-radial-features opacity-50" />
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Future of Creation, Unified.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Stalliq combines cutting-edge technology with intuitive design to
            supercharge your creative process.
          </p>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              className="flex flex-col items-center gap-4 rounded-lg border border-white/10 bg-black/20 p-6 text-center shadow-lg backdrop-blur-sm"
              delay={index * 150}
            >
              <FeatureIcon
                shape={feature.icon.shape as any}
                gradientId={feature.icon.gradientId}
                gradientColors={feature.gradientColors}
                className="h-16 w-16"
              />
              <h3 className="font-headline text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
