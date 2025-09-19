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

const earlyAccessFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required.'),
    lastName: z.string().min(1, 'Last name is required.'),
    country: z.string().min(1, 'Please select a country.'),
    phone: z.string().regex(/^\+?[0-9\s-()]+$/, 'Please enter a valid phone number.'),
    website: z.string().url('Please enter a valid URL.'),
    revenue: z.string().min(1, 'Please select a revenue range.'),
});


export async function submitEarlyAccessForm(prevState: any, formData: FormData) {
    const websiteValue = (formData.get('website') as string) || '';
    if (websiteValue && !websiteValue.startsWith('http')) {
        formData.set('website', `https://` + websiteValue);
    }

    const validatedFields = earlyAccessFormSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        country: formData.get('country'),
        phone: formData.get('phone'),
        website: formData.get('website'),
        revenue: formData.get('revenue'),
    });

    if (!validatedFields.success) {
        return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: null,
        };
    }
    
    try {
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeg6rmSs7jS1p5zgtz6x4RkdtTTIbvnIEomvUO1j48Y8kQAxw/formResponse';
        
        const googleFormData = new FormData();
        googleFormData.append('entry.9805284', validatedFields.data.firstName);
        googleFormData.append('entry.1485660370', validatedFields.data.lastName);
        googleFormData.append('entry.1013702118', validatedFields.data.country);
        googleFormData.append('entry.953798938', validatedFields.data.phone);
        googleFormData.append('entry.2023533965', validatedFields.data.website);
        googleFormData.append('entry.1147012391', validatedFields.data.revenue);

        await fetch(googleFormUrl, {
            method: 'POST',
            body: googleFormData,
            mode: 'no-cors', 
        });
        
        console.log('New Early Access Submission:', validatedFields.data);

        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            errors: null,
            message: 'Your request has been submitted. Our team will contact you soon.',
        };

    } catch (error) {
        console.error('Error submitting to Google Form:', error);
        return {
            errors: { _form: ['An unexpected error occurred.'] },
            message: null,
        };
    }
}
