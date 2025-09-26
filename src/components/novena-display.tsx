'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { Saint } from '@/lib/data';
import ReflectionGenerator from './reflection-generator';
import PrayerAudioPlayer from './prayer-audio-player';

type Theme = 'default' | 'dark-gray' | 'light-gray' | 'red';

const themeClasses: Record<Theme, string> = {
  default: 'bg-card text-card-foreground',
  'dark-gray': 'bg-zinc-800 text-zinc-100 border-zinc-700',
  'light-gray': 'bg-zinc-100 text-zinc-900 border-zinc-200',
  red: 'bg-primary/10 text-primary-foreground border-primary/20 dark:bg-red-950/40 dark:text-red-100 dark:border-red-900',
};

const themeCircleClasses: Record<Theme, string> = {
  default: 'bg-white border-gray-300',
  'dark-gray': 'bg-zinc-800',
  'light-gray': 'bg-zinc-100',
  red: 'bg-primary/20 dark:bg-red-950/40',
}

interface NovenaDisplayProps {
  saint: Saint | null;
}

function ThemeSelector({ theme, setTheme }: { theme: Theme, setTheme: (theme: Theme) => void }) {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-2">
      {(['default', 'dark-gray', 'light-gray', 'red'] as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={cn(
            'w-5 h-5 rounded-full border-2 transition-transform duration-200 hover:scale-110',
            theme === t ? 'ring-2 ring-offset-2 ring-offset-background ring-accent' : 'ring-0',
            themeCircleClasses[t]
          )}
          aria-label={`Mudar para tema ${t}`}
        />
      ))}
    </div>
  );
}

export default function NovenaDisplay({ saint }: NovenaDisplayProps) {
  const [theme, setTheme] = useState<Theme>('default');

  if (!saint) {
    return (
      <Card className="mt-8 flex flex-col items-center justify-center p-16 text-center bg-transparent border-2 border-dashed">
        <div className="font-headline text-5xl text-primary/50 mb-4">✝</div>
        <h2 className="font-headline text-2xl tracking-wide">Bem-vindo ao Portal Corações Sagrados</h2>
        <p className="mt-2 text-muted-foreground max-w-md">
          Selecione um santo na barra acima para iniciar sua jornada de oração e reflexão.
        </p>
      </Card>
    );
  }

  const { novena } = saint;

  return (
    <Card className={cn('mt-8 w-full transition-colors duration-300 relative shadow-2xl shadow-black/10', themeClasses[theme])}>
      <CardHeader className="pt-6 pr-24">
        <CardTitle className="font-headline text-3xl tracking-wide">{novena.title}</CardTitle>
      </CardHeader>
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <CardContent>
        <Tabs defaultValue="day-0" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            {novena.days.map((day, index) => (
              <TabsTrigger key={`trigger-${day.day}`} value={`day-${index}`}>
                Dia {day.day}
              </TabsTrigger>
            ))}
          </TabsList>
          {novena.days.map((day, index) => (
            <TabsContent key={`content-${day.day}`} value={`day-${index}`}>
              <Card className={cn('mt-4', themeClasses[theme], 'border-none shadow-none bg-transparent')}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{day.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-48 pr-4">
                    <p className="text-base font-body whitespace-pre-wrap leading-relaxed">
                      {day.prayer}
                    </p>
                  </ScrollArea>
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <ReflectionGenerator prayerText={day.prayer} />
                    <PrayerAudioPlayer prayerText={day.prayer} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
