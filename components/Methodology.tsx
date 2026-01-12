import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  const handleFinalAction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    { id: 1, text: "Primero se entiende el negocio." },
    { id: 2, text: "Luego se diseña la estructura." },
    { id: 3, text: "Y solo después se ejecuta." }
  ];

  return (
    <section id="next-steps" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Steps Visualization - Page 7 Style */}
        <div className="relative mb-24">
            {/* Connecting Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-akb-200 md:left-auto md:top-[27px] md:right-0 md:h-px md:w-full -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="flex md:flex-col items-center gap-6 md:gap-8 relative z-10 bg-white md:bg-transparent p-2 md:p-0">
                        {/* Number Circle */}
                        <div className="w-14 h-14 rounded-full bg-akb-700 flex items-center justify-center text-white text-xl font-serif font-bold shadow-lg shadow-black/10 shrink-0 border-4 border-white">
                            {step.id}
                        </div>
                        {/* Text */}
                        <p className="text-lg font-medium text-akb-900 md:text-center font-serif">
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Final CTA */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto bg-akb-50 p-12 rounded-sm border border-akb-100 shadow-sm">
          <p className="text-xl text-akb-700 mb-8 font-light leading-relaxed font-serif italic">
            "Si lo que has visto tiene sentido para ti, deja tus datos y accede al siguiente paso."
          </p>
          
          <div className="w-full flex justify-center">
            <Button onClick={handleFinalAction} variant="primary" className="px-12 py-5">
              SOLICITAR DIAGNÓSTICO <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};