import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

export default function LogoIntroLoader({ onComplete }) {
  const [stage, setStage] = useState('entering'); // 'entering' | 'holding' | 'fading' | 'done'

  useEffect(() => {
    // Stage 1: Hold intro logo animation for ~1.6s
    const holdTimer = setTimeout(() => {
      setStage('fading');
    }, 1600);

    // Stage 2: Complete curtain fade out at ~2.2s
    const doneTimer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div
      aria-label="Website Loading Screen"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-primary)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: stage === 'fading' ? 'none' : 'auto',
        opacity: stage === 'fading' ? 0 : 1,
        transform: stage === 'fading' ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform'
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          backgroundColor: 'rgba(123, 155, 120, 0.15)',
          filter: 'blur(60px)',
          animation: 'logoPulseGlow 2s ease-in-out infinite alternate'
        }}
      />

      {/* Centered Logo Badge & Brand Name */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
          animation: 'logoReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Emblem Badge Icon */}
        <div
          style={{
            position: 'relative',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--forest)',
            color: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 16px 40px -8px rgba(23, 51, 34, 0.3)'
          }}
        >
          <Leaf
            size={40}
            style={{
              transform: 'rotate(-15deg)',
              animation: 'leafSpin 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          />
        </div>

        {/* Brand Title */}
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.85rem',
              fontWeight: '700',
              color: 'var(--forest)',
              letterSpacing: '0.04em',
              margin: 0,
              lineHeight: '1.2'
            }}
          >
            Web.Bloom<span style={{ color: 'var(--sage)' }}>Creates</span>
          </h1>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
              display: 'block',
              marginTop: '0.4rem'
            }}
          >
            STUDIO • WEBSITES • GROWTH
          </span>
        </div>

        {/* Sleek Progress Bar Indicator */}
        <div
          style={{
            width: '120px',
            height: '3px',
            backgroundColor: 'var(--border-medium)',
            borderRadius: 'var(--radius-pill)',
            overflow: 'hidden',
            marginTop: '0.5rem'
          }}
        >
          <div
            style={{
              height: '100%',
              backgroundColor: 'var(--forest)',
              borderRadius: 'var(--radius-pill)',
              animation: 'loadProgress 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          />
        </div>
      </div>

      {/* Keyframe Styles for Intro Reveal */}
      <style>{`
        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes leafSpin {
          0% {
            transform: rotate(-90deg) scale(0.6);
          }
          100% {
            transform: rotate(-15deg) scale(1);
          }
        }

        @keyframes logoPulseGlow {
          0% {
            transform: scale(0.9);
            opacity: 0.12;
          }
          100% {
            transform: scale(1.15);
            opacity: 0.22;
          }
        }

        @keyframes loadProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
