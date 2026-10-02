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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href === '#home' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.replace('#', '');
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProjectClick = () => {
    setMobileMenuOpen(false);
    if (onOpenProjectModal) {
      onOpenProjectModal();
    } else {
      const elem = document.getElementById('project') || document.getElementById('contact');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          padding: isScrolled ? '0.65rem 0' : '1.2rem 0',
          backgroundColor: isScrolled ? 'rgba(251, 248, 243, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(23, 51, 34, 0.05)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left: WebBloom Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
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
              Web.BloomCreates
            </span>
          </a>

          {/* Desktop Nav Links */}
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
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
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

          {/* Right Action: CTA & Mobile Hamburger Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handleStartProjectClick}
              className="btn-primary desktop-cta-btn"
              style={{
                padding: isScrolled ? '0.6rem 1.35rem' : '0.75rem 1.6rem',
                fontSize: '0.9rem'
              }}
            >
              Start your website
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="mobile-toggle-btn"
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
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Layout CSS */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta-btn { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
        @media (max-width: 959px) {
          .desktop-nav { display: none !important; }
          .desktop-cta-btn { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
      `}</style>

      {/* Backdrop Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(20, 43, 29, 0.45)',
          backdropFilter: 'blur(4px)',
          zIndex: 998,
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease'
        }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Right Side Drawer */}
      <aside
        aria-label="Mobile Navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85vw',
          maxWidth: '340px',
          backgroundColor: 'var(--bg-primary)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem 1.75rem 2.5rem 1.75rem',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.15)',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto'
        }}
      >
        <div>
          {/* Drawer Top Header with Brand & Close Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <span className="badge-tag" style={{ fontSize: '0.75rem' }}>
              <Sparkles size={12} /> Web.BloomCreates
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--forest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links Stream */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
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
                <ArrowUpRight size={20} style={{ color: 'var(--sage)' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Drawer Footer Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
          <button
            onClick={handleStartProjectClick}
            className="btn-primary"
            style={{ width: '100%', padding: '1rem', fontSize: '1rem', justifyContent: 'center' }}
          >
            Start your website
            <ArrowUpRight size={18} />
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--charcoal-muted)' }}>
            Accepting Q4 Client Builds
          </p>
        </div>
      </aside>
    </>
  );
}
