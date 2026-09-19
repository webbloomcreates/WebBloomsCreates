import React, { useState } from 'react';
import { ArrowUpRight, Globe, Sparkles, ExternalLink, ShieldCheck, ArrowRight, Layers, Eye } from 'lucide-react';
import { portfolioData } from '../data/studioData';
import ProjectPreviewModal from './ProjectPreviewModal';
import ScrollReveal from './ScrollReveal';

export default function Portfolio({ onOpenProjectModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Work', key: 'all' },
    { label: 'E-Commerce', key: 'ecommerce' },
    { label: 'Service Business', key: 'service' },
    { label: 'Personal Brand & Portfolio', key: 'portfolio' },
    { label: 'Restaurant & Hospitality', key: 'restaurant' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((p) => {
        if (activeCategory === 'service') return p.categoryKey === 'service' || p.categoryKey === 'personal-brand';
        if (activeCategory === 'portfolio') return p.categoryKey === 'portfolio' || p.categoryKey === 'personal-brand';
        return p.categoryKey === activeCategory;
      });

  return (
    <section
      id="work"
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
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <span className="subheading">SELECTED STUDIO WORK</span>
            <h2 className="heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Websites designed to make your business look extraordinary.
            </h2>
            <p className="description" style={{ maxWidth: '680px' }}>
              We don't do generic templates. Every website below is a bespoke digital experience, custom designed and coded to establish instant trust and drive client inquiries.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.65rem',
              marginBottom: '4.5rem',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  style={{
                    padding: '0.65rem 1.4rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--forest)' : 'var(--border-medium)',
                    backgroundColor: isActive ? 'var(--forest)' : 'var(--bg-secondary)',
                    color: isActive ? '#ffffff' : 'var(--charcoal)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Editorial Projects Layout Stream */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginBottom: '5rem' }}>
          {filteredProjects.map((project, idx) => {
            const isFullWidth = project.layoutType === 'full-width';
            const isAlternatingRight = project.layoutType === 'alternating-right';

            return (
              <ScrollReveal key={project.id} delay={idx * 0.1}>
                <div
                  className="portfolio-item-card"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-medium)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'grid',
                    gridTemplateColumns: isFullWidth ? '1fr' : '1fr',
                    gap: '0',
                    position: 'relative'
                  }}
                >
                  {/* Visual Showcase Box */}
                  <div
                    style={{
                      gridOrder: isAlternatingRight ? 2 : 1,
                      background: project.imageBg,
                      padding: 'clamp(2rem, 4vw, 3.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: isFullWidth ? '380px' : '340px'
                    }}
                    className="portfolio-img-box"
                  >
                    {/* Subtle Background Pattern */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.08,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                      }}
                    />

                    {/* Browser Mockup Frame */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                        overflow: 'hidden',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        position: 'relative',
                        zIndex: 2
                      }}
                      className="mockup-frame-hover"
                    >
                      {/* Mockup Header Bar */}
                      <div
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          padding: '0.65rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid var(--border-subtle)'
                        }}
                      >
                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E06C75' }} />
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E5C07B' }} />
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#98C379' }} />
                        </div>

                        <div
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '0.2rem 0.85rem',
                            borderRadius: 'var(--radius-pill)',
                            fontSize: '0.7rem',
                            color: 'var(--charcoal-muted)',
                            fontFamily: 'monospace',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          <ShieldCheck size={11} style={{ color: 'var(--sage)' }} />
                          {project.client.toLowerCase().replace(/\s+/g, '')}.com
                        </div>

                        <span style={{ fontSize: '0.68rem', fontWeight: '700', color: 'var(--sage)' }}>
                          STUDIO BUILD
                        </span>
                      </div>

                      {/* Mockup Content Canvas Preview */}
                      <div
                        style={{
                          padding: '1.75rem 1.5rem',
                          background: 'linear-gradient(180deg, #FBF8F3 0%, #FFFDF9 100%)',
                          minHeight: '220px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', color: 'var(--forest)', fontSize: '1.2rem' }}>
                            {project.name}
                          </span>
                          <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--forest)', color: '#ffffff', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-pill)', fontWeight: '600' }}>
                            {project.category}
                          </span>
                        </div>

                        <div style={{ margin: '1.25rem 0' }}>
                          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--forest)', lineHeight: '1.2', marginBottom: '0.4rem' }}>
                            {project.tagline}
                          </h4>
                          <p style={{ fontSize: '0.84rem', color: 'var(--charcoal-light)', lineHeight: '1.4' }}>
                            Custom bespoke digital experience crafted for modern high-ticket clientele.
                          </p>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {(project.features || []).map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              style={{
                                fontSize: '0.72rem',
                                backgroundColor: 'var(--sage-tint)',
                                color: 'var(--forest)',
                                padding: '0.18rem 0.55rem',
                                borderRadius: 'var(--radius-pill)',
                                fontWeight: '600'
                              }}
                            >
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Details & Content Box */}
                  <div
                    style={{
                      gridOrder: isAlternatingRight ? 1 : 2,
                      padding: 'clamp(2rem, 4vw, 3.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: 'var(--bg-secondary)'
                    }}
                  >
                    <div>
                      {/* Category Tag & Year */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span className="badge-tag">
                          <Sparkles size={13} /> {project.category}
                        </span>
                        <span style={{ fontSize: '0.86rem', fontWeight: '600', color: 'var(--charcoal-muted)' }}>
                          Client: {project.client} • {project.year}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3
                        className="portfolio-title-text"
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                          color: 'var(--forest)',
                          lineHeight: '1.15',
                          marginBottom: '1rem',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p style={{ fontSize: '1.02rem', color: 'var(--charcoal-light)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                        {project.description}
                      </p>

                      {/* Services Provided */}
                      <div style={{ marginBottom: '1.75rem' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.6rem' }}>
                          SERVICES PROVIDED:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                          {(project.services || []).map((srv, sIdx) => (
                            <span
                              key={sIdx}
                              style={{
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--border-medium)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: 'var(--radius-pill)',
                                fontSize: '0.84rem',
                                color: 'var(--charcoal)',
                                fontWeight: '500'
                              }}
                            >
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div style={{ marginBottom: '2.25rem' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                          TECHNOLOGIES:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {(project.technologies || []).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontSize: '0.8rem',
                                color: 'var(--forest)',
                                fontWeight: '600'
                              }}
                            >
                              {tech} {tIdx < project.technologies.length - 1 ? '•' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '1rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid var(--border-subtle)'
                      }}
                    >
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary portfolio-action-btn"
                          style={{ padding: '0.85rem 1.8rem', fontSize: '0.92rem' }}
                        >
                          View Live Website →
                        </a>
                      ) : null}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className={project.liveUrl ? 'btn-secondary portfolio-action-btn' : 'btn-primary portfolio-action-btn'}
                        style={{ padding: '0.85rem 1.8rem', fontSize: '0.92rem' }}
                      >
                        <Eye size={16} /> View Case Study →
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Editorial Footer Quote Callout */}
        <ScrollReveal>
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              maxWidth: '840px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <span className="subheading" style={{ color: 'var(--sage)' }}>FUTURE-PROOF DIGITAL PRESENCE</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: 'var(--forest)',
                marginBottom: '1rem',
                lineHeight: '1.15'
              }}
            >
              Ready to give your business a signature website experience?
            </h3>
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--charcoal-light)',
                marginBottom: '2rem',
                maxWidth: '620px',
                margin: '0 auto 2rem auto',
                lineHeight: '1.65'
              }}
            >
              We take a limited number of client projects each month to ensure dedicated craftsmanship, rapid turnarounds, and exceptional client support.
            </p>

            <button
              onClick={() => onOpenProjectModal()}
              className="btn-primary"
              style={{ padding: '1.05rem 2.2rem', fontSize: '1rem' }}
            >
              Start Your Website Build →
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectPreviewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenProjectModal={onOpenProjectModal}
        />
      )}

      {/* Responsive Layout CSS for Editorial Portfolio */}
      <style>{`
        @media (min-width: 960px) {
          .portfolio-item-card {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        .portfolio-item-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -12px rgba(23, 51, 34, 0.12) !important;
          border-color: var(--sage) !important;
        }
        .portfolio-item-card:hover .mockup-frame-hover {
          transform: scale(1.02);
        }
        .portfolio-item-card:hover .portfolio-title-text {
          color: var(--forest-light) !important;
        }
      `}</style>
    </section>
  );
}
