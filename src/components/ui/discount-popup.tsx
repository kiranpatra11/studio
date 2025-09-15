"use client";

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from './button';
import { RainbowBorderButton } from './rainbow-border-button';

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        localStorage.setItem('hasSeenDiscountPopup', 'true');
      }
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleJoinClick = () => {
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-black border-primary/50 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-primary text-glow">
            Wait! Get 40% Off
          </AlertDialogTitle>
          <AlertDialogDescription className="text-neutral-300">
            As a special thank you for being an early supporter, join our waitlist now and get an exclusive 40% discount when we launch. Don't miss out!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-start gap-2">
            <RainbowBorderButton
                onClick={handleJoinClick}
                label="Join Now & Get 40% Off"
                className="w-full sm:w-auto"
            />
          <Button variant="ghost" onClick={() => setIsOpen(false)} className="w-full sm:w-auto text-neutral-400 hover:text-white">
            No, thanks
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
