'use client';

import Link from 'next/link';
import { useState } from 'react';
import { StalliqLogo } from '@/components/icons/stalliq-logo';
import { Button } from '@/components/ui/button';
import { MenuBar } from '@/components/ui/glow-menu';
import { LogIn, UserPlus } from 'lucide-react';
import { useTheme } from 'next-themes';


export default function Header() {
  const [activeItem, setActiveItem] = useState<string>('');
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const menuItems = [
    {
      label: 'Log In',
      href: '/login',
      icon: LogIn,
      gradient: isDarkTheme
        ? 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)'
        : 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)',
      iconColor: 'text-primary',
    },
    {
      label: 'Sign Up',
      href: '/signup',
      icon: UserPlus,
      gradient: isDarkTheme
        ? 'radial-gradient(circle, hsl(var(--accent-magenta) / 0.1) 0%, hsl(var(--accent-magenta) / 0.05) 50%, transparent 100%)'
        : 'radial-gradient(circle, hsl(var(--accent-magenta) / 0.2) 0%, hsl(var(--accent-magenta) / 0.1) 50%, transparent 100%)',
      iconColor: 'text-accent-magenta',
    },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    const item = menuItems.find(i => i.label === label);
    if (item) {
      // using window.location for now as we don't have router pages setup yet
      window.location.href = item.href;
    }
  };


  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Stalliq Home">
          <StalliqLogo className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <MenuBar items={menuItems} activeItem={activeItem} onItemClick={handleItemClick} />
          <Button asChild className="animate-pulse-glow">
            <Link href="#waitlist-form">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
