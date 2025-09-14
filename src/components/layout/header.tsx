import Link from 'next/link';
import { StalliqLogo } from '@/components/icons/stalliq-logo';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Stalliq Home">
          <StalliqLogo className="h-8 w-auto" />
        </Link>
        <Button asChild variant="ghost">
          <Link href="#waitlist-form">Join Waitlist</Link>
        </Button>
      </div>
    </header>
  );
}
