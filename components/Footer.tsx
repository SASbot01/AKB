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
      <LeadFormModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={() => { 
              setIsModalOpen(false); 
              localStorage.setItem('akb_lead_submitted', 'true');
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
      />
      
      <footer className="bg-akb-800 pt-20 pb-10 text-white border-t border-akb-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-12 border-b border-akb-700">
            
            <div className="md:col-span-1">
              <div className="flex flex-col items-start gap-1 mb-6">
                <Trees className="w-8 h-8 text-white mb-2" />
                <span className="block text-2xl font-serif font-bold text-white tracking-wide">AKB</span>
                <span className="block text-xs text-akb-300 tracking-[0.2em] uppercase">Capital Group</span>
              </div>
              <p className="text-akb-200 text-sm leading-relaxed opacity-80">
                Expertos en estructuración corporativa y soberanía global.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-sans">Método</h4>
              <ul className="space-y-3 text-sm text-akb-200">
                <li><a href="#" className="hover:text-akb-300 transition-colors">Strategy & Risk</a></li>
                <li><a href="#" className="hover:text-akb-300 transition-colors">Implementation</a></li>
                <li><a href="#" className="hover:text-akb-300 transition-colors">Ongoing Counsel</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-sans">Legal</h4>
              <ul className="space-y-3 text-sm text-akb-200">
                <li><a href="#" className="hover:text-akb-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-akb-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-akb-300 transition-colors">Disclaimer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-sans">Contacto</h4>
              <p className="text-akb-200 text-sm mb-2">Dubai, UAE</p>
              <p className="text-akb-200 text-sm mb-2">info@akbcapital.com</p>
              <Button variant="outline" onClick={handleOpen} className="mt-4 px-6 py-2 text-xs border-akb-500 text-akb-300 hover:bg-akb-700">
                Agendar Llamada
              </Button>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-akb-400">
            <p>
              © {new Date().getFullYear()} AKB Capital Group. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};