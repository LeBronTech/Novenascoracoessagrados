
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="absolute top-2 right-3 flex gap-2 bg-transparent px-2 py-1 rounded-full z-10">
            {(['light', 'dark'] as Theme[]).map((t) => (
                <button
                    key={t}
                    onClick={() => setTheme(t)}
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

export default function SaintOfTheDay() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedSaintIndices, setSelectedSaintIndices] = useState<Record<number, number>>({});
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setHydrated(true);
    setCurrentDate(new Date());
  }, []);

  const handleValueChange = useCallback((value: string[]) => {
    if (value.length > openItems.length) {
      const allItemKeys = saintsForCurrentMonth.map((_, index) => `item-${index}`);
      setOpenItems(allItemKeys);
    } else {
      setOpenItems([]);
    }
  }, [openItems.length, saintsForCurrentMonth]);

  const handleSelectSaint = (e: React.MouseEvent, dayIndex: number, saintIndex: number) => {
    e.stopPropagation();
    setSelectedSaintIndices(prev => ({ ...prev, [dayIndex]: saintIndex }));
  };

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

  if (!hydrated || saintsForCurrentMonth.length === 0) {
    return <div className="p-4 text-center text-gray-500">A carregar santos...</div>;
  }

  const arrowClasses = 'text-primary bg-transparent hover:bg-primary hover:text-primary-foreground';

  return (
    <div className="p-4 md:p-6">
      <Carousel setApi={setApi} opts={{ startIndex, loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {saintsForCurrentMonth.map((dayData, index) => {
            const selectedSaintIndex = selectedSaintIndices[index] ?? 0;
            const currentSaint = dayData.saints[selectedSaintIndex];
            const hasMultipleSaints = dayData.saints.length > 1;

            return (
              <CarouselItem key={index} className="pl-4">
                <div className="p-1">
                  <Accordion type="multiple" value={openItems} onValueChange={handleValueChange} className="w-full">
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow data-[state=open]:rounded-b-none group saint-day-trigger">
                        <div className="flex items-center gap-4 text-left w-full">
                           <SaintImages saints={dayData.saints} />
                           <div className="flex flex-col items-start">
                             <div className="date-capsule">
                               {dayData.day} de {dayData.month}
                             </div>
                             <p className="font-brand text-lg font-semibold mt-2">
                               {dayData.saints.map(s => s.name).join(' e ')}
                             </p>
                           </div>
                         </div>
                      </AccordionTrigger>
                      <AccordionContent className={cn("relative p-6 rounded-b-lg shadow-inner-top saint-day-content", `theme-${theme}`)}>
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
                        <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: currentSaint.story }} />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex justify-center items-center mt-4 gap-4">
          <Button variant="ghost" className={cn(arrowClasses)} onClick={() => api?.scrollPrev()}>
            <ArrowLeft />
            <span className="ml-2">Dia anterior</span>
          </Button>
          <Button variant="ghost" className={cn(arrowClasses)} onClick={() => api?.scrollNext()}>
            <span className="mr-2">Próximo dia</span>
            <ArrowRight />
          </Button>
        </div>
      </Carousel>
    </div>
  );
}
