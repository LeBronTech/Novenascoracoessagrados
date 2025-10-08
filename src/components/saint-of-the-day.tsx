
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        <div className="absolute top-8 right-3 flex gap-2 bg-transparent px-2 py-1 rounded-full z-20">
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
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);
  const [selectedSaintIndices, setSelectedSaintIndices] = useState<Record<number, number>>({});
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setHydrated(true);
    setCurrentDate(new Date());
  }, []);

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
    if (api && hydrated && saintsForCurrentMonth.length > 0) {
      setTimeout(() => {
        api.scrollTo(startIndex, true);
      }, 100);
    }
  }, [api, hydrated, startIndex, saintsForCurrentMonth.length]);

  const handleSelectSaint = (e: React.MouseEvent, dayIndex: number, saintIndex: number) => {
    e.stopPropagation();
    setSelectedSaintIndices(prev => ({ ...prev, [dayIndex]: saintIndex }));
  };

  if (!hydrated || saintsForCurrentMonth.length === 0) {
    return <div className="p-4 text-center text-gray-500">A carregar santos...</div>;
  }

  const arrowClasses = 'text-primary bg-transparent hover:bg-primary hover:text-primary-foreground';

  return (
    <div className="p-4 md:p-6 bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg mt-8">
      <Carousel setApi={setApi} opts={{ startIndex, loop: true }} className="w-full saint-day-carousel">
        <CarouselContent className="-ml-4">
          {saintsForCurrentMonth.map((dayData, index) => {
            const selectedSaintIndex = selectedSaintIndices[index] ?? 0;
            const currentSaint = dayData.saints[selectedSaintIndex];
            const hasMultipleSaints = dayData.saints.length > 1;
            const saintNames = dayData.saints.map(s => s.name).join(' & ');
            
            return (
              <CarouselItem key={index} className="pl-4">
                <div className="p-1">
                  <Accordion type="single" collapsible value={openAccordion} onValueChange={setOpenAccordion}>
                    <AccordionItem value={`item-${index}`} className="border-none group">
                       <div className="relative">
                          <AccordionTrigger className={cn(
                            "p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow data-[state=open]:rounded-b-none saint-day-trigger data-[state=open]:pb-8",
                            "[&[data-state=open]>svg]:text-primary-foreground",
                            triggerTheme
                          )}>
                            <div className="flex items-center gap-4 text-left w-full">
                              <SaintImages saints={dayData.saints} />
                              <div className={cn("flex flex-1 flex-col saint-name-container", hasMultipleSaints ? "items-end text-right" : "items-start")}>
                                <div className="date-capsule">
                                  {dayData.day} de {dayData.month}
                                </div>
                                <p className={cn(
                                  "font-brand font-semibold mt-2",
                                  hasMultipleSaints ? "text-sm md:text-base" : "text-lg"
                                )}>
                                  {saintNames}
                                </p>
                              </div>
                            </div>
                          </AccordionTrigger>
                           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full z-20 flex gap-2">
                             <Button
                                size="sm"
                                className="bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border"
                                onClick={(e) => { e.stopPropagation(); api?.scrollPrev(); }}
                            >
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Dia anterior
                            </Button>
                            <Button
                                size="sm"
                                className="bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border"
                                onClick={(e) => { e.stopPropagation(); api?.scrollNext(); }}
                            >
                                Próximo dia
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                       </div>
                      <AccordionContent className={cn("relative p-6 pt-12 rounded-b-lg shadow-inner-top saint-day-content", `theme-${theme}`)}>
                        <ThemeSelector theme={theme} setTheme={setTheme} />
                                                
                        {hasMultipleSaints && (
                          <div className="flex justify-center gap-2 mb-4">
                            {dayData.saints.map((saint, saintIdx) => (
                              <Button
                                key={saintIdx}
                                onClick={(e) => handleSelectSaint(e, index, saintIdx)}
                                variant={selectedSaintIndex === saintIdx ? 'default' : 'outline'}
                                className={cn(
                                  "rounded-full h-8 px-4 text-sm",
                                  selectedSaintIndex === saintIdx
                                    ? "bg-primary text-primary-foreground"
                                    : (theme === 'light' ? "border-primary text-primary bg-transparent hover:bg-primary/10" : "border-white/50 text-white bg-transparent hover:bg-white/10")
                                )}
                              >
                                {saint.name}
                              </Button>
                            ))}
                          </div>
                        )}
                        <div className="prose prose-sm max-w-none pt-4" dangerouslySetInnerHTML={{ __html: currentSaint.story }} />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
