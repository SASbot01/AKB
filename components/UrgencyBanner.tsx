import React, { useState, useEffect } from 'react';

export const UrgencyBanner: React.FC = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 4,
    minutes: 23,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              // Timer finished or loop
              hours = 4;
              minutes = 23;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="bg-slate-900 py-3 text-center px-4 sticky top-0 z-50 shadow-md border-b border-corporate-600">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-white text-sm">
        <p className="font-medium tracking-wide">
          <span className="font-bold text-corporate-500">⚠️ ATENCIÓN:</span> Cupo Limitado. Solo aceptamos 5 nuevos clientes este mes.
        </p>
        <div className="bg-white/10 px-3 py-1 rounded font-mono font-bold text-corporate-100">
           Cierre de admisiones: {formatTime(time.days)} DÍAS : {formatTime(time.hours)} HORAS : {formatTime(time.minutes)} MINUTOS
        </div>
      </div>
    </div>
  );
};