
'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import useEmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import type { Saint } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'center', containScroll: false };

interface SaintSelectorProps {
  saints: Saint[];
  months: string[];
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  selectedSaintId: string | null;
  onSaintSelect: (id: string) => void;
}

const MonthCarousel = memo(({ months, selectedMonth, onMonthChange }: Pick<SaintSelectorProps, 'months' | 'selectedMonth' | 'onMonthChange'>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [slideStates, setSlideStates] = useState<{ [key: number]: string }>({});

  const onSelect = useCallback((api: EmblaCarouselType) => {
    if (!api) return;
    
    const newSelectedIndex = api.selectedScrollSnap();
    onMonthChange(months[newSelectedIndex]);

    const newSlideStates: { [key: number]: string } = {};
    api.scrollSnapList().forEach((_, index) => {
      let state = '';
      if (index === newSelectedIndex) {
        state = 'active';
      } else {
        const totalSlides = api.scrollSnapList().length;
        const relativeIndex = (index - newSelectedIndex + totalSlides) % totalSlides;
        const dist = Math.min(relativeIndex, totalSlides - relativeIndex);

        if (dist === 1) state = relativeIndex < totalSlides / 2 ? 'next1' : 'prev1';
        else if (dist === 2) state = relativeIndex < totalSlides / 2 ? 'next2' : 'prev2';
      }
      newSlideStates[index] = state;
    });

    setSlideStates(newSlideStates);
  }, [onMonthChange, months]);

  useEffect(() => {
    if (!emblaApi) return;
    const initialIndex = months.indexOf(selectedMonth);
    if(initialIndex !== -1) {
      emblaApi.scrollTo(initialIndex, true);
    }
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, months, selectedMonth, onSelect]);
  
  const handleMonthClick = (index: number) => {
    if(emblaApi) emblaApi.scrollTo(index);
  }

  return (
    <div className="overflow-hidden month-carousel py-4" ref={emblaRef}>
      <div className="flex">
        {months.map((month, index) => (
          <div
            className={cn('flex-[0_0_10rem] min-w-0 pl-4 relative', `embla__slide--${slideStates[index]}`)}
            key={month}
          >
            <button
              onClick={() => handleMonthClick(index)}
              className={cn(
                'month-nav-btn text-lg font-brand text-gray-600 w-full',
                selectedMonth === month && 'active'
              )}
            >
              {month}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

MonthCarousel.displayName = 'MonthCarousel';


export default function SaintSelector({
  saints,
  months,
  selectedMonth,
  onMonthChange,
  selectedSaintId,
  onSaintSelect,
}: SaintSelectorProps) {

  const [animate, setAnimate] = useState(false);
  const saintsForMonth = saints.filter(s => s.month === selectedMonth);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [selectedMonth]);

  const getAnimationClass = (index: number) => {
    if (!animate) return 'opacity-0';
    const delays = ['animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-500', 'animation-delay-700'];
    const delayClass = delays[index] || delays[delays.length -1];
    return `animate-fade-in ${delayClass}`;
  };

  return (
    <section className="w-full">
      <MonthCarousel months={months} selectedMonth={selectedMonth} onMonthChange={onMonthChange} />
      
      <div className="saints-nav-container flex items-start gap-x-4 overflow-x-auto pb-2 mt-4 border-t border-gray-300 pt-4">
        {saintsForMonth.length > 0 ? (
          saintsForMonth.map((saint, index) => (
            <div
              key={saint.id}
              className={cn(
                'saint-nav-item flex flex-col items-center gap-1 text-center opacity-70 hover:opacity-100 hover:scale-105 transform-gpu transition-all duration-200 w-[100px] shrink-0 cursor-pointer',
                selectedSaintId === saint.id && 'opacity-100',
                getAnimationClass(index)
              )}
              onClick={() => onSaintSelect(saint.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSaintSelect(saint.id)}
            >
              <Image
                src={saint.imageUrl}
                alt={saint.name}
                width={80}
                height={80}
                className={cn(
                  'w-20 h-20 rounded-full object-cover shadow-md border-4 border-transparent transition-all duration-300',
                  selectedSaintId === saint.id && 'border-primary shadow-lg'
                )}
              />
              <p className="text-sm font-semibold text-gray-700 font-brand leading-tight mt-1">{saint.name}</p>
              <p className="text-xs text-gray-500">Início: {saint.startDate}</p>
              <div className="mt-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold leading-tight">
                Dia {saint.feastDay.split('/')[0]}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center">
            <Card className="w-full max-w-sm bg-gray-200/50 border-dashed">
                <CardContent className="p-6 text-center">
                    <Heart className="mx-auto h-12 w-12 text-primary/50 mb-4" strokeWidth={1} />
                    <p className="font-semibold text-gray-600">
                        Logo logo teremos novenas aqui. Salve Maria!
                    </p>
                </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
