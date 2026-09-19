import React from 'react';
import { Compass, Palette, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/studioData';
import ScrollReveal from './ScrollReveal';

export default function Process() {
  const iconMap = {
    Compass: Compass,
    Palette: Palette,
    Code2: Code2,
    Rocket: Rocket
  };

  return (
    <section
      id="process"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '4.5rem' }}>
            <span className="subheading">OUR 4-STEP FRAMEWORK</span>
            <h2 className="heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              How We Work
            </h2>
            <p className="description" style={{ maxWidth: '640px' }}>
              A clear, stress-free process designed to take your website from strategic concept to live deployment seamlessly.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Horizontal Timeline Container */}
        <div className="desktop-timeline-wrapper" style={{ position: 'relative', marginBottom: '4rem' }}>
          {/* Connecting Line across steps */}
          <div
            style={{
              position: 'absolute',
              top: '52px',
              left: '8%',
              right: '8%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--border-medium) 0%, var(--sage) 50%, var(--forest) 100%)',
              zIndex: 0
            }}
            className="timeline-horizontal-line"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.75rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            {processSteps.map((stepItem, idx) => {
              const IconComp = iconMap[stepItem.icon] || Compass;

              return (
                <ScrollReveal key={stepItem.step} delay={idx * 0.15}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%'
                    }}
                    className="timeline-step-col"
                  >
                    {/* Step Number Badge */}
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        color: 'var(--sage)',
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '0.35rem 0.9rem',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-medium)',
                        marginBottom: '1rem'
                      }}
                    >
                      STEP {stepItem.step}
                    </div>

                    {/* Icon Node Circle */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--forest)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid var(--forest)',
                        boxShadow: 'var(--shadow-md)',
                        marginBottom: '1.5rem',
                        transition: 'all 0.4s ease'
                      }}
                      className="timeline-icon-node"
                    >
                      <IconComp size={24} />
                    </div>

                    {/* Step Card Content */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        padding: '1.75rem 1.25rem',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'all 0.3s ease'
                      }}
                      className="timeline-card-inner"
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.7rem',
                            color: 'var(--forest)',
                            letterSpacing: '0.04em',
                            marginBottom: '0.65rem'
                          }}
                        >
                          {stepItem.name}
                        </h3>

                        <p
                          style={{
                            fontSize: '0.94rem',
                            color: 'var(--charcoal-light)',
                            lineHeight: '1.6',
                            marginBottom: '1.25rem'
                          }}
                        >
                          "{stepItem.description}"
                        </p>
                      </div>

                      {/* Deliverable Tags */}
                      <div
                        style={{
                          paddingTop: '1rem',
                          borderTop: '1px solid var(--border-subtle)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem',
                          alignItems: 'center'
                        }}
                      >
                        {(stepItem.details || []).map((detail, dIdx) => (
                          <span
                            key={dIdx}
                            style={{
                              fontSize: '0.78rem',
                              color: 'var(--forest)',
                              fontWeight: '600',
                              backgroundColor: 'var(--sage-tint)',
                              padding: '0.2rem 0.65rem',
                              borderRadius: 'var(--radius-pill)',
                              display: 'inline-block'
                            }}
                          >
                            ✓ {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout */}
        <div className="mobile-timeline-wrapper" style={{ display: 'none', position: 'relative' }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '23px',
              width: '2px',
              backgroundColor: 'var(--sage)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
            {processSteps.map((stepItem, idx) => {
              const IconComp = iconMap[stepItem.icon] || Compass;
              return (
                <ScrollReveal key={stepItem.step} delay={idx * 0.1}>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    {/* Vertical Node Circle */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--forest)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '2px solid var(--forest)',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <IconComp size={20} />
                    </div>

                    {/* Mobile Card Content */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        padding: '1.5rem',
                        flexGrow: 1,
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--sage)' }}>
                          STEP {stepItem.step}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                        {stepItem.name}
                      </h3>

                      <p style={{ fontSize: '0.94rem', color: 'var(--charcoal-light)', lineHeight: '1.5', marginBottom: '1rem' }}>
                        "{stepItem.description}"
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {(stepItem.details || []).map((detail, dIdx) => (
                          <span
                            key={dIdx}
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--forest)',
                              fontWeight: '600',
                              backgroundColor: 'var(--sage-tint)',
                              padding: '0.2rem 0.6rem',
                              borderRadius: 'var(--radius-pill)'
                            }}
                          >
                            ✓ {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Responsive CSS Rules */}
      <style>{`
        @media (max-width: 899px) {
          .desktop-timeline-wrapper { display: none !important; }
          .mobile-timeline-wrapper { display: block !important; }
        }
        .timeline-card-inner:hover {
          transform: translateY(-4px);
          border-color: var(--sage) !important;
          box-shadow: 0 16px 32px -8px rgba(23, 51, 34, 0.1) !important;
        }
        .timeline-step-col:hover .timeline-icon-node {
          transform: scale(1.08);
          background-color: var(--forest-light) !important;
        }
      `}</style>
    </section>
  );
}
