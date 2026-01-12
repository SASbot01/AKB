import React, { useState } from 'react';
import { X, ShieldCheck, Lock, ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
}

export const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose, onSubmit, title }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Popup requirement as per instructions
      alert("Gracias. Su perfil ha sido registrado y pre-calificado. Nuestro equipo analizará sus datos y le contactará en breve. \n\nA continuación, acceda al video explicativo.");
      onSubmit();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-corporate-600" />
            <span className="text-slate-900 font-display font-bold">Solicitud de Acceso & Pre-Cualificación</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-2 text-center">
            {title || "Desbloquear Diagnóstico Premium"}
          </h3>
          <p className="text-slate-500 text-sm text-center mb-6 leading-relaxed">
            En la llamada de diagnóstico le daremos una <strong>cifra exacta</strong> del capital que podrá optimizar (ahorro fiscal y protección) basada en su situación actual. Por favor, sea preciso.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nombre Completo</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2.5 rounded focus:border-corporate-500 focus:outline-none focus:ring-1 focus:ring-corporate-500/50 transition-all shadow-sm text-sm"
                  placeholder="Ej. Carlos Martínez"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Corporativo</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2.5 rounded focus:border-corporate-500 focus:outline-none focus:ring-1 focus:ring-corporate-500/50 transition-all shadow-sm text-sm"
                  placeholder="carlos@empresa.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">WhatsApp / Teléfono</label>
              <input 
                required
                type="tel" 
                className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2.5 rounded focus:border-corporate-500 focus:outline-none focus:ring-1 focus:ring-corporate-500/50 transition-all shadow-sm text-sm"
                placeholder="+34 600 000 000"
              />
            </div>

            {/* Qualification Fields */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Facturación Anual Actual</label>
              <div className="relative">
                <select 
                  required
                  className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2.5 rounded focus:border-corporate-500 focus:outline-none focus:ring-1 focus:ring-corporate-500/50 transition-all shadow-sm appearance-none text-sm"
                >
                  <option value="">Seleccione rango...</option>
                  <option value="<100k">Menos de 100k€ (No cualifica)</option>
                  <option value="100k-500k">100k€ - 500k€</option>
                  <option value="500k-1M">500k€ - 1M€</option>
                  <option value="1M-5M">1M€ - 5M€</option>
                  <option value=">5M">Más de 5M€</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Tipo de Negocio</label>
              <div className="relative">
                <select 
                  required
                  className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2.5 rounded focus:border-corporate-500 focus:outline-none focus:ring-1 focus:ring-corporate-500/50 transition-all shadow-sm appearance-none text-sm"
                >
                  <option value="">Seleccione tipo...</option>
                  <option value="digital_service">Servicios Digitales / Agencia / Consultoría</option>
                  <option value="ecommerce">E-commerce / Dropshipping / Amazon FBA</option>
                  <option value="crypto">Inversor Cripto / Web3 / DeFi</option>
                  <option value="saas">SaaS / Software</option>
                  <option value="trader">Trading / Inversiones Tradicionales</option>
                  <option value="other">Otro (Consultar)</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nivel de Compromiso</label>
              <div className="relative">
                <select 
                  required
                  className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2.5 rounded focus:border-corporate-500 focus:outline-none focus:ring-1 focus:ring-corporate-500/50 transition-all shadow-sm appearance-none text-sm"
                >
                  <option value="">Seleccione nivel...</option>
                  <option value="info">Solo estoy curioseando</option>
                  <option value="considering">Considerando opciones para este año</option>
                  <option value="ready">Listo para actuar si los números cuadran</option>
                  <option value="urgent">Urgente (Necesito solución en 30 días)</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="pt-4">
              <Button fullWidth type="submit" disabled={loading} className="flex justify-center items-center gap-2 py-3">
                {loading ? (
                  "Verificando Perfil..."
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Desbloquear Análisis
                  </>
                )}
              </Button>
            </div>
            
            <p className="text-[10px] text-slate-400 text-center mt-4">
              Sus datos están protegidos bajo estricto secreto profesional. AKB Capital Group &copy;.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};