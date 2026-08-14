import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface ProductCatalogProps {
  searchQuery: string;
  onSelectProduct: (product: Product) => void;
  compareList: Product[];
  onToggleCompare: (product: Product) => void;
}

const CATEGORIES = [
  'All',
  'Hard Anodised',
  'Stainless Steel',
  'Aluminum',
  'Tri-Ply',
  'Ceramic',
  'Economy',
  'Specialty'
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onSelectProduct,
  compareList,
  onToggleCompare
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [inductionOnly, setInductionOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');

  // Filtering logic
  let filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCategory = activeCategory === 'All' || prod.series === activeCategory;
    const matchesSearch = searchQuery === '' || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prod.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.series.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInduction = !inductionOnly || prod.isInduction;
    return matchesCategory && matchesSearch && matchesInduction;
  });

  // Sorting logic
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.minPrice - b.minPrice);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.minPrice - a.minPrice);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="catalog" className="section-padding">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title">
          <div className="tagline-pill">Official Hawkins Range</div>
          <h2>Explore Complete Product Collection</h2>
          <p>Each model engineered to perfection for extreme safety, fast cooking, and maximum fuel savings.</p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '28px' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                background: activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                color: activeCategory === cat ? '#FFF' : 'var(--text-muted)',
                border: activeCategory === cat ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: activeCategory === cat ? '0 4px 14px rgba(200,16,46,0.3)' : 'none',
                transition: 'all 0.2s'
              }}
            >
              {cat} {cat === 'All' ? `(${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Filter Controls & Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '16px 20px',
          background: 'var(--dark-surface)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <SlidersHorizontal size={16} /> Filters:
            </span>

            {/* Induction Checkbox Button */}
            <button
              onClick={() => setInductionOnly(!inductionOnly)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: inductionOnly ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.06)',
                color: inductionOnly ? '#34D399' : 'var(--text-muted)',
                border: inductionOnly ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              ⚡ Induction Compatible Only
            </button>
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowUpDown size={15} color="var(--text-muted)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#FFF',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            >
              <option value="default" style={{ background: '#141720' }}>Featured</option>
              <option value="price-low" style={{ background: '#141720' }}>Price: Low to High</option>
              <option value="price-high" style={{ background: '#141720' }}>Price: High to Low</option>
              <option value="rating" style={{ background: '#141720' }}>Top Customer Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={onSelectProduct}
                isComparing={compareList.some(p => p.id === prod.id)}
                onToggleCompare={onToggleCompare}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <h3>No products found matching your search.</h3>
            <p style={{ marginTop: '8px' }}>Try selecting a different category or clearing search filters.</p>
          </div>
        )}

      </div>
    </section>
  );
};
