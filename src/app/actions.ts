'use server';

import { generateTheologicalReflection } from '@/ai/flows/generate-theological-reflection';
import { generatePrayerAudio } from '@/ai/flows/generate-prayer-audio';

export async function generateReflectionAction(text: string) {
  try {
    const result = await generateTheologicalReflection({ text });
    return { reflection: result.reflection };
  } catch (error) {
    console.error('Error generating reflection:', error);
    return { error: 'Falha ao gerar a reflexão. Tente novamente.' };
  }
}

export async function generateAudioAction(text: string) {
  try {
    const result = await generatePrayerAudio(text);
    return { audioData: result.media };
  } catch (error) {
    console.error('Error generating audio:', error);
    return { error: 'Falha ao gerar o áudio. Tente novamente.' };
  }
}
