import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { config } from '../config';

export const FinalCTA: React.FC = () => {
    const handleClick = () => {
        window.location.href = config.goHighLevelUrl;
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-akb-800 via-akb-700 to-akb-900 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-akb-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-akb-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <Sparkles className="w-16 h-16 text-akb-300 animate-pulse" />
                            <div className="absolute inset-0 bg-akb-300 blur-xl opacity-50"></div>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        ¿Ya lo tienes claro?
                    </h2>

                    <p className="text-lg md:text-xl text-akb-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Da el siguiente paso y agenda tu llamada estratégica con nuestro equipo de expertos
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleClick}
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-akb-300 hover:bg-akb-200 text-akb-900 font-bold text-lg rounded-lg shadow-2xl hover:shadow-akb-300/50 transition-all duration-300 transform hover:scale-105"
                        >
                            <span>Si ya lo tienes claro, clica aquí</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-akb-300 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
                        </button>
                    </div>

                    {/* Subtext */}
                    <p className="text-akb-200 text-sm mt-6">
                        ⚡ Respuesta en menos de 24 horas
                    </p>
                </div>
            </div>
        </section>
    );
};
