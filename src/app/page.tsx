'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SaintSelector from '@/components/saint-selector';
import NovenaDisplay from '@/components/novena-display';
import { saints, months, novenaData } from '@/lib/data';
import type { Saint, Novena } from '@/lib/data';

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);
  const [selectedSaintId, setSelectedSaintId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // This effect runs once on the client after hydration.
    // It reads the initial state from the URL hash.
    const hash = window.location.hash.substring(1);
    let initialMonth = 'Outubro';
    let initialNovenaId: string | null = null;
    
    const firstSaintOfOctober = saints.find(s => s.month === 'Outubro');
    
    if (hash) {
      for (const month of months) {
        if (saints.some(saint => saint.id === hash && saint.month === month)) {
          initialMonth = month;
          initialNovenaId = hash;
          break;
        }
      }
    }
    
    if (!initialNovenaId && firstSaintOfOctober) {
        initialNovenaId = firstSaintOfOctober.id;
    }

    setSelectedMonth(initialMonth);
    setSelectedSaintId(initialNovenaId);
    setHydrated(true); // Mark as hydrated
  }, []);

  useEffect(() => {
    // This effect updates the URL hash when the selected saint changes.
    if (selectedSaintId && hydrated) {
      history.pushState({ novenaId: selectedSaintId }, '', '#' + selectedSaintId);
    }
  }, [selectedSaintId, hydrated]);

  const saintsForMonth = useMemo(
    () => saints.filter((saint) => saint.month === selectedMonth),
    [selectedMonth]
  );

  const selectedNovena = useMemo(
    () => (selectedSaintId ? novenaData[selectedSaintId] : null),
    [selectedSaintId]
  );

  const selectedSaint = useMemo(
    () => saints.find(saint => saint.id === selectedSaintId),
    [selectedSaintId]
  );

  const handleSelectSaint = (id: string) => {
    setSelectedSaintId(id);
    const saint = saints.find(s => s.id === id);
    if(saint) setSelectedMonth(saint.month);
  };
  
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    // Do not change saint when month changes, let user decide
  }

  // Prevent rendering until the client-side has determined the initial state from URL
  if (!hydrated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl text-stone-900">
      <Header />
      <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg p-4 my-8">
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

      <NovenaDisplay
        key={selectedSaintId}
        novena={selectedNovena}
        saint={selectedSaint}
      />
      <Footer />
    </div>
  );
}
