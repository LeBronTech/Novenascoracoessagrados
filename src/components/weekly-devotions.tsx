
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
            <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M12 10a14.5 14.5 0 0 1-5.5-1 14.5 14.5 0 0 1-5.5 1" />
            <path d="M12 10a14.5 14.5 0 0 0 5.5-1 14.5 14.5 0 0 0 5.5 1" />
        </svg>
    ),
    'wednesday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M16 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0Z"/>
        <path d="m16 14.5-1-10.5" />
        <path d="M10 6.5 12 5l2 1.5"/>
        <path d="M12 5v6"/>
        <path d="M12 11c-4 0-6-2-6-6"/>
        <path d="M12 11c4 0 6-2 6-6"/>
      </svg>
    ),
    'thursday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M12 5.25a6.75 6.75 0 1 1-6.75 6.75A6.75 6.75 0 0 1 12 5.25z"/>
        <path d="M12 12a3 3 0 1 1-3 3 3 3 0 0 1 3-3z"/>
        <path d="M12 2v2M12 20v2M5 12H3M21 12h-2M17.65 6.35l-1.4-1.4M6.35 17.65l-1.4-1.4M17.65 17.65l-1.4 1.4M6.35 6.35l-1.4 1.4"/>
        <path d="M12 19a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"/>
      </svg>
    ),
    'friday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M7.38 20.25a2.5 2.5 0 1 0 3.24 0 2.5 2.5 0 1 0-3.24 0Z"/>
        <path d="M12 14.5a2.5 2.5 0 1 0 3.24 0 2.5 2.5 0 1 0-3.24 0Z"/>
        <path d="M16.62 20.25a2.5 2.5 0 1 0 3.24 0 2.5 2.5 0 1 0-3.24 0Z"/>
        <path d="M16.62 8.75a2.5 2.5 0 1 0 3.24 0 2.5 2.5 0 1 0-3.24 0Z"/>
        <path d="M7.38 8.75a2.5 2.5 0 1 0 3.24 0 2.5 2.5 0 1 0-3.24 0Z"/>
        <path d="M12 3.25a2.5 2.5 0 1 0 3.24 0 2.5 2.5 0 1 0-3.24 0Z"/>
        <path d="M9.4 20.25h5.2"/>
        <path d="M9.4 8.75h5.2"/>
        <path d="M12 14.5v-3.25"/>
        <path d="M14.07 8.75c.33-1.42.33-2.84 0-4.25"/>
        <path d="m15.65 15.6.9-3.85"/>
        <path d="m8.35 15.6-.9-3.85"/>
      </svg>
    ),
    'saturday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M10 20.562c.383-1.15.993-2.21 1.83-3.062 1.34-1.34 3.1-2.125 5.006-2.125h.328c.03.1.06.2.1.3s.07.2.1.3c.383 1.15.993 2.21 1.83 3.062"/>
        <path d="M12 11.875a5.56 5.56 0 0 1 5.5-5.562c.28 0 .5.224.5.5V8c0 .28-.22.5-.5.5s-.5-.224-.5-.5V7c-1.33 0-2.58.5-3.5 1.5s-1.5 2.17-1.5 3.5v.5c0 .28-.22.5-.5.5s-.5-.224-.5-.5v-.575Z"/>
        <path d="M12 3c-1.875 1.25-3.125 3.125-3.125 5.625v.375a.5.5 0 0 1-1 0V8.5c0-1.33.5-2.58 1.5-3.5S10.67 3.5 12 3.5"/>
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
