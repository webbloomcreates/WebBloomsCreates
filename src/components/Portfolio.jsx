import React, { useState } from 'react';
import { ArrowUpRight, Globe, Sparkles, ExternalLink, ShieldCheck, ArrowRight, Layers, Eye, Play, Pause } from 'lucide-react';
import { portfolioData } from '../data/studioData';
import ProjectPreviewModal from './ProjectPreviewModal';
import ScrollReveal from './ScrollReveal';

export default function Portfolio({ onOpenProjectModal }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

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
                {marqueeList.map((project, itemIdx) => {
                  const getImageUrl = (imgPath) => {
                    if (!imgPath) return null;
                    if (imgPath.startsWith('http')) return imgPath;
                    const cleanPath = imgPath.replace(/^\.?\//, '');
                    return `${import.meta.env.BASE_URL}${cleanPath}`;
                  };

                  const imageSrc = getImageUrl(project.image);

                  const handleCardClick = () => {
                    if (project.liveUrl) {
                      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                    } else {
                      setSelectedProject(project);
                    }
                  };

                  return (
                    <div
                      key={`${project.id}-${itemIdx}`}
                      onClick={handleCardClick}
                      className="moving-card-item"
                      style={{
                        width: '340px',
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
                      {/* Top Preview: Screenshot Frame or Gradient Banner */}
                      {imageSrc ? (
                        <div
                          style={{
                            height: '180px',
                            backgroundColor: 'var(--bg-primary)',
                            position: 'relative',
                            overflow: 'hidden',
                            borderBottom: '1px solid var(--border-subtle)',
                            display: 'flex',
                            flexDirection: 'column'
                          }}
                        >
                          {/* Mini Browser Bar */}
                          <div
                            style={{
                              backgroundColor: 'var(--bg-card)',
                              padding: '0.45rem 0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              borderBottom: '1px solid var(--border-subtle)',
                              position: 'relative',
                              zIndex: 2
                            }}
                          >
                            <div style={{ display: 'flex', gap: '0.3rem' }}>
                              <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#E06C75' }} />
                              <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#E5C07B' }} />
                              <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#98C379' }} />
                            </div>
                            <span
                              style={{
                                fontSize: '0.66rem',
                                color: 'var(--charcoal-muted)',
                                fontFamily: 'monospace',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                maxWidth: '170px'
                              }}
                            >
                              {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : project.name}
                            </span>
                            <span
                              style={{
                                fontSize: '0.65rem',
                                fontWeight: '700',
                                backgroundColor: 'var(--sage-tint)',
                                color: 'var(--forest)',
                                padding: '0.15rem 0.5rem',
                                borderRadius: 'var(--radius-pill)'
                              }}
                            >
                              LIVE ↗
                            </span>
                          </div>

                          {/* Screenshot Image Container */}
                          <div style={{ flexGrow: 1, overflow: 'hidden', position: 'relative' }}>
                            <img
                              src={imageSrc}
                              alt={project.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                              }}
                              className="card-img-hover"
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            height: '160px',
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
                      )}

                      {/* Bottom Details */}
                      <div style={{ padding: '1.1rem 1.15rem 1.15rem 1.15rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--forest)', fontWeight: '700', lineHeight: '1.2' }}>
                            {project.name}
                          </h4>
                        </div>

                        <p style={{ fontSize: '0.84rem', color: 'var(--charcoal-light)', lineHeight: '1.45', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {project.tagline}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', gap: '0.5rem' }}>
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                              }}
                              className="btn-primary"
                              style={{
                                padding: '0.42rem 0.9rem',
                                fontSize: '0.78rem',
                                borderRadius: 'var(--radius-pill)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.3rem'
                              }}
                            >
                              Visit Website <ExternalLink size={12} />
                            </a>
                          ) : (
                            <span style={{ fontSize: '0.76rem', fontWeight: '600', color: 'var(--sage)' }}>
                              {project.client}
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="btn-secondary"
                            style={{
                              padding: '0.42rem 0.9rem',
                              fontSize: '0.78rem',
                              borderRadius: 'var(--radius-pill)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}
                          >
                            Quick View <Eye size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

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
