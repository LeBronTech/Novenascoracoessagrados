'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { confessionData } from '@/lib/confession-data';

export function ConfessionTimesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Arniqueiras & Riacho Fundo');

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
  };

  const selectedData = confessionData.find((data) => data.city === selectedCity);

  return (
    <>
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 bg-red-800/90 text-white p-1 md:p-4 shadow-lg rounded-r-lg cursor-pointer transition-all duration-300 ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={() => setIsOpen(true)}
      >
        <p className="font-bold text-base md:text-lg mb-0 md:mb-2">Horários de Confissões</p>
        <p style={{ fontFamily: 'Cinzel Decorative, cursive' }} className="text-xs md:text-sm">Clique para abrir</p>
      </div>
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
        <DialogContent className="sm:max-w-[425px] bg-gray-100 overflow-hidden">
          <DialogHeader className="bg-red-800 text-white p-4 rounded-t-lg">
            <DialogTitle>Horários de Confissão</DialogTitle>
            <DialogDescription className="text-gray-200">
              Filtre por cidade para ver os horários de confissão.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4">
            <div className="mb-4">
              <label className="block font-bold mb-2">Filtre por cidade:</label>
              <div className="flex justify-center overflow-x-auto pb-2 saints-nav-container">
                <div className="flex">
                  {confessionData.map((data) => (
                    <button
                      key={data.city}
                      onClick={() => handleCityChange(data.city)}
                      className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full border-2 font-semibold transition-colors duration-200 ${selectedCity === data.city ? 'bg-red-800 text-white border-red-800' : 'text-red-800 border-red-800'}`}>
                      {data.city}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden">
              {selectedData && (
                <div>
                  {selectedData.parishes.map((parish, index) => (
                    <div key={parish.name} className={`mb-4 p-4 rounded-lg ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <h3 className="text-xl font-bold">{parish.name}</h3>
                      <p>{parish.address}</p>
                      <p>{parish.times}</p>
                      <div className="flex items-center mt-2">
                        <a href={parish.location} target="_blank" rel="noreferrer" className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700">Ver no mapa</a>
                        {parish.instagram && (
                          <a href={parish.instagram} target="_blank" rel="noreferrer" className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-7.325 3.167-7.525 7.525-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.2 4.358 3.167 7.325 7.525 7.525 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 7.325-3.167 7.525-7.525.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-3.167-7.325-7.525-7.525-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.203 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
                            </svg>
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
