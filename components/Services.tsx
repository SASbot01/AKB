import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Building2, Landmark, Plane, FileText, Scale, ScrollText, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Corporate Structuring",
    description: "Diseño de entidades Free Zone, Mainland y Offshore optimizadas para comercio internacional y protección de activos.",
    icon: Building2
  },
  {
    title: "Bank Account Opening",
    description: "Acceso a la banca de élite en EAU. Gestión completa de cumplimiento y relaciones bancarias corporativas.",
    icon: Landmark
  },
  {
    title: "Golden Visa & Residency",
    description: "Obtención de residencia por inversión, propiedad o talento. Gestión integral para titulares y dependientes.",
    icon: Plane
  },
  {
    title: "Tax & VAT Compliance",
    description: "Asesoría fiscal experta. Registro de IVA, Impuesto Corporativo y cumplimiento normativo internacional.",
    icon: FileText
  },
  {
    title: "Trademark & IP Protection",
    description: "Salvaguarda de activos intangibles. Registro de marcas y propiedad intelectual a nivel global.",
    icon: Scale
  },
  {
    title: "Wills & Estate Planning",
    description: "Planificación sucesoria segura bajo la jurisdicción DIFC o ADJD para proteger su legado familiar.",
    icon: ScrollText
  },
  {
    title: "IT & Digital Services",
    description: "Infraestructura digital corporativa, dominios y presencia web alineada con su estructura empresarial.",
    icon: Cpu
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Ecosistema de Servicios"
          title="Infraestructura Corporativa 360º"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group ${index === services.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-corporate-50 rounded-lg border border-corporate-100 group-hover:border-corporate-500 transition-colors">
                  <service.icon className="w-6 h-6 text-corporate-600" />
                </div>
                <span className="text-slate-400 font-mono text-xs">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-corporate-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};