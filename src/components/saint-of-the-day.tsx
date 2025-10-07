
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SaintOfTheDay() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    setHydrated(true);
    setCurrentDate(new Date());
  }, []);
  
  const handleValueChange = (value: string[]) => {
      // If we are opening a new one, we want all to be open
      if (value.length > openItems.length) {
        const allItemKeys = saintsForCurrentMonth.map((_, index) => `item-${index}`);
        setOpenItems(allItemKeys);
      } else { // if we are closing one, we close all
         setOpenItems([]);
      }
  };

  const currentMonthName = useMemo(() => {
    if (!currentDate) return '';
    return months[currentDate.getMonth()];
  }, [currentDate]);
  
  const saintsForCurrentMonth = useMemo(() => {
    if (!currentMonthName) return [];
    return saintsOfTheDay.filter(saint => saint.month === currentMonthName);
  }, [currentMonthName]);

  const startIndex = useMemo(() => {
    if (!currentDate || saintsForCurrentMonth.length === 0) return 0;
    const dayOfMonth = currentDate.getDate();
    const index = saintsForCurrentMonth.findIndex(saint => saint.day >= dayOfMonth);
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
          {saintsForCurrentMonth.map((saint, index) => (
            <CarouselItem key={index} className="pl-4">
              <div className="p-1">
                <Accordion type="multiple" value={openItems} onValueChange={handleValueChange} className="w-full">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="p-4 bg-white/60 rounded-lg shadow-md hover:shadow-lg transition-shadow data-[state=open]:rounded-b-none">
                      <div className="flex items-center gap-4 text-left">
                        <Image
                          src={saint.imageUrl}
                          alt={saint.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                          <p className="text-sm font-bold text-primary">{saint.day} de {saint.month}</p>
                          <p className="font-brand text-base font-semibold text-gray-800">{saint.name}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-white rounded-b-lg shadow-inner-top">
                      <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: saint.story }} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CarouselItem>
          ))}
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
