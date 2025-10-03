
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Saint, Novena } from '@/lib/data';
import Image from 'next/image';

type Theme = 'theme-default' | 'theme-dark-gray' | 'theme-light-gray' | 'theme-red';

const themeClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da4] text-white',
  'theme-dark-gray': 'bg-gray-700 text-white',
  'theme-light-gray': 'bg-gray-100 text-stone-800',
  'theme-red': 'bg-primary text-white',
};

const themeDotClasses: Record<Theme, string> = {
  'theme-default': 'bg-[#949da44d]',
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
        <div className="absolute top-[-14px] right-5 flex gap-2.5 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
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
  const [theme, setTheme] = useState<Theme>('theme-dark-gray');
  const [animationState, setAnimationState] = useState<'idle' | 'out' | 'in'>('idle');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  useEffect(() => {
    if (novena) {
      setAnimationState('out');
      const outTimer = setTimeout(() => {
        setAnimationState('in');
        if (api) {
          api.scrollTo(0);
        }
      }, 150);

      const inTimer = setTimeout(() => {
        setAnimationState('idle');
      }, 150 + 800);

      return () => {
        clearTimeout(outTimer);
        clearTimeout(inTimer);
      };
    }
  }, [saint, novena, api]);
  
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);


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
  
  const isLightTheme = theme === 'theme-light-gray';
  const isRedTheme = theme === 'theme-red';
  const isDarkGrayTheme = theme === 'theme-dark-gray';
  
  const getAnimationClass = () => {
    switch(animationState) {
        case 'out': return 'animate-fade-out';
        case 'in': return 'animate-slide-up-fade-in';
        default: return '';
    }
  }

  const arrowClasses = isLightTheme 
    ? "text-primary border-primary/50 hover:bg-primary hover:text-white" 
    : "text-primary border-primary/50 hover:bg-primary hover:text-white";

  return (
    <main 
      id="main-card" 
      className={cn(
        'main-card glass-card rounded-2xl p-6 md:p-10 relative shadow-2xl shadow-black/20', 
        themeClasses[theme],
        getAnimationClass()
        )}
    >
      <ThemeSelector theme={theme} setTheme={setTheme} />
       <header id="novena-header" className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 text-center sm:text-left">
          <img src={saint.imageUrl} alt={saint.name} className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-stone-400/50 shadow-lg flex-shrink-0" />
          <div>
            <h2 className={cn("text-3xl md:text-4xl font-bold font-brand", 
              isRedTheme || isDarkGrayTheme ? 'text-white' : 'text-primary'
            )}>{novenaTitle}</h2>
            <p className={cn("italic mt-1",
               isRedTheme || isDarkGrayTheme ? 'text-white/90' : isLightTheme ? 'text-stone-600' : 'text-white/90'
            )}>
              {description || ''}
            </p>
            {saint.startDate && (
              <div className="mt-3">
                <span className={cn(
                  "inline-block text-xs font-bold px-4 py-1 rounded-full",
                   isRedTheme ? "bg-white text-primary" : "bg-primary text-white"
                )}>
                  Novena: {saint.startDate} a {saint.endDate}
                </span>
              </div>
            )}
          </div>
       </header>

      <Carousel setApi={setApi} className="w-full">
        <div className="flex justify-center flex-wrap gap-2 mb-4">
            {days.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                        'px-3 py-1 text-sm font-semibold rounded-full transition-all duration-200',
                        current === index
                            ? (isLightTheme ? 'bg-primary text-white' : 'bg-white text-primary')
                            : (isLightTheme ? 'bg-black/10 text-stone-600 hover:bg-black/20' : 'bg-white/10 text-white hover:bg-white/20')
                    )}
                >
                    Dia {index + 1}
                </button>
            ))}
        </div>

        <div className="flex justify-end mb-4">
          <a
            href="https://chat.whatsapp.com/D08lyjhVqL8KyZfIovKYk5?mode=ems_copy_t"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                'inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200',
                isLightTheme ? 'bg-black/10 hover:bg-black/20 text-stone-800' : 'bg-white/10 hover:bg-white/20 text-white'
            )}
            >
            <Image src="https://i.postimg.cc/g24cJdKG/whatsapp-icone-5.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-semibold">Novena também disponível no nosso grupo do WhatsApp.</span>
          </a>
        </div>

        <CarouselContent>
          {days.map((day, index) => (
            <CarouselItem key={`content-${index}`}>
              <div className="animate-fade-in">
                <div className={cn(
                  "prose max-w-none prose-blockquote:text-inherit",
                  isLightTheme ? "text-stone-800" : "text-white",
                  isRedTheme || isDarkGrayTheme ? "[&_h3.section-title]:text-white [&_h4.section-title]:text-white" : "[&_h3.section-title]:text-primary [&_h4.section-title]:text-primary",
                  isLightTheme ? "[&_blockquote_p]:text-primary/90" : "prose-blockquote:text-white/90",
                  isRedTheme || isDarkGrayTheme ? "[&_.day-specific-content>p:first-child::first-letter]:text-white" : "[&_.day-specific-content>p:first-child::first-letter]:text-primary",
                  isRedTheme || isDarkGrayTheme ? "[&_.prayer-request>p:first-child::first-letter]:text-white" : "[&_.prayer-request>p:first-child::first-letter]:text-primary",
                  isRedTheme || isDarkGrayTheme ? "[&_.prayer-block>p:first-child::first-letter]:text-white" : "[&_.prayer-block>p:first-child::first-letter]:text-primary",
                  isLightTheme ? "[&_.day-specific-content>p:first-child::first-letter]:text-primary" : "",
                  isLightTheme ? "[&_.prayer-request>p:first-child::first-letter]:text-primary" : "",
                  isLightTheme ? "[&_.prayer-block>p:first-child::first-letter]:text-primary" : "",
                  isLightTheme ? "[&_.litany-response]:text-primary/90" : "[&_.litany-response]:text-white/80"
                )}>
                  {initialPrayer && (
                    <div className={cn('initial-prayer-text')}>
                      <NovenaContent htmlContent={initialPrayer} />
                    </div>
                  )}
                  
                  <div className="w-16 h-px bg-white/20 my-8 mx-auto"></div>
                  
                  <div className="flex items-center justify-center gap-4 mb-8">
                      <CarouselPrevious className={cn("relative -left-0 top-0 translate-y-0", arrowClasses)} />
                      <p className="text-sm font-bold">
                          Dia {current + 1} de {count}
                      </p>
                      <CarouselNext className={cn("relative -right-0 top-0 translate-y-0", arrowClasses)} />
                  </div>

                  <h3 className={cn("section-title text-2xl font-bold font-brand mb-2",
                    isRedTheme || isDarkGrayTheme ? 'text-white' : 'text-primary'
                  )}>{day.day}</h3>
                  <p className={cn("text-xl italic mb-4", isLightTheme ? "text-stone-500" : "text-white/80")}>{day.title}</p>
                  
                  <div className="day-specific-content">
                    <NovenaContent htmlContent={day.content} />
                  </div>
                  
                  {finalPrayer && (
                     <div className={cn('final-prayer-text')}>
                      <NovenaContent htmlContent={finalPrayer} />
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className={cn("relative -left-0 top-0 translate-y-0", arrowClasses)} />
            <p className="text-sm font-bold">
                Dia {current + 1} de {count}
            </p>
            <CarouselNext className={cn("relative -right-0 top-0 translate-y-0", arrowClasses)} />
        </div>
      </Carousel>
    </main>
  );
}

    
    

    
