import React, { useState } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { Button } from './Button';

interface EntryPopupProps {
    isOpen: boolean;
    onSubmit: () => void;
}

export const EntryPopup: React.FC<EntryPopupProps> = ({ isOpen, onSubmit }) => {
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

            // Save to Supabase
            const result = await saveLead({
                nombre: formData.nombre,
                email: formData.email,
                telefono: formData.telefono,
                source: 'entry_popup',
                url: window.location.href,
            });

            // Also save to localStorage as backup
            localStorage.setItem('akb_entry_data', JSON.stringify(formData));
            localStorage.setItem('akb_entry_submitted', 'true');

            setLoading(false);

            if (result.success) {
                alert("¡Bienvenido! Gracias por registrarte. A continuación podrás ver nuestro contenido exclusivo.");
            } else {
                // Even if Supabase fails, we saved to localStorage
                alert("¡Bienvenido! Gracias por registrarte. A continuación podrás ver nuestro contenido exclusivo.");
            }

            onSubmit();
        } catch (error) {
            console.error('Error submitting form:', error);
            // Save to localStorage as fallback
            localStorage.setItem('akb_entry_data', JSON.stringify(formData));
            localStorage.setItem('akb_entry_submitted', 'true');
            setLoading(false);
            alert("¡Bienvenido! Gracias por registrarte. A continuación podrás ver nuestro contenido exclusivo.");
            onSubmit();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md">
            <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-gradient-to-r from-akb-700 to-akb-600 p-6 text-center">
                    <ShieldCheck className="w-12 h-12 text-white mx-auto mb-3" />
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                        Acceso Exclusivo
                    </h2>
                    <p className="text-akb-100 text-sm">
                        Rellena tus datos para ponerte en contacto con nosotros
                    </p>
                </div>

                {/* Content */}
                <div className="p-8">
                    <p className="text-slate-600 text-sm text-center mb-6 leading-relaxed">
                        Completa el formulario para acceder a nuestro contenido premium y descubrir cómo podemos ayudarte.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                Nombre Completo *
                            </label>
                            <input
                                required
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 rounded-lg focus:border-akb-500 focus:outline-none focus:ring-2 focus:ring-akb-500/20 transition-all shadow-sm"
                                placeholder="Ej. Carlos Martínez"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                Email *
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 rounded-lg focus:border-akb-500 focus:outline-none focus:ring-2 focus:ring-akb-500/20 transition-all shadow-sm"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                Teléfono / WhatsApp *
                            </label>
                            <input
                                required
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 rounded-lg focus:border-akb-500 focus:outline-none focus:ring-2 focus:ring-akb-500/20 transition-all shadow-sm"
                                placeholder="+34 600 000 000"
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                fullWidth
                                type="submit"
                                disabled={loading}
                                className="flex justify-center items-center gap-2 py-3 text-base"
                            >
                                {loading ? (
                                    "Procesando..."
                                ) : (
                                    <>
                                        <Lock className="w-4 h-4" />
                                        Acceder al Contenido
                                    </>
                                )}
                            </Button>
                        </div>

                        <p className="text-[10px] text-slate-400 text-center mt-4">
                            🔒 Tus datos están protegidos. AKB Capital Group © 2026
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
