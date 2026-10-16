import React from 'react';
import { ArrowRight, Sparkles, Smartphone, CheckCircle2, Zap, Layout, ShieldCheck, Leaf, Monitor, MousePointer } from 'lucide-react';

export default function Hero({ onOpenProjectModal }) {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      style={{
        position: 'relative',
        paddingTop: 'clamp(4.5rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4rem)',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* ========================================================================= */}
      {/* 1. CENTERED ANIMATED LEAF LOGO BACKGROUND WATERMARK */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        className="hero-center-bg-watermark"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(340px, 50vw, 620px)',
          height: 'clamp(340px, 50vw, 620px)',
          pointerEvents: 'none',
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Soft Radial Center Aura */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backgroundColor: 'rgba(123, 155, 120, 0.12)',
            filter: 'blur(70px)',
            animation: 'heroCenterGlowPulse 4s ease-in-out infinite alternate'
          }}
        />

        {/* Outer Rotating Leaf Orbit Ring */}
        <svg
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.07,
            animation: 'heroLeafSpin 28s linear infinite'
          }}
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="var(--forest)" strokeWidth="1.5" strokeDasharray="8 12" />
          <circle cx="200" cy="200" r="140" stroke="var(--sage)" strokeWidth="1" strokeDasharray="4 8" />
          {/* Orbital Satellite Leaf Badges */}
          <g transform="translate(200, 20)">
            <path d="M0 -15 C8 -5 12 5 0 20 C-12 5 -8 -5 0 -15 Z" fill="var(--forest)" />
          </g>
          <g transform="translate(380, 200) rotate(90)">
            <path d="M0 -15 C8 -5 12 5 0 20 C-12 5 -8 -5 0 -15 Z" fill="var(--forest)" />
          </g>
          <g transform="translate(200, 380) rotate(180)">
            <path d="M0 -15 C8 -5 12 5 0 20 C-12 5 -8 -5 0 -15 Z" fill="var(--forest)" />
          </g>
          <g transform="translate(20, 200) rotate(270)">
            <path d="M0 -15 C8 -5 12 5 0 20 C-12 5 -8 -5 0 -15 Z" fill="var(--forest)" />
          </g>
        </svg>

        {/* Centered Pulsing Leaf Emblem */}
        <div
          style={{
            position: 'relative',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            backgroundColor: 'rgba(23, 51, 34, 0.035)',
            border: '1px solid rgba(123, 155, 120, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'heroCenterLeafFloat 5s ease-in-out infinite alternate'
          }}
        >
          <Leaf
            size={90}
            style={{
              color: 'var(--forest)',
              opacity: 0.095,
              transform: 'rotate(-15deg)'
            }}
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO CONTENT GRID */}
      {/* ========================================================================= */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Headline & CTAs */}
          <div style={{ maxWidth: '640px' }}>
            {/* Studio Badge Tag */}
            <div className="animate-hero-1" style={{ marginBottom: '1rem' }}>
              <span className="badge-tag" style={{ padding: '0.35rem 0.95rem', fontSize: '0.74rem' }}>
                <Sparkles size={13} style={{ color: 'var(--sage)' }} />
                WEB.BLOOMCREATES • BESPOKE WEB DESIGN
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              className="animate-hero-2"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.3rem)',
                lineHeight: '1.1',
                color: 'var(--forest)',
                marginBottom: '1.1rem',
                letterSpacing: '-0.025em',
                fontWeight: '600'
              }}
            >
              Your business deserves a website that feels <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--forest-light)' }}>as good as your brand.</span>
            </h1>

            {/* Supporting Text */}
            <p
              className="animate-hero-3"
              style={{
                fontSize: 'clamp(0.95rem, 1.4vw, 1.08rem)',
                color: 'var(--charcoal-light)',
                lineHeight: '1.6',
                marginBottom: '1.75rem',
                maxWidth: '520px'
              }}
            >
              We design and build modern, responsive websites that help businesses establish a stronger presence online.
            </p>

            {/* CTAs */}
            <div
              className="animate-hero-4 hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2rem'
              }}
            >
              <button
                onClick={() => onOpenProjectModal()}
                className="btn-primary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.92rem' }}
                aria-label="Start your website"
              >
                Start your website →
              </button>

              <a
                href="#work"
                className="btn-secondary"
                style={{ padding: '0.85rem 1.7rem', fontSize: '0.92rem' }}
              >
                Explore Our Work
              </a>
            </div>

            {/* Quality Standards Highlights */}
            <div
              className="animate-hero-5 hero-features-list"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--charcoal-light)', fontWeight: '600' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--sage)' }} />
                Bespoke Design Architecture
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--charcoal-light)', fontWeight: '600' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--sage)' }} />
                Mobile-First Engineering
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--charcoal-light)', fontWeight: '600' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--sage)' }} />
                100% Client Ownership
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Right Column: DUAL DEVICE ANIMATED SHOWCASE (LAPTOP + MOBILE) */}
          {/* ========================================================================= */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '2.5rem' }} className="hero-visual-col">
            
            {/* Floating Badge Pill 1: Laptop Custom UI */}
            <div
              className="hero-pill-top"
              style={{
                position: 'absolute',
                top: '-18px',
                left: '15px',
                zIndex: 20,
                backgroundColor: 'var(--bg-secondary)',
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.82rem',
                fontWeight: '600',
                color: 'var(--forest)',
                animation: 'deviceFloatPill 4s ease-in-out infinite'
              }}
            >
              <Monitor size={15} style={{ color: 'var(--sage)' }} />
              100% Custom Laptop UI
            </div>

            {/* Floating Badge Pill 2: Fast Load */}
            <div
              className="hero-pill-right"
              style={{
                position: 'absolute',
                top: '20px',
                right: '-10px',
                zIndex: 20,
                backgroundColor: 'var(--forest)',
                color: '#ffffff',
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-pill)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.82rem',
                fontWeight: '600',
                animation: 'deviceFloatPill 4.5s ease-in-out infinite 1.5s'
              }}
            >
              <Zap size={15} style={{ color: 'var(--sage-muted)' }} />
              Fast • &lt;0.9s Load
            </div>

            {/* LAPTOP CONTAINER FRAME */}
            <div
              className="hero-laptop-frame"
              style={{
                position: 'relative',
                width: '82%',
                marginLeft: '0',
                animation: 'laptopFloat 6s ease-in-out infinite'
              }}
            >
              {/* Laptop Screen Bezel */}
              <div
                style={{
                  backgroundColor: '#1E2421',
                  borderRadius: '14px 14px 4px 4px',
                  padding: '8px 8px 0 8px',
                  boxShadow: '0 20px 50px -15px rgba(23, 51, 34, 0.25)',
                  border: '1px solid #2D3732'
                }}
              >
                {/* Webcam Dot & Mic */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000000', border: '1px solid #333' }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#0E3A20' }} />
                </div>

                {/* Laptop Browser Viewport */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '6px 6px 0 0',
                    overflow: 'hidden',
                    border: '1px solid var(--border-medium)'
                  }}
                >
                  {/* Browser Address Bar */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      padding: '0.45rem 0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#E06C75' }} />
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#E5C07B' }} />
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#98C379' }} />
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '0.15rem 0.65rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.64rem',
                        color: 'var(--charcoal-muted)',
                        fontFamily: 'monospace',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <ShieldCheck size={10} style={{ color: 'var(--sage)' }} />
                      webbloomcreates.github.io/Cafe-demo/
                    </div>

                    <div style={{ fontSize: '0.58rem', color: 'var(--sage)', fontWeight: '700', letterSpacing: '0.05em' }}>
                      WEB.BLOOMCREATES
                    </div>
                  </div>

                  {/* Laptop Live Website Display Canvas */}
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'linear-gradient(180deg, #FBF8F3 0%, #FFFDF9 100%)',
                      minHeight: '175px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative'
                    }}
                  >
                    {/* Simulated Animated Cursor */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '42%',
                        right: '32%',
                        zIndex: 15,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        animation: 'cursorBounce 3.5s ease-in-out infinite'
                      }}
                    >
                      <MousePointer size={18} fill="var(--forest)" style={{ color: 'var(--forest)' }} />
                      <span style={{ backgroundColor: 'var(--forest)', color: '#fff', fontSize: '0.62rem', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>
                        Live Demo
                      </span>
                    </div>

                    {/* Laptop Site Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', color: 'var(--forest)', fontSize: '1.15rem' }}>
                        MAISON ÉLAN
                      </span>
                      <div style={{ display: 'flex', gap: '0.85rem', fontSize: '0.74rem', color: 'var(--charcoal-light)', fontWeight: '500' }}>
                        <span>Menu</span>
                        <span>Atelier</span>
                        <span style={{ backgroundColor: 'var(--forest)', color: '#ffffff', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-pill)', fontSize: '0.7rem' }}>
                          Reserve
                        </span>
                      </div>
                    </div>

                    {/* Laptop Hero Content Banner */}
                    <div style={{ marginBottom: '1.2rem' }}>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: 'var(--sage)',
                          fontWeight: '700',
                          display: 'block',
                          marginBottom: '0.3rem'
                        }}
                      >
                        ARTISANAL COFFEE & ATELIER
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.35rem',
                          color: 'var(--forest)',
                          lineHeight: '1.15',
                          marginBottom: '0.4rem'
                        }}
                      >
                        Savor the rhythm of slow craft.
                      </h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--charcoal-light)', lineHeight: '1.4', maxWidth: '340px' }}>
                        Hand-roasted single origin espressos paired with organic house patisserie.
                      </p>
                    </div>

                    {/* Product Cards Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', maxWidth: '85%' }}>
                      <div
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.55rem'
                        }}
                      >
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'var(--sage-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem'
                          }}
                        >
                          ☕
                        </div>
                        <div>
                          <div style={{ fontSize: '0.76rem', fontWeight: '700', color: 'var(--forest)' }}>
                            Oat Velvet Latte
                          </div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--sage)' }}>$6.50 • Fresh</div>
                        </div>
                      </div>

                      <div
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.55rem'
                        }}
                      >
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'var(--warm-sand)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem'
                          }}
                        >
                          🥐
                        </div>
                        <div>
                          <div style={{ fontSize: '0.76rem', fontWeight: '700', color: 'var(--forest)' }}>
                            Pistachio Croissant
                          </div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--sage)' }}>$7.00 • Popular</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard / Base Plate Stand */}
              <div
                style={{
                  height: '14px',
                  backgroundColor: '#161B18',
                  borderRadius: '0 0 16px 16px',
                  borderTop: '2px solid #2B3530',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start'
                }}
              >
                {/* Trackpad / Opener Indent */}
                <div style={{ width: '60px', height: '4px', backgroundColor: '#2B3530', borderRadius: '0 0 4px 4px' }} />
              </div>
            </div>

            {/* ========================================================================= */}
            {/* OVERLAPPING MOBILE SMARTPHONE MOCKUP FRAME */}
            {/* ========================================================================= */}
            <div
              style={{
                position: 'absolute',
                bottom: '-10px',
                right: '0',
                width: '130px',
                zIndex: 25,
                animation: 'mobileFloat 5.5s ease-in-out infinite 0.8s'
              }}
              className="hero-mobile-frame"
            >
              <div
                style={{
                  backgroundColor: '#121714',
                  borderRadius: '24px',
                  padding: '6px',
                  border: '2px solid #2A362F',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)'
                }}
              >
                {/* Dynamic Island Notch */}
                <div
                  style={{
                    backgroundColor: '#000000',
                    width: '40px',
                    height: '10px',
                    borderRadius: '8px',
                    margin: '1px auto 6px auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3px'
                  }}
                >
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#1A1A1A' }} />
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#052914' }} />
                </div>

                {/* Mobile Screen Display */}
                <div
                  style={{
                    backgroundColor: '#FAF7F2',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.55rem',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {/* Mini Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Leaf size={10} style={{ color: 'var(--forest)' }} />
                      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '0.62rem', color: 'var(--forest)' }}>
                        Bloom
                      </span>
                    </div>
                    <div style={{ backgroundColor: 'var(--sage-muted)', color: 'var(--forest)', fontSize: '0.5rem', padding: '1px 6px', borderRadius: 'var(--radius-pill)', fontWeight: '700' }}>
                      ⚡ 0.4s
                    </div>
                  </div>

                  {/* Cute Mini Card */}
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '10px',
                      padding: '0.45rem 0.35rem',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      marginBottom: '0.45rem',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--sage-muted)', margin: '0 auto 0.25rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem' }}>
                      ✨
                    </div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.66rem', fontWeight: '700', color: 'var(--forest)', lineHeight: '1.2' }}>
                      Mobile First
                    </div>
                    <div style={{ fontSize: '0.52rem', color: 'var(--sage)', fontWeight: '600', marginTop: '2px' }}>
                      100% Responsive
                    </div>
                  </div>

                  {/* Cute Action Button */}
                  <button
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--forest)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.35rem 0.4rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.55rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '3px',
                      boxShadow: '0 3px 8px rgba(23, 51, 34, 0.2)'
                    }}
                  >
                    <Smartphone size={9} /> Explore →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* KEYFRAME ANIMATIONS FOR HERO DEVICES & CENTER LEAF */}
      {/* ========================================================================= */}
      <style>{`
        @keyframes heroCenterGlowPulse {
          0% {
            transform: scale(0.88);
            opacity: 0.12;
          }
          100% {
            transform: scale(1.18);
            opacity: 0.24;
          }
        }

        @keyframes heroLeafSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes heroCenterLeafFloat {
          0% {
            transform: translateY(-8px) scale(0.96);
          }
          100% {
            transform: translateY(8px) scale(1.04);
          }
        }

        @keyframes laptopFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes mobileFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(1.5deg);
          }
        }

        @keyframes deviceFloatPill {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes cursorBounce {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-12px, -8px);
          }
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            gap: 2rem !important;
          }
          .hero-center-bg-watermark {
            width: clamp(200px, 65vw, 300px) !important;
            height: clamp(200px, 65vw, 300px) !important;
            opacity: 0.07 !important;
          }
          .hero-pill-top, .hero-pill-right {
            display: none !important;
          }
          .hero-visual-col {
            width: 88% !important;
            max-width: 88% !important;
            box-sizing: border-box !important;
            margin: 0.75rem auto 0 auto !important;
            padding-bottom: 1.5rem !important;
          }
          .hero-laptop-frame {
            width: 100% !important;
            max-width: 100% !important;
          }
          .hero-mobile-frame {
            width: 95px !important;
            bottom: -8px !important;
            right: 0px !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.75rem !important;
            width: 100% !important;
          }
          .hero-cta-group button, .hero-cta-group a {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
          .hero-features-list {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.65rem !important;
            width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .animate-hero-2 {
            font-size: clamp(1.7rem, 6.2vw, 2.2rem) !important;
            line-height: 1.15 !important;
          }
          .animate-hero-3 {
            font-size: 0.92rem !important;
            line-height: 1.55 !important;
          }
          .hero-visual-col {
            width: 82% !important;
            max-width: 82% !important;
            margin: 0.5rem auto 0 auto !important;
          }
          .hero-mobile-frame {
            width: 80px !important;
            bottom: -6px !important;
            right: 0px !important;
          }
        }
      `}</style>
    </section>
  );
}
