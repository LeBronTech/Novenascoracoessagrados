
'use client';

import { useState, useEffect } from 'react';
import { weeklyDevotions } from '@/lib/devotions';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Flame, Shield, Users, Hammer, Grape, Beef, Heart } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import React from 'react';

// A mapping from icon names to actual components
const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Heart,
  Shield,
  Users,
  Hammer,
  Grape,
  Beef,
  Flame,
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
    // You can return a skeleton loader here if you want
    return null;
  }
  
  const devotion = weeklyDevotions[currentDay];
  if (!devotion) return null;

  const IconComponent = iconComponents[devotion.icon];

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
                {IconComponent && <IconComponent className="devotion-icon w-6 h-6 text-gray-600" />}
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
