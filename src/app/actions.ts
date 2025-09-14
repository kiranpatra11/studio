'use server';

import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function joinWaitlist(prevState: any, formData: FormData) {
  const validatedFields = emailSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.email?.[0],
      message: null,
    };
  }

  // In a real application, you would add the email to your database
  // e.g., await db.waitlist.create({ email: validatedFields.data.email });
  console.log(`New waitlist submission: ${validatedFields.data.email}`);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    error: null,
    message: 'Thank you for joining the waitlist!',
  };
}
