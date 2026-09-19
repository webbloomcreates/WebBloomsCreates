import React from 'react';
import { Palette, Smartphone, ShieldCheck, DollarSign, Sparkles, Instagram, ArrowRight } from 'lucide-react';
import { studioInfo } from '../data/studioData';

export default function ValueProps() {
  const pillars = [
    {
      icon: Palette,
      title: "Bespoke Visual Craftsmanship",
      description: "No generic AI-generated templates or repetitive site kits. We design every page from scratch to reflect your brand's unique ethos, commanding higher prices from your ideal clients."
    },
    {
      icon: Smartphone,
      title: "Engineered for Instagram Traffic",
      description: "Over 80% of visitors from your Instagram profile click through on mobile. We build mobile-first experiences with instant loading, legible typography, and tap-friendly lead pathways."
    },
    {
      icon: ShieldCheck,
      title: "100% Client Control & Ownership",
      description: "You own every line of code, asset, domain, and account. We provide personalized video walkthrough tutorials at handoff so you can update text and images anytime with ease."
    },
    {
      icon: DollarSign,
      title: "Transparent Fixed Pricing",
      description: "No unexpected hourly bills or hidden retainer surprises. Clear package tiers, detailed deliverable checklists, and predictable payment schedules from day one."
    }
  ];

  return (
    <section
      id="value-props"
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
        <div className="section-header">
          <span className="subheading">THE WEB.BLOOMCREATES STANDARD</span>
          <h2 className="heading">
            Why modern brands choose web.bloomcreates over generic freelancers & templates.
          </h2>
          <p className="description">
            Your website is the digital front door to your business. We bridge the gap between creative visual artistry and strategic business performance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all var(--transition-smooth)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'var(--sage)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--sage-tint)',
                      color: 'var(--forest)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      border: '1px solid rgba(139, 168, 136, 0.3)'
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      color: 'var(--forest)',
                      marginBottom: '0.85rem'
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.96rem',
                      color: 'var(--charcoal-light)',
                      lineHeight: '1.65'
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px dashed var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: 'var(--sage)'
                  }}
                >
                  <Sparkles size={14} /> Built for growth
                </div>
              </div>
            );
          })}
        </div>

        {/* Instagram Connection Bar */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 2.5rem',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--forest)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Instagram size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--forest)', marginBottom: '0.2rem' }}>
                Follow along behind the scenes on Instagram
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-muted)' }}>
                We share design tips, client site breakdowns, and web strategy on <strong>{studioInfo.handle}</strong>
              </p>
            </div>
          </div>

          <a
            href={studioInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
          >
            Visit Instagram
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
