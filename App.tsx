import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Methodology } from './components/Methodology';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';
import { LeadFormModal } from './components/LeadFormModal';
import { FinalCTA } from './components/FinalCTA';
import { ThankYouPage } from './components/ThankYouPage';

function MainPage() {
  const [showEntryPopup, setShowEntryPopup] = useState(false);

  // No automatic popup - form only shows when user clicks button
  const handleEntrySubmit = () => {
    localStorage.setItem('akb_qualification_submitted', 'true');
    setShowEntryPopup(false);
    // Redirect to thank you page
    window.location.href = '/gracias';
  };

  const handleOpenForm = () => {
    setShowEntryPopup(true);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-gold-200 selection:text-navy-900">
      {/* Mandatory Qualification Form as Entry Popup */}
      <LeadFormModal
        isOpen={showEntryPopup}
        onClose={() => setShowEntryPopup(false)} // Allow closing without submitting
        onSubmit={handleEntrySubmit}
        title="Rellena tus datos para acceder al contenido"
      />

      <main>
        {/* Page 1: Header + VSL + Curiosity CTA */}
        <Hero onOpenForm={handleOpenForm} />

        {/* Page 1: The Context (Hoy en día...) */}
        <ProblemSolution />

        {/* Page 1: The Qualifiers (Who it's for) */}
        <TargetAudience />

        {/* Page 2 (Contextually revealed or scrolled to): The Process & Final CTA */}
        <Methodology />

        {/* Final CTA - Go High Level */}
        <FinalCTA onOpenForm={handleOpenForm} />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gracias" element={<ThankYouPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;