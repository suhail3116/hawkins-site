import React, { useState } from 'react';
import { Search, Flame, ShieldCheck, Scale, FileText, Bookmark, Menu, X } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  compareCount: number;
  onOpenCompare: () => void;
  favoritesCount: number;
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  compareCount,
  onOpenCompare,
  favoritesCount,
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 900, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Brand Logo */}
        <div 
          onClick={() => onScrollToSection('hero')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{
            background: 'var(--primary)',
            color: '#FFF',
            padding: '6px 14px',
            borderRadius: '6px',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 900,
            fontSize: '1.4rem',
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(200,16,46,0.4)'
          }}>
            HAWKINS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Cookers & Cookware</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--gold-accent)', fontWeight: 600 }}>Since 1959</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <button 
            onClick={() => onScrollToSection('catalog')} 
            style={{ background: 'none', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Flame size={16} color="var(--primary)" /> Products
          </button>
          
          <button 
            onClick={() => onScrollToSection('calculator')} 
            style={{ background: 'none', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            Size Finder
          </button>

          <button 
            onClick={() => onScrollToSection('safety')} 
            style={{ background: 'none', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <ShieldCheck size={16} color="var(--gold-accent)" /> Safety Tech
          </button>

          <a 
            href="/PriceList.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            <FileText size={15} /> Official Price List (PDF)
          </a>
        </nav>

        {/* Search & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', width: '200px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search cookers..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '20px',
                color: '#FFF',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Comparison Drawer Trigger */}
          <button 
            onClick={onOpenCompare}
            className="btn btn-outline"
            style={{ padding: '8px 14px', fontSize: '0.85rem', position: 'relative', borderRadius: '20px' }}
          >
            <Scale size={16} />
            <span>Compare</span>
            {compareCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: 'var(--primary)',
                color: '#FFF',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                {compareCount}
              </span>
            )}
          </button>

          {/* Favorites Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold-accent)', fontSize: '0.9rem', fontWeight: 600 }}>
            <Bookmark size={18} fill={favoritesCount > 0 ? "var(--gold-accent)" : "none"} />
            <span>{favoritesCount}</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', color: '#FFF', display: 'none' }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
