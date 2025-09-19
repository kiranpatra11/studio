
"use client";

import { useState, useActionState, useEffect, useMemo } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitEarlyAccessForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { countries } from '@/lib/countries';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RainbowBorderButton } from './rainbow-border-button';

const revenueOptions = [
  '$100k – $250k',
  '$250k – $500k',
  '$500k – $750k',
  '$750k – $1M',
  'Above $1M',
];

const formSchema = z.object({
    firstName: z.string().min(1, 'First name is required.'),
    lastName: z.string().min(1, 'Last name is required.'),
    country: z.string().min(1, 'Please select a country.'),
    phone: z.string().regex(/^\+?[0-9\s-()]+$/, 'Please enter a valid phone number.'),
    website: z.string().url('Please enter a valid URL.'),
    revenue: z.string().min(1, 'Please select a revenue range.'),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90">
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}

export function EarlyAccessForm() {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(submitEarlyAccessForm, { errors: null, message: null });
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      phone: '',
      website: '',
      revenue: '',
    },
  });

  const stateMessage = state.message;
  const stateErrors = useMemo(() => state.errors, [state]);

  useEffect(() => {
    if (stateMessage) {
      toast({
        title: 'Success!',
        description: stateMessage,
      });
      setOpen(false);
      form.reset();
    } else if (stateErrors) {
        const formErrors = stateErrors as any;
        if (formErrors._form) {
            toast({
                variant: 'destructive',
                title: 'Oops! An error occurred.',
                description: formErrors._form.join(', '),
            });
        }
    }
  }, [stateMessage, stateErrors, toast, form]);
  
  useEffect(() => {
    if (stateErrors) {
      for (const [field, messages] of Object.entries(stateErrors)) {
        if (messages && field !== '_form') {
          form.setError(field as keyof z.infer<typeof formSchema>, {
            type: 'manual',
            message: (messages as string[]).join(', '),
          });
        }
      }
    }
  }, [stateErrors, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <RainbowBorderButton
          label="Get Early Access - FREE"
          className="w-full sm:w-auto"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] bg-background rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get Early Access</DialogTitle>
          <DialogDescription>
            Fill in your details to secure a 40% early-bird discount.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form action={formAction} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                key="firstName"
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                key="lastName"
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} name="country">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem 
                            key={country.value} 
                            value={country.label}
                            className="data-[highlighted]:bg-zinc-700 data-[highlighted]:text-white"
                        >
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 123 456 7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-commerce Website Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="revenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Annual Revenue</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} name="revenue">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a revenue range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {revenueOptions.map((option) => (
                        <SelectItem 
                            key={option} 
                            value={option}
                            className="data-[highlighted]:bg-zinc-700 data-[highlighted]:text-white"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="pt-4">
                <DialogClose asChild>
                    <Button type="button" variant="outline">
                    Cancel
                    </Button>
                </DialogClose>
                <SubmitButton />
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
