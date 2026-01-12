import React from 'react';
import { X, Check } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-akb-700 relative overflow-hidden text-white geometric-box">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-akb-300 text-xs font-bold tracking-[0.2em] uppercase block mb-4">Análisis de Perfil</span>
          <h2 className="text-3xl md:text-4xl font-sans font-medium text-white">ESTO NO ES PARA TODO EL MUNDO</h2>
          <div className="w-12 h-0.5 bg-akb-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* NOT FOR - Minimalist outline card */}
          <div className="p-10 border border-white/10 bg-white/5 backdrop-blur-sm">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full">
                    <X className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="text-lg font-serif text-gray-300 tracking-wide uppercase">No es para quien:</h3>
             </div>
             <ul className="space-y-5">
               {[
                 "Busca atajos rápidos",
                 "Quiere soluciones grises o ilegales",
                 "No está dispuesto a hacer las cosas bien"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-gray-400 font-light">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    {item}
                 </li>
               ))}
             </ul>
          </div>

          {/* IS FOR - Solid White/Green Card */}
          <div className="p-10 bg-white shadow-2xl relative transform md:-translate-y-4 border-t-4 border-akb-400">
             
             <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 flex items-center justify-center bg-akb-700 rounded-full text-white">
                    <Check className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif text-akb-800 tracking-wide uppercase">Sí encaja si:</h3>
             </div>
             <ul className="space-y-6">
               {[
                 "Ya facturas o estás a punto de hacerlo",
                 "Quieres seguridad jurídica real",
                 "Piensas en largo plazo",
                 "Valoras dormir tranquilo"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-akb-800 font-medium">
                    <span className="w-1.5 h-1.5 bg-akb-400 rounded-full"></span>
                    {item}
                 </li>
               ))}
             </ul>
          </div>

        </div>

        <div className="mt-20 text-center border-t border-white/5 pt-10">
           <p className="text-xl text-akb-100 font-serif italic max-w-2xl mx-auto leading-relaxed">
             "La clave está en la estructura. Cada caso es distinto. <br/>Por eso aquí no hay paquetes cerrados ni soluciones genéricas."
           </p>
        </div>

      </div>
    </section>
  );
};