import React from 'react';
import { Product } from '../data/products';
import { X, Check, Zap, Trash2, ArrowRight } from 'lucide-react';

interface ComparisonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  compareList: Product[];
  onRemoveFromCompare: (product: Product) => void;
  onClearCompare: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  isOpen,
  onClose,
  compareList,
  onRemoveFromCompare,
  onClearCompare,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1100px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--primary)',
          position: 'relative',
          padding: '32px'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '1.6rem', color: '#FFF' }}>Side-by-Side Spec Comparison</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Comparing {compareList.length} of 3 maximum selected models</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {compareList.length > 0 && (
              <button 
                onClick={onClearCompare} 
                style={{ background: 'rgba(239,68,68,0.15)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.3)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Trash2 size={14} /> Clear All
              </button>
            )}
            <button 
              onClick={onClose} 
              style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {compareList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <h3>No products selected for comparison yet.</h3>
            <p style={{ marginTop: '8px' }}>Click "+ Compare" on any product card in the catalog to add it here.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', width: '200px', color: 'var(--text-muted)' }}>Specification</th>
                  {compareList.map((prod) => (
                    <th key={prod.id} style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', verticalAlign: 'top' }}>
                      <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                        <button 
                          onClick={() => onRemoveFromCompare(prod)}
                          style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#EF4444', color: '#FFF', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <X size={12} />
                        </button>
                        <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                          <img src={prod.webpImg} alt={prod.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                        </div>
                        <h4 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '4px' }}>{prod.name}</h4>
                        <div style={{ fontSize: '0.8rem', color: 'var(--gold-accent)', fontWeight: 600 }}>{prod.priceRange}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.85rem' }}>
                <tr>
                  <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 700, color: 'var(--text-muted)' }}>Series & Category</td>
                  {compareList.map((prod) => (
                    <td key={prod.id} style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', color: '#FFF' }}>
                      {prod.series}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 700, color: 'var(--text-muted)' }}>Material Construction</td>
                  {compareList.map((prod) => (
                    <td key={prod.id} style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', color: '#FFF' }}>
                      {prod.material}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 700, color: 'var(--text-muted)' }}>Induction Compatibility</td>
                  {compareList.map((prod) => (
                    <td key={prod.id} style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                      {prod.isInduction ? (
                        <span style={{ color: '#34D399', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Zap size={14} /> Yes (Gas + Induction)
                        </span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>Gas Stove Only</span>
                      )}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 700, color: 'var(--text-muted)' }}>Body Thickness</td>
                  {compareList.map((prod) => (
                    <td key={prod.id} style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', color: '#FFF' }}>
                      {prod.thickness}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 700, color: 'var(--text-muted)' }}>Capacity Range</td>
                  {compareList.map((prod) => (
                    <td key={prod.id} style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', color: '#FFF' }}>
                      {prod.capacities.join(', ')}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 700, color: 'var(--text-muted)' }}>Hawkins Guarantee</td>
                  {compareList.map((prod) => (
                    <td key={prod.id} style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', color: 'var(--gold-accent)', fontWeight: 700 }}>
                      {prod.warrantyYears} Years Guarantee
                    </td>
                  ))}
                </tr>

                <tr>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--text-muted)' }}>Action</td>
                  {compareList.map((prod) => (
                    <td key={prod.id} style={{ padding: '14px 16px', textAlign: 'center' }}>
                      <button 
                        onClick={() => {
                          onClose();
                          onSelectProduct(prod);
                        }}
                        className="btn btn-primary"
                        style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '16px' }}
                      >
                        View Full Specs <ArrowRight size={12} />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
