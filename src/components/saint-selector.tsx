'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Saint } from '@/lib/data';

interface SaintSelectorProps {
  saints: Saint[];
  months: string[];
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  selectedSaintId: string | null;
  onSaintSelect: (id: string) => void;
}

export default function SaintSelector({
  saints,
  months,
  selectedMonth,
  onMonthChange,
  selectedSaintId,
  onSaintSelect,
}: SaintSelectorProps) {

  const saintsForMonth = saints.filter(s => s.month === selectedMonth);

  return (
    <section className="w-full">
      <nav id="month-nav" className="flex justify-center gap-6 mb-4 border-b border-gray-300 pb-3">
        {months.map((month) => (
          <button
            key={month}
            className={cn('month-nav-btn text-lg font-brand text-gray-600', selectedMonth === month && 'active')}
            onClick={() => onMonthChange(month)}
          >
            {month}
          </button>
        ))}
      </nav>
      <div className="saints-nav-container flex items-start gap-x-4 overflow-x-auto pb-2">
        {saintsForMonth.map((saint) => (
            <div
              key={saint.id}
              className={cn(
                'saint-nav-item flex flex-col items-center gap-1 text-center opacity-70 hover:opacity-100 hover:scale-105 transform-gpu transition-transform duration-200 w-[100px] shrink-0 cursor-pointer',
                selectedSaintId === saint.id && 'active opacity-100'
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
        ))}
      </div>
    </section>
  );
}
