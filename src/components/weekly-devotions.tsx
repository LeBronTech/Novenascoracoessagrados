
'use client';

import { useState, useEffect } from 'react';
import { weeklyDevotions } from '@/lib/devotions';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import { Skeleton } from './ui/skeleton';

function DevotionSkeleton() {
    return (
        <div className="flex justify-center my-6">
            <div
              className={cn(
                'devotion-item group flex items-center justify-center gap-3 w-auto h-auto px-4 py-2 rounded-full border-2 border-gray-300/50 bg-gray-100/50 backdrop-blur-sm'
              )}
            >
              <div className="relative">
                <Skeleton className="w-6 h-6 rounded-full" />
              </div>
              <div className="text-left">
                  <Skeleton className="h-4 w-20 mb-1" />
                  <Skeleton className="h-3 w-28" />
              </div>
            </div>
        </div>
    )
}


// Custom SVG Icon component
const Icon = ({ name, className }: { name: string, className?: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    'sunday': (
      <svg viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M349.6 64c-36.4 0-69.4 16.2-93.6 41.2-24.2-25-57.2-41.2-93.6-41.2C85.5 64 21.3 128.2 21.3 205.3c0 86.4 103.8 171.3 221.3 261.3l13.3 10.1 13.3-10.1c117.5-89.9 221.3-174.8 221.3-261.3C490.7 128.2 426.5 64 349.6 64zm-37.3 29.3c13.3-1.8 26.9.5 39.3 7.8 14.5 8.5 26.6 21.9 34.8 38.2 12.6 24.8 13.5 52.8 2.7 78.4-10.8 25.6-30.8 45.7-56.3 56.4-11.2 4.7-23.2 7-35.3 7-15.5 0-30.8-4.2-44.5-12.3-27.4-16.3-46.2-44.8-51-76.5-2.7-17.7 1.3-35.7 11.2-50.8 8.1-12.4 19.4-22.5 32.7-28.7 20.3-9.5 43.1-9.9 64.3-1.2l2.3 1V93.3zM151.2 96.3c15.2-4 30.7-3.2 45.4 2.3 22.3 8.3 40 26.2 47.9 48.5 5.5 15.6 6.3 32.2 2.6 48.2-3.8 16-12.4 30.4-24.4 41.5-16.3 15-38.3 23-60.8 21.2-19.3-1.6-37.4-10.4-50.5-24.2-10.9-11.5-17.6-26.4-18.9-42.3-1.7-21.2 4-42.2 15.8-59.2 9.1-13.2 22-23.5 36.3-29.6 12.3-5.2 25.5-7.8 38.8-6.4z" /><path d="M298.7 32c-20.1 0-38.1 10.3-48 26.4-9.9-16.1-27.9-26.4-48-26.4-17.2 0-32.9 6.8-44.3 17.7-4.2-5.9-10.6-9.9-17.7-9.9-11.8 0-21.3 9.5-21.3 21.3s9.5 21.3 21.3 21.3c7.1 0 13.5-3.9 17.7-9.9 1.1 1.2 2.2 2.4 3.3 3.5 6.4 6.4 14 11.5 22.3 15.2-12.1 12.1-19.9 27.6-21.3 44.3-3.8 45.4 21.3 89.2 64 104.9 2.5.9 5.1 1.7 7.7 2.4-32.5 25-59.3 54.3-76.3 85.5C85.5 454 21.3 371.3 21.3 288c0-77.1 64.2-141.3 141.3-141.3 24.3 0 47.8 6.2 68.3 17.3 11.1-30.8 31.2-57.8 58.7-76.3C280.9 78.8 264.8 64 245.3 64c-36.4 0-69.4 16.2-93.6 41.2-24.2-25-57.2-41.2-93.6-41.2C-18.1 105.2-72.3 169.4-72.3 246.5c0 86.4 103.8 171.3 221.3 261.3l13.3 10.1 13.3-10.1C293 417.8 396.8 332.9 396.8 246.5c0-11.8-1.5-23.4-4.2-34.5 13.5 6.6 28.5 10.1 44.3 10.1 52.9 0 96-43.1 96-96s-43.1-96-96-96z"/></svg>
    ),
    'monday': (
      <svg viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M416 176H296V56c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v120H96c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h120v120c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V256h120c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"/></svg>
    ),
    'tuesday': (
      <svg viewBox="0 0 640 512" fill="currentColor" className={className}>
        <path d="M634 250.7C619.5 229.4 584.2 224 551.6 237.9c-29.4 12.5-52.6 34-66.7 60.5-12.7 23.9-17.7 51.4-13.2 78.3 4.5 26.9 17.5 51.5 37.3 69.3 21.6 19.4 49.9 30.9 79.5 30.9 20.3 0 40-5.7 57.3-16.1 16.5-10 30.5-24.8 40.5-42.5 10.1-17.7 15.6-37.9 15.6-58.7.2-46.2-22.1-88.5-59.5-115.4zM320 237.9c-32.6-13.9-67.9-19.3-102.4-15.4-34.5 3.9-66.7 17.5-93.6 39.3-26.9 21.8-47.3 50.4-58.7 82.5-11.5 32-13.7 66.8-6.4 99.8 7.3 33-22.8 63.3-45.4 88.5s-51.5 45.4-88.5 45.4c-37 0-71.2-18.3-93.6-47.9-22.3-29.6-33-67.4-30.9-105.8-2.2-38.3-16.9-74.3-41.2-102.4-24.2-28.1-55.9-47.9-91.8-54.3z"/>
        <path d="M5.9 250.7C20.4 229.4 55.7 224 88.3 237.9c29.4 12.5 52.6 34 66.7 60.5 12.7 23.9 17.7 51.4 13.2 78.3-4.5 26.9-17.5 51.5-37.3 69.3-21.6 19.4-49.9 30.9-79.5 30.9-20.3 0-40-5.7-57.3-16.1C-1.8 419.8-15.8 405-25.8 387.3c-10.1-17.7-15.6-37.9-15.6-58.7-.2-46.2 22.1-88.5 59.5-115.4zM320 237.9c32.6-13.9 67.9-19.3 102.4-15.4 34.5 3.9 66.7 17.5 93.6 39.3 26.9 21.8 47.3 50.4 58.7 82.5 11.5 32 13.7 66.8 6.4 99.8-7.3 33-22.8 63.3-45.4 88.5s-51.5 45.4-88.5 45.4c-37 0-71.2-18.3-93.6-47.9-22.3-29.6-33-67.4-30.9-105.8 2.2-38.3 16.9-74.3 41.2-102.4 24.2-28.1 55.9-47.9 91.8-54.3z"/>
      </svg>
    ),
    'wednesday': (
      <svg viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M495.2 133.2c-2.3-3.6-5.2-6.8-8.8-9.4L351.4 34c-9-6.3-21.2-7.8-31.9-4-10.7 3.8-18.6 13.4-20.1 24.5l-2.5 19.3c-12.8-5-26.6-7.8-41-7.8s-28.2 2.8-41 7.8l-2.5-19.3c-1.5-11.2-9.4-20.7-20.1-24.5-10.7-3.8-22.9-2.3-31.9 4L19.2 123.8c-3.6 2.6-6.5 5.8-8.8 9.4-7.8 12.3-9.5 27.6-4.9 41.4l115.5 346.4c2.8 8.4 9.4 14.6 18.2 16.4 1.9.4 3.7.6 5.6.6 6.8 0 13.3-3.6 16.7-9.6l64-112 64 112c3.4 6 9.8 9.6 16.7 9.6 1.9 0 3.7-.2 5.6-.6 8.7-1.8 15.4-8 18.2-16.4l115.5-346.4c4.6-13.8 2.9-29.1-4.9-41.4zM256 179.9c25.4 0 46.1 20.6 46.1 46.1s-20.7 46.1-46.1-46.1-46.1-20.6-46.1-46.1 20.7-46.1 46.1-46.1z"/><path d="M362.7 192h-24.3c-6.6 0-12 5.4-12 12s5.4 12 12 12h24.3c6.6 0 12-5.4 12-12s-5.4-12-12-12zM150.8 192h24.3c6.6 0 12 5.4 12 12s-5.4 12-12 12h-24.3c-6.6 0-12-5.4-12-12s5.4-12 12-12z"/></svg>
    ),
    'thursday': (
        <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
            <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 224c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"/>
            <path d="M256 176c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
            <path d="M288 232h-24v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v24h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h24c4.4 0 8-3.6 8-8s-3.6-8-8-8z"/>
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224-100.3 224-224 224z"/>
            <path d="M256 64c-106 0-192 86-192 192s86 192 192 192 192-86 192-192-86-192-192-192zm0 352c-88.2 0-160-71.8-160-160s71.8-160 160-160 160 71.8 160 160-71.8 160-160 160z"/>
            <path d="M487.4 256l-33.9-19.6 19.6-33.9 33.9 19.6-19.6 33.9zM24.6 256l-19.6-33.9 33.9-19.6 19.6 33.9-33.9 19.6zM256 487.4l-19.6-33.9 33.9-19.6 19.6 33.9-33.9 19.6zM256 24.6l19.6 33.9-33.9 19.6-19.6-33.9 33.9-19.6zM423.7 131.7l-29.4-29.4 23.9-23.9 29.4 29.4-23.9 23.9zM88.3 423.7l-23.9-23.9 29.4-29.4 23.9 23.9-29.4 29.4zM131.7 88.3l23.9-23.9-29.4-29.4-23.9 23.9 29.4 29.4zM380.3 423.7l29.4-29.4-23.9-23.9-29.4 29.4 23.9 23.9z"/>
        </svg>
    ),
    'friday': (
      <svg viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M495.2 133.2c-2.3-3.6-5.2-6.8-8.8-9.4L351.4 34c-9-6.3-21.2-7.8-31.9-4-10.7 3.8-18.6 13.4-20.1 24.5l-2.5 19.3c-12.8-5-26.6-7.8-41-7.8s-28.2 2.8-41 7.8l-2.5-19.3c-1.5-11.2-9.4-20.7-20.1-24.5-10.7-3.8-22.9-2.3-31.9 4L19.2 123.8c-3.6 2.6-6.5 5.8-8.8 9.4-7.8 12.3-9.5 27.6-4.9 41.4l115.5 346.4c2.8 8.4 9.4 14.6 18.2 16.4 1.9.4 3.7.6 5.6.6 6.8 0 13.3-3.6 16.7-9.6l64-112 64 112c3.4 6 9.8 9.6 16.7 9.6 1.9 0 3.7-.2 5.6-.6 8.7-1.8 15.4-8 18.2-16.4l115.5-346.4c4.6-13.8 2.9-29.1-4.9-41.4zM256 179.9c25.4 0 46.1 20.6 46.1 46.1s-20.7 46.1-46.1-46.1-46.1-20.6-46.1-46.1 20.7-46.1 46.1-46.1z"/><path d="M362.7 192h-24.3c-6.6 0-12 5.4-12 12s5.4 12 12 12h24.3c6.6 0 12-5.4 12-12s-5.4-12-12-12zM150.8 192h24.3c6.6 0 12 5.4 12 12s-5.4 12-12 12h-24.3c-6.6 0-12-5.4-12-12s5.4-12 12-12z"/></svg>
    ),
    'saturday': (
      <svg viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M256 0C167.6 0 96 71.6 96 160v128c0 23.4 6.4 45.4 17.6 64H128c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64h-14.4c11.2-18.6 17.6-40.6 17.6-64V160c0-88.4-71.6-160-160-160zm0 32c70.7 0 128 57.3 128 128v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-70.7 57.3-128 128-128z"/></svg>
    )
  };
  return icons[name] || null;
};


export default function WeeklyDevotions() {
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    // The getDay() method returns the day of the week for the specified date according to local time,
    // where 0 represents Sunday.
    const day = new Date().getDay();
    setCurrentDay(day);
  }, []);

  if (currentDay === null) {
    return <DevotionSkeleton />;
  }
  
  const devotion = weeklyDevotions[currentDay];
  if (!devotion) return <DevotionSkeleton />;

  return (
    <div className="flex justify-center my-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                'devotion-item group flex items-center justify-center gap-3 w-auto h-auto px-4 py-2 rounded-full border-2 border-gray-300/50 bg-gray-100/50 backdrop-blur-sm cursor-pointer'
              )}
            >
              <div className="relative">
                <Icon name={devotion.icon} className="devotion-icon w-6 h-6 text-gray-600" />
                {devotion.alert && (
                    <div className="absolute -top-1 -right-1">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                    </div>
                )}
              </div>
              <div className="text-left">
                  <span className="text-sm font-bold text-gray-700">{devotion.day}</span>
                  <p className="text-xs text-gray-600">{devotion.devotion}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-primary-foreground border-primary-foreground/20">
            <p className="font-bold">{devotion.title}</p>
            <p>{devotion.devotion}</p>
            {devotion.alert && <p className="mt-1 text-red-300 font-semibold">{devotion.alert}</p>}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

    