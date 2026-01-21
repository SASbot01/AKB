import React, { useState } from 'react';
import { Trees } from 'lucide-react';
import { Button } from './Button';
import { LeadFormModal } from './LeadFormModal';

export const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    if (localStorage.getItem('akb_lead_submitted') === 'true') {
      alert("Ya has desbloqueado el contenido. Por favor, revisa el video en la parte superior.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <footer className="bg-akb-900 text-akb-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            {/* Company Name */}
            <div>
              <h3 className="text-2xl font-serif tracking-wider text-akb-300">
                AKB CAPITAL GROUP
              </h3>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-akb-700">
              <p className="text-sm text-akb-400">
                © 2026 AKB Capital Group. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
      );
};