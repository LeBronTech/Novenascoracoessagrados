
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

export default function SaintOfTheDay() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentDate] = useState(new Date());
  const [hydrated, setHydrated] = useState(false);

  const currentMonthName = useMemo(() => months.find((m, i) => i === currentDate.getMonth()), [currentDate]);
  
  const saintsForCurrentMonth = useMemo(() => 
    saintsOfTheDay.filter(saint => saint.month === currentMonthName)
  , [currentMonthName]);

  const startIndex = useMemo(() => {
    if (!hydrated) return 0;
    const dayOfMonth = currentDate.getDate();
    const index = saintsForCurrentMonth.findIndex(saint => saint.day >= dayOfMonth);
    return index !== -1 ? index : 0;
  }, [hydrated, currentDate, saintsForCurrentMonth]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (api && hydrated) {
      api.scrollTo(startIndex, true);
    }
  }, [api, hydrated, startIndex]);

  if (!saintsForCurrentMonth.length || !hydrated) {
    return null;
  }

  return (
    <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 my-8">
      <h2 className="text-xl font-brand text-center text-gray-700 mb-4 flex items-center justify-center gap-2">
        <CalendarIcon className="w-5 h-5" />
        Santo do Dia
      </h2>
      <Carousel setApi={setApi} opts={{ startIndex }}>
        <CarouselContent className="-ml-2">
          {saintsForCurrentMonth.map((saint, index) => (
            <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Accordion type="single" collapsible className="w-full">
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
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

    

    