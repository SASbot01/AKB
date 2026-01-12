import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Methodology } from './components/Methodology';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-gold-200 selection:text-navy-900">
      <main>
        {/* Page 1: Header + VSL + Curiosity CTA */}
        <Hero />
        
        {/* Page 1: The Context (Hoy en día...) */}
        <ProblemSolution />
        
        {/* Page 1: The Qualifiers (Who it's for) */}
        <TargetAudience />
        
        {/* Page 2 (Contextually revealed or scrolled to): The Process & Final CTA */}
        <Methodology />
      </main>
      <Footer />
    </div>
  );
}

export default App;