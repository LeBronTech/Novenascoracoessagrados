
'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SaintSelector from '@/components/saint-selector';
import NovenaDisplay from '@/components/novena-display';
import SaintOfTheDay, { type SaintOfTheDayRef, SaintOfTheDaySkeleton } from '@/components/saint-of-the-day';
import WeeklyDevotions from '@/components/weekly-devotions';
import { saints, months, novenaData } from '@/lib/data';
import type { Saint } from '@/lib/data';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { parse, differenceInDays, getYear } from 'date-fns';
import Image from 'next/image';

export type Theme = 'theme-default' | 'theme-dark-gray' | 'theme-light-gray' | 'theme-red';

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => (
    <div
        className={cn(
            'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500',
            isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        style={{ backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 25%, #c3c3c3 50%, #949da4 100%)' }}
    >
        <div className={cn('transform transition-all duration-700 ease-in-out', isLoading ? 'scale-100 animate-pulse-and-shrink' : 'scale-0')}>
            <Image 
                src="https://i.postimg.cc/ZRrzGs1g/Capa-para-facebook-arquitetura-moderno-vermelho-1.png" 
                alt="Logo Corações Sagrados" 
                width={448} 
                height={166}
                className="w-full max-w-md rounded-md"
                priority
            />
        </div>
    </div>
);


export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<string>(months[new Date().getMonth()]);
  const [selectedSaintId, setSelectedSaintId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('theme-dark-gray');
  const saintOfTheDayRef = useRef<SaintOfTheDayRef>(null);
  const saintOfTheDaySectionRef = useRef<HTMLDivElement>(null);
  const [isSaintOfTheDayOpen, setIsSaintOfTheDayOpen] = useState(false);
  
  useEffect(() => {
    let initialMonth: string | null = null;
    let initialNovenaId: string | null = null;

    const hash = window.location.hash.substring(1);
    const saintFromHash = saints.find(s => s.id === hash);

    if (saintFromHash) {
      initialMonth = saintFromHash.month;
      initialNovenaId = saintFromHash.id;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const currentYear = getYear(today);

      const closestSaint: Saint | null = saints.reduce((closest, saint) => {
        try {
          const startDateString = `${saint.startDate}/${currentYear}`;
          const startDate = parse(startDateString, 'dd/MM/yyyy', new Date());
          if (isNaN(startDate.getTime())) return closest;

          const diff = Math.abs(differenceInDays(startDate, today));

          if (diff < (closest ? Math.abs(differenceInDays(parse(`${closest.startDate}/${currentYear}`, 'dd/MM/yyyy', new Date()), today)) : Infinity)) {
            return saint;
          }
        } catch (e) {
          // Ignore invalid date formats
        }
        return closest;
      }, null as Saint | null);

      if (closestSaint) {
        initialNovenaId = closestSaint.id;
        initialMonth = closestSaint.month;
      } else {
        // Fallback if no closest saint is found
        const firstSaint = saints[0];
        if (firstSaint) {
          initialNovenaId = firstSaint.id;
          initialMonth = firstSaint.month;
        }
      }
    }

    if (initialMonth && initialNovenaId) {
      setSelectedMonth(initialMonth);
      setSelectedSaintId(initialNovenaId);
    }
    
    // Delay hydration to allow loading animation to play
    setTimeout(() => setHydrated(true), 1500);
  }, []);

  useEffect(() => {
    if (selectedSaintId && hydrated) {
      history.pushState({ novenaId: selectedSaintId }, '', '#' + selectedSaintId);
    }
  }, [selectedSaintId, hydrated]);

  const selectedNovena = useMemo(
    () => (selectedSaintId ? novenaData[selectedSaintId] : null),
    [selectedSaintId]
  );

  const selectedSaint = useMemo(
    () => saints.find(saint => saint.id === selectedSaintId) || null,
    [selectedSaintId]
  );

  const handleSelectSaint = (id: string) => {
    setSelectedSaintId(id);
    const saint = saints.find(s => s.id === id);
    if(saint) setSelectedMonth(saint.month);
  };
  
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const saintsInNewMonth = saints.filter(s => s.month === month);
    if (selectedSaintId && !saintsInNewMonth.some(s => s.id === selectedSaintId)) {
        setSelectedSaintId(null);
    }
  }

  const handleSaintOfTheDayNavigation = (direction: 'prev' | 'next') => {
    setIsSaintOfTheDayOpen(false); // Close accordion before navigating
    // Add a small delay to allow the accordion to close before changing the slide
    setTimeout(() => {
        saintOfTheDayRef.current?.navigate(direction);
        saintOfTheDaySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
}

  return (
    <>
      <LoadingScreen isLoading={!hydrated} />
      <div className={cn("transition-opacity duration-1000", hydrated ? "opacity-100" : "opacity-0")}>
        <div className="container mx-auto p-4 md:p-8 max-w-5xl text-stone-900">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="fixed top-4 left-4 z-20 bg-white/70 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[380px] sm:w-[540px] bg-gray-100 p-0">
              <SheetHeader className="p-6 bg-white shadow-sm">
                <SheetTitle className="text-xl font-brand text-gray-800">Santo do Dia</SheetTitle>
                <SheetDescription className="sr-only">Navegue para ver o santo de cada dia do mês.</SheetDescription>
              </SheetHeader>
              <div className="h-[calc(100vh-80px)] overflow-y-auto">
                <SaintOfTheDay triggerTheme={theme} isOpenInitially={isSaintOfTheDayOpen} onToggle={setIsSaintOfTheDayOpen} />
              </div>
            </SheetContent>
          </Sheet>

          <Header />
          <WeeklyDevotions />
          
          <div className="relative" ref={saintOfTheDaySectionRef}>
            <h2 className="text-xl font-brand text-center text-gray-700 mt-8">
              Santo do Dia
            </h2>
            <SaintOfTheDay 
              ref={saintOfTheDayRef} 
              triggerTheme={theme}
              isOpenInitially={isSaintOfTheDayOpen}
              onToggle={setIsSaintOfTheDayOpen}
            />
            <div 
              className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-2 z-20"
              )}
            >
                <Button
                  variant="outline"
                  className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                  onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleSaintOfTheDayNavigation('prev'); }}
                >
                  Dia anterior
                </Button>
                <Button 
                  variant="outline"
                  className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                  onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleSaintOfTheDayNavigation('next'); }}
                >
                  Próximo dia
                </Button>
            </div>
          </div>


          <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg p-4 mt-12">
            <h2 id="saints-nav-title" className="text-xl font-brand text-center text-gray-700 mb-4">
              Novenas de {selectedMonth}
            </h2>
            <SaintSelector
              saints={saints}
              months={months}
              selectedMonth={selectedMonth}
              onMonthChange={handleMonthChange}
              selectedSaintId={selectedSaintId}
              onSaintSelect={handleSelectSaint}
            />
          </div>

          <div className="mt-8">
            <NovenaDisplay
              key={selectedSaintId}
              novena={selectedNovena}
              saint={selectedSaint}
              theme={theme}
              setTheme={setTheme}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
