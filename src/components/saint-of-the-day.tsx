
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintOfTheDayData, SaintStory } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function SaintImages({ saints }: { saints: SaintStory[] }) {
  if (saints.length === 1) {
    return (
      <Image
        src={saints[0].imageUrl}
        alt={saints[0].name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm saint-image"
      />
    );
  }

  if (saints.length > 1) {
    return (
      <div className="relative w-24 h-16 flex items-center justify-center">
        <Image
          src={saints[0].imageUrl}
          alt={saints[0].name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm absolute left-0 z-0 saint-image"
        />
        <Image
          src={saints[1].imageUrl}
          alt={saints[1].name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm absolute right-0 z-10 saint-image"
        />
      </div>
    );
  }

  return null;
}


export default function SaintOfTheDay() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedSaintIndices, setSelectedSaintIndices] = useState<Record<number, number>>({});

  useEffect(() => {
    setHydrated(true);
    setCurrentDate(new Date());
  }, []);

  const handleValueChange = (value: string[]) => {
    if (value.length > openItems.length) {
      const allItemKeys = saintsForCurrentMonth.map((_, index) => `item-${index}`);
      setOpenItems(allItemKeys);
    } else {
      setOpenItems([]);
    }
  };

  const handleSelectSaint = (dayIndex: number, saintIndex: number) => {
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
                      <AccordionTrigger className="p-4 bg-white/60 rounded-lg shadow-md hover:shadow-lg transition-shadow data-[state=open]:rounded-b-none">
                        <div className="flex items-center gap-4 text-left w-full">
                          <SaintImages saints={dayData.saints} />
                          <div>
                            <p className="text-sm font-bold text-primary">{dayData.day} de {dayData.month}</p>
                            <p className="font-brand text-base font-semibold text-gray-800">
                              {dayData.saints.map(s => s.name).join(' e ')}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 bg-white rounded-b-lg shadow-inner-top">
                        {hasMultipleSaints && (
                          <div className="flex justify-center gap-2 mb-4">
                            {dayData.saints.map((saint, saintIdx) => (
                              <Button
                                key={saintIdx}
                                onClick={() => handleSelectSaint(index, saintIdx)}
                                variant={selectedSaintIndex === saintIdx ? 'default' : 'outline'}
                                className={cn(
                                  "rounded-full h-8 px-4 text-sm",
                                  selectedSaintIndex === saintIdx
                                    ? "bg-primary text-primary-foreground"
                                    : "border-primary text-primary bg-transparent hover:bg-primary/10"
                                )}
                              >
                                {saint.name}
                              </Button>
                            ))}
                          </div>
                        )}
                        <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: currentSaint.story }} />
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
