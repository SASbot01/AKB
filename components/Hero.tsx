import React, { useState, useEffect } from 'react';
import { Play, Lock, ArrowRight, Trees } from 'lucide-react';
import { Button } from './Button';
import { config } from '../config';

type HeroView = 'video' | 'thankyou';

interface HeroProps {
  onOpenForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  const [viewState, setViewState] = useState<HeroView>('video');

  const handleVideoFinished = () => {
    setViewState('thankyou');
    const nextSection = document.getElementById('next-steps');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>

      {/* Navbar / Logo Area */}
      <div className="absolute top-0 left-0 w-full z-30 pt-10">
        <div className="container mx-auto px-6 flex justify-center">
          <h1 className="text-3xl font-serif text-white tracking-widest">
            AKB CAPITAL GROUP
          </h1>
        </div>
      </div>

      <section className="relative min-h-screen flex flex-col justify-center pt-40 pb-20 bg-green-gradient overflow-hidden">

        {/* Geometric Background Elements (Page 4 Style) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Large faint box outlines */}
          <div className="absolute top-20 -left-20 w-96 h-96 border border-white/5 transform rotate-12"></div>
          <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] border border-white/5 transform -rotate-12"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">

          <div className="animate-fade-in-up mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-normal text-white mb-8 leading-tight">
              ORDENA TU ESTRUCTURA EMPRESARIAL <br />
              <span className="font-serif italic text-akb-300">A NIVEL INTERNACIONAL</span>
            </h1>
            <div className="h-px w-24 bg-akb-300/50 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-akb-100 font-light leading-relaxed max-w-2xl mx-auto">
              Diseñamos y ejecutamos estructuras legales, fiscales y operativas para negocios que ya facturan y necesitan orden, claridad y control real.
            </p>
          </div>

          {/* VSL Container */}
          <div className="relative w-full max-w-3xl mx-auto bg-akb-800 p-3 rounded-sm border border-akb-600 shadow-2xl shadow-black/40">
            <div className="relative w-full aspect-video bg-akb-900 overflow-hidden">
              {viewState === 'video' && (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={config.vslVideoUrl}
                    title="VSL"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {viewState === 'thankyou' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-akb-800">
                  <Lock className="w-10 h-10 text-akb-300 mb-4" />
                  <h3 className="text-lg font-serif text-white mb-2">Contenido Desbloqueado</h3>
                  <p className="text-akb-200 text-xs tracking-wide">Deslice hacia abajo para continuar.</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              onClick={onOpenForm}
              variant="primary"
              className="text-lg px-8 py-4 bg-akb-300 hover:bg-akb-400 text-akb-900 font-bold flex items-center gap-2"
            >
              SESIÓN ESTRATÉGICA
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </section>
    </>
  );
};