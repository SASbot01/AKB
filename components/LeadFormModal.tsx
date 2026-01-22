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
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    facturacion: '',
    tipoNegocio: '',
    nivelCompromiso: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Import Supabase helper
      const { saveLead } = await import('../lib/supabase');
      // Import tracking helper
      const { trackLeadSubmission } = await import('../lib/tracking');

      // Save to Supabase
      const result = await saveLead({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        facturacion: formData.facturacion,
        tipoNegocio: formData.tipoNegocio,
        nivelCompromiso: formData.nivelCompromiso,
        source: 'lead_form_modal',
        url: window.location.href,
      });

      // Track conversion event
      trackLeadSubmission({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        facturacion: formData.facturacion,
        tipoNegocio: formData.tipoNegocio,
        nivelCompromiso: formData.nivelCompromiso,
      });

      // Also save to localStorage as backup
      localStorage.setItem('akb_lead_data', JSON.stringify(formData));

      setLoading(false);

      if (result.success) {
        alert("¡Gracias por rellenar el formulario! Pronto nos pondremos en contacto contigo.\n\nMientras tanto, te pedimos encarecidamente que mires el video para saber si esto es para ti.");
      } else {
        // Even if Supabase fails, we saved to localStorage
        alert("¡Gracias por rellenar el formulario! Tus datos han sido guardados.\n\nMientras tanto, te pedimos encarecidamente que mires el video para saber si esto es para ti.");
      }

      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Save to localStorage as fallback
      localStorage.setItem('akb_lead_data', JSON.stringify(formData));
      setLoading(false);
      alert("¡Gracias por rellenar el formulario! Tus datos han sido guardados.\n\nMientras tanto, te pedimos encarecidamente que mires el video para saber si esto es para ti.");
      onSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            {title || "Solicitud de Acceso & Pre-Cualificación"}
          </h3>
          <p className="text-slate-500 text-sm text-center mb-6 leading-relaxed">
            Completa este formulario para acceder a la página y al video completo. Nuestro equipo analizará tu perfil.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nombre Completo</label>
                <input
                  required
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2.5 rounded focus:border-corporate-500 focus:outline-none focus:ring-1 focus:ring-corporate-500/50 transition-all shadow-sm text-sm"
                  placeholder="Ej. Carlos Martínez"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Corporativo</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
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
                  name="facturacion"
                  value={formData.facturacion}
                  onChange={handleChange}
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
                  name="tipoNegocio"
                  value={formData.tipoNegocio}
                  onChange={handleChange}
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
                  name="nivelCompromiso"
                  value={formData.nivelCompromiso}
                  onChange={handleChange}
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

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-akb-900 font-bold py-4 px-6 rounded-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>

                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? 'Enviando...' : 'DESBLOQUEAR ANÁLISIS'}
                  {!loading && <ShieldCheck className="w-5 h-5" />}
                </span>
              </button>
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