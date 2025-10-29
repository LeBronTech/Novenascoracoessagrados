
'use client';

import { useState, useEffect } from 'react';
import { weeklyDevotions, monthlyDevotions, getLiturgicalInfo } from '@/lib/devotions';
import type { Devotion, MonthlyDevotion, LiturgicalInfo } from '@/lib/devotions';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import { Skeleton } from './ui/skeleton';
import { BookOpen, Calendar } from 'lucide-react';
import Image from 'next/image';


function DevotionSkeleton() {
    return (
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 my-6">
            <Skeleton className="h-16 w-48 rounded-full" />
            <Skeleton className="h-16 w-48 rounded-full" />
            <Skeleton className="h-16 w-48 rounded-full" />
        </div>
    )
}

const Icon = ({ name, className }: { name: string, className?: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    'sunday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    'monday': (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M12 5v14"/>
        <path d="M5 12h14"/>
      </svg>
    ),
    'tuesday': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
            <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M12 10a14.5 14.5 0 0 1-5.5-1 14.5 14.5 0 0 1-5.5 1" />
            <path d="M12 10a14.5 14.5 0 0 0 5.5-1 14.5 14.5 0 0 0 5.5 1" />
        </svg>
    ),
    'wednesday': (
      <Image src="https://i.postimg.cc/wT3GrX7F/Brown-Aesthetic-Social-Media-Strategy-Carousel-Instagram-Post-20251029-110406-0000.png" alt="Ícone de São José" width={28} height={28} className={cn("h-7 w-7 object-contain", className)} />
    ),
    'thursday': (
        <Image src="https://i.postimg.cc/7YdX5jmY/photo-2025-10-29-11-23-53.jpg" alt="Ícone do Santíssimo Sacramento" width={28} height={28} className={cn("h-7 w-7 object-contain", className)} />
    ),
    'friday': (
      <Image src="https://i.postimg.cc/rw5GKsDb/photo-2025-10-29-11-23-59.jpg" alt="Ícone da Paixão de Cristo" width={28} height={28} className={cn("h-7 w-7 object-contain", className)} />
    ),
    'saturday': (
      <Image src="https://i.postimg.cc/B6n2YCmZ/photo-2025-10-29-11-23-57.jpg" alt="Ícone de Nossa Senhora" width={28} height={28} className={cn("h-7 w-7 object-contain", className)} />
    ),
  };
  return icons[name] || null;
};


export default function WeeklyDevotions() {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  if (!today) {
    return <DevotionSkeleton />;
  }
  
  const dayOfWeek = today.getDay();
  const month = today.getMonth();

  const weeklyDevotion = weeklyDevotions.find(d => d.dayOfWeek === dayOfWeek);
  const monthlyDevotion = monthlyDevotions.find(d => d.month === month);
  const liturgicalInfo = getLiturgicalInfo(today);

  if (!weeklyDevotion || !monthlyDevotion || !liturgicalInfo) return <DevotionSkeleton />;

  const liturgicalColorClasses: Record<LiturgicalInfo['color'], string> = {
    'green': 'devotion-item--green',
    'purple': 'devotion-item--purple',
    'red': 'devotion-item--red',
    'white': 'devotion-item--white',
    'rose': 'devotion-item--rose',
  };

  return (
    <div className="flex justify-center items-start flex-wrap gap-2 md:gap-4 my-6">
      <TooltipProvider>
        {/* Liturgical Info */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={cn('devotion-item group', liturgicalColorClasses[liturgicalInfo.color])}>
              <div className="relative">
                <BookOpen className="devotion-icon" />
              </div>
              <div className="text-left">
                  <span className="text-sm font-bold">{liturgicalInfo.season}</span>
                  <p className="text-xs italic">{liturgicalInfo.verse}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className={cn('text-primary-foreground border-primary-foreground/20', liturgicalColorClasses[liturgicalInfo.color])}>
            <p className="font-bold text-center">Cor Litúrgica: {liturgicalInfo.color.charAt(0).toUpperCase() + liturgicalInfo.color.slice(1)}</p>
          </TooltipContent>
        </Tooltip>

        {/* Weekly Devotion */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='devotion-item group'>
              <div className="relative">
                <Icon name={weeklyDevotion.icon} className="devotion-icon" />
                {weeklyDevotion.alert && (
                    <div className="absolute -top-1 -right-1">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                    </div>
                )}
              </div>
              <div className="text-left">
                  <span className="text-sm font-bold text-gray-700">{weeklyDevotion.day}</span>
                  <p className="text-xs text-gray-600">{weeklyDevotion.devotion}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-primary-foreground border-primary-foreground/20">
            <p className="font-bold">{weeklyDevotion.title}</p>
            {weeklyDevotion.alert && <p className="mt-1 text-red-300 font-semibold">{weeklyDevotion.alert}</p>}
          </TooltipContent>
        </Tooltip>

        {/* Monthly Devotion */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='devotion-item group'>
              <Calendar className="devotion-icon" />
              <div className="text-left">
                  <span className="text-sm font-bold text-gray-700">{monthlyDevotion.name}</span>
                  <p className="text-xs text-gray-600">{monthlyDevotion.devotion}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-primary-foreground border-primary-foreground/20">
            <p className="font-bold">Devoção do Mês: {monthlyDevotion.name}</p>
            <p>{monthlyDevotion.devotion}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
