
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import type { Theme as NovenaTheme } from '@/app/page';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  
  const currentDate = useMemo(() => new Date(), []);
  
  const currentMonthName = useMemo(() => {
    return months[currentDate.getMonth()];
  }, [currentDate]);
  
  const saintsForCurrentMonth = useMemo(() => {
    return saintsOfTheDay.filter(day => day.month === currentMonthName);
  }, [currentMonthName]);

  useEffect(() => {
    const dayOfMonth = currentDate.getDate();
    const index = saintsForCurrentMonth.findIndex(day => day.day >= dayOfMonth);
    setCurrentDayIndex(index !== -1 ? index : 0);
    setHydrated(true);
  }, [currentDate, saintsForCurrentMonth]);

  const handlePrevDay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentDayIndex((prev) => (prev > 0 ? prev - 1 : saintsForCurrentMonth.length - 1));
  };

  const handleNextDay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentDayIndex((prev) => (prev < saintsForCurrentMonth.length - 1 ? prev + 1 : 0));
  };
  
  const currentDayData = saintsForCurrentMonth[currentDayIndex];

  if (!hydrated || !currentDayData) {
    return <div className="p-4 text-center text-gray-500">A carregar santos...</div>;
  }
  
  return (
    <div className="p-4 md:p-6 bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg mt-8">
      <Accordion 
        type="single" 
        collapsible 
        className="w-full"
        value={openAccordion}
        onValueChange={setOpenAccordion}
      >
        <AccordionItem value="saint-of-the-day" className="border-none">
          <div className="relative group">
            <AccordionTrigger className={cn(
                "flex-1 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow data-[state=open]:rounded-b-none saint-day-trigger data-[state=open]:pb-12",
                "[&[data-state=open]>svg]:text-primary-foreground",
                triggerTheme
            )}>
              {currentDayData && (
                <div className="flex items-center gap-4 text-left w-full">
                  <SaintImages saints={currentDayData.saints} />
                  <div className="flex flex-1 flex-col saint-name-container items-start">
                    <div className="date-capsule">
                      {currentDayData.day} de {currentDayData.month}
                    </div>
                    <p className="font-brand font-semibold mt-2 text-lg">
                      {currentDayData.saints.map(s => s.name).join(' & ')}
                    </p>
                  </div>
                </div>
              )}
            </AccordionTrigger>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-2 z-20">
                <Button
                  variant="outline"
                  className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                  onClick={handlePrevDay}
                >
                  Dia anterior
                </Button>
                <Button 
                  variant="outline"
                  className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                  onClick={handleNextDay}
                >
                  Próximo dia
                </Button>
            </div>
          </div>
          
          <AccordionContent className={cn("relative p-6 pt-12 rounded-b-lg shadow-inner-top saint-day-content", `theme-${theme}`)}>
            <ThemeSelector theme={theme} setTheme={setTheme} />
            <div className="p-1">
              {currentDayData.saints.length > 0 ? (
                <div className="prose prose-sm max-w-none pt-4" dangerouslySetInnerHTML={{ __html: currentDayData.saints.map(s => s.story).join('<hr class="my-4"/>') }} />
              ) : null}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
