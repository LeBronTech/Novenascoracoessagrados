'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { confessionData } from '@/lib/confession-data';

export function ConfessionTimesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Brasília');

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

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const selectedData = confessionData.find((data) => data.city === selectedCity);

  return (
    <>
      <div
        className={`fixed left-0 top-1/3 -translate-y-1/2 bg-red-800/90 text-white p-4 shadow-lg rounded-r-lg cursor-pointer transition-all duration-300 ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={() => setIsOpen(true)}
      >
        <p className="font-bold text-lg mb-2">Horários de Confissões</p>
        <p>Clique para ver os horários</p>
      </div>
      {!isExpanded && (
        <div
          className="fixed left-0 top-1/3 -translate-y-1/2 bg-red-800/90 text-white p-2 shadow-lg rounded-r-lg cursor-pointer"
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Horários de Confissão</DialogTitle>
            <DialogDescription>
              Filtre por cidade para ver os horários de confissão.
            </DialogDescription>
          </DialogHeader>
          <div className="mb-4">
            <label htmlFor="city-filter" className="block font-bold mb-2">Filtre por cidade:</label>
            <select id="city-filter" value={selectedCity} onChange={handleCityChange} className="w-full p-2 border rounded-md">
              {confessionData.map((data) => (
                <option key={data.city} value={data.city}>{data.city}</option>
              ))}
            </select>
          </div>
          {selectedData && (
            <div>
              {selectedData.parishes.map((parish) => (
                <div key={parish.name} className="mb-4">
                  <h3 className="text-xl font-bold">{parish.name}</h3>
                  <p>{parish.address}</p>
                  <p>{parish.times}</p>
                  <a href={parish.location} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Ver no mapa</a>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
