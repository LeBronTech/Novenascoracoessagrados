'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
  return (
    <section className="w-full">
      <div className="flex justify-center gap-2 mb-6">
        {months.map((month) => (
          <Button
            key={month}
            variant={selectedMonth === month ? 'default' : 'outline'}
            onClick={() => onMonthChange(month)}
            className="font-headline tracking-wider"
          >
            {month}
          </Button>
        ))}
      </div>
      <Carousel
        opts={{
          align: 'start',
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {saints.map((saint) => (
            <CarouselItem key={saint.id} className="basis-1/4 md:basis-1/6 lg:basis-1/8 xl:basis-1/10 pl-2">
              <div
                className="flex flex-col items-center gap-2 cursor-pointer group"
                onClick={() => onSaintSelect(saint.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSaintSelect(saint.id)}
              >
                <div
                  className={cn(
                    'relative w-20 h-20 rounded-full overflow-hidden transition-all duration-300 ring-2 ring-offset-2 ring-offset-background',
                    selectedSaintId === saint.id
                      ? 'ring-primary scale-110'
                      : 'ring-transparent group-hover:ring-accent'
                  )}
                >
                  <Image
                    src={saint.imageUrl}
                    alt={`Imagem de ${saint.name}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <p
                  className={cn(
                    'text-xs text-center font-semibold font-body transition-colors',
                    selectedSaintId === saint.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                  )}
                >
                  {saint.name}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
