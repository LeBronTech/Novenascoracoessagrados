
'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { weeklyDevotions, monthlyDevotions, getLiturgicalInfo } from '@/lib/devotions';
import type { Devotion, MonthlyDevotion, LiturgicalInfo } from '@/lib/devotions';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';
import { Skeleton } from './ui/skeleton';
import { BookOpen, Calendar, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

const LilyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-full h-full", className)}>
        <path d="M12 22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
        <path d="M8 18c-1.5-1.5-2-4-2-6V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v5"/>
        <path d="M16 18c1.5-1.5 2-4 2-6V7a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v5"/>
        <path d="M12 2v2"/>
        <path d="M12 7h.01"/>
    </svg>
);


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
      <Image src="https://i.postimg.cc/MGDLNq8J/photo-2025-10-29-12-36-38.jpg" alt="Ícone de São José" width={28} height={28} className={cn("h-7 w-7 object-contain rounded-full", className)} />
    ),
    'thursday': (
        <Image src="https://i.postimg.cc/rmstCwwP/photo-2025-10-29-11-23-53.jpg" alt="Ícone do Santíssimo Sacramento" width={28} height={28} className={cn("h-7 w-7 object-contain", className)} />
    ),
    'friday': (
      <Image src="https://i.postimg.cc/mgSwmhT7/photo-2025-10-29-11-23-59.jpg" alt="Ícone da Paixão de Cristo" width={28} height={28} className={cn("h-7 w-7 object-contain", className)} />
    ),
    'saturday': (
      <Image src="https://i.postimg.cc/B6n2YCmZ/photo-2025-10-29-11-23-57.jpg" alt="Ícone de Nossa Senhora" width={28} height={28} className={cn("h-7 w-7 object-contain", className)} />
    ),
  };
  return icons[name] || null;
};

export interface WeeklyDevotionsRef {
  closeAllDevotions: () => void;
}

interface WeeklyDevotionsProps {
  onNavigateToNovena: () => void;
}


const WeeklyDevotions = forwardRef<WeeklyDevotionsRef, WeeklyDevotionsProps>(({ onNavigateToNovena }, ref) => {
  const [today, setToday] = useState<Date | null>(null);
  const [openDevotion, setOpenDevotion] = useState<number | null>(null);


  useEffect(() => {
    setToday(new Date());
  }, []);

  useImperativeHandle(ref, () => ({
    closeAllDevotions: () => {
      setOpenDevotion(null);
    }
  }));

  const handleDevotionClick = (dayOfWeek: number) => {
    if (dayOfWeek === 3) { // Wednesday for São José
        setOpenDevotion(openDevotion === 3 ? null : 3);
    }
  };


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

  const dailyColorClasses: { [key: number]: string } = {
    1: 'devotion-item--monday',
    2: 'devotion-item--tuesday',
    3: 'devotion-item--wednesday',
    4: 'devotion-item--thursday',
    5: 'devotion-item--friday',
    6: 'devotion-item--saturday',
    0: 'devotion-item--sunday',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-4 my-6">
      <div className="flex justify-center items-start flex-wrap gap-2 md:gap-4">
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
              <div className={cn('devotion-item group', dailyColorClasses[dayOfWeek])}>
                <div className="relative">
                  <Icon name={weeklyDevotion.icon} className="devotion-icon" />
                  {weeklyDevotion.alert && dayOfWeek === 5 && (
                      <div className="absolute -top-1 -right-1">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                      </div>
                  )}
                </div>
                <div className="text-left">
                    <span className="text-sm font-bold">{weeklyDevotion.day}</span>
                    <p className="text-xs">{weeklyDevotion.devotion}</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-primary text-primary-foreground border-primary-foreground/20">
              <p className="font-bold">{weeklyDevotion.title}</p>
              {weeklyDevotion.alert && dayOfWeek === 5 && <p className="mt-1 text-red-300 font-semibold">{weeklyDevotion.alert}</p>}
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

      {/* Expandable Wednesday devotion */}
       <div className="w-full flex justify-center mt-2">
            <div className="w-full max-w-lg">
                <button
                    onClick={() => handleDevotionClick(3)}
                    className={cn(
                        "flex items-center justify-center gap-3 w-auto h-auto px-4 py-3 rounded-full border-2 cursor-pointer transition-all duration-300 mx-auto",
                        "devotion-item--wednesday",
                        openDevotion === 3 && "rounded-b-none"
                    )}
                >
                  <div className="text-left">
                      <span className="text-sm font-bold">Oração a São José</span>
                  </div>
                  <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", openDevotion === 3 && "rotate-180")} />
                </button>
                
                <div 
                  data-state={openDevotion === 3 ? 'open' : 'closed'}
                  className={cn("accordion-content relative rounded-b-lg shadow-lg bg-green-800/95 text-white transition-all duration-300 overflow-hidden")}
                >
                   <div className="p-4 pt-4">
                      <LilyIcon className="absolute top-2 left-2 w-12 h-12 text-green-200/20 opacity-70 -rotate-45" />
                      <LilyIcon className="absolute bottom-2 right-2 w-12 h-12 text-green-200/20 opacity-70 rotate-[135deg]" />

                      <button onClick={() => setOpenDevotion(null)} className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors z-10">
                          <X className="w-4 h-4" />
                          <span className="sr-only">Fechar</span>
                      </button>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                          <Image src="https://i.postimg.cc/9QfFWvTB/image.png" alt="São José" width={100} height={100} className="w-24 h-24 rounded-lg object-cover border-2 border-green-200/50 shadow-md flex-shrink-0" />
                          <Tabs defaultValue="francisco" className="w-full">
                              <TabsList className="grid w-full grid-cols-2 bg-green-900/50">
                                  <TabsTrigger value="francisco">Oração do Papa Francisco</TabsTrigger>
                                  <TabsTrigger value="tradicional">Oração Tradicional</TabsTrigger>
                              </TabsList>
                              <TabsContent value="francisco" className="prose prose-sm text-green-100 max-w-none mt-4 text-left text-xs sm:text-sm">
                                  <p>Salve, guardião do Redentor e esposo da Virgem Maria!<br/>A vós, Deus confiou o seu Filho; em vós, Maria depositou a sua confiança; convosco, Cristo tornou-Se homem.</p>
                                  <p>Ó Bem-aventurado José, mostrai-vos pai também para nós e guiai-nos no caminho da vida. Alcançai-nos graça, misericórdia e coragem, e defendei-nos de todo o mal. Amen.</p>
                                  <p className="text-right italic text-green-200/80 text-xs">- Papa Francisco, Patris Corde</p>
                              </TabsContent>
                              <TabsContent value="tradicional" className="prose prose-sm text-green-100 max-w-none mt-4 text-left text-xs sm:text-sm">
                                  <p>Glorioso São José, que fostes exaltado pelo Eterno Pai, obedecido pelo Verbo Encarnado, favorecido pelo Espírito Santo e amado pela Virgem Maria; louvo e bendigo a Santíssima Trindade pelos privilégios e méritos com que vos enriqueceu. Sois poderosíssimo e jamais se ouviu dizer que alguém tenha recorrido a vós e fosse por vós desamparado.</p>
                                  <p>Sois o consolador dos aflitos, o amparo dos míseros e o advogado dos pecadores. Acolhei, pois, com bondade paternal a quem vos invoca com filial confiança e alcançai-me as graças que vos peço. Sede, depois de Jesus e Maria, minha consolação, meu refúgio, meu guia e meu pai. Obtende-me, finalmente, uma boa e santa morte. Amém.</p>
                              </TabsContent>
                          </Tabs>
                      </div>
                      <div className="text-center mt-4">
                          <Button onClick={onNavigateToNovena} size="sm" className="bg-green-200 text-green-900 hover:bg-white">
                              Conheça também a novena a São José
                          </Button>
                      </div>
                   </div>
                </div>
            </div>
       </div>

    </div>
  );
});

WeeklyDevotions.displayName = 'WeeklyDevotions';
export default WeeklyDevotions;
