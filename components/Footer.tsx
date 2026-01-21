import React from 'react';

export const Footer: React.FC = () => {
  return (
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