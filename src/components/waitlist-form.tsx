'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useRef } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { joinWaitlist } from '@/app/actions';
import { ButtonCta } from './ui/button-shiny';

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

type FormData = z.infer<typeof emailSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <ButtonCta
      type="submit"
      className="w-full sm:w-auto"
      disabled={pending}
      aria-label="Join the waitlist"
      label={pending ? 'Joining...' : 'Get Early Access'}
    />
  );
}

export default function WaitlistForm() {
  const [state, formAction] = useFormState(joinWaitlist, {
    error: null,
    message: null,
  });

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(emailSchema),
  });
  
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
      reset();
    }
    if (state.error) {
      toast({
        variant: 'destructive',
        title: "Oops!",
        description: state.error,
      });
    }
  }, [state, toast, reset]);
  
  const combinedError = errors.email?.message || state.error;

  return (
    <form
      id="waitlist-form"
      ref={formRef}
      action={formAction}
      className="space-y-4"
    >
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <div className="relative w-full">
          <Input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            className="h-14 w-full text-lg sm:h-auto"
            aria-invalid={!!combinedError}
            aria-describedby="email-error"
          />
        </div>
        <SubmitButton />
      </div>
      {combinedError && (
        <p id="email-error" className="text-sm text-destructive" role="alert">
          {combinedError}
        </p>
      )}
    </form>
  );
}
