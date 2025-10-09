
'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SaintSelector from '@/components/saint-selector';
import NovenaDisplay from '@/components/novena-display';
import SaintOfTheDay, { type SaintOfTheDayRef } from '@/components/saint-of-the-day';
import { saints, months, novenaData } from '@/lib/data';
import type { Saint, Novena } from '@/lib/data';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Theme = 'theme-default' | 'theme-dark-gray' | 'theme-light-gray' | 'theme-red';

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<string>(months[9]); // Default to October
  const [selectedSaintId, setSelectedSaintId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('theme-dark-gray');
  const saintOfTheDayRef = useRef<SaintOfTheDayRef>(null);
  const [isSaintOfTheDayOpen, setIsSaintOfTheDayOpen] = useState(false);
  
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    let initialMonth = 'Outubro';
    let initialNovenaId: string | null = null;
    
    if (hash && saints.some(s => s.id === hash)) {
      const saint = saints.find(s => s.id === hash)!;
      initialMonth = saint.month;
      initialNovenaId = saint.id;
    } else {
      const firstSaint = saints.find(s => s.month === 'Outubro');
      if (firstSaint) {
        initialNovenaId = firstSaint.id;
      }
    }

    setSelectedMonth(initialMonth);
    setSelectedSaintId(initialNovenaId);
    setHydrated(true); 
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
    saintOfTheDayRef.current?.navigate(direction);
  }

  // Prevent rendering until the client-side has determined the initial state from URL
  if (!hydrated) {
    return null; // Or a loading spinner
  }

  return (
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
            <SaintOfTheDay triggerTheme={theme} />
          </div>
        </SheetContent>
      </Sheet>

      <Header />
      
      <div className="relative">
        <h2 className="text-xl font-brand text-center text-gray-700 mt-8">
          Santo do Dia
        </h2>
        <SaintOfTheDay 
          ref={saintOfTheDayRef} 
          triggerTheme={theme}
          onToggle={setIsSaintOfTheDayOpen}
        />
        <div 
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-2 z-20 transition-opacity",
              isSaintOfTheDayOpen ? "opacity-0 pointer-events-none" : "opacity-100"
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
  );
}
