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
                    style={{
                      width: '100%',
                      padding: '1.4rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--forest)'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        lineHeight: '1.3',
                        color: isOpen ? 'var(--forest)' : 'var(--charcoal)'
                      }}
                    >
                      {idx + 1}. {item.question}
                    </span>

                    <div
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
                      maxHeight: isOpen ? '400px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, padding 0.35s ease'
                    }}
                  >
                    <div
                      style={{
                        padding: '0 1.75rem 1.6rem 1.75rem',
                        borderTop: '1px solid var(--border-subtle)',
                        color: 'var(--charcoal-light)',
                        fontSize: '1rem',
                        lineHeight: '1.7'
                      }}
                    >
                      <p style={{ marginTop: '1rem' }}>{item.answer}</p>
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
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                Have a specific question about your project?
              </h4>
              <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)' }}>
                Message us on Instagram <strong>{studioInfo.handle}</strong> or send us your details directly through our project form.
              </p>
            </div>

            <button
              onClick={() => onOpenProjectModal()}
              className="btn-primary"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.92rem' }}
            >
              Ask a Question →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
