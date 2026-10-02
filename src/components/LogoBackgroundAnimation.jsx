import React from 'react';
import { Leaf } from 'lucide-react';

export default function LogoBackgroundAnimation() {
  // Config for floating background logo elements across viewport
  const bgLogos = [
    { id: 1, top: '12%', left: '4%', size: 140, duration: '28s', delay: '0s', opacity: 0.04, rotateDir: '1' },
    { id: 2, top: '35%', right: '5%', size: 210, duration: '34s', delay: '-6s', opacity: 0.035, rotateDir: '-1' },
    { id: 3, top: '65%', left: '8%', size: 180, duration: '30s', delay: '-12s', opacity: 0.04, rotateDir: '1' },
    { id: 4, top: '82%', right: '8%', size: 160, duration: '26s', delay: '-4s', opacity: 0.035, rotateDir: '-1' },
    { id: 5, top: '48%', left: '48%', size: 260, duration: '40s', delay: '-18s', opacity: 0.025, rotateDir: '1' }
  ];

  return (
    <div
      className="logo-bg-animation-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        maxWidth: '100vw',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0
      }}
    >
      {/* Soft Ambient Radial Orbs for Smooth Atmosphere */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(123, 155, 120, 0.07) 0%, rgba(23, 51, 34, 0) 70%)',
          animation: 'orbFloat 24s ease-in-out infinite alternate',
          filter: 'blur(40px)',
          willChange: 'transform'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(23, 51, 34, 0.06) 0%, rgba(123, 155, 120, 0) 70%)',
          animation: 'orbFloat 30s ease-in-out infinite alternate-reverse',
          filter: 'blur(50px)',
          willChange: 'transform'
        }}
      />

      {/* Floating Animated Logo Icons */}
      {bgLogos.map((item) => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            width: `${item.size}px`,
            height: `${item.size}px`,
            color: 'var(--forest)',
            opacity: item.opacity,
            animation: `floatAndRotate ${item.duration} ease-in-out infinite alternate ${item.delay}`,
            willChange: 'transform, opacity'
          }}
        >
          <Leaf
            size={item.size}
            style={{
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0 10px 20px rgba(23, 51, 34, 0.1))',
              transform: `rotate(${item.rotateDir === '1' ? '-15deg' : '25deg'})`
            }}
          />
        </div>
      ))}

      {/* Global CSS Keyframe Animations for Smooth Floating */}
      <style>{`
        @keyframes floatAndRotate {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate3d(18px, -24px, 0) rotate(12deg) scale(1.04);
          }
          100% {
            transform: translate3d(-15px, 20px, 0) rotate(-8deg) scale(0.96);
          }
        }

        @keyframes orbFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(40px, 30px, 0) scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-bg-animation-container * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
