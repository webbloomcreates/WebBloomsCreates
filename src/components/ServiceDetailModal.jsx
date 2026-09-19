import React, { useEffect } from 'react';
import { X, Check, Layers, ShieldCheck, ArrowRight, Sparkles, Monitor, Database } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onSelectService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!service) return null;

  const handleCta = () => {
    onSelectService(service.serviceName || service.title);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(15, 23, 18, 0.75)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeInModal 0.25s ease forwards'
      }}
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '740px',
          maxHeight: '90vh',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 18, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          animation: 'slideUpModal 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.75rem 2rem 1.25rem 2rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--sage)',
                  letterSpacing: '0.05em'
                }}
              >
                SERVICE {service.number}
              </span>

              {service.pages && (
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    backgroundColor: 'var(--sage-tint)',
                    color: 'var(--forest)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-pill)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  {service.pages}
                </span>
              )}

              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  backgroundColor: service.isCustomPricing ? 'var(--bg-primary)' : 'var(--forest)',
                  color: service.isCustomPricing ? 'var(--forest)' : '#ffffff',
                  border: service.isCustomPricing ? '1px solid var(--border-medium)' : 'none',
                  padding: '0.2rem 0.75rem',
                  borderRadius: 'var(--radius-pill)'
                }}
              >
                {service.price}
              </span>
            </div>

            <h2
              id="service-modal-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.3rem)',
                color: 'var(--forest)',
                lineHeight: '1.15'
              }}
            >
              {service.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--border-medium)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--charcoal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--sage-tint)';
              e.currentTarget.style.color = 'var(--forest)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
              e.currentTarget.style.color = 'var(--charcoal)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div
          style={{
            padding: '1.75rem 2rem',
            overflowY: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* Description */}
          <p style={{ fontSize: '1.02rem', color: 'var(--charcoal-light)', lineHeight: '1.6' }}>
            {service.shortDescription}
          </p>

          {/* Suitable For / Examples if present */}
          {service.suitableForExamples && (
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.35rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <span
                style={{
                  fontSize: '0.76rem',
                  fontWeight: '700',
                  color: 'var(--forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  display: 'block',
                  marginBottom: '0.6rem'
                }}
              >
                SUITABLE FOR & EXAMPLES:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {service.suitableForExamples.map((ex, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--forest)',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-pill)'
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* SPLIT SECTIONS (For Premium & E-Commerce) */}
          {service.splitSections ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {/* CUSTOMER SECTION */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-medium)',
                  padding: '1.35rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--sage-tint)',
                      color: 'var(--forest)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Monitor size={15} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {service.id === 'ecommerce-website' ? 'CUSTOMER FEATURES' : 'CUSTOMER WEBSITE'}
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {service.customerFeatures?.map((item, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.4' }}>
                      <Check size={14} style={{ color: 'var(--forest)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ADMIN SECTION */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-medium)',
                  padding: '1.35rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--forest)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Database size={15} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {service.id === 'ecommerce-website' ? 'ADMIN FEATURES' : 'ADMIN DASHBOARD'}
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {service.adminFeatures?.map((item, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.4' }}>
                      <Check size={14} style={{ color: 'var(--forest)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* STANDARD FULL FEATURES LIST */
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: 'var(--forest)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.85rem'
                }}
              >
                COMPLETE FEATURE SPECIFICATION:
              </span>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                {service.fullFeatures?.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.88rem',
                      color: 'var(--charcoal)'
                    }}
                  >
                    <Check size={14} style={{ color: 'var(--forest)', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem' }}
          >
            Close
          </button>

          <button
            onClick={handleCta}
            className="btn-primary"
            style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
          >
            {service.ctaText} →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
