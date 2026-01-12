import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-solution" className="py-24 bg-white text-akb-800">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-sans font-light text-akb-800 leading-tight mb-8">
                HOY EN DÍA, EL PROBLEMA <br/>
                <span className="font-serif italic font-bold text-akb-700">NO ES GANAR DINERO.</span>
            </h2>
            <div className="w-24 h-1 bg-akb-400 mb-8 md:mx-0 mx-auto"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                El problema es qué haces con él cuando empiezas a facturar en serio. Muchos negocios crecen sobre una base mal diseñada.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Problems */}
            <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-akb-400 uppercase mb-8">
                    La Situación Actual
                </h3>
                <div className="space-y-0 border-l border-gray-200 pl-8">
                    {[
                        "Fiscalidad ineficiente",
                        "Banca frágil",
                        "Riesgo innecesario",
                        "Dependencia total de un solo país"
                    ].map((item, idx) => (
                        <div key={idx} className="mb-10 relative">
                            <span className="absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-2 border-akb-200 rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-akb-400 rounded-full"></div>
                            </span>
                            <p className="text-lg font-medium text-akb-800">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-2 p-6 bg-akb-50 border-l-2 border-akb-700">
                    <p className="text-akb-700 italic font-serif">
                        "Ese planteamiento es válido al principio, pero se vuelve ineficiente cuando el volumen aumenta."
                    </p>
                </div>
            </div>

            {/* Right Column: What You Will Understand (Card Style) */}
            <div className="bg-akb-800 p-10 border border-akb-700 rounded-sm relative overflow-hidden text-white shadow-xl">
                 {/* Decorative large number or icon */}
                 <div className="absolute top-0 right-0 p-6 opacity-5">
                    <CheckCircle2 className="w-40 h-40 text-white" />
                 </div>
                 
                 <h3 className="text-xl font-serif font-bold text-white mb-8 relative z-10">
                    QUÉ VAS A ENTENDER EN ESTE SISTEMA
                 </h3>
                 
                 <ul className="space-y-6 relative z-10">
                    {[
                        "Por qué “abrir una empresa” es la decisión equivocada.",
                        "Diferencia real entre estructura, residencia, fiscalidad y operativa.",
                        "Cómo usan otros empresarios jurisdicciones como Dubái, EE. UU. o Estonia.",
                        "En qué punto tiene sentido dar este paso (y en cuál no)."
                    ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                            <span className="text-akb-400 mt-1">✦</span>
                            <span className="text-akb-100 font-light leading-relaxed">{item}</span>
                        </li>
                    ))}
                 </ul>
            </div>

        </div>
      </div>
    </section>
  );
};