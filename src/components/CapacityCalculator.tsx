import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { Users, Flame, Zap, ArrowRight, Check } from 'lucide-react';

interface CapacityCalculatorProps {
  onSelectProduct: (product: Product) => void;
}

const FAMILY_OPTIONS = [
  { id: '1-2', label: '1 - 2 Persons', subtitle: 'Single / Couple', recommendedLitres: ['1.5 Litre', '2 Litre'] },
  { id: '3-4', label: '3 - 4 Persons', subtitle: 'Small Family', recommendedLitres: ['3 Litre', '3.5 Litre', '4 Litre'] },
  { id: '5-7', label: '5 - 7 Persons', subtitle: 'Medium Family', recommendedLitres: ['5 Litre', '5.5 Litre', '6.5 Litre'] },
  { id: '8-12', label: '8 - 12 Persons', subtitle: 'Large Family / Joint', recommendedLitres: ['7 Litre', '8 Litre', '9 Litre', '10 Litre', '12 Litre'] },
  { id: 'commercial', label: '15+ Persons', subtitle: 'Restaurant / Hostel', recommendedLitres: ['14 Litre', '18 Litre', '22 Litre', '30 Litre'] }
];

export const CapacityCalculator: React.FC<CapacityCalculatorProps> = ({ onSelectProduct }) => {
  const [selectedFamily, setSelectedFamily] = useState(FAMILY_OPTIONS[1]);
  const [isInductionOnly, setIsInductionOnly] = useState(false);

  // Filter products matching selected capacity and induction choice
  const matchingProducts = PRODUCTS.filter(prod => {
    const hasCapacity = prod.capacities.some(cap => 
      selectedFamily.recommendedLitres.some(rec => cap.toLowerCase().includes(rec.toLowerCase().replace(' litre', '').trim()))
    );
    if (isInductionOnly) {
      return hasCapacity && prod.isInduction;
    }
    return hasCapacity;
  }).slice(0, 4);

  return (
    <section id="calculator" className="section-padding" style={{ background: 'var(--dark-surface)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title">
          <div className="tagline-pill">Smart Size Finder</div>
          <h2>Find the Perfect Cooker for Your Family</h2>
          <p>Selecting the right capacity ensures fast cooking, fuel savings, and safety without overflow.</p>
        </div>

        {/* Family Size Selection Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {FAMILY_OPTIONS.map((option) => {
            const isSelected = selectedFamily.id === option.id;
            return (
              <div
                key={option.id}
                onClick={() => setSelectedFamily(option)}
                className="glass-card"
                style={{
                  padding: '20px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  border: isSelected ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
                  background: isSelected ? 'rgba(200, 16, 46, 0.12)' : 'var(--dark-card)',
                  transform: isSelected ? 'scale(1.02)' : 'none'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: isSelected ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                  color: isSelected ? '#FFF' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <Users size={20} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#FFF', marginBottom: '4px' }}>{option.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{option.subtitle}</div>
                
                <div style={{ marginTop: '12px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-accent)' }}>
                  Rec: {option.recommendedLitres.slice(0, 2).join(', ')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Induction Stove Preference Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Stove Compatibility:</span>
          <button
            onClick={() => setIsInductionOnly(!isInductionOnly)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '30px',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: isInductionOnly ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.06)',
              color: isInductionOnly ? '#34D399' : 'var(--text-muted)',
              border: isInductionOnly ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.12)'
            }}
          >
            <Zap size={16} color={isInductionOnly ? '#34D399' : 'currentColor'} />
            {isInductionOnly ? 'Induction + Gas Compatible Only' : 'Show All Stoves (Gas & Induction)'}
          </button>
        </div>

        {/* Recommended Models Result Banner */}
        <div style={{ background: 'var(--dark-card)', borderRadius: 'var(--radius-lg)', padding: '28px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFF' }}>Recommended Models for {selectedFamily.label}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ideal capacity: {selectedFamily.recommendedLitres.join(' / ')}</p>
            </div>
            
            <div className="badge badge-induction" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
              <Check size={14} /> {matchingProducts.length} Tailored Options Found
            </div>
          </div>

          {/* Results Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {matchingProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="glass-card" 
                onClick={() => onSelectProduct(prod)}
                style={{ padding: '16px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <img src={prod.webpImg} alt={prod.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gold-accent)', fontWeight: 600, marginBottom: '2px' }}>{prod.series}</div>
                  <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '4px' }}>{prod.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{prod.material}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontWeight: 700, color: '#FFF', fontSize: '0.9rem' }}>{prod.priceRange}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
                    Select <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
