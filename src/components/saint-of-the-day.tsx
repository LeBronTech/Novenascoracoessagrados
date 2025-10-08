
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { Theme as NovenaTheme } from '@/app/page';
import { Button } from '@/components/ui/button';
import useEmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel-react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';


type Theme = 'light' | 'dark';

const themeDotClasses: Record<Theme, string> = {
  'light': 'bg-gray-100',
  'dark': 'bg-gray-700',
};

function SaintImages({ saints, isOpen }: { saints: SaintStory[]; isOpen: boolean }) {
    if (saints.length === 1) {
        return (
            <div className={cn("saint-image-wrapper single", isOpen && "open")}>
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
            <div className={cn("saint-image-wrapper multiple", isOpen && "open")}>
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

const OPTIONS: EmblaOptionsType = { loop: true };

export default function SaintOfTheDay({ triggerTheme }: SaintOfTheDayProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSaintInDayIndex, setSelectedSaintInDayIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  
  const currentMonthName = useMemo(() => {
    if (!hydrated) return months[new Date().getMonth()];
    return months[new Date().getMonth()];
  }, [hydrated]);
  
  const saintsForCurrentMonth = useMemo(() => {
    return saintsOfTheDay.filter(day => day.month === currentMonthName);
  }, [currentMonthName]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCurrentSlide(api.selectedScrollSnap());
    setSelectedSaintInDayIndex(0); // Reset when changing day
    setIsOpen(false); // Close accordion when changing day
  }, []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!emblaApi || !hydrated || saintsForCurrentMonth.length === 0) return;

    const dayOfMonth = new Date().getDate();
    const initialIndex = saintsForCurrentMonth.findIndex(day => day.day >= dayOfMonth);
    const startIndex = initialIndex !== -1 ? initialIndex : 0;
    
    if (emblaApi.selectedScrollSnap() !== startIndex) {
        emblaApi.scrollTo(startIndex, true); // Instant scroll
    }
    setCurrentSlide(startIndex); // Set initial slide state

    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect, hydrated, saintsForCurrentMonth]);

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    if (!emblaApi) return;
    if (direction === 'prev') {
      emblaApi.scrollPrev();
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  }

  const currentDayData = saintsForCurrentMonth[currentSlide];
  if (!hydrated || !currentDayData) {
    return <div className="p-4 text-center text-gray-500">A carregar santos...</div>;
  }
  const currentSaintData = currentDayData.saints[selectedSaintInDayIndex];

  return (
    <div className="p-4 md:p-6 bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg mt-8 saint-day-carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {saintsForCurrentMonth.map((dayData, index) => (
            <div className="embla__slide px-2" key={index}>
              <div className={cn("relative group", isOpen && "is-open")}>
                <button
                  onClick={toggleOpen}
                  className={cn(
                      "flex-1 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full saint-day-trigger",
                      isOpen ? "rounded-b-none pb-12" : "",
                      triggerTheme
                  )}
                >
                  <div className="flex items-center gap-4 text-left w-full">
                    <SaintImages saints={dayData.saints} isOpen={isOpen} />
                    <div className="flex flex-1 flex-col saint-name-container items-start">
                      <div className="date-capsule">
                        {dayData.day} de {dayData.month}
                      </div>
                      <p className={cn("font-brand font-semibold mt-2", dayData.saints.length > 1 ? "text-base" : "text-lg")}>
                        {dayData.saints.map(s => s.name).join(' & ')}
                      </p>
                    </div>
                    <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
                  </div>
                </button>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-2 z-20">
                    <Button
                      variant="outline"
                      className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                      onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleNavigation('prev'); }}
                    >
                      Dia anterior
                    </Button>
                    <Button 
                      variant="outline"
                      className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                      onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleNavigation('next'); }}
                    >
                      Próximo dia
                    </Button>
                </div>
                
                {isOpen && (
                  <div className={cn("relative p-6 pt-12 rounded-b-lg shadow-inner-top saint-day-content", `theme-${theme}`)}>
                    <ThemeSelector theme={theme} setTheme={setTheme} />
                    
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Button
                          variant="outline"
                          className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                          onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleNavigation('prev'); }}
                        >
                          Dia anterior
                        </Button>
                        <Button 
                          variant="outline"
                          className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                          onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleNavigation('next'); }}
                        >
                          Próximo dia
                        </Button>
                    </div>


                    {currentDayData.saints.length > 1 && (
                      <div className="mb-4 flex justify-center gap-2">
                        {currentDayData.saints.map((saint, saintIndex) => (
                          <Button
                            key={saint.name}
                            variant={selectedSaintInDayIndex === saintIndex ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedSaintInDayIndex(saintIndex)}
                            className={cn(
                              'transition-all duration-200',
                              theme === 'light' 
                                  ? selectedSaintInDayIndex === saintIndex 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'bg-black/5 hover:bg-black/10 text-primary'
                                  : selectedSaintInDayIndex === saintIndex 
                                    ? 'bg-accent text-accent-foreground' 
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            )}
                          >
                            {saint.name}
                          </Button>
                        ))}
                      </div>
                    )}
                    
                    <div className="p-1">
                      {currentSaintData && <div className="prose prose-sm max-w-none pt-4 animate-fade-in" dangerouslySetInnerHTML={{ __html: currentSaintData.story }} />}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


