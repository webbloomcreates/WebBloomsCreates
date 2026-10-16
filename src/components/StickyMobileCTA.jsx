import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function StickyMobileCTA({ onOpenProjectModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky CTA once scrolled past hero section (approx 450px)
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="sticky-mobile-cta-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        zIndex: 90,
        padding: '0.65rem clamp(0.75rem, 3vw, 1rem)',
        backgroundColor: 'rgba(251, 248, 243, 0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--border-medium)',
        boxShadow: '0 -10px 25px rgba(23, 51, 34, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.65rem',
        animation: 'slideUpBar 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flexShrink: 1 }}>
        <span style={{ fontSize: '0.68rem', fontWeight: '700', color: 'var(--sage)', textTransform: 'lowercase', letterSpacing: '0.04em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          web.bloomcreates
        </span>
        <span style={{ fontSize: 'clamp(0.78rem, 2.4vw, 0.86rem)', fontWeight: '700', color: 'var(--forest)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Accepting Q4 Builds
        </span>
      </div>

      <button
        onClick={() => onOpenProjectModal()}
        className="btn-primary"
        style={{
          padding: '0.55rem clamp(0.75rem, 2.5vw, 1.25rem)',
          fontSize: 'clamp(0.78rem, 2.4vw, 0.88rem)',
          boxShadow: 'none',
          flexShrink: 0,
          whiteSpace: 'nowrap'
        }}
      >
        Start your website →
      </button>

      <style>{`
        @keyframes slideUpBar {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @media (min-width: 769px) {
          .sticky-mobile-cta-bar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
