import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, ChevronRight, Plus } from 'lucide-react';
import { servicesData } from '../data/studioData';
import ScrollReveal from './ScrollReveal';
import ServiceDetailModal from './ServiceDetailModal';

export default function Services({ onOpenProjectModal, onSelectPackage }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedDetailService, setSelectedDetailService] = useState(null);

  // Default active card is 'standard-website' (or hoveredId if active)
  const activeId = hoveredId !== null ? hoveredId : 'standard-website';

  const handleCtaClick = (service) => {
    const sName = service.serviceName || service.title;
    if (onSelectPackage) {
      onSelectPackage(sName);
    }
    const contactSection = document.getElementById('project') || document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenProjectModal) {
      onOpenProjectModal(sName);
    }
  };

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        scrollMarginTop: '80px',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="subheading" style={{ letterSpacing: '0.12em', color: 'var(--sage)' }}>
              OUR SERVICES
            </span>
            <h2
              className="heading"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--forest)',
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              Websites Built Around Your Vision.
            </h2>
            <p
              className="description"
              style={{
                maxWidth: '740px',
                margin: '0 auto',
                fontSize: '1.05rem',
                color: 'var(--charcoal-light)',
                lineHeight: '1.6'
              }}
            >
              Hover or tap any service card below to expand its full specs, key highlights, and package options.
            </p>
          </div>
        </ScrollReveal>

        {/* Moving Text Marquee Strip #1 (Left-to-Right) */}
        <ScrollReveal delay={0.1}>
          <div
            className="services-marquee-wrapper"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              margin: '0 0 3rem 0',
              padding: '0.75rem 0',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-pill)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              className="services-marquee-track"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2.5rem',
                animation: 'marqueeScroll 32s linear infinite',
                willChange: 'transform'
              }}
            >
              {[1, 2, 3].map((repeatIdx) => (
                <React.Fragment key={repeatIdx}>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--sage)', textTransform: 'uppercase' }}>
                    WEB DESIGN
                  </span>
                  <span style={{ color: 'var(--forest)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--forest)', textTransform: 'uppercase' }}>
                    DEVELOPMENT
                  </span>
                  <span style={{ color: 'var(--forest)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--sage)', textTransform: 'uppercase' }}>
                    100% RESPONSIVE
                  </span>
                  <span style={{ color: 'var(--forest)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--forest)', textTransform: 'uppercase' }}>
                    CUSTOM WEBSITES
                  </span>
                  <span style={{ color: 'var(--forest)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--sage)', textTransform: 'uppercase' }}>
                    E-COMMERCE & ADMIN
                  </span>
                  <span style={{ color: 'var(--forest)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--forest)', textTransform: 'uppercase' }}>
                    WEB.BLOOMCREATES
                  </span>
                  <span style={{ color: 'var(--forest)', fontSize: '0.75rem' }}>•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* --- EXPANDED CARDS RAIL LAYOUT (DESKTOP & TABLET RAIL) --- */}
        <ScrollReveal delay={0.15}>
          <div className="services-expanded-rail-desktop">
            {servicesData.map((service) => {
              const isExpanded = activeId === service.id;
              const isPremium = service.id === 'premium-website';
              const isEcommerce = service.id === 'ecommerce-website';

              return (
                <div
                  key={service.id}
                  className={`service-rail-card ${isExpanded ? 'is-expanded' : 'is-collapsed'} ${isPremium ? 'premium-highlight' : ''}`}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(service.id)}
                  style={{
                    flex: isExpanded ? '4.2' : '1',
                    minWidth: isExpanded ? '380px' : '76px',
                    height: '520px',
                    backgroundColor: isExpanded ? 'var(--bg-primary)' : 'var(--bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    border: isPremium ? '2px solid var(--forest)' : '1px solid var(--border-medium)',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'flex 0.55s cubic-bezier(0.16, 1, 0.3, 1), min-width 0.55s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                    boxShadow: isExpanded ? '0 24px 50px -12px rgba(23, 51, 34, 0.18)' : 'var(--shadow-sm)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Badge for Premium / E-Commerce */}
                  {(isPremium || isEcommerce) && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        backgroundColor: 'var(--forest)',
                        color: '#ffffff',
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        zIndex: 3,
                        boxShadow: '0 4px 10px rgba(23, 51, 34, 0.2)'
                      }}
                    >
                      <Sparkles size={11} style={{ color: 'var(--sage-muted)' }} />
                      {isEcommerce ? 'ONLINE STORE + ADMIN' : 'CUSTOMER + ADMIN'}
                    </div>
                  )}

                  {/* COLLAPSED SLIVER VIEW (Shown when NOT expanded) */}
                  <div
                    className="sliver-collapsed-content"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      padding: '1.75rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      opacity: isExpanded ? 0 : 1,
                      pointerEvents: isExpanded ? 'none' : 'auto',
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        fontWeight: '800',
                        letterSpacing: '0.1em',
                        color: 'var(--sage)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {service.number}
                    </span>

                    <div
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: 'var(--forest)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {service.title}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.85rem',
                          fontWeight: '700',
                          color: 'var(--sage)'
                        }}
                      >
                        {service.price}
                      </span>
                    </div>

                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--sage-tint)',
                        color: 'var(--forest)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Plus size={16} />
                    </div>
                  </div>

                  {/* EXPANDED FULL CONTENT VIEW (Laid out once at fixed 380px width so text NEVER rewraps mid-reveal) */}
                  <div
                    className="expanded-full-content"
                    style={{
                      width: '380px',
                      height: '100%',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box',
                      opacity: isExpanded ? 1 : 0,
                      pointerEvents: isExpanded ? 'auto' : 'none',
                      transition: 'opacity 0.35s ease 0.1s'
                    }}
                  >
                    <div>
                      {/* Top Meta Label & Price */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.78rem',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            color: 'var(--sage)',
                            textTransform: 'uppercase'
                          }}
                        >
                          SERVICE {service.number}
                        </span>

                        {service.pages && (
                          <span
                            style={{
                              fontSize: '0.73rem',
                              fontWeight: '600',
                              backgroundColor: 'var(--sage-tint)',
                              color: 'var(--forest)',
                              padding: '0.2rem 0.65rem',
                              borderRadius: 'var(--radius-pill)',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {service.pages}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.85rem',
                          color: 'var(--forest)',
                          lineHeight: '1.18',
                          marginBottom: '0.35rem'
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Price Header */}
                      <div style={{ marginBottom: '1rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.75rem',
                            fontWeight: '700',
                            color: 'var(--forest)'
                          }}
                        >
                          {service.price}
                        </span>
                      </div>

                      {/* Short Description */}
                      <p
                        style={{
                          fontSize: '0.92rem',
                          color: 'var(--charcoal-light)',
                          lineHeight: '1.55',
                          marginBottom: '1.25rem',
                          minHeight: '44px'
                        }}
                      >
                        {service.shortDescription}
                      </p>

                      {/* Divider & Key Highlights */}
                      <div
                        style={{
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '1rem',
                          marginBottom: '1rem'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            color: 'var(--forest)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            display: 'block',
                            marginBottom: '0.65rem'
                          }}
                        >
                          KEY HIGHLIGHTS:
                        </span>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                          {service.keyHighlights.slice(0, 4).map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.55rem',
                                fontSize: '0.85rem',
                                color: 'var(--charcoal)',
                                lineHeight: '1.35'
                              }}
                            >
                              <div
                                style={{
                                  width: '17px',
                                  height: '17px',
                                  borderRadius: '50%',
                                  backgroundColor: 'var(--forest)',
                                  color: '#ffffff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  marginTop: '1px'
                                }}
                              >
                                <Check size={10} />
                              </div>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginTop: '1rem' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDetailService(service);
                        }}
                        className="btn-secondary"
                        style={{
                          padding: '0.7rem 0.4rem',
                          fontSize: '0.84rem',
                          fontWeight: '600',
                          justifyContent: 'center',
                          textAlign: 'center'
                        }}
                      >
                        View Details
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCtaClick(service);
                        }}
                        className="btn-primary"
                        style={{
                          padding: '0.7rem 0.4rem',
                          fontSize: '0.84rem',
                          fontWeight: '600',
                          justifyContent: 'center',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* --- MOBILE RESPONSIVE STACK / ACCORDION (FOR SCREENS < 900px) --- */}
        <div className="services-expanded-rail-mobile">
          {servicesData.map((service) => {
            const isExpanded = activeId === service.id;
            const isPremium = service.id === 'premium-website';
            const isEcommerce = service.id === 'ecommerce-website';

            return (
              <div
                key={service.id}
                onClick={() => setHoveredId(isExpanded ? null : service.id)}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  border: isPremium ? '2px solid var(--forest)' : '1px solid var(--border-medium)',
                  marginBottom: '1rem',
                  overflow: 'hidden',
                  boxShadow: isExpanded ? '0 12px 28px -6px rgba(23, 51, 34, 0.12)' : 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Mobile Header Bar */}
                <div
                  style={{
                    padding: '1.15rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: isExpanded ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '800',
                        color: 'var(--sage)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {service.number}
                    </span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--forest)', margin: 0, fontWeight: '700' }}>
                          {service.title}
                        </h3>
                        {(isPremium || isEcommerce) && (
                          <span
                            style={{
                              fontSize: '0.62rem',
                              fontWeight: '700',
                              backgroundColor: 'var(--forest)',
                              color: '#ffffff',
                              padding: '0.15rem 0.55rem',
                              borderRadius: 'var(--radius-pill)',
                              letterSpacing: '0.04em'
                            }}
                          >
                            {isEcommerce ? 'STORE' : 'PREMIUM'}
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.15rem' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)' }}>
                          {service.price}
                        </span>
                        {service.pages && (
                          <span style={{ fontSize: '0.72rem', color: 'var(--sage)', fontWeight: '600' }}>
                            • {service.pages}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isExpanded ? 'var(--forest)' : 'var(--sage-tint)',
                      color: isExpanded ? '#ffffff' : 'var(--forest)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                      flexShrink: 0
                    }}
                  >
                    <ChevronRight size={16} />
                  </div>
                </div>

                {/* Mobile Accordion Expanded Body */}
                {isExpanded && (
                  <div style={{ padding: '1.25rem 1.25rem 1.4rem 1.25rem', borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-primary)' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-light)', lineHeight: '1.55', marginBottom: '1.1rem' }}>
                      {service.shortDescription}
                    </p>

                    <div style={{ marginBottom: '1.25rem', backgroundColor: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.6rem' }}>
                        KEY HIGHLIGHTS:
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {service.keyHighlights.map((feat, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.84rem', color: 'var(--charcoal)', lineHeight: '1.35' }}>
                            <Check size={13} style={{ color: 'var(--forest)', marginTop: '2px', flexShrink: 0 }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDetailService(service);
                        }}
                        className="btn-secondary"
                        style={{ padding: '0.75rem 0.5rem', fontSize: '0.84rem', fontWeight: '600', justifyContent: 'center', minHeight: '44px' }}
                      >
                        View Details
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCtaClick(service);
                        }}
                        className="btn-primary"
                        style={{ padding: '0.75rem 0.5rem', fontSize: '0.84rem', fontWeight: '600', justifyContent: 'center', minHeight: '44px' }}
                      >
                        {service.ctaText}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Moving Text Marquee Strip #2 (Right-to-Left Opposing Motion) */}
        <ScrollReveal delay={0.2}>
          <div
            className="services-marquee-wrapper"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              margin: '3.5rem 0 0 0',
              padding: '0.75rem 0',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-pill)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              className="services-marquee-track-reverse"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2.5rem',
                animation: 'marqueeScrollReverse 32s linear infinite',
                willChange: 'transform'
              }}
            >
              {[1, 2, 3].map((repeatIdx) => (
                <React.Fragment key={repeatIdx}>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--forest)', textTransform: 'uppercase' }}>
                    BESPOKE UI/UX
                  </span>
                  <span style={{ color: 'var(--sage)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--sage)', textTransform: 'uppercase' }}>
                    FAST LOADING & SEO
                  </span>
                  <span style={{ color: 'var(--sage)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--forest)', textTransform: 'uppercase' }}>
                    INSTAGRAM TRAFFIC READY
                  </span>
                  <span style={{ color: 'var(--sage)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--sage)', textTransform: 'uppercase' }}>
                    CREATIVE AGENCY QUALITY
                  </span>
                  <span style={{ color: 'var(--sage)', fontSize: '0.75rem' }}>•</span>
                  <span style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.15em', color: 'var(--forest)', textTransform: 'uppercase' }}>
                    WEB.BLOOMCREATES
                  </span>
                  <span style={{ color: 'var(--sage)', fontSize: '0.75rem' }}>•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* View Details Modal Component */}
      {selectedDetailService && (
        <ServiceDetailModal
          service={selectedDetailService}
          onClose={() => setSelectedDetailService(null)}
          onSelectService={(serviceName) => {
            if (onSelectPackage) {
              onSelectPackage(serviceName);
            }
            const contactSection = document.getElementById('project') || document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            } else if (onOpenProjectModal) {
              onOpenProjectModal(serviceName);
            }
          }}
        />
      )}

      {/* CSS Animations & Layout Rules */}
      <style>{`
        .services-expanded-rail-desktop {
          display: flex;
          gap: 1.25rem;
          width: 100%;
          align-items: stretch;
          margin-bottom: 2rem;
        }

        .services-expanded-rail-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .services-expanded-rail-desktop {
            display: none !important;
          }
          .services-expanded-rail-mobile {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .services-marquee-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marqueeScrollReverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-marquee-track,
          .services-marquee-track-reverse {
            animation: none !important;
          }
          .service-rail-card {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

