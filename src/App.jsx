import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import ProjectRequestSection from './components/ProjectRequestSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleNavigateToProject = (packageOrVal = null) => {
    if (packageOrVal) {
      setSelectedPackage(packageOrVal);
    }
    const elem = document.getElementById('project') || document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar
        onOpenProjectModal={handleNavigateToProject}
      />

      {/* Main Homepage Flow:
          1. Hero
          2. Our Work (Portfolio)
          3. Pricing (Packages & Costs)
          4. Services (Capabilities Explorer)
          5. Process (How We Work)
          6. FAQ
          7. Start a Project (Permanent Inquiry Form Section)
      */}
      <main style={{ flexGrow: 1 }}>
        {/* 1. Hero */}
        <Hero
          onOpenProjectModal={handleNavigateToProject}
        />

        {/* 2. Our Work */}
        <Portfolio
          onOpenProjectModal={handleNavigateToProject}
        />

        {/* 3. Pricing */}
        <Pricing
          onOpenProjectModal={handleNavigateToProject}
          onSelectPackage={handleNavigateToProject}
        />

        {/* 4. Services Explorer */}
        <Services
          onOpenProjectModal={handleNavigateToProject}
          onSelectPackage={handleNavigateToProject}
        />

        {/* 5. Process */}
        <Process />

        {/* 6. FAQ */}
        <FAQ
          onOpenProjectModal={handleNavigateToProject}
        />

        {/* 7. Start a Project / Permanent Inquiry Form */}
        <ProjectRequestSection
          preselectedPackage={selectedPackage}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenProjectModal={handleNavigateToProject}
      />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        onOpenProjectModal={handleNavigateToProject}
      />
    </div>
  );
}
