import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Play, Rotate3d, ShieldCheck, Zap, Star, Bookmark, Scale, FileText, CheckCircle2 } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isComparing: boolean;
  onToggleCompare: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isComparing,
  onToggleCompare,
  isFavorite,
  onToggleFavorite
}) => {
  if (!product) return null;

  const [activeMediaTab, setActiveMediaTab] = useState<'3d' | 'dark' | 'split' | 'webp'>(
    product.video3d ? '3d' : 'dark'
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(200, 16, 46, 0.4)',
          position: 'relative',
          padding: '32px'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.1)',
            color: '#FFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          
          {/* Left Column: Media Viewer */}
          <div>
            
            {/* Display Box */}
            <div style={{ position: 'relative', height: '360px', background: '#000', borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              
              {activeMediaTab === '3d' && product.video3d && (
                <video
                  src={product.video3d}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              )}

              {activeMediaTab === 'dark' && (
                <img
                  src={product.darkImg}
                  alt={`${product.name} Studio Dark View`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              )}

              {activeMediaTab === 'split' && (
                <img
                  src={product.splitImg}
                  alt={`${product.name} Split Cutaway View`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              )}

              {activeMediaTab === 'webp' && (
                <img
                  src={product.webpImg}
                  alt={`${product.name} Product Render`}
                  style={{ maxHeight: '90%', maxWidth: '90%', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.8))' }}
                />
              )}

              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(0,0,0,0.7)',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                color: 'var(--gold-accent)',
                fontWeight: 600
              }}>
                {activeMediaTab === '3d' && '360° MP4 Turntable'}
                {activeMediaTab === 'dark' && 'Studio Black Backdrop'}
                {activeMediaTab === 'split' && 'Engineering Split View'}
                {activeMediaTab === 'webp' && 'Transparent Render'}
              </div>
            </div>

            {/* Media Selector Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px', overflowX: 'auto' }}>
              {product.video3d && (
                <button
                  onClick={() => setActiveMediaTab('3d')}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    background: activeMediaTab === '3d' ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                    color: activeMediaTab === '3d' ? '#FFF' : 'var(--text-muted)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Rotate3d size={14} /> 3D Spin Video
                </button>
              )}

              <button
                onClick={() => setActiveMediaTab('dark')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: activeMediaTab === 'dark' ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                  color: activeMediaTab === 'dark' ? '#FFF' : 'var(--text-muted)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                Studio Dark
              </button>

              <button
                onClick={() => setActiveMediaTab('split')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: activeMediaTab === 'split' ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                  color: activeMediaTab === 'split' ? '#FFF' : 'var(--text-muted)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                Cutaway View
              </button>

              <button
                onClick={() => setActiveMediaTab('webp')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: activeMediaTab === 'webp' ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                  color: activeMediaTab === 'webp' ? '#FFF' : 'var(--text-muted)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                Clean WebP
              </button>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <button
                onClick={() => onToggleFavorite(product)}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  background: isFavorite ? 'var(--gold-bg)' : 'rgba(255,255,255,0.06)',
                  color: isFavorite ? 'var(--gold-accent)' : 'var(--text-main)',
                  border: isFavorite ? '1px solid var(--gold-accent)' : '1px solid rgba(255,255,255,0.1)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Bookmark size={16} fill={isFavorite ? "var(--gold-accent)" : "none"} />
                {isFavorite ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>

              <button
                onClick={() => onToggleCompare(product)}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  background: isComparing ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                  color: '#FFF',
                  border: isComparing ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Scale size={16} />
                {isComparing ? 'Remove Compare' : 'Add to Compare'}
              </button>
            </div>

          </div>

          {/* Right Column: Detailed Product Specs */}
          <div>
            <div className="badge badge-series" style={{ marginBottom: '8px' }}>
              {product.series} SERIES
            </div>

            <h2 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '8px' }}>{product.name}</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gold-accent)', fontWeight: 600, marginBottom: '16px' }}>
              "{product.tagline}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF' }}>{product.priceRange}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24', padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700 }}>
                <Star size={14} fill="#FBBF24" /> {product.rating} / 5.0
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
              {product.description}
            </p>

            {/* Capacities Grid */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
                Available Liter Capacities:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {product.capacities.map((cap) => (
                  <span key={cap} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', color: '#FFF' }}>
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications Matrix Table */}
            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-sm)', padding: '16px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Material:</span>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>{product.material}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Stove Base:</span>
                  <div style={{ fontWeight: 600, color: product.isInduction ? '#34D399' : '#FFF' }}>
                    {product.baseType} {product.isInduction ? '⚡ (Induction Ready)' : ''}
                  </div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Body Thickness:</span>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>{product.thickness}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Hawkins Guarantee:</span>
                  <div style={{ fontWeight: 600, color: 'var(--gold-accent)' }}>{product.warrantyYears} Years Replacement</div>
                </div>
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>Key Engineering Highlights:</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {product.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={14} color="var(--primary)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
