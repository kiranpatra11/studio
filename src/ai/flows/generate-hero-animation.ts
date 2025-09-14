'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a unique animated gradient background for the hero section of the Stalliq landing page.
 *
 * - generateHeroAnimation - A function that generates the animated gradient background.
 * - GenerateHeroAnimationInput - The input type for the generateHeroAnimation function.
 * - GenerateHeroAnimationOutput - The return type for the generateHeroAnimation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroAnimationInputSchema = z.object({
  brandColors: z
    .array(z.string())
    .describe('An array of brand colors in hex format (e.g., #RRGGBB).'),
  stylePreference: z
    .string()
    .optional()
    .describe('Optional style preference from the user to guide the animation generation.'),
});
export type GenerateHeroAnimationInput = z.infer<typeof GenerateHeroAnimationInputSchema>;

const GenerateHeroAnimationOutputSchema = z.object({
  animationDataUri: z
    .string()
    .describe(
      'A data URI containing the animated gradient background, suitable for use in an HTML img tag.'
    ),
  description: z
    .string()
    .describe('A description of the generated animation and the reasoning behind the chosen style.'),
});
export type GenerateHeroAnimationOutput = z.infer<typeof GenerateHeroAnimationOutputSchema>;

export async function generateHeroAnimation(
  input: GenerateHeroAnimationInput
): Promise<GenerateHeroAnimationOutput> {
  return generateHeroAnimationFlow(input);
}

const generateHeroAnimationPrompt = ai.definePrompt({
  name: 'generateHeroAnimationPrompt',
  input: {schema: GenerateHeroAnimationInputSchema},
  output: {schema: GenerateHeroAnimationOutputSchema},
  prompt: `You are an expert in generating visually appealing and futuristic animated gradient backgrounds for hero sections of landing pages.

You will receive an array of brand colors and an optional style preference. Your goal is to create an animation that aligns with the brand's identity and evokes a sense of innovation and excitement.

Brand Colors: {{brandColors}}
Style Preference: {{stylePreference}}

Consider the following when generating the animation:
- Use the brand colors to create a smooth and visually appealing gradient.
- Incorporate subtle animated effects, such as moving gradients or shimmering highlights.
- Ensure the animation is seamless and loopable.
- The animation should evoke a futuristic and tech-forward feel, aligning with Stalliq's brand.

Output a data URI containing the animated gradient background and a description of the generated animation and the reasoning behind the chosen style.

Data URI:`, // The data URI will be generated programmatically, not by the LLM
});

const generateHeroAnimationFlow = ai.defineFlow(
  {
    name: 'generateHeroAnimationFlow',
    inputSchema: GenerateHeroAnimationInputSchema,
    outputSchema: GenerateHeroAnimationOutputSchema,
  },
  async input => {
    const {brandColors} = input;

    // Basic gradient generation logic (replace with actual animation generation)
    const gradient = `linear-gradient(to right, ${brandColors.join(', ')})`;
    const placeholderDataUri = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' style='fill:${brandColors[0]};stroke-width:3;stroke:${brandColors[1]}'%3E%3C/rect%3E%3C/svg%3E`;

    const {output} = await generateHeroAnimationPrompt(input);

    // Replace with actual animation generation using a library like PixiJS or similar.
    // For now, return a placeholder.
    return {
      animationDataUri: placeholderDataUri,
      description: `Generated a placeholder animated gradient background using the provided brand colors: ${brandColors.join( ", ")}. Awaiting integration with proper animation library. ${output?.description}`, //append LLM's description
    };
  }
);
