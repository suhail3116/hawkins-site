import React, { useState } from 'react';
import { HERO_PRODUCTS, Product } from '../data/products';
import { Play, ShieldCheck, Zap, Award, ChevronRight, Rotate3d, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onSelectProduct: (product: Product) => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, onExploreCatalog }) => {
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);
  const currentHero = HERO_PRODUCTS[selectedHeroIndex] || HERO_PRODUCTS[0];

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0 80px', background: 'radial-gradient(circle at 70% 30%, #1A1E2B 0%, #0B0D12 70%)' }}>
      
      {/* Glow background accent */}
      <div style={{
        position: 'absolute',
        right: '-10%',
        top: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(200, 16, 46, 0.18) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Text & Value Props */}
          <div>
            <div className="tagline-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Award size={15} /> World Class Pressure Cooker Engineering
            </div>

            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', color: '#FFF' }}>
              Engineered for <span style={{ color: 'var(--primary)' }}>Lifetime Safety</span> & Speed.
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '520px' }}>
              Discover Hawkins pressure cookers crafted with surgical stainless steel, extra-thick hard anodised alloy, and our patented inside-fitting safety pressure lid lock.
            </p>

            {/* Feature Bullets */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck color="var(--primary)" size={22} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Inside-Fitting Lid</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pressure locked for 100% safety</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap color="var(--gold-accent)" size={22} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>46% Faster Cooking</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Saves gas & keeps nutrition</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 color="#34D399" size={22} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>5-Year Guarantee</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tested to strict standard</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Rotate3d color="var(--steel-accent)" size={22} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>360° Interactive</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Real 3D MP4 video spins</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onExploreCatalog} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                Explore All Cookers <ChevronRight size={18} />
              </button>
              
              <button 
                onClick={() => onSelectProduct(currentHero)} 
                className="btn btn-gold" 
                style={{ padding: '14px 24px', fontSize: '1rem' }}
              >
                <Play size={18} fill="#0B0D12" /> Watch 3D Turntable
              </button>
            </div>
          </div>

          {/* Right Column: 3D Video Turntable Card */}
          <div style={{ position: 'relative' }}>
            
            {/* Studio Card Container */}
            <div className="glass-card" style={{ padding: '24px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(200, 16, 46, 0.3)' }}>
              
              {/* Top Bar inside card */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div className="badge badge-3d">
                  <Rotate3d size={14} /> 360° Interactive 3D
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gold-accent)', fontWeight: 700 }}>
                  {currentHero.series} Series
                </div>
              </div>

              {/* Video Player / Showcase Area */}
              <div style={{ position: 'relative', height: '320px', borderRadius: '12px', overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {currentHero.video3d ? (
                  <video
                    key={currentHero.id}
                    src={currentHero.video3d}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <img
                    src={currentHero.darkImg}
                    alt={currentHero.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                )}
                
                {/* Floating Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(0,0,0,0.75)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  color: '#FFF',
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.15)'
                }}>
                  {currentHero.tagline}
                </div>
              </div>

              {/* Product Info & Model Selectors */}
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '4px' }}>{currentHero.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Starting from <strong style={{ color: '#FFF' }}>{currentHero.priceRange}</strong></p>
                </div>

                <button 
                  onClick={() => onSelectProduct(currentHero)} 
                  className="btn btn-outline" 
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  View Specs
                </button>
              </div>

              {/* Model Switcher Carousel Pills */}
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                {HERO_PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedHeroIndex(idx)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      background: selectedHeroIndex === idx ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                      color: selectedHeroIndex === idx ? '#FFF' : 'var(--text-muted)',
                      border: selectedHeroIndex === idx ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {prod.name.replace('Hawkins ', '')}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
