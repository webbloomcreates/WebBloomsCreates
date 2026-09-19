import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenProjectModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Our Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: isScrolled ? '0.65rem 0' : '1.35rem 0',
          backgroundColor: isScrolled ? 'rgba(251, 248, 243, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(23, 51, 34, 0.05)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left: WebBloom Logo / Wordmark */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              color: 'var(--forest)'
            }}
          >
            <div
              style={{
                width: isScrolled ? '34px' : '38px',
                height: isScrolled ? '34px' : '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--forest)',
                color: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <Leaf size={isScrolled ? 17 : 19} style={{ transform: 'rotate(-15deg)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isScrolled ? '1.15rem' : '1.3rem',
                  fontWeight: '700',
                  letterSpacing: '-0.03em',
                  lineHeight: '1',
                  color: 'var(--forest)',
                  transition: 'font-size 0.3s ease'
                }}
              >
                WebBloomBuilds
              </span>
            </div>
          </a>

          {/* Center / Right: Minimal Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.2rem',
              backgroundColor: isScrolled ? 'transparent' : 'rgba(255, 253, 249, 0.75)',
              backdropFilter: isScrolled ? 'none' : 'blur(10px)',
              padding: isScrolled ? '0' : '0.5rem 1.75rem',
              borderRadius: 'var(--radius-pill)',
              border: isScrolled ? 'none' : '1px solid var(--border-subtle)',
              transition: 'all 0.3s ease'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--charcoal)',
                  fontSize: '0.92rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forest)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--charcoal)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Primary CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => onOpenProjectModal()}
              className="btn-primary"
              style={{
                padding: isScrolled ? '0.6rem 1.35rem' : '0.75rem 1.6rem',
                fontSize: '0.9rem'
              }}
            >
              Start a Project
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--forest)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              className="mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Layout CSS */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>

      {/* Mobile Slide-Out Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 49,
            padding: '6.5rem 2rem 3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.25s ease forwards'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="badge-tag">
                <Sparkles size={13} /> Studio @web.bloomcreates
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.1rem',
                  fontWeight: '600',
                  color: 'var(--forest)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {link.label}
                <ArrowUpRight size={22} style={{ color: 'var(--sage)' }} />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '1.1rem', fontSize: '1.02rem', justifyContent: 'center' }}
            >
              Start a Project
              <ArrowUpRight size={18} />
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--charcoal-muted)' }}>
              Accepting new client builds • Responding within 24 hours
            </p>
          </div>
        </div>
      )}
    </>
  );
}
