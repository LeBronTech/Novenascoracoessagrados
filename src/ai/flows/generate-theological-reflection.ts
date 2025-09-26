// src/ai/flows/generate-theological-reflection.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating theological reflections on a given text using the Gemini API.
 *
 * - generateTheologicalReflection - A function that takes text as input and returns a theological reflection.
 * - GenerateTheologicalReflectionInput - The input type for the generateTheologicalReflection function.
 * - GenerateTheologicalReflectionOutput - The return type for the generateTheologicalReflection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTheologicalReflectionInputSchema = z.object({
  text: z.string().describe('The text to generate a theological reflection for.'),
});
export type GenerateTheologicalReflectionInput = z.infer<
  typeof GenerateTheologicalReflectionInputSchema
>;

const GenerateTheologicalReflectionOutputSchema = z.object({
  reflection: z.string().describe('The generated theological reflection.'),
});
export type GenerateTheologicalReflectionOutput = z.infer<
  typeof GenerateTheologicalReflectionOutputSchema
>;

export async function generateTheologicalReflection(
  input: GenerateTheologicalReflectionInput
): Promise<GenerateTheologicalReflectionOutput> {
  return generateTheologicalReflectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTheologicalReflectionPrompt',
  input: {schema: GenerateTheologicalReflectionInputSchema},
  output: {schema: GenerateTheologicalReflectionOutputSchema},
  prompt: `You are a theologian. Generate a short, theologically relevant reflection on the following text:\n\n{{text}}`,
});

const generateTheologicalReflectionFlow = ai.defineFlow(
  {
    name: 'generateTheologicalReflectionFlow',
    inputSchema: GenerateTheologicalReflectionInputSchema,
    outputSchema: GenerateTheologicalReflectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
