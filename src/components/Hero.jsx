import React from 'react';
import { ArrowRight, Sparkles, Smartphone, CheckCircle2, Zap, Layout, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenProjectModal }) {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      style={{
        position: 'relative',
        paddingTop: 'clamp(5.5rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 7vw, 5.5rem)',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Slow-Rotating Decorative Botanical Line Art */}
      <svg
        className="botanical-accent animate-slow-spin"
        aria-hidden="true"
        style={{ position: 'absolute', top: '2%', right: '-4%', width: '460px', height: '460px', opacity: 0.08, pointerEvents: 'none', zIndex: 0 }}
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="var(--forest)" strokeWidth="1" strokeDasharray="6 10" />
        <path
          d="M100 20C115 45 150 55 180 65C150 85 140 120 130 160C100 140 60 150 30 160C40 120 30 80 5 65C35 55 65 20 100 20Z"
          fill="var(--forest)"
        />
      </svg>

      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '-8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          backgroundColor: 'rgba(123, 155, 120, 0.08)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline & CTAs */}
          <div style={{ maxWidth: '640px' }}>
            {/* Studio Badge Tag */}
            <div className="animate-hero-1" style={{ marginBottom: '1.25rem' }}>
              <span className="badge-tag">
                <Sparkles size={14} style={{ color: 'var(--sage)' }} />
                WEBBLOOMBUILDS • BESPOKE WEB DESIGN
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              className="animate-hero-2"
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                lineHeight: '1.08',
                color: 'var(--forest)',
                marginBottom: '1.35rem',
                letterSpacing: '-0.025em',
                fontWeight: '600'
              }}
            >
              Your business deserves a website that feels <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--forest-light)' }}>as good as your brand.</span>
            </h1>

            {/* Supporting Text */}
            <p
              className="animate-hero-3"
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                color: 'var(--charcoal-light)',
                lineHeight: '1.65',
                marginBottom: '2.25rem',
                maxWidth: '560px'
              }}
            >
              We design and build modern, responsive websites that help businesses establish a stronger presence online.
            </p>

            {/* CTAs */}
            <div
              className="animate-hero-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <button
                onClick={() => onOpenProjectModal()}
                className="btn-primary"
                style={{ padding: '1.05rem 2.2rem', fontSize: '1rem' }}
                aria-label="Start Your Project"
              >
                Start Your Project →
              </button>

              <a
                href="#work"
                className="btn-secondary"
                style={{ padding: '1.05rem 2.1rem', fontSize: '0.98rem' }}
              >
                Explore Our Work
              </a>
            </div>

            {/* Quality Standards Highlights */}
            <div
              className="animate-hero-5"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--charcoal-light)', fontWeight: '600' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--sage)' }} />
                Bespoke Design Architecture
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--charcoal-light)', fontWeight: '600' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--sage)' }} />
                Mobile-First Engineering
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--charcoal-light)', fontWeight: '600' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--sage)' }} />
                100% Client Ownership
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase Frame */}
          <div style={{ position: 'relative', width: '100%' }} className="hero-visual-col">
            {/* Floating UI Pill 1: Custom Design */}
            <div
              className="animate-float-main hero-pill-top"
              style={{
                position: 'absolute',
                top: '-14px',
                left: '20px',
                zIndex: 10,
                backgroundColor: 'var(--bg-secondary)',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--forest)'
              }}
            >
              <Layout size={14} style={{ color: 'var(--sage)' }} />
              Custom Design
            </div>

            {/* Floating UI Pill 2: Fast Loading */}
            <div
              className="animate-float-main hero-pill-right"
              style={{
                position: 'absolute',
                top: '35px',
                right: '10px',
                zIndex: 10,
                backgroundColor: 'var(--forest)',
                color: '#ffffff',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-pill)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                fontWeight: '600',
                animationDelay: '1.5s'
              }}
            >
              <Zap size={14} style={{ color: 'var(--sage-muted)' }} />
              Fast • &lt;1.2s Load
            </div>

            {/* Main Laptop Browser Mockup Frame */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 24px 50px -12px rgba(23, 51, 34, 0.12)',
                overflow: 'hidden',
                width: '100%',
                position: 'relative'
              }}
            >
              {/* Browser Address Bar */}
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '0.7rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#E06C75' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#E5C07B' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#98C379' }} />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '0.2rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.74rem',
                    color: 'var(--charcoal-muted)',
                    fontFamily: 'monospace',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <ShieldCheck size={12} style={{ color: 'var(--sage)' }} />
                  aura-botanicals.com
                </div>

                <div style={{ fontSize: '0.68rem', color: 'var(--sage)', fontWeight: '700', letterSpacing: '0.05em' }}>
                  WEB.BLOOMCREATES BUILD
                </div>
              </div>

              {/* Sample Studio Site Preview Container */}
              <div
                style={{
                  padding: '2rem 1.75rem',
                  background: 'linear-gradient(180deg, #FBF8F3 0%, #FFFDF9 100%)',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Mock Site Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', color: 'var(--forest)', fontSize: '1.25rem' }}>
                    AURA BOTANICALS
                  </span>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: 'var(--charcoal-light)', fontWeight: '500' }}>
                    <span>Collection</span>
                    <span>Story</span>
                    <span style={{ backgroundColor: 'var(--forest)', color: '#ffffff', padding: '0.2rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem' }}>
                      Shop Atelier
                    </span>
                  </div>
                </div>

                {/* Mock Site Content */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--sage)',
                      fontWeight: '700',
                      display: 'block',
                      marginBottom: '0.4rem'
                    }}
                  >
                    ARTISANAL BOTANICAL ATELIER
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      color: 'var(--forest)',
                      lineHeight: '1.15',
                      marginBottom: '0.65rem'
                    }}
                  >
                    Nurtured by nature. Designed for quiet luxury spaces.
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-light)', lineHeight: '1.45', maxWidth: '420px' }}>
                    Artisanal floral arrangements shipped fresh from our sustainable greenhouse.
                  </p>
                </div>

                {/* Mock Site Product Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem'
                    }}
                  >
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--sage-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.95rem'
                      }}
                    >
                      🌿
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--forest)' }}>
                        Wild Sage Set
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--sage)' }}>$85 • In Stock</div>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem'
                    }}
                  >
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--warm-sand)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.95rem'
                      }}
                    >
                      🌸
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--forest)' }}>
                        Eucalyptus Bouquet
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--sage)' }}>$110 • Best Seller</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
        @media (max-width: 640px) {
          .hero-pill-top, .hero-pill-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
