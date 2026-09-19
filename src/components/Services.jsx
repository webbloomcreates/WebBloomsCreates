import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Layers, Info, Monitor, Database } from 'lucide-react';
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
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <span className="subheading">OUR SERVICES</span>
            <h2 className="heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Websites Built Around Your Vision.
            </h2>
            <p className="description" style={{ maxWidth: '740px' }}>
              From simple business websites to complete e-commerce platforms and custom web solutions — choose the service that fits your needs.
            </p>
          </div>
        </ScrollReveal>

        {/* 7 Services Cards Grid */}
        <div className="services-cards-grid">
          {servicesData.map((service, idx) => {
            const isHighlighted = service.id === 'premium-website' || service.id === 'ecommerce-website';

            return (
              <ScrollReveal key={service.id} delay={idx * 0.07}>
                <div
                  className={`service-card-item ${isHighlighted ? 'highlighted-service-card' : ''}`}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-lg)',
                    border: isHighlighted ? '2px solid var(--forest)' : '1px solid var(--border-medium)',
                    padding: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isHighlighted ? '0 16px 32px -8px rgba(23, 51, 34, 0.12)' : 'var(--shadow-sm)',
                    position: 'relative',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  {/* Highlight Badge if Premium / E-Commerce */}
                  {isHighlighted && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-13px',
                        right: '1.5rem',
                        backgroundColor: 'var(--forest)',
                        color: '#ffffff',
                        padding: '0.25rem 0.85rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        boxShadow: '0 4px 10px rgba(23, 51, 34, 0.2)'
                      }}
                    >
                      <Sparkles size={11} style={{ color: 'var(--sage-muted)' }} />
                      {service.id === 'ecommerce-website' ? 'ONLINE STORE + ADMIN' : 'CUSTOMER + ADMIN'}
                    </div>
                  )}

                  <div>
                    {/* Number & Price Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.35rem',
                          fontWeight: '700',
                          color: 'var(--sage)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        SERVICE {service.number}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {service.pages && (
                          <span
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: '600',
                              backgroundColor: 'var(--sage-tint)',
                              color: 'var(--forest)',
                              padding: '0.2rem 0.6rem',
                              borderRadius: 'var(--radius-pill)',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {service.pages}
                          </span>
                        )}

                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: '700',
                            backgroundColor: service.isCustomPricing ? 'var(--bg-secondary)' : 'var(--forest)',
                            color: service.isCustomPricing ? 'var(--forest)' : '#ffffff',
                            border: service.isCustomPricing ? '1px solid var(--border-medium)' : 'none',
                            padding: '0.25rem 0.75rem',
                            borderRadius: 'var(--radius-pill)',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* Service Name */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                        color: 'var(--forest)',
                        lineHeight: '1.2',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: 'var(--charcoal-light)',
                        lineHeight: '1.55',
                        marginBottom: '1.35rem',
                        minHeight: '44px'
                      }}
                    >
                      {service.shortDescription}
                    </p>

                    {/* Key Feature Highlights */}
                    <div style={{ marginBottom: '1.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                      <span
                        style={{
                          fontSize: '0.73rem',
                          fontWeight: '700',
                          color: 'var(--forest)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          display: 'block',
                          marginBottom: '0.75rem'
                        }}
                      >
                        KEY HIGHLIGHTS:
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {service.keyHighlights.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.55rem',
                              fontSize: '0.88rem',
                              color: 'var(--charcoal)',
                              lineHeight: '1.4'
                            }}
                          >
                            <div
                              style={{
                                width: '17px',
                                height: '17px',
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
                              <Check size={11} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginTop: '1rem' }}>
                    <button
                      onClick={() => setSelectedDetailService(service)}
                      className="btn-secondary"
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        justifyContent: 'center',
                        textAlign: 'center'
                      }}
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleCtaClick(service)}
                      className="btn-primary"
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        justifyContent: 'center',
                        textAlign: 'center'
                      }}
                    >
                      {service.ctaText}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
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

      {/* Grid Responsiveness CSS */}
      <style>{`
        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
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

        .service-card-item:hover {
          transform: translateY(-4px);
          border-color: var(--forest) !important;
          box-shadow: 0 18px 36px -8px rgba(23, 51, 34, 0.14) !important;
        }
      `}</style>
    </section>
  );
}
