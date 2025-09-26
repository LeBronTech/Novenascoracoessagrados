'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating audio from prayer text using the Gemini TTS model.
 *
 * - generatePrayerAudio - A function that generates audio from the provided text.
 * - GeneratePrayerAudioInput - The input type for the generatePrayerAudio function.
 * - GeneratePrayerAudioOutput - The return type for the generatePrayerAudio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const GeneratePrayerAudioInputSchema = z.string().describe('The prayer text to convert to audio.');
export type GeneratePrayerAudioInput = z.infer<typeof GeneratePrayerAudioInputSchema>;

const GeneratePrayerAudioOutputSchema = z.object({
  media: z.string().describe('The audio data in WAV format as a data URI.'),
});
export type GeneratePrayerAudioOutput = z.infer<typeof GeneratePrayerAudioOutputSchema>;

export async function generatePrayerAudio(input: GeneratePrayerAudioInput): Promise<GeneratePrayerAudioOutput> {
  return generatePrayerAudioFlow(input);
}

const generatePrayerAudioFlow = ai.defineFlow(
  {
    name: 'generatePrayerAudioFlow',
    inputSchema: GeneratePrayerAudioInputSchema,
    outputSchema: GeneratePrayerAudioOutputSchema,
  },
  async (query) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {voiceName: 'Algenib'},
          },
        },
      },
      prompt: query,
    });
    if (!media) {
      throw new Error('no media returned');
    }
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    return {
      media: 'data:audio/wav;base64,' + (await toWav(audioBuffer)),
    };
  }
);

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: Buffer[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}