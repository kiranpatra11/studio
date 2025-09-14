import Image from 'next/image';
import data from '@/lib/placeholder-images.json';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ProductPreview() {
  const imageData = data.placeholderImages.find(
    (img) => img.id === 'product-preview'
  );

  if (!imageData) {
    return null;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See Stalliq in Action
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Get a sneak peek of our intuitive and powerful interface. Designed for
            speed, built for teams.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl shadow-primary/10">
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <div className="p-10 pt-12">
              <Image
                src={imageData.imageUrl}
                alt={imageData.description}
                width={1200}
                height={800}
                className="rounded-lg border border-white/10 opacity-80 transition-opacity group-hover:opacity-100"
                data-ai-hint={imageData.imageHint}
              />
            </div>
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100'
              )}
            >
                <Button size="lg" asChild className="animate-pulse-glow">
                    <Link href="#waitlist-form">Get Early Access</Link>
                </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
