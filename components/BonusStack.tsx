import React, { useState } from 'react';
import { Check, Shield, Building2, Landmark, Lock, Globe, FileText, Scale } from 'lucide-react';
import { Button } from './Button';
import { LeadFormModal } from './LeadFormModal';

export const BonusStack: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coreArchitecture = [
    {
      title: "Fase 1: Strategy & Risk Review (El Criterio)",
      description: "Análisis de residencia, flujos y activos. Entrega del Blueprint Defendible: tu hoja de ruta jurídica y fiscal con riesgos mapeados y mitigados antes de ejecutar.",
      icon: <FileText className="w-6 h-6 text-white" />
    },
    {
      title: "Fase 2: Implementación Corporativa (El Vehículo)",
      description: "Constitución \"llave en mano\" en EAU (Mainland o Free Zone según diagnóstico). Gestión de licencias, tasas gubernamentales y emisión de Emirates ID.",
      icon: <Building2 className="w-6 h-6 text-white" />
    },
    {
      title: "Fase 3: Setup Bancario & Operativo (El Flujo)",
      description: "Apertura de cuentas corporativas y pasarelas de pago. Diseño de narrativa de compliance para facilitar la operativa con banca tradicional y crypto-friendly.",
      icon: <Landmark className="w-6 h-6 text-white" />
    }
  ];

  const sovereigntySuite = [
    {
      title: "Gestión de Residencia & Golden Visa",
      description: "Tramitación integral de visados de residencia para accionistas y familia. Gestión prioritaria de Golden Visa (10 años) para inversores inmobiliarios o perfiles cualificados.",
      icon: <Globe className="w-5 h-5 text-corporate-600" />
    },
    {
      title: "Escudo de Compliance (ESR + UBO)",
      description: "Alta y registro obligatorio en Economic Substance Regulations y Ultimate Beneficial Owner. Garantizamos que tu estructura cumpla la normativa desde el día uno para evitar sanciones.",
      icon: <Shield className="w-5 h-5 text-corporate-600" />
    },
    {
      title: "Protección de Legado (Wills Registration)",
      description: "Asesoramiento para el registro de voluntades (Wills) bajo normativa DIFC/ADJD, protegiendo tus activos y sucesión frente a la aplicación de la Sharia Law por defecto.",
      icon: <Lock className="w-5 h-5 text-corporate-600" />
    },
    {
      title: "Registro de Marca (Trademark Protection)",
      description: "Protección de propiedad intelectual. Registramos tu marca comercial para asegurar que tu activo intangible esté legalmente blindado en la jurisdicción.",
      icon: <Scale className="w-5 h-5 text-corporate-600" />
    }
  ];

  const handleOpen = () => {
      // Check persistence in case we need to skip form
      if (localStorage.getItem('akb_lead_submitted') === 'true') {
           // Scroll to top or handle navigation to calendar
           window.scrollTo({ top: 0, behavior: 'smooth' });
           alert("Ya has desbloqueado el contenido. Por favor, revisa el calendario en la parte superior.");
           window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
          setIsModalOpen(true);
      }
  }

  return (
    <>
      <LeadFormModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={() => { 
              setIsModalOpen(false); 
              localStorage.setItem('akb_lead_submitted', 'true');
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
      />

      {/* Main Ecosystem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              TU ECOSISTEMA DE SOBERANÍA GLOBAL
            </h2>
            <p className="text-slate-600 text-lg">
              No es solo abrir una empresa. Es integrar fiscalidad, banca, residencia y protección patrimonial en una sola arquitectura defendible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            
            {/* Left Column: Core Architecture */}
            <div className="bg-slate-900 rounded-xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden h-full">
               {/* Decorative background */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-corporate-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="flex items-center gap-3 mb-8 relative z-10">
                 <div className="p-2 bg-corporate-600 rounded shadow-lg shadow-corporate-600/20">
                   <Building2 className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-2xl font-display font-bold">LA ARQUITECTURA PRINCIPAL (CORE)</h3>
               </div>
               <p className="text-slate-400 mb-8 text-sm border-l-2 border-corporate-600 pl-4 relative z-10">
                 El esqueleto operativo de tu nueva realidad global.
               </p>

               <div className="space-y-8 relative z-10">
                 {coreArchitecture.map((item, idx) => (
                   <div key={idx} className="flex gap-4">
                     <div className="flex-shrink-0 mt-1">
                       <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                         <Check className="w-4 h-4 text-corporate-500" />
                       </div>
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Right Column: Sovereignty Suite */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-slate-200 h-full flex flex-col">
               <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 bg-slate-100 rounded">
                   <Shield className="w-6 h-6 text-slate-900" />
                 </div>
                 <h3 className="text-2xl font-display font-bold text-slate-900">SOVEREIGNTY SUITE</h3>
               </div>
               <p className="text-slate-500 mb-8 text-sm border-l-2 border-slate-300 pl-4">
                 Capas de blindaje y funcionalidad que activamos según tu perfil (Integraciones Incluidas).
               </p>

               <div className="space-y-6 flex-grow">
                 {sovereigntySuite.map((item, idx) => (
                   <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-corporate-200 transition-colors">
                     <div className="flex items-center gap-3 mb-3">
                       {item.icon}
                       <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed ml-8">{item.description}</p>
                   </div>
                 ))}
               </div>
            </div>

          </div>

          {/* Pricing & CTA Section */}
          <div className="mt-20 max-w-4xl mx-auto text-center bg-corporate-50 p-8 md:p-12 rounded-2xl border border-corporate-100 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">TARIFA Y SIGUIENTES PASOS</h3>
            <p className="text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Tu inversión se define en el Diagnóstico. Cada arquitectura es única. No vendemos plantillas; diseñamos trajes a medida. El coste de implementación dependerá de la complejidad de tu estructura, el tipo de licencia y las capas de protección necesarias.
            </p>
            
            <Button onClick={handleOpen} className="w-full md:w-auto text-lg py-4 px-12 shadow-xl shadow-corporate-600/20">
              SOLICITAR MI DIAGNÓSTICO PREVIO
            </Button>
          </div>

        </div>
      </section>
    </>
  );
};