
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConfessionTimesModal } from '@/components/confession-times-modal';

export function ConfessionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    let initialTimer: NodeJS.Timeout;
    let autoHideTimer: NodeJS.Timeout;

    // Show the popup after 3 seconds
    initialTimer = setTimeout(() => {
      setIsVisible(true);

      // After 2 seconds, hide the button and show the arrow icon
      autoHideTimer = setTimeout(() => {
        setIsButtonVisible(false);
      }, 2000);
    }, 3000);

    const handleScroll = () => {
      if (isVisible) {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(autoHideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      className={cn(
        "fixed top-[calc(50%-300px)] left-0 z-50 transition-all duration-700 ease-out",
        isVisible ? "translate-x-0" : "-translate-x-[calc(100%-2px)]"
      )}
    >
      {isButtonVisible ? (
        <ConfessionTimesModal>
          <Button
            className="rounded-l-none rounded-r-lg shadow-lg flex items-center gap-2 pr-6 pl-4 py-2 text-primary-foreground bg-primary hover:bg-primary/90"
          >
            <ChevronLeft className="h-5 w-5" />
            Horários de Confissão
          </Button>
        </ConfessionTimesModal>
      ) : (
        <button
          onClick={() => setIsButtonVisible(true)}
          className="rounded-l-none rounded-r-lg shadow-lg p-2 text-primary-foreground bg-primary/70 hover:bg-primary/90 transition-transform duration-300 hover:scale-110"
          title="Horários de Confissão"
        >
          <ArrowUp className="h-5 w-5 rotate-90" />
        </button>
      )}
    </div>
  );
}
