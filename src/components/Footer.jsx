import React from 'react';
import { Leaf, Instagram, Mail, Phone, Heart } from 'lucide-react';
import { studioInfo } from '../data/studioData';

export default function Footer({ onOpenProjectModal }) {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Slow-Rotating Botanical SVG Line Art Background Accent */}
      <svg
        className="botanical-accent animate-slow-spin"
        style={{
          top: '-120px',
          right: '-100px',
          width: '520px',
          height: '520px',
          opacity: 0.07,
          pointerEvents: 'none'
        }}
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="var(--sage-muted)" strokeWidth="1" strokeDasharray="4 8" />
        <path
          d="M100 15C120 40 160 50 190 60C160 80 150 120 140 165C110 145 70 155 40 165C50 120 40 80 10 60C40 50 70 25 100 15Z"
          stroke="var(--sage-muted)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="100" cy="100" r="12" fill="var(--sage-muted)" opacity="0.3" />
      </svg>

      {/* MINIMAL & ELEGANT FOOTER CONTENT */}
      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Left Column: Brand & Tagline */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--sage-muted)',
                  color: 'var(--bg-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Leaf size={18} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.65rem',
                  fontWeight: '700',
                  color: '#ffffff'
                }}
              >
                {studioInfo.name}
              </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: '0.86rem', fontWeight: '700', color: 'var(--sage-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              {studioInfo.tagline}
            </p>

            {/* Short Description */}
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.94rem', lineHeight: '1.6', maxWidth: '340px' }}>
              {studioInfo.shortDescription}
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--sage-muted)',
                marginBottom: '1.25rem',
                fontWeight: '700'
              }}
            >
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { label: 'Home', href: '#' },
                { label: 'Our Work', href: '#work' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'FAQ', href: '#faq' }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenProjectModal()}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'var(--sage-muted)',
                    fontSize: '0.92rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left'
                  }}
                >
                  Start a Project →
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Social & Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--sage-muted)',
                marginBottom: '1.25rem',
                fontWeight: '700'
              }}
            >
              CONNECT & CONTACT
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Instagram */}
              <div>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '0.2rem' }}>
                  INSTAGRAM
                </span>
                <a
                  href={studioInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.94rem',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Instagram size={16} style={{ color: 'var(--sage-muted)' }} />
                  {studioInfo.handle}
                </a>
              </div>

              {/* Email */}
              <div>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '0.2rem' }}>
                  EMAIL
                </span>
                <a
                  href={`mailto:${studioInfo.email}`}
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Mail size={15} style={{ color: 'var(--sage-muted)' }} />
                  {studioInfo.email}
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '0.2rem' }}>
                  WHATSAPP
                </span>
                <a
                  href={`https://wa.me/${studioInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Phone size={15} style={{ color: 'var(--sage-muted)' }} />
                  {studioInfo.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div
          style={{
            borderTop: '1px solid var(--border-dark)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.88rem',
            color: 'rgba(255, 255, 255, 0.55)'
          }}
        >
          <div>
            © 2026 WebBloomBuilds. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--sage-muted)', fontWeight: '500' }}>
            Built with care by WebBloomBuilds.
          </div>
        </div>
      </div>
    </footer>
  );
}
