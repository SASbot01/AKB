import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    quote: "Joder, por fin duermo tranquilo. Llevaba dos años facturando fuerte con mi agencia y acojonado cada vez que me llegaba una carta de Hacienda. AKB no me vendió la moto de ‘no pagues nada’, me montaron un plan serio.",
    author: "Carlos M.",
    role: "CEO Agencia de Marketing (Madrid -> Dubái)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "Lo que más valoro es que hablan mi idioma. No me refiero al español, me refiero a Cripto. Fui a tres abogados antes y me miraban raro. El equipo de AKB entendió mis flujos DeFi a la primera.",
    author: "Javier R.",
    role: "Inversor Web3 (Barcelona -> Dubái)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "Yo no quería irme a vivir fuera, solo quería proteger mi patrimonio. Me diseñaron una estructura Holding que separa mi riesgo de mis activos. La sensación de orden y control que tengo ahora no la había tenido en 15 años.",
    author: "Luis G.",
    role: "Empresario Industrial (Valencia)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    quote: "Pensaba que era un lío de papeles y burocracia, pero la ejecución fue impecable. Literalmente me llevaron de la mano. Lo que prometen de 'Bank-Ready' es verdad; abrí la cuenta de empresa en tiempo récord.",
    author: "Ana P.",
    role: "Consultora E-commerce (Latam -> Global)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
   {
    quote: "Alejandro y su equipo tienen un criterio que no encuentras en gestores normales. No son 'rellena-papeles', son estrategas. El Blueprint que me hicieron me salvó de cometer un error con una LLC en USA.",
    author: "Roberto F.",
    role: "SaaS Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900">Lo que dicen nuestros clientes privados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded border border-slate-200 relative hover:border-corporate-200 transition-colors shadow-sm flex flex-col h-full">
              <Quote className="w-8 h-8 text-corporate-200 absolute top-6 right-6" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic flex-grow">
                "{item.quote}"
              </p>
              <div className="border-t border-slate-200 pt-4 flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="text-slate-900 font-bold text-sm">{item.author}</p>
                  <p className="text-corporate-600 text-xs uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};