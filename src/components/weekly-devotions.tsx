
'use client';

import { useState, useEffect } from 'react';
import { weeklyDevotions, monthlyDevotions, getLiturgicalInfo } from '@/lib/devotions';
import type { Devotion, MonthlyDevotion, LiturgicalInfo } from '@/lib/devotions';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import { Skeleton } from './ui/skeleton';
import { BookOpen, Calendar } from 'lucide-react';


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
          <path d="M17.5 12.5c2-1 2.5-2.5 1-4s-3 0-4 1"/>
          <path d="M6.5 12.5c-2-1-2.5-2.5-1-4s3 0 4 1"/>
          <path d="M12 14c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5Z"/>
          <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
          <path d="M16 3.13a8.9 8.9 0 0 1 0 5.74"/>
      </svg>
    ),
    'wednesday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="m14 12-4 4"/>
        <path d="M16 8 8 16"/>
        <path d="M12 22v-4"/>
        <path d="M12 8V2"/>
        <path d="m17.6 15.6 3.4-1.9a1 1 0 0 0 0-1.8l-3.4-1.9"/>
        <path d="m6.4 15.6-3.4-1.9a1 1 0 0 1 0-1.8l3.4-1.9"/>
        <path d="M12 10a2 2 0 1 0-4 0"/>
        <path d="M14 16.5h.01"/>
        <path d="M18 13h.01"/>
      </svg>
    ),
    'thursday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M12 21.5V17"/>
        <path d="M9 17h6"/>
        <path d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
        <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
      </svg>
    ),
    'friday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M15.48 4.49a2.5 2.5 0 0 0-3.53 0L3.49 12.94a2.5 2.5 0 0 0 0 3.53l.01.01a2.5 2.5 0 0 0 3.53 0L15.48 7.99a2.5 2.5 0 0 1 3.53 0l.01.01a2.5 2.5 0 0 1 0 3.53L10.56 20.01a2.5 2.5 0 0 1-3.53 0l-.01-.01a2.5 2.5 0 0 1 0-3.53L12 11.51"/>
        <path d="m15.5 8-1-1"/>
        <path d="m12.5 11-1-1"/>
        <path d="m11 10 1 1"/>
        <path d="m8 13 1 1"/>
        <path d="m5.5 15.5 1 1"/>
        <path d="M22 17v-1.5a1.5 1.5 0 0 0-1.5-1.5v0a1.5 1.5 0 0 0-1.5 1.5V17"/>
        <path d="M19 14v-1a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v1"/>
        <path d="M2 17v-1.5a1.5 1.5 0 0 1 1.5-1.5v0A1.5 1.5 0 0 1 5 15.5V17"/>
        <path d="M5 14v-1a1 1 0 0 1 1-1v0a1 1 0 0 1 1 1v1"/>
        <path d="M12.5 2.5 11 4"/>
      </svg>
    ),
    'saturday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-8 w-8", className)}>
        <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 1.99 1.45 3.61 3.5 4.23"/>
        <path d="M12 2a4.5 4.5 0 0 1 4.5 4.5c0 1.99-1.45 3.61-3.5 4.23"/>
        <path d="M11 10.75c-3.5 1-6 4-6 7.75V22h14v-3.5c0-3.75-2.5-6.75-6-7.75"/>
        <path d="M12 14v1"/>
        <path d="M10.5 16.5L12 18l1.5-1.5"/>
      </svg>
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
                  <span className="text-sm font-bold">{liturgicalInfo.week}ª Semana do {liturgicalInfo.season}</span>
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
