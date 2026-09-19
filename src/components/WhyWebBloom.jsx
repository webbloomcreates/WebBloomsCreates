import React, { useState } from 'react';
import { Palette, Smartphone, MessageSquare, Code2, Zap, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function WhyWebBloom() {
  const [activeThemeId, setActiveThemeId] = useState('custom-design');

  const clientExperienceThemes = [
    {
      id: 'custom-design',
      icon: Palette,
      title: 'Custom Design',
      headline: 'Your website is designed around your business rather than a generic template.',
      description: 'We craft every layout, typography hierarchy, and visual element from scratch. No pre-bought site kits or rigid templates — your site is tailored specifically to reflect your brand quality and attract higher-paying clients.',
      badge: 'BESPOKE ARTISTRY',
      visualPreview: {
        type: 'design-system',
        label: 'Custom Design System & Figma Architecture',
        highlights: [
          'Tailored Color & Font Tokens',
          'Bespoke Visual Hierarchy',
          'Zero Pre-bought Templates'
        ]
      }
    },
    {
      id: 'responsive',
      icon: Smartphone,
      title: 'Responsive',
      headline: 'Designed to work beautifully across phones, tablets and desktops.',
      description: 'Over 80% of visitors from your Instagram profile click through on mobile. We build mobile-first experiences with legible typography, touch-friendly navigation, and instant layouts on every screen size.',
      badge: 'MOBILE-FIRST ENGINEERING',
      visualPreview: {
        type: 'responsive-preview',
        label: 'Fluid Breakpoint Optimization (375px → 1440px)',
        highlights: [
          'Instagram Mobile Viewport Tested',
          'Fluid Typography & Spacing',
          'Touch-Optimized Lead Buttons'
        ]
      }
    },
    {
      id: 'clear-communication',
      icon: MessageSquare,
      title: 'Clear Communication',
      headline: 'Keep clients informed throughout the project.',
      description: 'No radio silence, vague timelines, or confusing jargon. We set clear project milestones from Day 1 and keep you updated with video walkthroughs and collaborative preview links.',
      badge: 'TRANSPARENT WORKFLOW',
      visualPreview: {
        type: 'milestone-timeline',
        label: 'Client Progress & Milestone Roadmap',
        highlights: [
          'Weekly Progress Video Walkthroughs',
          'Collaborative Preview Links',
          'Direct Access to Lead Designer'
        ]
      }
    },
    {
      id: 'modern-development',
      icon: Code2,
      title: 'Modern Development',
      headline: 'Build websites using modern development practices.',
      description: 'We write clean, modular component code (React, Vite, Webflow). By avoiding heavy, bloated page builder plugins, your website stays secure, lightweight, and easy to maintain.',
      badge: 'CLEAN ARCHITECTURE',
      visualPreview: {
        type: 'code-architecture',
        label: 'Clean Modular Component Codebase',
        highlights: [
          'Zero Bloated Page Builder Plugins',
          'Semantic HTML5 & Accessibility',
          'Scalable & Easy Future Edined'
        ]
      }
    },
    {
      id: 'performance',
      icon: Zap,
      title: 'Performance',
      headline: 'Focus on fast, smooth and efficient experiences.',
      description: 'Speed directly impacts client conversion and Google rankings. We optimize images, scripts, and fonts so your pages load in under 1.5 seconds on mobile networks.',
      badge: 'LIGHTNING SPEED',
      visualPreview: {
        type: 'speed-metrics',
        label: 'High Performance & Page Load Optimization',
        highlights: [
          '<1.5s Target Page Load Time',
          'Optimized WebP Image Assets',
          'Clean Google Search Indexing'
        ]
      }
    },
    {
      id: 'post-launch-support',
      icon: ShieldCheck,
      title: 'Post-Launch Support',
      headline: 'Help clients with updates and improvements after launch.',
      description: 'We do not leave you stranded at launch. You receive a personalized Loom video tutorial showing you how to update text and photos, plus included post-launch tech support.',
      badge: 'FULL CLIENT EMPOWERMENT',
      visualPreview: {
        type: 'support-package',
        label: 'Handoff Training & 100% Full Ownership',
        highlights: [
          'Personalized Video Training Library',
          '30-Day Post-Launch Tech Support',
          '100% Client Domain & Code Ownership'
        ]
      }
    }
  ];

  const activeTheme = clientExperienceThemes.find((t) => t.id === activeThemeId) || clientExperienceThemes[0];

  return (
    <section
      id="why-us"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4.5rem' }}>
          <span className="subheading">WHY CLIENTS TRUST WEB.BLOOMCREATES</span>
          <h2 className="heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
            The web.bloomcreates Client Experience
          </h2>
          <p className="description" style={{ maxWidth: '680px' }}>
            We build websites with clarity, craftsmanship, and professionalism. Here is how we ensure every project is an enjoyable, stress-free experience.
          </p>
        </div>

        {/* Visual Storytelling Interactive Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'stretch'
          }}
          className="why-webbloom-split"
        >
          {/* Left Theme Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {clientExperienceThemes.map((theme) => {
              const IconComp = theme.icon;
              const isActive = theme.id === activeThemeId;

              return (
                <div
                  key={theme.id}
                  onClick={() => setActiveThemeId(theme.id)}
                  style={{
                    backgroundColor: isActive ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--forest)' : 'var(--border-subtle)',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.2rem'
                  }}
                  className="theme-selector-item"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--forest)' : 'var(--sage-tint)',
                      color: isActive ? '#ffffff' : 'var(--forest)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <IconComp size={20} />
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.4rem',
                          color: 'var(--forest)',
                          fontWeight: '600'
                        }}
                      >
                        {theme.title}
                      </h3>
                      {isActive && (
                        <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          ACTIVE VIEW
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.92rem', color: 'var(--charcoal-light)', lineHeight: '1.5', marginTop: '0.25rem' }}>
                      "{theme.headline}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Spotlight Visual Showcase Card */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              {/* Badge Tag */}
              <div className="badge-tag" style={{ marginBottom: '1.5rem' }}>
                <Sparkles size={14} /> {activeTheme.badge}
              </div>

              {/* Title & Headline */}
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
                  color: 'var(--forest)',
                  lineHeight: '1.15',
                  marginBottom: '1rem'
                }}
              >
                {activeTheme.title}
              </h3>

              <p
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--sage)',
                  lineHeight: '1.4',
                  marginBottom: '1.25rem'
                }}
              >
                "{activeTheme.headline}"
              </p>

              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--charcoal-light)',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}
              >
                {activeTheme.description}
              </p>
            </div>

            {/* Visual Spotlight Graphic Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: 'var(--forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Sparkles size={14} style={{ color: 'var(--sage)' }} />
                {activeTheme.visualPreview.label}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {activeTheme.visualPreview.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.94rem',
                      color: 'var(--charcoal)',
                      fontWeight: '500'
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--sage-tint)',
                        color: 'var(--forest)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Check size={13} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Split Layout Responsive CSS */}
      <style>{`
        @media (min-width: 960px) {
          .why-webbloom-split {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
        .theme-selector-item:hover {
          transform: translateX(4px);
          border-color: var(--sage) !important;
        }
      `}</style>
    </section>
  );
}
