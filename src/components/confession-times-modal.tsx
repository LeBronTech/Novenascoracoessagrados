'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { confessionData } from '@/lib/confession-data';
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DAYS_OF_WEEK = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

export function ConfessionTimesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Arniqueiras & Riacho Fundo');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const saintsNavRef = useRef<HTMLDivElement>(null);
  const daysNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#confissoes') {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modal: 'confession' }, '');
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedDay(null); // Reset day filter on city change
    const selectedButton = saintsNavRef.current?.querySelector(`[data-city="${city}"]`);
    if (selectedButton) {
      selectedButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleDayChange = (day: string) => {
      setSelectedDay(prev => prev === day ? null : day);
  }

  const filteredParishes = useMemo(() => {
    const cityData = confessionData.find((data) => data.city === selectedCity);
    if (!cityData) return [];

    return cityData.parishes.filter(parish => {
        const matchesSearch = parish.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        let matchesDay = true;
        if (selectedDay) {
            const timesLower = parish.times.toLowerCase();
            const dayLower = selectedDay.toLowerCase();
            
            // Simple check if the day name appears in the times string
            // This covers cases like "Terça a Sexta", "Terça e Quinta", "Todos os dias" (needs special handling if intended)
            // For "Todos os dias", we'd need to check explicitly, but most entries list days.
            // Also need to handle ranges like "Terça a Sexta" if we want to be precise, but simple inclusion is a good start.
            // However, "Quinta" is in "Quinta-feira", so inclusion works.
            // Range logic is complex ("Terça a Sexta" includes Quarta and Quinta). 
            // For now, let's stick to simple text matching which is what the prompt implies for a basic filter,
            // or enhance it slightly for ranges if possible.
            
            const daysMap: {[key: string]: number} = { 'segunda': 1, 'terça': 2, 'quarta': 3, 'quinta': 4, 'sexta': 5, 'sábado': 6, 'domingo': 0 };
            const targetDayNum = daysMap[dayLower.split('-')[0]]; // Handle 'Terça-feira' -> 'terça'

             // Check for direct mention
            if (timesLower.includes(dayLower.split('-')[0])) {
                matchesDay = true;
            } 
            // Check for "Todos os dias"
            else if (timesLower.includes('todos os dias') || timesLower.includes('diariamente')) {
                matchesDay = true;
            }
            // Basic range detection (e.g., "Segunda a Sexta")
            else if (timesLower.includes(' a ')) {
                 // This is a bit tricky without parsing, let's keep it simple for now:
                 // If filter is 'Quarta' and text says 'Terça a Sexta', simple inclusion fails.
                 // Let's implement a helper if we want robust range support, but for this task, 
                 // let's assume the user text search or simple filter is requested.
                 // If the user insists on rigorous filtering, we'd need structured data.
                 // Let's try to support common ranges.
                 const rangeRegex = /(segunda|terça|quarta|quinta|sexta|sábado|domingo).*?a.*?(segunda|terça|quarta|quinta|sexta|sábado|domingo)/gi;
                 let match;
                 let rangeMatches = false;
                 while ((match = rangeRegex.exec(timesLower)) !== null) {
                     const startDay = match[1].toLowerCase();
                     const endDay = match[2].toLowerCase();
                     const startNum = daysMap[startDay];
                     const endNum = daysMap[endDay];
                     
                     if (startNum !== undefined && endNum !== undefined && targetDayNum !== undefined) {
                         // Handle wrap around (e.g. Sexta a Terça) if needed, but usually it's linear for weekdays
                         if (startNum <= endNum) {
                             if (targetDayNum >= startNum && targetDayNum <= endNum) rangeMatches = true;
                         } else {
                             // Wrap around week (rare for confession times but possible)
                             if (targetDayNum >= startNum || targetDayNum <= endNum) rangeMatches = true;
                         }
                     }
                 }
                 if (rangeMatches) matchesDay = true;
                 else matchesDay = false; 
            } else {
                matchesDay = false;
            }
        }

        return matchesSearch && matchesDay;
    });
  }, [selectedCity, searchQuery, selectedDay]);

  return (
    <>
      <a
        href="#confissoes"
        className={`fixed left-0 top-1/2 -translate-y-1/2 bg-red-800/90 text-white p-1 md:p-4 shadow-lg rounded-r-lg cursor-pointer transition-all duration-300 ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true)
        }}
      >
        <p className="font-bold text-base md:text-lg mb-0 md:mb-2">Horários de Confissões</p>
        <p style={{ fontFamily: 'Cinzel Decorative, cursive' }} className="text-xs md:text-sm">Clique para abrir</p>
      </a>
      {!isExpanded && (
        <div
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-red-800/90 text-white p-2 shadow-lg rounded-r-lg cursor-pointer"
          onClick={() => setIsExpanded(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          id="confissoes"
          className="max-h-[90vh] overflow-y-auto w-[95vw] sm:w-[90vw] md:max-w-2xl rounded-lg flex flex-col items-center [&>button:not(.custom-close-button)]:hidden p-0 gap-0"
          style={{ backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #e0e0e0 25%, #c3c3c3 50%, #949da4 100%)' }}
        >
          <DialogHeader className="bg-red-800 text-white p-3 sticky top-0 z-50 w-full flex flex-row items-center justify-between shadow-md">
             <div className="flex items-center gap-2 flex-1">
                 {isSearchOpen ? (
                     <div className="flex items-center w-full bg-white rounded-md overflow-hidden animate-in fade-in slide-in-from-left-2 duration-300">
                         <Search className="h-4 w-4 text-gray-500 ml-2" />
                         <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Pesquisar paróquia..." 
                            className="border-0 focus-visible:ring-0 text-gray-800 h-8 bg-transparent"
                            autoFocus
                         />
                         <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-gray-500 hover:text-gray-700"
                            onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery('');
                            }}
                         >
                             <X className="h-4 w-4" />
                         </Button>
                     </div>
                 ) : (
                    <>
                        <div className="w-8"></div> {/* Spacer to center title roughly */}
                        <DialogTitle className="text-center flex-1 text-base md:text-lg">Horários de Confissão</DialogTitle>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-white hover:bg-red-700 hover:text-white h-8 w-8"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </>
                 )}
             </div>
            <button 
                onClick={() => setIsOpen(false)} 
                className="custom-close-button p-1 ml-2 text-white border-2 border-white rounded-full hover:bg-white/20 transition-colors duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
          </DialogHeader>
          
          <div className="p-4 w-full overflow-y-auto">
            <div className="mb-4 sticky top-0 z-40 bg-white/80 backdrop-blur-md py-2 -mx-4 px-4 shadow-sm">
              <div className="mb-2">
                  <label className="block font-bold mb-1 text-gray-800 text-xs uppercase tracking-wide">Cidades</label>
                  <div className="overflow-x-auto pb-2 saints-nav-container hide-scrollbar" ref={saintsNavRef}>
                    <div className="flex flex-nowrap">
                      {confessionData.map((data) => (
                        <button
                          key={data.city}
                          data-city={data.city}
                          onClick={() => handleCityChange(data.city)}
                          className={`flex-shrink-0 px-3 py-1.5 text-sm mr-2 rounded-full border transition-colors duration-200 whitespace-nowrap ${selectedCity === data.city ? 'bg-red-800 text-white border-red-800 font-semibold shadow-sm' : 'text-gray-600 border-gray-300 hover:border-red-800 hover:text-red-800'}`}>
                          {data.city}
                        </button>
                      ))}
                    </div>
                  </div>
              </div>

              <div>
                 <label className="block font-bold mb-1 text-gray-800 text-xs uppercase tracking-wide">Dia da Semana</label>
                 <div className="overflow-x-auto pb-1 saints-nav-container hide-scrollbar" ref={daysNavRef}>
                    <div className="flex flex-nowrap">
                        {DAYS_OF_WEEK.map((day) => (
                            <button
                                key={day}
                                onClick={() => handleDayChange(day)}
                                className={`flex-shrink-0 px-3 py-1.5 text-xs mr-2 rounded-full border transition-colors duration-200 whitespace-nowrap ${selectedDay === day ? 'bg-red-100 text-red-800 border-red-800 font-semibold' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                 </div>
              </div>
            </div>

            <div className="w-full min-h-[300px]">
              {filteredParishes.length > 0 ? (
                  <div>
                    {filteredParishes.map((parish, index) => {
                      const isRedBg = index % 2 !== 0;
                      return (
                        <div 
                          key={parish.name} 
                          className={`mb-4 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.01] ${isRedBg ? 'bg-red-800 text-white' : 'bg-white text-gray-800'}`}>
                          <h3 className="text-lg font-bold break-words text-center leading-tight mb-1">{parish.name}</h3>
                          <p className="text-sm break-words text-center opacity-90 mb-2">{parish.address}</p>
                          <div className={`w-full h-px mb-3 ${isRedBg ? 'bg-white/30' : 'bg-gray-200'}`}></div>
                          <p className="text-sm break-words text-center font-medium leading-relaxed">{parish.times}</p>
                          <div className="flex items-center justify-center flex-wrap mt-4 gap-2">
                            <a 
                              href={parish.location} 
                              target="_blank" 
                              rel="noreferrer" 
                              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-colors duration-200 flex items-center gap-1 ${isRedBg ? 'bg-white text-red-800 hover:bg-gray-100' : 'bg-red-800 text-white hover:bg-red-700'}`}>
                                <span>Mapa</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </a>
                            {parish.instagram && (
                              <a 
                                href={parish.instagram} 
                                target="_blank" 
                                rel="noreferrer" 
                                className={`border px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md flex items-center shadow-sm transition-colors duration-200 gap-1 ${isRedBg ? 'bg-transparent border-white text-white hover:bg-white hover:text-red-800' : 'bg-transparent border-pink-500 text-pink-500 hover:bg-pink-50 hover:text-white'}`}>
                                <span>Insta</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-7.325 3.167-7.525 7.525-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.2 4.358 3.167 7.325 7.525 7.525 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 7.325-3.167 7.525-7.525.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-3.167-7.325-7.525-7.525-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.203 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    )}
                  </div>
              ) : (
                  <div className="text-center py-10 opacity-60">
                      <p className="text-lg font-semibold">Nenhuma paróquia encontrada</p>
                      <p className="text-sm">Tente ajustar os filtros de cidade ou dia.</p>
                  </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
