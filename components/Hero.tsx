import React, { useState, useEffect } from 'react';
import { Play, Lock, ArrowRight, Trees } from 'lucide-react';
import { Button } from './Button';
import { LeadFormModal } from './LeadFormModal';

type HeroView = 'locked' | 'video' | 'thankyou';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewState, setViewState] = useState<HeroView>('locked');

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('akb_lead_submitted');
    if (hasSubmitted === 'true') {
      setViewState('video');
    }
  }, []);

  const handleOpenModal = () => {
    if (viewState === 'locked') {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSubmit = () => {
    localStorage.setItem('akb_lead_submitted', 'true');
    setIsModalOpen(false);
    setViewState('video');
  };

  const handleVideoFinished = () => {
    setViewState('thankyou');
    const nextSection = document.getElementById('next-steps');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleFormSubmit}
        title="Acceso Restringido"
      />
      
      {/* Navbar / Logo Area */}
      <div className="absolute top-0 left-0 w-full z-30 pt-10">
          <div className="container mx-auto px-6 flex justify-center">
             <div className="flex flex-col items-center">
                {/* Cedar Tree Logo Approximation */}
                <Trees className="w-12 h-12 text-white mb-3" strokeWidth={1} />
                <span className="text-3xl font-serif text-white tracking-widest">AKB</span>
                <span className="text-[10px] font-sans font-medium text-akb-200 tracking-[0.3em] uppercase mt-2">Capital Group</span>
             </div>
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
                ORDENA TU ESTRUCTURA EMPRESARIAL <br/>
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
                    {viewState === 'locked' && (
                    <div 
                        className="absolute inset-0 cursor-pointer group"
                        onClick={handleOpenModal}
                    >
                        <div className="absolute inset-0 bg-akb-900/60 z-10 mix-blend-multiply"></div>
                        {/* Background Image: Corporate/Abstract similar to Page 3 */}
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                            alt="Corporate Office" 
                            className="w-full h-full object-cover opacity-50 grayscale"
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-20 h-20 rounded-full border border-akb-300/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                                <div className="w-14 h-14 bg-akb-300 rounded-full flex items-center justify-center shadow-lg">
                                    <Play className="w-6 h-6 text-akb-900 ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-0 w-full text-center z-20">
                            <span className="text-akb-100 text-[10px] tracking-widest uppercase font-bold border-b border-akb-300/50 pb-1">Ver presentación privada</span>
                        </div>
                    </div>
                    )}

                    {viewState === 'video' && (
                    <div className="w-full h-full flex items-center justify-center bg-black">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=1&rel=0" 
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
                 {viewState === 'locked' ? (
                    <Button onClick={handleOpenModal} variant="secondary">
                        ACCEDE AL VÍDEO COMPLETO
                    </Button>
                 ) : (
                    <Button onClick={handleVideoFinished} variant="primary" className="animate-pulse">
                        CONTINUAR LEYENDO <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                 )}
            </div>

        </div>
      </section>
    </>
  );
};