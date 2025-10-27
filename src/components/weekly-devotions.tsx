
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
    'sunday': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={cn("h-6 w-6", className)}><path d="M495.2 133.2c-2.3-3.6-5.2-6.8-8.8-9.4L351.4 34c-9-6.3-21.2-7.8-31.9-4-10.7 3.8-18.6 13.4-20.1 24.5l-2.5 19.3c-12.8-5-26.6-7.8-41-7.8s-28.2 2.8-41 7.8l-2.5-19.3c-1.5-11.2-9.4-20.7-20.1-24.5-10.7-3.8-22.9-2.3-31.9 4L19.2 123.8c-3.6 2.6-6.5 5.8-8.8 9.4-7.8 12.3-9.5 27.6-4.9 41.4l115.5 346.4c2.8 8.4 9.4 14.6 18.2 16.4 1.9.4 3.7.6 5.6.6 6.8 0 13.3-3.6 16.7-9.6l64-112 64 112c3.4 6 9.8 9.6 16.7 9.6 1.9 0 3.7-.2 5.6-.6 8.7-1.8 15.4-8 18.2-16.4l115.5-346.4c4.6-13.8 2.9-29.1-4.9-41.4zM256 226c-25.4 0-46.1-20.6-46.1-46.1S230.6 133.8 256 133.8s46.1 20.6 46.1 46.1S281.4 226 256 226z"/></svg>,
    'monday': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={cn("h-6 w-6", className)}><path d="M416 176H296V56c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v120H96c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h120v120c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V256h120c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"/></svg>,
    'tuesday': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className={cn("h-7 w-7", className)}><path d="M634 250.7C619.5 229.4 584.2 224 551.6 237.9c-29.4 12.5-52.6 34-66.7 60.5-12.7 23.9-17.7 51.4-13.2 78.3 4.5 26.9 17.5 51.5 37.3 69.3 21.6 19.4 49.9 30.9 79.5 30.9 20.3 0 40-5.7 57.3-16.1 16.5-10 30.5-24.8 40.5-42.5 10.1-17.7 15.6-37.9 15.6-58.7.2-46.2-22.1-88.5-59.5-115.4zM320 237.9c-32.6-13.9-67.9-19.3-102.4-15.4-34.5 3.9-66.7 17.5-93.6 39.3-26.9 21.8-47.3 50.4-58.7 82.5-11.5 32-13.7 66.8-6.4 99.8 7.3 33 22.8 63.3 45.4 88.5s51.5 45.4 88.5 45.4c37 0 71.2-18.3 93.6-47.9 22.3-29.6 33-67.4 30.9-105.8-2.2-38.3-16.9-74.3-41.2-102.4-24.2-28.1-55.9-47.9-91.8-54.3zm-208.1 12.8C20.4 229.4-14.9 224-47.5 237.9c-29.4 12.5-52.6 34-66.7 60.5-12.7 23.9-17.7 51.4-13.2 78.3 4.5 26.9 17.5 51.5 37.3 69.3 21.6 19.4 49.9 30.9 79.5 30.9 20.3 0 40-5.7 57.3-16.1 16.5-10 30.5-24.8 40.5-42.5 10.1-17.7 15.6-37.9 15.6-58.7-.2-46.2-22.1-88.5-59.5-115.4z"/></svg>,
    'wednesday': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={cn("h-6 w-6", className)}><path d="M224 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm0-96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm96 96c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm0-96c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm64 160v-32c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16zm-128-64c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v32zM128 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32zM480 320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64zM256 480c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32z"/></svg>,
    'thursday': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={cn("h-6 w-6", className)}><path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 224c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-192c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM288 232h-24v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v24h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224-100.3 224-224 224zm0-32C368.2 448 448 368.2 448 256S368.2 64 256 64 64 143.8 64 256s79.8 192 192 192z"/></svg>,
    'friday': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={cn("h-6 w-6", className)}><path d="M495.2 133.2c-2.3-3.6-5.2-6.8-8.8-9.4L351.4 34c-9-6.3-21.2-7.8-31.9-4-10.7 3.8-18.6 13.4-20.1 24.5l-2.5 19.3c-12.8-5-26.6-7.8-41-7.8s-28.2 2.8-41 7.8l-2.5-19.3c-1.5-11.2-9.4-20.7-20.1-24.5-10.7-3.8-22.9-2.3-31.9 4L19.2 123.8c-3.6 2.6-6.5 5.8-8.8 9.4-7.8 12.3-9.5 27.6-4.9 41.4l115.5 346.4c2.8 8.4 9.4 14.6 18.2 16.4 1.9.4 3.7.6 5.6.6 6.8 0 13.3-3.6 16.7-9.6l64-112 64 112c3.4 6 9.8 9.6 16.7 9.6 1.9 0 3.7-.2 5.6-.6 8.7-1.8 15.4-8 18.2-16.4l115.5-346.4c4.6-13.8 2.9-29.1-4.9-41.4zM256 226c-25.4 0-46.1-20.6-46.1-46.1S230.6 133.8 256 133.8s46.1 20.6 46.1 46.1S281.4 226 256 226z"/></svg>,
    'saturday': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={cn("h-6 w-6", className)}><path d="M256 0C167.6 0 96 71.6 96 160v128c0 23.4 6.4 45.4 17.6 64H128c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64h-14.4c11.2-18.6 17.6-40.6 17.6-64V160c0-88.4-71.6-160-160-160zm0 32c70.7 0 128 57.3 128 128v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-70.7 57.3-128 128-128z"/></svg>,
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
    <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 my-6">
      <TooltipProvider>
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
