import Link from 'next/link';
import { StalliqLogo } from '@/components/icons/stalliq-logo';
import { Linkedin, Twitter } from 'lucide-react';
import WaitlistForm from '@/components/waitlist-form';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/intent/tweet?text=Check%20out%20Stalliq%2C%20the%20future%20of%20innovation!%20%23Stalliq',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/shareArticle?mini=true&url=https://stalliq.com&title=Stalliq%20-%20The%20Future%20of%20Innovation',
    },
  ];

  return (
    <footer id="contact" className="mt-auto border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label="Stalliq Home">
              <StalliqLogo className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground">
              Revolutionizing the way you innovate.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-2 lg:justify-self-end">
            <div className="mx-auto max-w-md space-y-4">
              <h3 className="font-headline text-2xl font-bold">
                Don&apos;t Miss Out
              </h3>
              <p className="text-muted-foreground">
                Be the first to know when we launch. Sign up for exclusive early access and updates.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Stalliq. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Share on ${social.name}`}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
