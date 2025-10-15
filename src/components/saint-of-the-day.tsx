
'use client';

import { useState, useEffect, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';
import { saintsOfTheDay, months } from '@/lib/data';
import type { SaintStory } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { Theme as NovenaTheme } from '@/app/page';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';


type Theme = 'light' | 'dark';

const themeDotClasses: Record<Theme, string> = {
  'light': 'bg-gray-100',
  'dark': 'bg-gray-700',
};

function SaintImages({ saints, isOpen, selectedIndex }: { saints: SaintStory[]; isOpen: boolean; selectedIndex: number; }) {
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
                {saints.map((saint, index) => (
                    <Image
                        key={saint.name}
                        src={saint.imageUrl}
                        alt={saint.name}
                        width={64}
                        height={64}
                        className={cn(
                            "saint-image",
                            isOpen && (index === selectedIndex ? 'saint-image--active' : 'saint-image--inactive')
                        )}
                    />
                ))}
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

export interface SaintOfTheDayRef {
  navigate: (direction: 'prev' | 'next') => void;
}

interface SaintOfTheDayProps {
  triggerTheme: NovenaTheme;
  onToggle?: (isOpen: boolean) => void;
}

const SaintOfTheDay = forwardRef<SaintOfTheDayRef, SaintOfTheDayProps>(({ triggerTheme, onToggle }, ref) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSaintInDayIndex, setSelectedSaintInDayIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const currentMonthName = useMemo(() => {
    if (!hydrated) return months[new Date().getMonth()];
    return months[new Date().getMonth()];
  }, [hydrated]);
  
  const saintsForCurrentMonth = useMemo(() => {
    return saintsOfTheDay.filter(day => day.month === currentMonthName);
  }, [currentMonthName]);

  useEffect(() => {
    setHydrated(true);
    const dayOfMonth = new Date().getDate();
    const initialIndex = saintsForCurrentMonth.findIndex(day => day.day >= dayOfMonth);
    const startIndex = initialIndex !== -1 ? initialIndex : 0;
    setCurrentSlide(startIndex);
  }, [saintsForCurrentMonth]);

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
        const totalSlides = saintsForCurrentMonth.length;
        if (totalSlides === 0) {
            setIsAnimating(false);
            return;
        };

        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        } else {
            newIndex = (currentSlide + 1) % totalSlides;
        }
        
        setCurrentSlide(newIndex);
        setSelectedSaintInDayIndex(0);
        setOpenAccordionIndex(null); 
        if(onToggle) onToggle(false);

        setTimeout(() => setIsAnimating(false), 150);
    }, 150);
  }, [currentSlide, saintsForCurrentMonth, isAnimating, onToggle]);

  useImperativeHandle(ref, () => ({
    navigate: handleNavigation
  }));


  const toggleAccordion = (index: number) => {
    const newOpenIndex = openAccordionIndex === index ? null : index;
    setOpenAccordionIndex(newOpenIndex);
    if(onToggle) {
      onToggle(newOpenIndex !== null);
    }
  }

  if (!hydrated || saintsForCurrentMonth.length === 0) {
    return <div className="p-4 text-center text-gray-500">A carregar santos...</div>;
  }

  const dayData = saintsForCurrentMonth[currentSlide];
  if (!dayData) {
    return <div className="p-4 text-center text-gray-500">Santo não encontrado.</div>;
  }
  
  const isOpen = openAccordionIndex === currentSlide;
  const currentSaintData = dayData.saints[isOpen ? selectedSaintInDayIndex : 0];
  
  const animationClass = isAnimating ? 'animate-fade-out' : 'animate-fade-in';

  return (
    <div className="p-4 md:p-6 bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg mt-2 relative">
      <div className={cn("px-2 transition-opacity duration-150", animationClass)}>
          <div className={cn("relative group", isOpen && "is-open")}>
          <button
              onClick={() => toggleAccordion(currentSlide)}
              className={cn(
                  "flex-1 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full saint-day-trigger",
                  isOpen ? "rounded-b-none pb-12" : "",
                  triggerTheme
              )}
          >
              <div className="flex items-center gap-4 text-left w-full">
              <SaintImages saints={dayData.saints} isOpen={isOpen} selectedIndex={selectedSaintInDayIndex} />
              <div className={cn(
                  "flex flex-1 flex-col items-start saint-name-container",
                  isOpen && dayData.saints.length > 1 && "md:items-end"
                  )}>
                  <div className={cn(
                  "date-capsule",
                      isOpen && "text-xs md:text-right"
                  )}>
                  {dayData.day} de {dayData.month}
                  </div>
                  <p className={cn(
                  "font-brand font-semibold mt-2 text-left", 
                  dayData.saints.length > 1 ? "text-base" : "text-lg",
                  isOpen && dayData.saints.length > 1 && "md:text-right"
                  )}>
                  {dayData.saints.map(s => s.name).join(' & ')}
                  </p>
              </div>
              <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180", "text-primary-foreground")} />
              </div>
          </button>
          
          {isOpen && (
              <div className={cn("relative p-6 pt-12 rounded-b-lg shadow-inner-top saint-day-content", `theme-${theme}`)}>
              <ThemeSelector theme={theme} setTheme={setTheme} />
              
              {dayData.saints.length > 1 && (
                  <div className="mb-4 flex justify-center gap-2">
                  {dayData.saints.map((saint, saintIndex) => (
                      <Button
                      key={saint.name}
                      variant={selectedSaintInDayIndex === saintIndex ? 'default' : 'outline'}
                      size="sm"
                      onClick={(e) => { e.stopPropagation(); setSelectedSaintInDayIndex(saintIndex); }}
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
                  {currentSaintData && <div className="prose prose-sm max-w-none pt-4" dangerouslySetInnerHTML={{ __html: currentSaintData.story }} />}
              </div>
              </div>
          )}
          </div>
      </div>
    </div>
  );
});

SaintOfTheDay.displayName = 'SaintOfTheDay';
export default SaintOfTheDay;
