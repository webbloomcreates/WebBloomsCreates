import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
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
          3. Services (Main Capabilities & Services Showcase)
          4. Process (How We Work)
          5. FAQ
          6. Start a Project (Permanent Inquiry Form Section)
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

        {/* 3. Services Explorer */}
        <Services
          onOpenProjectModal={handleNavigateToProject}
          onSelectPackage={handleNavigateToProject}
        />

        {/* 4. Process */}
        <Process />

        {/* 5. FAQ */}
        <FAQ
          onOpenProjectModal={handleNavigateToProject}
        />

        {/* 6. Start a Project / Permanent Inquiry Form */}
        <ProjectRequestSection
          preselectedPackage={selectedPackage}
        />
      </main>

      {/* 7. Footer */}
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
