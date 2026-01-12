import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-slate-100 shadow-md">
                <ShieldAlert className="w-12 h-12 text-corporate-600" />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-3">
              Garantía de "Claridad Radical" (Risk-Free)
            </h2>
            <p className="text-slate-600 leading-relaxed">
              En AKB tenemos un principio: <strong>Sin promesas peligrosas</strong>. Si durante la Fase 1 (Diagnóstico) detectamos que tu perfil NO es apto para una estructura internacional o que los riesgos superan a los beneficios, te lo diremos claramente y detendremos el proceso ahí. No te venderemos una implementación que no te sirve. Pagamos con criterio para evitarte errores caros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};