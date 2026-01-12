import React from 'react';
import { Users, Scale, FileCheck } from 'lucide-react';

export const Authority: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Column */}
          <div className="lg:w-1/2">
            <span className="text-corporate-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              ¿Quiénes somos?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              AKB Capital Group: <br/>Arquitectos de tu Soberanía.
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">
                No somos una gestoría tradicional ni un marketplace automatizado de trámites. Somos una <strong>Firma de Arquitectura Internacional</strong>.
              </p>
              <p>
                Operamos con una filosofía de <strong>Private Office</strong>: discreción, precisión y criterio. Entendemos que para un cliente de alto nivel, la seguridad jurídica vale más que la rapidez. Nuestro equipo combina expertos en fiscalidad internacional, derecho corporativo y operativa bancaria global.
              </p>
              <p>
                Nuestro principio: <strong>Compliance-first</strong>. No construimos castillos de naipes; construimos fortalezas jurídicas diseñadas para durar generaciones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-100">
               <div className="flex flex-col items-start">
                 <div className="bg-corporate-50 p-3 rounded-lg mb-3">
                   <Users className="text-corporate-600 w-6 h-6" />
                 </div>
                 <span className="text-slate-900 font-bold text-sm">Discreción Private Office</span>
               </div>
               <div className="flex flex-col items-start">
                 <div className="bg-corporate-50 p-3 rounded-lg mb-3">
                    <Scale className="text-corporate-600 w-6 h-6" />
                 </div>
                 <span className="text-slate-900 font-bold text-sm">Derecho Corporativo</span>
               </div>
               <div className="flex flex-col items-start">
                 <div className="bg-corporate-50 p-3 rounded-lg mb-3">
                    <FileCheck className="text-corporate-600 w-6 h-6" />
                 </div>
                 <span className="text-slate-900 font-bold text-sm">Compliance First</span>
               </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 group">
              {/* Abstract Glass Building / Corporate image */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="AKB Corporate Office" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-2xl font-display font-bold mb-2">Dubai Headquarters</div>
                <p className="text-slate-300 text-sm">Strategic location for global operations. Connecting East and West.</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-corporate-100 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-corporate-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};