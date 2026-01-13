import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Methodology } from './components/Methodology';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';
import { LeadFormModal } from './components/LeadFormModal';
import { FinalCTA } from './components/FinalCTA';

function App() {
  const [showEntryPopup, setShowEntryPopup] = useState(false);

  useEffect(() => {
    // Check if user has already submitted the qualification form
    const hasSubmitted = localStorage.getItem('akb_qualification_submitted');
    if (!hasSubmitted) {
      // Show popup after 3 seconds to let them see the page first
      setTimeout(() => {
        setShowEntryPopup(true);
      }, 3000);
    }
  }, []);

  const handleEntrySubmit = () => {
    localStorage.setItem('akb_qualification_submitted', 'true');
    setShowEntryPopup(false);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-gold-200 selection:text-navy-900">
      {/* Mandatory Qualification Form as Entry Popup */}
      <LeadFormModal
        isOpen={showEntryPopup}
        onClose={() => { }} // Can't close without submitting
        onSubmit={handleEntrySubmit}
        title="Rellena tus datos para acceder al contenido"
      />

      <main>
        {/* Page 1: Header + VSL + Curiosity CTA */}
        <Hero />

        {/* Page 1: The Context (Hoy en día...) */}
        <ProblemSolution />

        {/* Page 1: The Qualifiers (Who it's for) */}
        <TargetAudience />

        {/* Page 2 (Contextually revealed or scrolled to): The Process & Final CTA */}
        <Methodology />

        {/* Final CTA - Go High Level */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;