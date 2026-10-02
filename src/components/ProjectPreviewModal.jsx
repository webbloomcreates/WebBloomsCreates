import React from 'react';
import { X, CheckCircle2, ArrowUpRight, ExternalLink, Sparkles, Code2, Globe } from 'lucide-react';

export default function ProjectPreviewModal({ project, onClose, onOpenProjectModal }) {
  if (!project) return null;

  const getImageUrl = (imgPath) => {
    if (!imgPath) return null;
    if (imgPath.startsWith('http')) return imgPath;
    const cleanPath = imgPath.replace(/^\.?\//, '');
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const imageSrc = getImageUrl(project.image);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px' }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-primary)'
          }}
        >
          <div>
            <span className="badge-tag" style={{ marginBottom: '0.4rem', fontSize: '0.78rem' }}>
              {project.category} • {project.year}
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--forest)' }}>
              {project.name || project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--border-medium)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--forest)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          {/* Visual Showcase Banner */}
          {project.image ? (
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-primary)',
                overflow: 'hidden',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {/* Browser Header Bar */}
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
                    fontSize: '0.74rem',
                    color: 'var(--charcoal-muted)',
                    fontFamily: 'monospace'
                  }}
                >
                  {project.liveUrl || 'https://lavs-studio.github.io/LavsStudio/'}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      color: 'var(--forest)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      backgroundColor: 'var(--sage-tint)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-pill)'
                    }}
                  >
                    View Live Site <ExternalLink size={12} />
                  </a>
                ) : null}
              </div>

              {/* Screenshot Display */}
              <div style={{ position: 'relative', width: '100%', maxHeight: '360px', overflowY: 'auto' }}>
                <img
                  src={imageSrc}
                  alt={project.name}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                height: '240px',
                borderRadius: 'var(--radius-md)',
                background: project.imageBg,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                color: '#ffffff',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.9rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                >
                  Client: {project.client}
                </span>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: project.accentColor || 'var(--sage)',
                      color: 'var(--forest)',
                      padding: '0.35rem 0.9rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Globe size={13} /> View Live Demo <ExternalLink size={12} />
                  </a>
                ) : (
                  <span
                    style={{
                      backgroundColor: project.accentColor || 'var(--sage)',
                      color: 'var(--forest)',
                      padding: '0.35rem 0.9rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}
                  >
                    Bespoke Client Build
                  </span>
                )}
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                  {project.tagline}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  Full mobile-first custom website built by web.bloomcreates.
                </p>
              </div>
            </div>
          )}

          {/* Project Details Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}
          >
            <div>
              <h5
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--sage)',
                  fontWeight: '700',
                  marginBottom: '0.75rem'
                }}
              >
                PROJECT OVERVIEW
              </h5>
              <p style={{ fontSize: '0.98rem', color: 'var(--charcoal-light)', lineHeight: '1.65' }}>
                {project.description}
              </p>
            </div>

            <div>
              <h5
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--sage)',
                  fontWeight: '700',
                  marginBottom: '0.75rem'
                }}
              >
                KEY FEATURES & HIGHLIGHTS
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {(project.features || []).map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--charcoal)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--sage)', flexShrink: 0 }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services & Tech Stack Tags */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div
              style={{
                padding: '1.25rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                SERVICES PROVIDED:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {(project.services || project.deliverables || []).map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-medium)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.8rem',
                      color: 'var(--charcoal)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: '1.25rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                TECHNOLOGIES USED:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {(project.technologies || ['React', 'Vite', 'Custom CSS']).map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: 'var(--sage-tint)',
                      color: 'var(--forest)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ fontSize: '0.88rem', color: 'var(--charcoal-muted)' }}>
              Want a similar custom website for your business?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenProjectModal(project.name || project.title);
              }}
              className="btn-primary"
            >
              Start Your Website Like This
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
