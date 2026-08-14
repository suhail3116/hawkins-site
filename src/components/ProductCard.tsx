import React from 'react';
import { Product } from '../data/products';
import { Star, Rotate3d, Zap, Plus, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isComparing: boolean;
  onToggleCompare: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isComparing,
  onToggleCompare
}) => {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px', position: 'relative' }}>
      
      {/* Top Badges Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {product.video3d && (
            <span className="badge badge-3d">
              <Rotate3d size={12} /> 360° 3D
            </span>
          )}
          {product.isInduction && (
            <span className="badge badge-induction">
              <Zap size={12} /> Induction
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(product);
          }}
          style={{
            background: isComparing ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
            color: isComparing ? '#FFF' : 'var(--text-muted)',
            border: isComparing ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.12)',
            borderRadius: '16px',
            padding: '4px 10px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.2s'
          }}
        >
          {isComparing ? <Check size={12} /> : <Plus size={12} />}
          {isComparing ? 'Comparing' : 'Compare'}
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        onClick={() => onSelect(product)}
        style={{
          cursor: 'pointer',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: '16px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)'
        }}
      >
        <img 
          src={product.webpImg} 
          alt={product.name} 
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>

      {/* Rating & Series */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-accent)', letterSpacing: '0.5px' }}>
          {product.series} SERIES
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#FBBF24', fontWeight: 700 }}>
          <Star size={12} fill="#FBBF24" />
          <span>{product.rating}</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({product.reviewCount})</span>
        </div>
      </div>

      {/* Product Title & Material */}
      <h3 
        onClick={() => onSelect(product)}
        style={{ cursor: 'pointer', fontSize: '1.2rem', color: '#FFF', marginBottom: '6px', fontWeight: 700 }}
      >
        {product.name}
      </h3>
      
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px', flexGrow: 1 }}>
        {product.material}
      </p>

      {/* Price & Action Button */}
      <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Price Range</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFF' }}>{product.priceRange}</div>
        </div>

        <button 
          onClick={() => onSelect(product)} 
          className="btn btn-primary"
          style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '20px' }}
        >
          <Eye size={14} /> Specs
        </button>
      </div>

    </div>
  );
};
