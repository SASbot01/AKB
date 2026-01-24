import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Video } from 'lucide-react';
import { Button } from './Button';

export const ThankYouPage: React.FC = () => {
    useEffect(() => {
        // Track CompleteRegistration event
        const trackCompletion = async () => {
            try {
                const { trackFacebookEvent, trackGoogleAdsConversion } = await import('../lib/tracking');

                // Facebook Pixel - CompleteRegistration
                trackFacebookEvent('CompleteRegistration', {
                    content_name: 'Lead Form Completion',
                    status: 'completed',
                });

                // Google Ads - Conversion
                trackGoogleAdsConversion('LEAD_CONVERSION_LABEL', {
                    value: 100,
                    currency: 'EUR',
                });
            } catch (error) {
                console.error('Error tracking completion:', error);
            }
        };

        trackCompletion();
    }, []);

    const handleBackToVideo = () => {
        window.location.href = '/';
        // Scroll to video section
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-akb-700 flex items-center justify-center px-6 py-12">
            <div className="max-w-2xl w-full">
                {/* Logo */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-serif text-white tracking-widest">
                        AKB CAPITAL GROUP
                    </h1>
                </div>

                {/* Main Content */}
                <div className="bg-akb-800 rounded-lg p-8 md:p-12 shadow-2xl border border-akb-600">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <CheckCircle className="w-20 h-20 text-akb-300" strokeWidth={1.5} />
                            <div className="absolute inset-0 bg-akb-300 blur-xl opacity-30"></div>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-4">
                        ¡Gracias por tu interés!
                    </h2>

                    {/* Confirmation Message */}
                    <p className="text-akb-200 text-center text-lg mb-8">
                        Tus datos han sido guardados correctamente.
                    </p>

                    {/* Next Steps */}
                    <div className="bg-akb-900/50 rounded-lg p-6 mb-8 border border-akb-600/30">
                        <h3 className="text-akb-300 font-bold text-lg mb-4 flex items-center gap-2">
                            <ArrowRight className="w-5 h-5" />
                            Próximos pasos:
                        </h3>
                        <ul className="space-y-3 text-akb-200">
                            <li className="flex items-start gap-3">
                                <span className="text-akb-300 font-bold mt-1">1.</span>
                                <span>Revisa tu bandeja de entrada (y spam) para confirmar tu email</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-akb-300 font-bold mt-1">2.</span>
                                <span>Nuestro equipo de expertos analizará tu perfil</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-akb-300 font-bold mt-1">3.</span>
                                <span>Te contactaremos en <strong className="text-white">menos de 24 horas</strong></span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="text-akb-200 text-sm mb-4">
                            Mientras tanto, te recomendamos ver el video completo:
                        </p>
                        <Button
                            onClick={handleBackToVideo}
                            variant="primary"
                            className="bg-akb-300 hover:bg-akb-400 text-akb-900 font-bold px-8 py-4 text-lg flex items-center gap-3 mx-auto"
                        >
                            <Video className="w-6 h-6" />
                            VER VIDEO COMPLETO
                        </Button>
                    </div>

                    {/* Footer Note */}
                    <p className="text-akb-400 text-xs text-center mt-8">
                        Si tienes alguna pregunta urgente, puedes contactarnos directamente.
                    </p>
                </div>

                {/* Back Link */}
                <div className="text-center mt-8">
                    <button
                        onClick={handleBackToVideo}
                        className="text-akb-300 hover:text-akb-200 text-sm underline transition-colors"
                    >
                        ← Volver a la página principal
                    </button>
                </div>
            </div>
        </div>
    );
};
