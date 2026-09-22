import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/studioData';
import ScrollReveal from './ScrollReveal';
import ServiceDetailModal from './ServiceDetailModal';

export default function Services({ onOpenProjectModal, onSelectPackage }) {
  const [selectedDetailService, setSelectedDetailService] = useState(null);

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
      <div className="container">
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
              From simple business websites to complete e-commerce platforms and custom web solutions — choose the service that fits your needs.
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
              margin: '0 0 3.25rem 0',
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
                    WEBBLOOM.CREATES
                  </span>
                  <span style={{ color: 'var(--forest)', fontSize: '0.75rem' }}>•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 7 Services Cards Grid (3 Columns Desktop) */}
        <div className="services-cards-grid">
          {servicesData.map((service, idx) => {
            const isPremium = service.id === 'premium-website';
            const isEcommerce = service.id === 'ecommerce-website';

            return (
              <ScrollReveal key={service.id} delay={idx * 0.07}>
                <div
                  className={`service-card-item ${isPremium ? 'premium-card-emphasis' : ''}`}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-lg)',
                    border: isPremium ? '2px solid var(--forest)' : '1px solid var(--border-medium)',
                    padding: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isPremium ? '0 16px 36px -8px rgba(23, 51, 34, 0.14)' : 'var(--shadow-sm)',
                    position: 'relative',
                    height: '100%',
                    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease'
                  }}
                >
                  {/* Subtle Badge for Premium & E-Commerce */}
                  {(isPremium || isEcommerce) && (
                    <div
                      className="service-badge-pill"
                      style={{
                        position: 'absolute',
                        top: '-13px',
                        right: '1.5rem',
                        backgroundColor: 'var(--forest)',
                        color: '#ffffff',
                        padding: '0.25rem 0.85rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.68rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        boxShadow: '0 4px 10px rgba(23, 51, 34, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease'
                      }}
                    >
                      <Sparkles size={11} style={{ color: 'var(--sage-muted)' }} />
                      {isEcommerce ? 'ONLINE STORE + ADMIN' : 'CUSTOMER + ADMIN'}
                    </div>
                  )}

                  <div>
                    {/* Top: Service Number */}
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span
                        className="service-num-label"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          letterSpacing: '0.12em',
                          color: 'var(--sage)',
                          textTransform: 'uppercase',
                          transition: 'color 0.3s ease, letter-spacing 0.3s ease'
                        }}
                      >
                        SERVICE {service.number}
                      </span>
                    </div>

                    {/* Service Name */}
                    <h3
                      className="service-card-title"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.65rem, 2.3vw, 2rem)',
                        color: 'var(--forest)',
                        lineHeight: '1.18',
                        marginBottom: '0.85rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Price & Pages Block */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        gap: '0.65rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.6rem, 2.2vw, 1.9rem)',
                          fontWeight: '700',
                          color: 'var(--forest)',
                          lineHeight: '1.2'
                        }}
                      >
                        {service.price}
                      </span>

                      {service.pages && (
                        <span
                          style={{
                            fontSize: '0.75rem',
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

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: 'var(--charcoal-light)',
                        lineHeight: '1.6',
                        marginBottom: '1.25rem',
                        minHeight: '48px'
                      }}
                    >
                      {service.shortDescription}
                    </p>

                    {/* Subtle Divider */}
                    <div
                      style={{
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: '1.1rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.73rem',
                          fontWeight: '700',
                          color: 'var(--forest)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          display: 'block',
                          marginBottom: '0.85rem'
                        }}
                      >
                        KEY HIGHLIGHTS:
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {service.keyHighlights.map((feat, fIdx) => (
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
                              className="feature-check-icon"
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
                                marginTop: '1px',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <Check size={11} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Buttons (Aligned at Bottom) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginTop: '1.25rem' }}>
                    <button
                      onClick={() => setSelectedDetailService(service)}
                      className="btn-secondary card-view-details-btn"
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        justifyContent: 'center',
                        textAlign: 'center',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleCtaClick(service)}
                      className="btn-primary card-cta-btn"
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        justifyContent: 'center',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight size={13} className="service-arrow-icon" style={{ transition: 'transform 0.25s ease' }} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
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
                    WEBBLOOM.CREATES
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

      {/* CSS Animations & Hover FX */}
      <style>{`
        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.85rem;
          align-items: stretch;
        }

        @media (max-width: 1080px) {
          .services-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 680px) {
          .services-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (hover: hover) {
          .service-card-item:hover {
            transform: translateY(-7px) scale(1.018);
            border-color: var(--forest) !important;
            box-shadow: 0 22px 45px -10px rgba(23, 51, 34, 0.16) !important;
          }
          .service-card-item:hover .service-num-label {
            color: var(--forest) !important;
            letter-spacing: 0.16em !important;
          }
          .service-card-item:hover .service-arrow-icon {
            transform: translateX(5px) !important;
          }
          .service-card-item:hover .feature-check-icon {
            background-color: var(--forest) !important;
            color: #ffffff !important;
            transform: scale(1.1);
          }
          .service-card-item:hover .service-badge-pill {
            transform: translateY(-2px);
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
          .service-card-item {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
