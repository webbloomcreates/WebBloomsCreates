import React, { useState, useRef } from 'react';
import { ArrowUpRight, Globe, Sparkles, ExternalLink, ShieldCheck, ArrowRight, ArrowLeft, Layers, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/studioData';
import ProjectPreviewModal from './ProjectPreviewModal';
import ScrollReveal from './ScrollReveal';

export default function Portfolio({ onOpenProjectModal }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  // Scroll Track Controls (Left / Right Buttons)
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <span className="subheading">OUR FEATURED WORK</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)', marginBottom: '1rem' }}>
                Websites designed to make your business look extraordinary.
              </h2>
              <p className="description" style={{ margin: 0 }}>
                Explore our recent live client builds. Every website is custom-designed from scratch for maximum brand appeal, lighting speed, and client conversion.
              </p>
            </div>

            {/* Manual Slider Navigation Arrows */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              className="portfolio-slider-controls"
            >
              <button
                onClick={() => handleScroll('left')}
                aria-label="Previous Project"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--forest)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="portfolio-nav-btn"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={() => handleScroll('right')}
                aria-label="Next Project"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--forest)',
                  border: '1px solid var(--forest)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: 'var(--shadow-md)'
                }}
                className="portfolio-nav-btn"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* --- INTERACTIVE SCROLLABLE CARDS CONTAINER --- */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              position: 'relative',
              marginBottom: '3.5rem'
            }}
          >
            {/* Scrollable Track */}
            <div
              ref={scrollContainerRef}
              className="portfolio-scroll-container"
              style={{
                display: 'flex',
                gap: '1.5rem',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                padding: '0.75rem 0.25rem 1.75rem 0.25rem',
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--sage) var(--bg-secondary)'
              }}
            >
              {portfolioData.map((project) => {
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
                    key={project.id}
                    onClick={handleCardClick}
                    className="portfolio-hover-card"
                    style={{
                      width: 'clamp(290px, 85vw, 360px)',
                      flexShrink: 0,
                      scrollSnapAlign: 'start',
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
                    {/* Top Preview Image & Header */}
                    {imageSrc ? (
                      <div
                        style={{
                          height: '210px',
                          backgroundColor: 'var(--bg-primary)',
                          position: 'relative',
                          overflow: 'hidden',
                          borderBottom: '1px solid var(--border-subtle)',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        {/* Mini Browser Header */}
                        <div
                          style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '0.5rem 0.85rem',
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
                              fontSize: '0.68rem',
                              color: 'var(--charcoal-muted)',
                              fontFamily: 'monospace',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              maxWidth: '180px'
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

                        {/* Screenshot Image Frame */}
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
                            className="card-img-zoom"
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          height: '190px',
                          background: project.imageBg,
                          padding: '1.25rem',
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
                              padding: '0.25rem 0.75rem',
                              borderRadius: 'var(--radius-pill)',
                              textTransform: 'uppercase'
                            }}
                          >
                            {project.categoryKey}
                          </span>

                          <span
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(255,255,255,0.9)',
                              color: 'var(--forest)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}
                          >
                            <Eye size={15} />
                          </span>
                        </div>

                        <div style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#ffffff', lineHeight: '1.2' }}>
                            {project.name}
                          </h4>
                        </div>
                      </div>
                    )}

                    {/* Bottom Details Card Body */}
                    <div style={{ padding: '1.25rem 1.25rem 1.25rem 1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--forest)', fontWeight: '700', lineHeight: '1.2' }}>
                          {project.name}
                        </h4>
                      </div>

                      <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-light)', lineHeight: '1.5', marginBottom: '1.1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {project.tagline}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', gap: '0.5rem' }}>
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
                              padding: '0.45rem 1rem',
                              fontSize: '0.8rem',
                              borderRadius: 'var(--radius-pill)',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}
                          >
                            Visit Website <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--sage)' }}>
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
                            padding: '0.45rem 1rem',
                            fontSize: '0.8rem',
                            borderRadius: 'var(--radius-pill)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          Quick View <Eye size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Touch Swipe Hint for Mobile */}
            <div
              style={{
                textAlign: 'center',
                fontSize: '0.76rem',
                color: 'var(--charcoal-muted)',
                fontWeight: '500',
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <span>← Swipe or scroll to view more projects →</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Callout */}
        <ScrollReveal>
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              padding: 'clamp(2.2rem, 5vw, 3.8rem)',
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
                fontSize: 'clamp(1.85rem, 3.8vw, 2.8rem)',
                color: 'var(--forest)',
                marginBottom: '1rem',
                lineHeight: '1.15'
              }}
            >
              Ready to give your business a signature website experience?
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--charcoal-light)',
                marginBottom: '2rem',
                maxWidth: '620px',
                margin: '0 auto 2rem auto',
                lineHeight: '1.6'
              }}
            >
              We take a limited number of client projects each month to ensure dedicated craftsmanship, rapid turnarounds, and exceptional client support.
            </p>

            <button
              onClick={() => onOpenProjectModal()}
              className="btn-primary"
              style={{ padding: '1rem 2.1rem', fontSize: '0.98rem' }}
            >
              Start your website →
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

      {/* Hover & Responsive CSS */}
      <style>{`
        .portfolio-nav-btn:hover {
          transform: scale(1.08);
          opacity: 0.9;
        }

        .portfolio-hover-card:hover {
          transform: translateY(-8px) scale(1.015);
          border-color: var(--forest) !important;
          box-shadow: 0 22px 45px -10px rgba(23, 51, 34, 0.18) !important;
        }

        .portfolio-hover-card:hover .card-img-zoom {
          transform: scale(1.06);
        }

        .portfolio-scroll-container::-webkit-scrollbar {
          height: 6px;
        }
        .portfolio-scroll-container::-webkit-scrollbar-track {
          background: var(--bg-secondary);
          border-radius: 10px;
        }
        .portfolio-scroll-container::-webkit-scrollbar-thumb {
          background: var(--sage);
          border-radius: 10px;
        }

        @media (max-width: 640px) {
          .portfolio-slider-controls {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
