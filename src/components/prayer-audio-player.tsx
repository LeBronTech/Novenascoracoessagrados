'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Volume2, Loader2, Play, Pause } from 'lucide-react';
import { generateAudioAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface PrayerAudioPlayerProps {
  prayerText: string;
  theme: string;
}

export default function PrayerAudioPlayer({ prayerText, theme }: PrayerAudioPlayerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const handleGenerateAndPlay = async () => {
    if (audioSrc) {
      // If audio is already generated, just play/pause
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
      }
      return;
    }
    
    setIsLoading(true);
    const result = await generateAudioAction(prayerText);
    setIsLoading(false);

    if (result.error) {
       toast({
        variant: 'destructive',
        title: 'Erro de Áudio',
        description: result.error,
      });
    } else if (result.audioData) {
      setAudioSrc(result.audioData);
    }
  };

  useEffect(() => {
    if (audioSrc && audioRef.current) {
      audioRef.current.play();
    }
  }, [audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setAudioSrc(null); // Reset to allow re-generation
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audioRef.current]);

  const Icon = isLoading ? Loader2 : audioSrc ? (isPlaying ? Pause : Play) : Volume2;
  const buttonText = isLoading ? "Gerando Áudio..." : audioSrc ? (isPlaying ? "Pausar" : "Ouvir") : "Ouvir Oração";

  return (
    <div className="w-full">
      <Button 
        onClick={handleGenerateAndPlay} 
        disabled={isLoading} 
        variant="outline" 
        className={cn(
            "w-full sm:w-auto",
            "bg-white/90 text-primary hover:bg-white border-transparent"
        )}
      >
        <Icon className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        {buttonText}
      </Button>
      {audioSrc && <audio ref={audioRef} src={audioSrc} className="hidden" />}
    </div>
  );
}
