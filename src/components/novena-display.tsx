'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import type { Saint, Novena } from '@/lib/data';
import ReflectionGenerator from './reflection-generator';
import PrayerAudioPlayer from './prayer-audio-player';

type Theme = 'theme-default' | 'theme-dark-gray' | 'theme-light-gray' | 'theme-red';

const themeClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da4] text-white',
  'theme-dark-gray': 'bg-gray-700 text-white',
  'theme-light-gray': 'bg-gray-100 text-stone-800',
  'theme-red': 'bg-primary text-white',
};

const themeDotClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da4]',
  'theme-dark-gray': 'bg-gray-700',
  'theme-light-gray': 'bg-gray-100',
  'theme-red': 'bg-primary',
};

interface NovenaDisplayProps {
  saint: Saint | null;
  novena: Novena | null;
}

function ThemeSelector({ theme, setTheme }: { theme: Theme, setTheme: (theme: Theme) => void }) {
    return (
        <div className="absolute top-[-14px] right-5 flex gap-2.5 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {(['theme-dark-gray', 'theme-default', 'theme-light-gray', 'theme-red'] as Theme[]).map((t) => (
                <button
                    key={t}
                    onClick={() => setTheme(t)}
                    title={`Tema ${t.split('-')[1]}`}
                    className={cn(
                        'w-5 h-5 rounded-full cursor-pointer transition-all duration-200 border-2 border-white/70 shadow-md',
                        'hover:scale-115',
                        theme === t ? 'scale-125 shadow-lg ring-2 ring-white/90 ring-offset-2 ring-offset-transparent' : '',
                        themeDotClasses[t]
                    )}
                />
            ))}
        </div>
    );
}

function NovenaContent({ htmlContent }: { htmlContent: string }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}


export default function NovenaDisplay({ saint, novena }: NovenaDisplayProps) {
  const [theme, setTheme] = useState<Theme>('theme-default');
  const [activeTab, setActiveTab] = useState('day-1');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setActiveTab('day-1');
    setIsFading(true);
    const timer = setTimeout(() => setIsFading(false), 150); // Match animation duration
    return () => clearTimeout(timer);
  }, [saint, novena]);

  if (!novena || !saint) {
    return (
      <main className="flex flex-col items-center justify-center p-16 text-center bg-transparent border-2 border-dashed rounded-2xl">
        <div className="font-headline text-5xl text-primary/50 mb-4">✝</div>
        <h2 className="font-headline text-2xl tracking-wide">Bem-vindo ao Portal Corações Sagrados</h2>
        <p className="mt-2 text-muted-foreground max-w-md">
          Selecione uma novena na barra acima para iniciar sua jornada de oração e reflexão.
        </p>
      </main>
    );
  }

  const { novenaTitle, description, days, initialPrayer, finalPrayer } = novena;

  // Function to extract plain text for AI actions
  const getPlainText = (htmlString: string) => {
    if (typeof document === 'undefined') return ''; // Return empty on server
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || '';
  };
  
  const isLightTheme = theme === 'theme-light-gray';
  const isRedTheme = theme === 'theme-red';
  const isDarkGrayTheme = theme === 'theme-dark-gray';

  return (
    <main 
      id="main-card" 
      className={cn(
        'main-card glass-card rounded-2xl p-6 md:p-10 relative shadow-2xl shadow-black/20', 
        themeClasses[theme],
        isFading ? 'animate-fade-out' : 'animate-slide-up-fade-in'
        )}
    >
      <ThemeSelector theme={theme} setTheme={setTheme} />
       <header id="novena-header" className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 text-center sm:text-left">
          <img src={saint.imageUrl} alt={saint.name} className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-stone-400/50 shadow-lg flex-shrink-0" />
          <div>
            <h2 className={cn("text-3xl md:text-4xl font-bold font-brand", 
              (isRedTheme || isDarkGrayTheme) ? 'text-white' : 'text-primary'
            )}>{novenaTitle}</h2>
            <p className={cn(
                "italic mt-1", 
                isLightTheme ? 'text-stone-600' : 'text-white/90',
             )}>{description || ''}</p>
            {saint.startDate && (
              <div className="mt-3">
                <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  Novena: {saint.startDate} a {saint.endDate}
                </span>
              </div>
            )}
          </div>
       </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap h-auto justify-center bg-transparent border-b border-white/20 rounded-none p-0">
            {days.map((day, index) => (
              <TabsTrigger key={`trigger-${index}`} value={`day-${index + 1}`} className={cn(
                "py-3 px-2 md:px-4 text-sm md:text-base rounded-t-md rounded-b-none border-b-[3px] border-transparent data-[state=active]:bg-black/10 data-[state=active]:shadow-none",
                isLightTheme ? 'text-stone-700 data-[state=active]:text-primary data-[state=active]:border-primary hover:text-primary'
                        : 'text-stone-200 data-[state=active]:text-white data-[state=active]:border-white hover:text-white'
                )}>
                Dia {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          {days.map((day, index) => (
            <TabsContent key={`content-${index}`} value={`day-${index + 1}`} className="mt-8 animate-fade-in">
                <div className={cn("prose max-w-none", 
                    // TEXTOS GERAIS
                    isLightTheme ? "text-black" : "text-white",

                    // TÍTULOS E CITAÇÕES
                    isRedTheme ? "[&_h3]:text-white [&_blockquote]:text-white" : "[&_h3]:text-primary [&_blockquote]:text-primary",
                    isDarkGrayTheme && "[&_h3]:text-white [&_blockquote]:text-white",
                    isLightTheme && "[&_h3]:text-primary [&_blockquote]:text-primary/90",

                    // PRIMEIRA LETRA
                    isRedTheme ? "[.day-specific-content>p:first-child::first-letter]:text-white" : "[.day-specific-content>p:first-child::first-letter]:text-primary",
                    
                    // ORAÇÃO INICIAL (Ó Jesus, que fizeste...)
                    (isRedTheme || isDarkGrayTheme) && "[&_.initial-prayer-text]:text-white",
                    isLightTheme && "[&_.initial-prayer-text_.prayer-request>i]:text-primary",
                    (isRedTheme || isDarkGrayTheme) && "[&_.initial-prayer-text_h4]:text-white",
                    isLightTheme && "[&_.initial-prayer-text_h4]:text-primary",
                    

                    // ORAÇÃO FINAL (Deus Misericordioso...)
                    (isRedTheme || isDarkGrayTheme) && "[&_.final-prayer-text_.prayer-block+p]:text-white",
                    isRedTheme ? "[.final-prayer-text_.prayer-block+p::first-letter]:text-black" : "[.final-prayer-text_.prayer-block+p::first-letter]:text-primary",

                    // LADAINHA FINAL E JACULATÓRIAS
                    (isRedTheme || isDarkGrayTheme) && "[&_.final-prayer-text_.jaculatory-prayers>p]:text-white",
                    isLightTheme && "[&_.litany-response]:text-primary/90"


                )}>
                  {initialPrayer && (
                    <div className="initial-prayer-text">
                        <NovenaContent htmlContent={initialPrayer} />
                    </div>
                  )}
                  
                  <div className="w-16 h-px bg-white/20 my-8 mx-auto"></div>

                  <h3 className={cn("text-2xl font-bold font-brand mb-2")}>{day.day}</h3>
                  <p className={cn("text-xl italic mb-4", isLightTheme ? "text-stone-500" : "text-white/80")}>{day.title}</p>
                  
                  <div className="day-specific-content">
                    <NovenaContent htmlContent={day.content} />
                  </div>
                  
                  {finalPrayer && (
                    <div className="final-prayer-text">
                        <NovenaContent htmlContent={finalPrayer} />
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <ReflectionGenerator prayerText={getPlainText(day.content)} theme={theme} />
                  <PrayerAudioPlayer prayerText={getPlainText(day.content)} theme={theme}/>
                </div>
            </TabsContent>
          ))}
      </Tabs>
    </main>
  );
}
