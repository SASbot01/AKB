```javascript
import React from 'react';
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-akb-300 hover:bg-akb-200 text-akb-900 font-bold text-lg rounded-lg shadow-2xl hover:shadow-akb-300/50 transition-all duration-300 transform hover:scale-105"
                        >
                            <span>Si ya lo tienes claro, clica aquí</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-akb-300 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
                        </button>
                    </div>

                    {/* Subtext */}
                    <p className="text-akb-200 text-sm mt-6">
                        ⚡ Respuesta en menos de 24 horas
                    </p>
                </div>
            </div>
        </section>
    );
};
