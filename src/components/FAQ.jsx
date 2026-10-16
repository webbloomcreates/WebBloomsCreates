import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Sparkles, HelpCircle } from 'lucide-react';
import { faqData, studioInfo } from '../data/studioData';
import ScrollReveal from './ScrollReveal';

export default function FAQ({ onOpenProjectModal }) {
  // Single active index state ensuring only 1 question expands at a time
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '4.5rem' }}>
            <span className="subheading">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Everything you need to know.
            </h2>
            <p className="description" style={{ maxWidth: '640px' }}>
              Got questions about pricing, timelines, domain hosting, or custom features? Here are concise, honest answers to our most common client inquiries.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordions List (10 Questions) */}
        <div
          className="faq-list-container"
          style={{
            maxWidth: '840px',
            margin: '0 auto 4rem auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div
                  className="faq-accordion-card"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid',
                    borderColor: isOpen ? 'var(--forest)' : 'var(--border-subtle)',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: isOpen ? '0 12px 28px rgba(23, 51, 34, 0.08)' : 'var(--shadow-sm)'
                  }}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    className="faq-accordion-btn"
                    style={{
                      width: '100%',
                      padding: 'clamp(1rem, 3.2vw, 1.4rem) clamp(0.95rem, 3.2vw, 1.75rem)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--forest)'
                    }}
                  >
                    <span
                      className="faq-accordion-title"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.08rem, 2.8vw, 1.3rem)',
                        fontWeight: '600',
                        lineHeight: '1.3',
                        color: isOpen ? 'var(--forest)' : 'var(--charcoal)'
                      }}
                    >
                      {idx + 1}. {item.question}
                    </span>

                    <div
                      className="faq-toggle-icon"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'var(--forest)' : 'var(--sage-tint)',
                        color: isOpen ? '#ffffff' : 'var(--forest)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '500px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, padding 0.35s ease'
                    }}
                  >
                    <div
                      className="faq-answer-inner"
                      style={{
                        padding: '0 clamp(0.95rem, 3.2vw, 1.75rem) clamp(1.1rem, 3.2vw, 1.6rem) clamp(0.95rem, 3.2vw, 1.75rem)',
                        borderTop: '1px solid var(--border-subtle)',
                        color: 'var(--charcoal-light)',
                        fontSize: 'clamp(0.92rem, 2.2vw, 1rem)',
                        lineHeight: '1.65'
                      }}
                    >
                      <p style={{ marginTop: '0.85rem' }}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* FAQ Bottom Support Callout Box */}
        <ScrollReveal delay={0.2}>
          <div
            className="faq-support-box"
            style={{
              textAlign: 'center',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              padding: '2.5rem 2rem',
              maxWidth: '680px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              className="faq-support-icon"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--sage-tint)',
                color: 'var(--forest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <MessageSquare size={22} />
            </div>

            <div>
              <h4 className="faq-support-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                Have a specific question about your project?
              </h4>
              <p className="faq-support-desc" style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)' }}>
                Message us on Instagram{' '}
                <a
                  href={studioInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--forest)', fontWeight: '700', textDecoration: 'underline' }}
                >
                  {studioInfo.handle}
                </a>{' '}
                or send us your details directly through our project form.
              </p>
            </div>

            <button
              onClick={() => onOpenProjectModal()}
              className="btn-primary faq-support-btn"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.92rem' }}
            >
              Ask a Question →
            </button>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #faq .section-header {
            margin-bottom: 1.5rem !important;
          }
          .faq-list-container {
            margin-bottom: 1.5rem !important;
            gap: 0.65rem !important;
          }
          .faq-accordion-btn {
            padding: 0.8rem 0.95rem !important;
            gap: 0.5rem !important;
          }
          .faq-accordion-title {
            font-size: 0.98rem !important;
            line-height: 1.35 !important;
          }
          .faq-toggle-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .faq-toggle-icon svg {
            width: 15px !important;
            height: 15px !important;
          }
          .faq-answer-inner {
            padding: 0 0.95rem 0.8rem 0.95rem !important;
            font-size: 0.84rem !important;
            line-height: 1.5 !important;
          }
          .faq-support-box {
            padding: 1.35rem 1rem !important;
            gap: 0.75rem !important;
          }
          .faq-support-icon {
            width: 38px !important;
            height: 38px !important;
          }
          .faq-support-title {
            font-size: 1.18rem !important;
            margin-bottom: 0.35rem !important;
            line-height: 1.25 !important;
          }
          .faq-support-desc {
            font-size: 0.84rem !important;
            line-height: 1.5 !important;
          }
          .faq-support-btn {
            padding: 0.75rem 1.4rem !important;
            font-size: 0.86rem !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
