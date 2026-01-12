import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "¿Esto es legal o es evasión fiscal?",
    answer: "En AKB no vendemos atajos ni evasión. Vendemos elusión fiscal (optimización 100% legal) mediante tratados internacionales y normativa vigente. Todo es 'Compliance-First' y defendible ante una auditoría."
  },
  {
    question: "¿Es muy caro vuestro servicio?",
    answer: "Caro es improvisar y pagar multas después. Caro es que te bloqueen 100k en el banco por no tener la documentación bien hecha. AKB es una inversión en seguridad y continuidad. Lo barato en este sector sale muy caro."
  },
  {
    question: "¿Ya tengo un gestor en España, ¿para qué os necesito?",
    answer: "Tu gestor local sabe de normativa local. Nosotros orquestamos la arquitectura internacional. No le sustituimos, nos integramos. Pero necesitas a alguien que vea el tablero global completo, no solo el BOE de tu país."
  },
  {
    question: "¿Tengo que vivir en Dubái obligatoriamente?",
    answer: "No necesariamente, depende de tu objetivo (residencia fiscal vs. operativa corporativa). En el Diagnóstico analizamos tu caso para ver qué requisitos de presencia física necesitas cumplir realmente."
  },
  {
    question: "¿Y si tengo criptomonedas?",
    answer: "Somos especialistas en perfiles Crypto-to-Banking. Entendemos la trazabilidad y cómo presentarla a las instituciones financieras para reducir el riesgo de cierre de cuentas."
  },
  {
    question: "¿Qué pasa si las leyes cambian?",
    answer: "Por eso incluimos la fase de 'Ongoing Counsel' (Mantenimiento). Las estructuras son vivas. Monitorizamos los cambios regulatorios para adaptar tu estructura y que siempre estés protegido."
  },
  {
    question: "¿Por qué cobráis por el diagnóstico? ¿No puede ser gratis?",
    answer: "No. El diagnóstico es donde aportamos el mayor valor: el Criterio. 'Comprar criterio evita errores caros'. Ejecutar es fácil; saber qué ejecutar es lo difícil."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeading subtitle="Objeciones" title="Preguntas Frecuentes" />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 bg-slate-50 rounded overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium pr-8 ${openIndex === index ? 'text-corporate-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-corporate-600 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};