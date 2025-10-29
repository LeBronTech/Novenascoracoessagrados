
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
        <path d="M12 2a2.5 2.5 0 0 1 2.5 2.5v.08a2.5 2.5 0 0 1-5 0V4.5A2.5 2.5 0 0 1 12 2z"/>
        <path d="M8.5 5.5a3.5 3.5 0 0 0-5.2 2.1 3.5 3.5 0 0 0 1.6 4.8l4.4 2.1a2 2 0 0 1 1.2 1.8V19a1 1 0 0 0 1 1h.1a1 1 0 0 0 1-1v-2.6a2 2 0 0 1 1.2-1.8l4.4-2.1a3.5 3.5 0 0 0 1.6-4.8 3.5 3.5 0 0 0-5.2-2.1"/>
        <path d="M12 10a2 2 0 0 0-2 2v.1a2 2 0 0 0 4 0V12a2 2 0 0 0-2-2z"/>
      </svg>
    ),
    'wednesday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M14.2 2.2 12 4.5 9.8 2.2c-1.3-1.4-3.6-1.5-5-.2L3 3.5c-1.4 1.3-1.5 3.6-.2 5l2 2.3 2.5-2.5.7-.8c.2-.2.4-.4.5-.6.2-.3.3-.6.3-.9 0-.3-.1-.6-.3-.9-.2-.2-.4-.4-.5-.6l-.7-.8-2.5-2.5-2-2.3c-1.3-1.4-1.2-3.7.2-5l1.8-1.5c1.4-1.3 3.7-1.2 5 .2z"/>
        <path d="M17 11.5c.3.2.5.4.6.6.2.3.3.6.3.9 0 .3-.1.6-.3.9-.2.3-.4.5-.6.6l-.8.7-2.5 2.5-2.3 2c-1.4 1.3-3.7 1.2-5-.2l-1.5-1.8c-1.3-1.4-1.2-3.7.2-5l2.3-2 2.5 2.5.8.7Z"/>
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
        <path d="M20.2 17.1c1.1-1.3 1.5-3 1.3-4.6l-.3-2.6c-.3-2.2-2.1-3.9-4.3-3.9H7.1c-2.2 0-4.1 1.7-4.3 3.9l-.3 2.6c-.2 1.6.2 3.3 1.3 4.6l2.1 2.5H4v2h16v-2h-3.3l2.1-2.5zM7.1 6h9.8"/>
        <path d="m14.9 11.5-2.9 3-2.9-3"/>
      </svg>
    ),
    'saturday': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)}>
        <path d="M9 17.65c.32.18.66.3.99.4.45.14.9.25 1.32.35 2.19.49 3.5-1.09 4.05-3.28.32-1.29 1.1-4.29-1.32-5-1.57-.45-3.32.22-4.57 1.57-.99 1.1-.55 2.55.57 3.65.6.6 1.42.99 2.28 1.32"/>
        <path d="M17.8 13.9c.3.1.5.3.7.5.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.1.5h-1.5c-2.1 0-3.5-1.5-4-3.5-.3-1.2-1-4-1.5-5.5-.3-1-.4-1.9-.2-2.8.2-.9.7-1.8 1.3-2.5 1-1.1 2.4-1.9 4-2 .3 0 .7.1 1 .2.5.2.9.5 1.3.8.6.5 1 1.2 1.4 1.9.3.6.6 1.4.7 2.2.1.8.1 1.6-.1 2.4-.2.9-.5 1.7-.8 2.5-.2.6-.5 1.2-.8 1.8"/>
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
