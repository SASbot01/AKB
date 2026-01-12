import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-slate-200 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-corporate-600" />
          <div className="leading-none">
            <span className={`block text-xl font-display font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-slate-900'}`}>AKB</span>
            <span className={`block text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-slate-500' : 'text-slate-500 md:text-slate-600'}`}>Capital Group</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-corporate-600 transition-colors">Servicios</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-corporate-600 transition-colors">Golden Visa</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-corporate-600 transition-colors">La Firma</a>
          <Button variant="primary" className="px-6 py-2 text-sm shadow-none">
            Acceso Clientes
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-slate-700 hover:text-corporate-600 font-medium">Servicios</a>
          <a href="#" className="text-slate-700 hover:text-corporate-600 font-medium">Golden Visa</a>
          <a href="#" className="text-slate-700 hover:text-corporate-600 font-medium">La Firma</a>
          <Button variant="primary" className="w-full">
            Acceso Clientes
          </Button>
        </div>
      )}
    </nav>
  );
};