'use client';

import Link from 'next/link';
import { StalliqLogo } from '@/components/icons/stalliq-logo';
import { MenuBar } from '@/components/ui/glow-menu';
import { useState } from 'react';
import { LayoutGrid, DollarSign, HelpCircle, Mail } from 'lucide-react';
import { ButtonCta } from '../ui/button-shiny';

const menuItems = [
  {
    icon: LayoutGrid,
    label: 'Features',
    href: '#features',
    gradient:
      'radial-gradient(circle, hsl(var(--primary-foreground)/0.15) 0%, hsl(var(--primary-foreground)/0.06) 50%, transparent 100%)',
    iconColor: 'text-primary',
  },
  {
    icon: DollarSign,
    label: 'Pricing',
    href: '#pricing',
    gradient:
      'radial-gradient(circle, hsl(var(--accent-magenta)/0.15) 0%, hsl(var(--accent-magenta)/0.06) 50%, transparent 100%)',
    iconColor: 'text-accent-magenta',
  },
  {
    icon: HelpCircle,
    label: 'FAQ',
    href: '#faq',
    gradient:
      'radial-gradient(circle, hsl(var(--accent-purple)/0.15) 0%, hsl(var(--accent-purple)/0.06) 50%, transparent 100%)',
    iconColor: 'text-accent-purple',
  },
  {
    icon: Mail,
    label: 'Contact',
    href: '#contact',
    gradient:
      'radial-gradient(circle, hsl(var(--accent)/0.15) 0%, hsl(var(--accent)/0.06) 50%, transparent 100%)',
    iconColor: 'text-accent',
  },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState<string>('');

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Stalliq Home">
          <StalliqLogo className="h-8 w-auto" />
        </Link>
        <div className="hidden md:flex">
          <MenuBar items={menuItems} activeItem={activeItem} onItemClick={setActiveItem} />
        </div>
        <div className="flex items-center gap-4">
          <Link href="#waitlist-form">
            <ButtonCta label="Join Waitlist" className="w-auto" />
          </Link>
        </div>
      </div>
    </header>
  );
}
