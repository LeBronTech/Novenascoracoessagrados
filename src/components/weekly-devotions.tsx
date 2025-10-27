
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("h-7 w-7", className)}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.992 5.992 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeLinejoin="round"/>
        <path d="M10 2c-1.5 1.5-2 3.5-1 5s2.5 2.5 4 1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4c.5 1.5 1.5 2.5 2.5 2.5S17 6 17 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'monday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("h-7 w-7", className)}>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
    'tuesday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M17.5 20.5c-3-3-4.5-5.5-4.5-8.5s1.5-5.5 4.5-8.5" />
        <path d="M6.5 20.5c3-3 4.5-5.5 4.5-8.5s-1.5-5.5-4.5-8.5" />
        <path d="M13.5 14.5c1.5 1.5 2.5 2.5 3 4" />
        <path d="M10.5 14.5c-1.5 1.5-2.5 2.5-3 4" />
        <path d="M13.5 9.5c1.5-1.5 2.5-2.5 3-4" />
        <path d="M10.5 9.5c-1.5-1.5-2.5-2.5-3-4" />
      </svg>
    ),
    'wednesday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M8 7l-5.3 5.3a1 1 0 000 1.4L8 19" />
        <path d="M18 15l-5-5" />
        <path d="M13 10L19 4" />
        <path d="M13.5 2.5l5 5" />
        <path d="M21 8V6.5a2.5 2.5 0 00-5 0V8" />
        <path d="M16 11h-1.5a2.5 2.5 0 000 5H16" />
        <path d="M18 21a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M14.5 17.5C14.5 16.5 15.5 15 17 15" />
        <path d="M11 20c0-1.5-1-2.5-2.5-2.5S6 18.5 6 20" />
      </svg>
    ),
    'thursday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M12 21.5V17" />
        <path d="M9 17h6" />
        <path d="M12 14a5 5 0 100-10 5 5 0 000 10z" />
        <path d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        <path d="M12 6.5V5.5" />
        <path d="M12 17l-3.5 4.5h7L12 17z" />
        <path d="M5.52 7.66L4.5 7" /><path d="M7.66 5.52L7 4.5" />
        <path d="M18.48 7.66L19.5 7" /><path d="M16.34 5.52L17 4.5" />
        <path d="M18.48 16.34L19.5 17" /><path d="M16.34 18.48L17 19.5" />
        <path d="M5.52 16.34L4.5 17" /><path d="M7.66 18.48L7 19.5" />
        <path d="M12 10.25V8.5" /><path d="M10.75 9.5h3" />
      </svg>
    ),
    'friday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={cn("h-6 w-6", className)}><path d="M495.2 133.2c-2.3-3.6-5.2-6.8-8.8-9.4L351.4 34c-9-6.3-21.2-7.8-31.9-4-10.7 3.8-18.6 13.4-20.1 24.5l-2.5 19.3c-12.8-5-26.6-7.8-41-7.8s-28.2 2.8-41 7.8l-2.5-19.3c-1.5-11.2-9.4-20.7-20.1-24.5-10.7-3.8-22.9-2.3-31.9 4L19.2 123.8c-3.6 2.6-6.5 5.8-8.8 9.4-7.8 12.3-9.5 27.6-4.9 41.4l115.5 346.4c2.8 8.4 9.4 14.6 18.2 16.4 1.9.4 3.7.6 5.6.6 6.8 0 13.3-3.6 16.7-9.6l64-112 64 112c3.4 6 9.8 9.6 16.7 9.6 1.9 0 3.7-.2 5.6-.6 8.7-1.8 15.4-8 18.2-16.4l115.5-346.4c4.6-13.8 2.9-29.1-4.9-41.4zM256 226c-25.4 0-46.1-20.6-46.1-46.1S230.6 133.8 256 133.8s46.1 20.6 46.1 46.1S281.4 226 256 226z"/></svg>
    ),
    'saturday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-8 w-8", className)}>
        <path d="M12 2a4.5 4.5 0 00-4.5 4.5c0 1.99 1.45 3.61 3.5 4.23" />
        <path d="M12 2a4.5 4.5 0 014.5 4.5c0 1.99-1.45 3.61-3.5 4.23" />
        <path d="M11 10.75c-3.5 1-6 4-6 7.75V22h14v-3.5c0-3.75-2.5-6.75-6-7.75" />
        <path d="M12 14v1" />
        <path d="M10.5 16.5L12 18l1.5-1.5" />
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
              <BookOpen className="devotion-icon" />
              <div className="text-left">
                  <span className="text-sm font-bold">{liturgicalInfo.week}ª Semana do {liturgicalInfo.season}</span>
                  <p className="text-xs italic">{liturgicalInfo.verse}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className={cn('text-primary-foreground border-primary-foreground/20', liturgicalColorClasses[liturgicalInfo.color])}>
            <p className="font-bold text-center">Cor Litúrgica: {liturgicalInfo.color}</p>
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
