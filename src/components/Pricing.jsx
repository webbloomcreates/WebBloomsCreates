import React from 'react';
import { Check, Sparkles, ArrowRight, HelpCircle, XCircle, Info, FileText } from 'lucide-react';
import { packagesData, pricingBusinessRules } from '../data/studioData';
import ScrollReveal from './ScrollReveal';

export default function Pricing({ onOpenProjectModal, onSelectPackage }) {
  const handleChoosePackage = (pkg) => {
    const formVal = pkg.formValue || pkg.name;
    if (onSelectPackage) {
      onSelectPackage(formVal);
    }
    const contactSection = document.getElementById('project') || document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenProjectModal) {
      onOpenProjectModal(formVal);
    }
  };

  const handleCustomQuote = () => {
    const formVal = 'Custom Project';
    if (onSelectPackage) {
      onSelectPackage(formVal);
    }
    const contactSection = document.getElementById('project') || document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenProjectModal) {
      onOpenProjectModal(formVal);
    }
  };

  return (
    <section
      id="pricing"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="subheading">TRANSPARENT PACKAGES & PRICING</span>
            <h2 className="heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Simple pricing. Clear deliverables.
            </h2>
            <p className="description" style={{ maxWidth: '720px' }}>
              Choose the website experience that fits your business. Need something different? We'll create a custom package around your requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Visually Distinct Pricing Blocks */}
        <div className="pricing-grid">
          {packagesData.map((pkg, idx) => {
            const isPopular = pkg.popular;
            const isEcommerce = pkg.id === 'ecommerce';

            return (
              <ScrollReveal key={pkg.id} delay={idx * 0.1}>
                <div
                  className={`pricing-card-block ${isPopular ? 'popular-block' : ''}`}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-lg)',
                    border: isPopular ? '2px solid var(--forest)' : '1px solid var(--border-medium)',
                    padding: 'clamp(2rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isPopular ? '0 20px 40px -10px rgba(23, 51, 34, 0.12)' : 'var(--shadow-sm)',
                    position: 'relative',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  {/* Subtle, non-flashy MOST POPULAR badge */}
                  {isPopular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--forest)',
                        color: '#ffffff',
                        padding: '0.35rem 1.1rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 12px rgba(23, 51, 34, 0.2)'
                      }}
                    >
                      <Sparkles size={12} style={{ color: 'var(--sage-muted)' }} />
                      {pkg.badgeText || 'MOST POPULAR'}
                    </div>
                  )}

                  <div>
                    {/* Top Number & Package Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.4rem',
                          fontWeight: '700',
                          color: 'var(--sage)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        PACKAGE {pkg.packageNumber}
                      </span>

                      {pkg.bestFor && (
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '600',
                            backgroundColor: 'var(--sage-tint)',
                            color: 'var(--forest)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: 'var(--radius-pill)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {pkg.id === 'basic' ? 'LOCAL & SOLO' : pkg.id === 'standard' ? 'GROWING BIZ' : pkg.id === 'business-premium' ? 'DYNAMIC' : 'STORE'}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.8rem',
                        color: 'var(--forest)',
                        lineHeight: '1.15',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {pkg.name}
                    </h3>

                    {/* Positioning Quote */}
                    <p
                      style={{
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        color: 'var(--charcoal-muted)',
                        marginBottom: '1.25rem'
                      }}
                    >
                      "{pkg.positioning}"
                    </p>

                    {/* Price Block */}
                    <div
                      style={{
                        padding: '1.25rem 0',
                        borderTop: '1px solid var(--border-subtle)',
                        borderBottom: '1px solid var(--border-subtle)',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {pkg.isStartingFrom && (
                          <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--charcoal-muted)', width: '100%', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            STARTING FROM
                          </span>
                        )}
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2.4rem, 3vw, 2.8rem)',
                            fontWeight: '700',
                            color: 'var(--forest)',
                            lineHeight: '1'
                          }}
                        >
                          {pkg.price.replace('Starting from ', '')}
                        </span>
                      </div>

                      {/* Best For details */}
                      <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--charcoal-light)', lineHeight: '1.45' }}>
                        <strong>Best for:</strong> {pkg.bestFor}
                      </div>
                    </div>

                    {/* Features List (Includes) */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: 'var(--forest)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          display: 'block',
                          marginBottom: '0.85rem'
                        }}
                      >
                        INCLUDES:
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {pkg.includes.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.6rem',
                              fontSize: '0.88rem',
                              color: 'var(--charcoal)',
                              lineHeight: '1.4'
                            }}
                          >
                            <div
                              style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--sage-tint)',
                                color: 'var(--forest)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px'
                              }}
                            >
                              <Check size={12} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Basic Website: Explicit Does NOT Include section */}
                    {pkg.doesNotInclude && (
                      <div
                        style={{
                          marginBottom: '1.75rem',
                          padding: '1rem',
                          backgroundColor: 'var(--bg-secondary)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            color: 'var(--charcoal-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            display: 'block',
                            marginBottom: '0.6rem'
                          }}
                        >
                          DOES NOT INCLUDE:
                        </span>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {pkg.doesNotInclude.map((noFeat, nIdx) => (
                            <li
                              key={nIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.82rem',
                                color: 'var(--charcoal-muted)',
                                lineHeight: '1.3'
                              }}
                            >
                              <XCircle size={14} style={{ color: '#D97706', flexShrink: 0 }} />
                              <span>{noFeat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* E-Commerce: Cost Depends On List */}
                    {isEcommerce && pkg.dependsOn && (
                      <div
                        style={{
                          marginBottom: '1.75rem',
                          padding: '1rem',
                          backgroundColor: 'var(--sage-tint)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(163, 194, 158, 0.4)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                          <Info size={14} style={{ color: 'var(--forest)' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            FINAL PRICING DEPENDS ON:
                          </span>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {pkg.dependsOn.map((depItem, dIdx) => (
                            <li
                              key={dIdx}
                              style={{
                                fontSize: '0.82rem',
                                color: 'var(--forest)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem'
                              }}
                            >
                              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--forest)' }} />
                              <span>{depItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Package Call-To-Action Button & See Detailed Features Link */}
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <button
                      onClick={() => handleChoosePackage(pkg)}
                      className={isPopular ? 'btn-primary' : 'btn-secondary'}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1rem',
                        fontSize: '0.92rem',
                        fontWeight: '600',
                        justifyContent: 'center'
                      }}
                    >
                      {pkg.ctaText} →
                    </button>

                    <a
                      href="#services"
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        color: 'var(--sage)',
                        textDecoration: 'none',
                        textAlign: 'center',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forest)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sage)')}
                    >
                      See detailed features →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Custom Project Option Section */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              marginTop: '3.5rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px dashed var(--sage)',
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <span className="badge-tag" style={{ marginBottom: '0.65rem' }}>
                <HelpCircle size={14} /> TAILORED PROPOSALS
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  color: 'var(--forest)',
                  marginBottom: '0.5rem'
                }}
              >
                Don't see what you need?
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--charcoal-light)', lineHeight: '1.6' }}>
                Every business is different. Tell us what you're trying to build and we'll create a custom proposal around your requirements.
              </p>
            </div>

            <button
              onClick={handleCustomQuote}
              className="btn-primary"
              style={{ padding: '1rem 2.2rem', fontSize: '0.95rem', whiteSpace: 'nowrap' }}
            >
              Request a Custom Quote →
            </button>
          </div>
        </ScrollReveal>

        {/* Important Business Rules & Revision Policy Notes */}
        <ScrollReveal delay={0.3}>
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem clamp(1.5rem, 3vw, 2.5rem)',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <FileText size={18} style={{ color: 'var(--sage)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--forest)', display: 'block', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  REVISION POLICY
                </span>
                <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-muted)', lineHeight: '1.5' }}>
                  {pricingBusinessRules.revisionPolicy}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Info size={18} style={{ color: 'var(--sage)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--forest)', display: 'block', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  DOMAIN & HOSTING
                </span>
                <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-muted)', lineHeight: '1.5' }}>
                  {pricingBusinessRules.hostingPolicy}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <HelpCircle size={18} style={{ color: 'var(--sage)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--forest)', display: 'block', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  THIRD-PARTY SERVICES
                </span>
                <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-muted)', lineHeight: '1.5' }}>
                  {pricingBusinessRules.thirdPartyNote}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Grid Responsiveness CSS */}
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        @media (max-width: 1180px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }

        @media (max-width: 680px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .pricing-card-block:hover {
          transform: translateY(-4px);
          border-color: var(--forest) !important;
          box-shadow: 0 16px 36px -8px rgba(23, 51, 34, 0.14) !important;
        }
      `}</style>
    </section>
  );
}
