import React, { useState } from 'react';
import { ArrowUpRight, Globe, Sparkles, ExternalLink, ShieldCheck, ArrowRight, Layers, Eye, Play, Pause } from 'lucide-react';
import { portfolioData } from '../data/studioData';
import ProjectPreviewModal from './ProjectPreviewModal';
import ScrollReveal from './ScrollReveal';

export default function Portfolio({ onOpenProjectModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

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

  // Duplicate list for infinite smooth marquee reel
  const marqueeList = [...portfolioData, ...portfolioData];

  return (
    <section
      id="work"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="subheading">SELECTED STUDIO WORK</span>
            <h2 className="heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Websites designed to make your business look extraordinary.
            </h2>
            <p className="description" style={{ maxWidth: '680px' }}>
              We don't do generic templates. Every website below is a bespoke digital experience, custom designed and coded to establish instant trust and drive client inquiries.
            </p>
          </div>
        </ScrollReveal>

        {/* --- ANIMATED MOVING CARDS MARQUEE REEL --- */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              position: 'relative',
              marginBottom: '4rem',
              marginTop: '1rem'
            }}
          >
            {/* Reel Header Label & Pause Control */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                padding: '0 0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--sage)',
                    display: 'inline-block',
                    animation: 'pulseGlow 2s infinite'
                  }}
                />
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--forest)'
                  }}
                >
                  LIVE SHOWCASE REEL • ANIMATED CARDS (HOVER TO PAUSE & INSPECT)
                </span>
              </div>

              <button
                onClick={() => setIsMarqueePaused(!isMarqueePaused)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.76rem',
                  fontWeight: '700',
                  color: 'var(--forest)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-medium)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {isMarqueePaused ? <Play size={12} /> : <Pause size={12} />}
                {isMarqueePaused ? 'Resume Motion' : 'Pause Motion'}
              </button>
            </div>

            {/* Marquee Track Container */}
            <div
              className="portfolio-marquee-wrapper"
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
              style={{
                overflow: 'hidden',
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-primary)',
                padding: '1.75rem 0',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {/* Fade Edges Masks */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: '80px',
                  background: 'linear-gradient(90deg, var(--bg-primary) 0%, transparent 100%)',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  width: '80px',
                  background: 'linear-gradient(-90deg, var(--bg-primary) 0%, transparent 100%)',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
              />

              <div
                className={`portfolio-marquee-track ${isMarqueePaused ? 'paused-track' : ''}`}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  width: 'max-content',
                  animation: 'portfolioMarquee 42s linear infinite',
                  animationPlayState: isMarqueePaused ? 'paused' : 'running',
                  willChange: 'transform'
                }}
              >
                {marqueeList.map((project, itemIdx) => (
                  <div
                    key={`${project.id}-${itemIdx}`}
                    onClick={() => setSelectedProject(project)}
                    className="moving-card-item"
                    style={{
                      width: '320px',
                      flexShrink: 0,
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-medium)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-sm)',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Top Banner Gradient */}
                    <div
                      style={{
                        height: '140px',
                        background: project.imageBg,
                        padding: '1rem',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: '700',
                            backgroundColor: 'rgba(255, 255, 255, 0.22)',
                            backdropFilter: 'blur(6px)',
                            color: '#ffffff',
                            padding: '0.2rem 0.65rem',
                            borderRadius: 'var(--radius-pill)',
                            textTransform: 'uppercase'
                          }}
                        >
                          {project.categoryKey}
                        </span>

                        <span
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            color: 'var(--forest)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                          }}
                        >
                          <Eye size={14} />
                        </span>
                      </div>

                      <div style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', lineHeight: '1.2' }}>
                          {project.name}
                        </h4>
                      </div>
                    </div>

                    {/* Bottom Details */}
                    <div style={{ padding: '1rem 1.15rem 1.15rem 1.15rem' }}>
                      <p style={{ fontSize: '0.84rem', color: 'var(--charcoal-light)', lineHeight: '1.45', marginBottom: '0.85rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {project.tagline}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                        <span style={{ fontSize: '0.76rem', fontWeight: '600', color: 'var(--sage)' }}>
                          {project.client}
                        </span>
                        <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--forest)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                          Quick View <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.15}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.65rem',
              marginBottom: '3.5rem',
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

        {/* Detailed Showcase Stream Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem', marginBottom: '5rem' }}>
          {filteredProjects.map((project, idx) => {
            const isFullWidth = project.layoutType === 'full-width';
            const isAlternatingRight = project.layoutType === 'alternating-right';

            return (
              <ScrollReveal key={project.id} delay={idx * 0.08}>
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
                    gridTemplateColumns: '1fr',
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
                    {/* Subtle Dot Matrix Pattern */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.08,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Browser Mockup Frame */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.28)',
                        overflow: 'hidden',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        position: 'relative',
                        zIndex: 2
                      }}
                      className="mockup-frame-hover"
                    >
                      {/* Browser Mockup Header Bar */}
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

                      {/* Mockup Canvas */}
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

                  {/* Details Column */}
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
                      {/* Tag & Year */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span className="badge-tag">
                          <Sparkles size={13} /> {project.category}
                        </span>
                        <span style={{ fontSize: '0.86rem', fontWeight: '600', color: 'var(--charcoal-muted)' }}>
                          Client: {project.client} • {project.year}
                        </span>
                      </div>

                      {/* Title */}
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

                      {/* Services */}
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

                      {/* Technologies */}
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

      {/* CSS Animations & Responsive Rules */}
      <style>{`
        @keyframes portfolioMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .moving-card-item:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--forest) !important;
          box-shadow: 0 20px 40px -10px rgba(23, 51, 34, 0.18) !important;
        }

        @media (min-width: 960px) {
          .portfolio-item-card {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }

        @media (hover: hover) {
          .portfolio-item-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 24px 48px -12px rgba(23, 51, 34, 0.14) !important;
            border-color: var(--forest) !important;
          }
          .portfolio-item-card:hover .mockup-frame-hover {
            transform: scale(1.02);
          }
          .portfolio-item-card:hover .portfolio-title-text {
            color: var(--forest-light) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-marquee-track {
            animation: none !important;
          }
          .moving-card-item, .portfolio-item-card {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
