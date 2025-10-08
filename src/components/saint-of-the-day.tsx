
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import type { Theme as NovenaTheme } from '@/app/page';

type Theme = 'light' | 'dark';

const themeDotClasses: Record<Theme, string> = {
  'light': 'bg-gray-100',
  'dark': 'bg-gray-700',
};

function SaintImages({ saints }: { saints: SaintStory[] }) {
    if (saints.length === 1) {
        return (
            <div className="saint-image-wrapper single">
                <Image
                    src={saints[0].imageUrl}
                    alt={saints[0].name}
                    width={64}
                    height={64}
                    className="saint-image"
                />
            </div>
        );
    }

    if (saints.length > 1) {
        return (
            <div className="saint-image-wrapper multiple">
                <Image
                    src={saints[0].imageUrl}
                    alt={saints[0].name}
                    width={64}
                    height={64}
                    className="saint-image image-1"
                />
                <Image
                    src={saints[1].imageUrl}
                    alt={saints[1].name}
                    width={64}
                    height={64}
                    className="saint-image image-2"
                />
            </div>
        );
    }

    return null;
}

function ThemeSelector({ theme, setTheme }: { theme: Theme, setTheme: (theme: Theme) => void }) {
    return (
        <div className="absolute top-4 right-3 flex gap-2 bg-transparent px-2 py-1 rounded-full z-20">
            {(['light', 'dark'] as Theme[]).map((t) => (
                <button
                    key={t}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTheme(t);
                    }}
                    title={`Tema ${t === 'light' ? 'Claro' : 'Escuro'}`}
                    className={cn(
                        'w-4 h-4 rounded-full cursor-pointer transition-all duration-200 border border-black/20 shadow-md',
                        'hover:scale-110',
                        theme === t ? 'scale-125 ring-2 ring-offset-2 ring-accent' : '',
                        themeDotClasses[t]
                    )}
                />
            ))}
        </div>
    );
}

interface SaintOfTheDayProps {
  triggerTheme: NovenaTheme;
}

export default function SaintOfTheDay({ triggerTheme }: SaintOfTheDayProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  
  useEffect(() => {
    setHydrated(true);
  }, []);

  const currentDate = useMemo(() => {
    if (!hydrated) return null;
    return new Date();
  }, [hydrated]);

  const currentMonthName = useMemo(() => {
    if (!currentDate) return '';
    return months[currentDate.getMonth()];
  }, [currentDate]);
  
  const saintsForCurrentMonth = useMemo(() => {
    if (!currentMonthName) return [];
    return saintsOfTheDay.filter(day => day.month === currentMonthName);
  }, [currentMonthName]);
  
  const startIndex = useMemo(() => {
    if (!currentDate || saintsForCurrentMonth.length === 0) return 0;
    const dayOfMonth = currentDate.getDate();
    const index = saintsForCurrentMonth.findIndex(day => day.day >= dayOfMonth);
    return index !== -1 ? index : 0;
  }, [currentDate, saintsForCurrentMonth]);

  useEffect(() => {
    if (api && hydrated && api.selectedScrollSnap() !== startIndex) {
        api.scrollTo(startIndex, true);
        setCurrentSlide(startIndex);
    }
  }, [api, hydrated, startIndex]);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = (emblaApi: CarouselApi) => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
      setOpenAccordion(undefined); // Recolhe o accordion ao navegar
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(openAccordion === value ? undefined : value);
  };
  
  const handleSaintNavigation = (e: React.MouseEvent, direction: 'prev' | 'next') => {
    e.stopPropagation();
    if (direction === 'prev') {
      api?.scrollPrev();
    } else {
      api?.scrollNext();
    }
  }

  if (!hydrated || saintsForCurrentMonth.length === 0) {
    return <div className="p-4 text-center text-gray-500">A carregar santos...</div>;
  }

  return (
    <div className="p-4 md:p-6 bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg mt-8">
      <Carousel setApi={setApi} opts={{ startIndex, loop: true }} className="w-full saint-day-carousel">
        <Accordion 
          type="single" 
          collapsible 
          className="w-full"
          value={openAccordion}
          onValueChange={handleAccordionChange}
        >
          <CarouselContent>
            {saintsForCurrentMonth.map((dayData, index) => {
              const currentSaintIndex = 0; // Para simplificar, sempre o primeiro santo
              const currentSaint = dayData.saints[currentSaintIndex];

              return (
                <CarouselItem key={index}>
                  <AccordionItem value={`item-${index}`} className="border-none group">
                    <div className="relative">
                      <AccordionTrigger className={cn(
                          "flex-1 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow data-[state=open]:rounded-b-none saint-day-trigger data-[state=open]:pb-12", // Increased padding-bottom
                          "[&[data-state=open]>svg]:text-primary-foreground",
                          triggerTheme
                      )}>
                        <div className="flex items-center gap-4 text-left w-full">
                          <SaintImages saints={dayData.saints} />
                          <div className="flex flex-1 flex-col saint-name-container items-start">
                            <div className="date-capsule">
                              {dayData.day} de {dayData.month}
                            </div>
                            <p className="font-brand font-semibold mt-2 text-lg">
                              {dayData.saints.map(s => s.name).join(' & ')}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-4 z-20">
                          <CarouselPrevious 
                            onClick={(e) => handleSaintNavigation(e, 'prev')}
                            className="static translate-y-0 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                          />
                          <CarouselNext 
                            onClick={(e) => handleSaintNavigation(e, 'next')}
                            className="static translate-y-0 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                          />
                      </div>
                    </div>
                    
                    <AccordionContent className={cn("relative p-6 pt-12 rounded-b-lg shadow-inner-top saint-day-content", `theme-${theme}`)}>
                      <ThemeSelector theme={theme} setTheme={setTheme} />
                      
                      <div className="p-1">
                        {currentSaint ? (
                          <div className="prose prose-sm max-w-none pt-4" dangerouslySetInnerHTML={{ __html: currentSaint.story }} />
                        ) : null}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Accordion>
      </Carousel>
    </div>
  );
}

    