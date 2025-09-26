'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SaintSelector from '@/components/saint-selector';
import NovenaDisplay from '@/components/novena-display';
import { saints, months } from '@/lib/data';
import type { Saint } from '@/lib/data';

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);
  const [selectedSaintId, setSelectedSaintId] = useState<string | null>(saints.find(s => s.month === months[0])?.id || null);

  const saintsForMonth = useMemo(
    () => saints.filter((saint) => saint.month === selectedMonth),
    [selectedMonth]
  );

  const selectedSaint = useMemo(
    () => saints.find((saint) => saint.id === selectedSaintId) || null,
    [selectedSaintId]
  );
  
  const handleSelectSaint = (id: string) => {
    setSelectedSaintId(id);
  };
  
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const firstSaintOfMonth = saints.find(s => s.month === month);
    setSelectedSaintId(firstSaintOfMonth?.id || null);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50 dark:bg-zinc-900/50 text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 w-full">
        <SaintSelector
          saints={saintsForMonth}
          months={months}
          selectedMonth={selectedMonth}
          onMonthChange={handleMonthChange}
          selectedSaintId={selectedSaintId}
          onSaintSelect={handleSelectSaint}
        />
        <NovenaDisplay
          key={selectedSaintId}
          saint={selectedSaint}
        />
      </main>
      <Footer />
    </div>
  );
}
