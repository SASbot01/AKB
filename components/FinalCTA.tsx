import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface FinalCTAProps {
    onOpenForm: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenForm }) => {
    return (
        <section className="relative py-32 bg-akb-700 overflow-hidden">
            {/* Geometric Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 border border-akb-700/20 transform rotate-12"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 border border-akb-700/20 transform -rotate-6"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-tight">
                        Si lo que has visto tiene sentido para ti, deja tus datos y accede al siguiente paso.
                    </h2>

                    <div className="mt-12">
                        <Button
                            onClick={onOpenForm}
                            variant="primary"
                            className="text-lg px-10 py-5 bg-akb-300 hover:bg-akb-400 text-akb-900 font-bold flex items-center gap-3 mx-auto"
                        >
                            SOLICITAR DIAGNÓSTICO
                            <ArrowRight className="w-6 h-6" />
                        </Button>
                    </div>

                    <p className="mt-8 text-akb-400 text-sm">
                        Respuesta en menos de 24 horas
                    </p>
                </div>
            </div>
        </section>
    );
};
