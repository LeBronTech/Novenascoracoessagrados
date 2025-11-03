
'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SaintSelector from '@/components/saint-selector';
import NovenaDisplay from '@/components/novena-display';
import SaintOfTheDay, { type SaintOfTheDayRef } from '@/components/saint-of-the-day';
import WeeklyDevotions from '@/components/weekly-devotions';
import { saints, months, novenaData } from '@/lib/data';
import type { Saint } from '@/lib/data';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { parse, differenceInDays, getYear } from 'date-fns';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LilyIcon } from '@/components/weekly-devotions';

export type Theme = 'theme-default' | 'theme-dark-gray' | 'theme-light-gray' | 'theme-red';

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => (
    <div
        className={cn(
            'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500',
            isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        style={{ backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 25%, #c3c3c3 50%, #949da4 100%)' }}
    >
        <div className={cn('transform transition-all duration-700 ease-in-out', isLoading ? 'scale-100 animate-pulse-and-shrink' : 'scale-0')}>
            <Image 
                src="https://i.postimg.cc/ZRrzGs1g/Capa-para-facebook-arquitetura-moderno-vermelho-1.png" 
                alt="Logo Corações Sagrados" 
                width={448} 
                height={166}
                className="w-full max-w-md rounded-md"
                priority
            />
        </div>
    </div>
);


export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<string>(months[new Date().getMonth()]);
  const [selectedSaintId, setSelectedSaintId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<Theme>('theme-dark-gray');
  const saintOfTheDayRef = useRef<SaintOfTheDayRef>(null);
  const saintOfTheDaySectionRef = useRef<HTMLDivElement>(null);
  const novenaSectionRef = useRef<HTMLDivElement>(null);
  const [isSaintOfTheDayOpen, setIsSaintOfTheDayOpen] = useState(false);
  const [showJoseNovenaDialog, setShowJoseNovenaDialog] = useState(false);
  const [isJoseDialogOpen, setIsJoseDialogOpen] = useState(false);


  const { toast } = useToast();
  
  useEffect(() => {
    let initialMonth: string | null = null;
    let initialNovenaId: string | null = null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const hash = window.location.hash.substring(1);
    const saintFromHash = saints.find(s => s.id === hash);

    if (saintFromHash) {
      initialMonth = saintFromHash.month;
      initialNovenaId = saintFromHash.id;
    } else {
      const currentYear = getYear(today);

      const closestSaint = saints.reduce((closest, saint) => {
        try {
            const startDate = parse(`${saint.startDate}/${currentYear}`, 'dd/MM/yyyy', new Date());
            if (isNaN(startDate.getTime())) return closest;

            const diff = Math.abs(differenceInDays(startDate, today));
            if (!closest || diff < closest.diff) {
                return { saint, diff };
            }
        } catch (e) {
            // Ignore invalid date formats
        }
        return closest;
      }, null as { saint: Saint; diff: number } | null);

      if (closestSaint) {
        initialNovenaId = closestSaint.saint.id;
        initialMonth = closestSaint.saint.month;
      } else {
        // Fallback if no closest saint is found
        const firstSaint = saints[0];
        if (firstSaint) {
          initialNovenaId = firstSaint.id;
          initialMonth = firstSaint.month;
        }
      }
    }

    if (initialMonth && initialNovenaId) {
      setSelectedMonth(initialMonth);
      setSelectedSaintId(initialNovenaId);
    }

    if (today.getDay() === 5) {
      toast({
        description: (
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="text-primary h-5 w-5" />
            Hoje é dia de abstinência de carne.
          </div>
        ),
        className: 'top-4 right-4 absolute bg-background/80 backdrop-blur-sm',
      });
    }
    
    // Delay hydration to allow loading animation to play
    setTimeout(() => setHydrated(true), 1500);
  }, [toast]);

  useEffect(() => {
    if (selectedSaintId && hydrated) {
      history.pushState({ novenaId: selectedSaintId }, '', '#' + selectedSaintId);
    }
  }, [selectedSaintId, hydrated]);

  const selectedNovena = useMemo(
    () => (selectedSaintId ? novenaData[selectedSaintId] : null),
    [selectedSaintId]
  );

  const selectedSaint = useMemo(
    () => saints.find(saint => saint.id === selectedSaintId) || null,
    [selectedSaintId]
  );

  const handleSelectSaint = (id: string) => {
    setSelectedSaintId(id);
    const saint = saints.find(s => s.id === id);
    if(saint) setSelectedMonth(saint.month);
  };
  
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const saintsInNewMonth = saints.filter(s => s.month === month);
    if (selectedSaintId && !saintsInNewMonth.some(s => s.id === selectedSaintId)) {
        setSelectedSaintId(null);
    }
  }

  const handleSaintOfTheDayNavigation = (direction: 'prev' | 'next') => {
    setIsSaintOfTheDayOpen(false); // Close accordion before navigating
    // Add a small delay to allow the accordion to close before changing the slide
    setTimeout(() => {
        saintOfTheDayRef.current?.navigate(direction);
        saintOfTheDaySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }

  const handleNavigateToNovena = (saintId: string) => {
    setShowJoseNovenaDialog(false);
    setIsJoseDialogOpen(false);
    const saint = saints.find(s => s.id === saintId);
    if(saint) {
        setSelectedMonth(saint.month);
        setSelectedSaintId(saint.id);
        novenaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <LoadingScreen isLoading={!hydrated} />
      <div className={cn("transition-opacity duration-1000", hydrated ? "opacity-100" : "opacity-0")}>
        <div className="container mx-auto p-4 md:p-8 max-w-5xl text-stone-900">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="fixed top-4 left-4 z-20 bg-white/70 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[380px] sm:w-[540px] bg-gray-100 p-0">
              <SheetHeader className="p-6 bg-white shadow-sm">
                <SheetTitle className="text-xl font-brand text-gray-800">Santo do Dia</SheetTitle>
                <SheetDescription className="sr-only">Navegue para ver o santo de cada dia do mês.</SheetDescription>
              </SheetHeader>
              <div className="h-[calc(100vh-80px)] overflow-y-auto">
                <SaintOfTheDay triggerTheme={theme} isOpenInitially={isSaintOfTheDayOpen} onToggle={setIsSaintOfTheDayOpen} />
              </div>
            </SheetContent>
          </Sheet>

          <Header />
          <WeeklyDevotions />
          
          <div className="relative" ref={saintOfTheDaySectionRef}>
            <h2 className="text-xl font-brand text-center text-gray-700 mt-8">
              Santo do Dia
            </h2>
            <SaintOfTheDay 
              ref={saintOfTheDayRef} 
              triggerTheme={theme}
              isOpenInitially={isSaintOfTheDayOpen}
              onToggle={setIsSaintOfTheDayOpen}
            />
            <div 
              className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-2 z-20"
              )}
            >
                <Button
                  variant="outline"
                  className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                  onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleSaintOfTheDayNavigation('prev'); }}
                >
                  Dia anterior
                </Button>
                <Button 
                  variant="outline"
                  className="h-8 px-4 bg-white/70 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg border-primary/20 border" 
                  onClick={(e) => { e.stopPropagation(); e.currentTarget.blur(); handleSaintOfTheDayNavigation('next'); }}
                >
                  Próximo dia
                </Button>
            </div>
          </div>
          
          <div className="mt-16 w-full flex flex-col md:flex-row items-start justify-center gap-4">
             <div className="w-full md:w-auto flex justify-center">
                <Dialog open={isJoseDialogOpen} onOpenChange={setIsJoseDialogOpen}>
                    <DialogTrigger asChild>
                        <div className="devotion-item devotion-item--wednesday font-bold text-sm">Espaço São José</div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px] bg-green-800/95 text-white border-green-600/50">
                        <DialogHeader>
                            <DialogTitle className="font-brand text-xl text-white flex items-center gap-2"><LilyIcon className="w-6 h-6 text-green-200/50" />Espaço São José</DialogTitle>
                        </DialogHeader>
                        <div className="p-4 pt-2">
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
                                <Button onClick={() => setShowJoseNovenaDialog(true)} size="sm" className="bg-green-200 text-green-900 hover:bg-white">
                                    Conheça também a novena a São José
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="w-full md:w-auto flex justify-center">
                 <Dialog>
                    <DialogTrigger asChild>
                        <div className="devotion-item devotion-item--dark-blue font-bold text-sm">Espaço Mariano</div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px] bg-blue-900/95 text-white border-blue-700/50">
                        <DialogHeader>
                           <DialogTitle className="font-brand text-xl text-white">Espaço Mariano</DialogTitle>
                        </DialogHeader>
                        <div className="p-4 pt-2 text-center prose prose-sm text-sky-100 max-w-none">
                            <h4 className='text-white'>Devoção a Nossa Senhora</h4>
                            <p>Conteúdo sobre histórias e orações a Nossa Senhora em breve...</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
          </div>


          <div ref={novenaSectionRef} className="bg-gray-100/70 backdrop-blur-sm rounded-xl shadow-lg p-4 mt-8">
            <h2 id="saints-nav-title" className="text-xl font-brand text-center text-gray-700 mb-4">
              Novenas de {selectedMonth}
            </h2>
            <SaintSelector
              saints={saints}
              months={months}
              selectedMonth={selectedMonth}
              onMonthChange={handleMonthChange}
              selectedSaintId={selectedSaintId}
              onSaintSelect={handleSelectSaint}
            />
          </div>

          <div className="mt-8">
            <NovenaDisplay
              key={selectedSaintId}
              novena={selectedNovena}
              saint={selectedSaint}
              theme={theme}
              setTheme={setTheme}
            />
          </div>
          <Footer />
        </div>
      </div>
       <AlertDialog open={showJoseNovenaDialog} onOpenChange={setShowJoseNovenaDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Qual novena a São José você gostaria de rezar?</AlertDialogTitle>
            <AlertDialogDescription>
              A Igreja dedica dois dias a São José, com diferentes ênfases em sua missão.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => handleNavigateToNovena('sao_jose')}>
                São José, Esposo da Virgem Maria (19 de Março)
            </AlertDialogAction>
            <AlertDialogAction onClick={() => handleNavigateToNovena('sao_jose_operario')}>
                São José Operário (1 de Maio)
            </AlertDialogAction>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
