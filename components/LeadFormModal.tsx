import React, { useState } from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';
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
        source: 'lead_form_modal',
        url: window.location.href,
      });

      // Track conversion event
      trackLeadSubmission({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
      });

      // Also save to localStorage as backup
      localStorage.setItem('akb_lead_data', JSON.stringify(formData));

      setLoading(false);

      // Call onSubmit which will redirect to /gracias
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Save to localStorage as fallback
      localStorage.setItem('akb_lead_data', JSON.stringify(formData));
      setLoading(false);
      // Still redirect to thank you page
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
            {title || "Solicita tu Sesión Estratégica"}
          </h3>
          <p className="text-slate-500 text-sm text-center mb-6 leading-relaxed">
            Completa tus datos y nuestro equipo se pondrá en contacto contigo para agendar tu sesión.
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
                  {loading ? 'Enviando...' : 'SOLICITAR SESIÓN ESTRATÉGICA'}
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