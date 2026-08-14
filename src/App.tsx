import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapacityCalculator } from './components/CapacityCalculator';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { SafetyShowcase } from './components/SafetyShowcase';
import { Footer } from './components/Footer';
import { Product } from './data/products';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Smooth scroll handler
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compare List Handlers
  const handleToggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare a maximum of 3 products at a time.');
          return prev;
        }
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromCompare = (product: Product) => {
    setCompareList((prev) => prev.filter((p) => p.id !== product.id));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  // Favorites Handlers
  const handleToggleFavorite = (product: Product) => {
    setFavoriteIds((prev) => {
      if (prev.includes(product.id)) {
        return prev.filter((id) => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        compareCount={compareList.length}
        onOpenCompare={() => setIsCompareOpen(true)}
        favoritesCount={favoriteIds.length}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        <Hero
          onSelectProduct={(p) => setSelectedProduct(p)}
          onExploreCatalog={() => handleScrollToSection('catalog')}
        />

        <CapacityCalculator
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        <ProductCatalog
          searchQuery={searchQuery}
          onSelectProduct={(p) => setSelectedProduct(p)}
          compareList={compareList}
          onToggleCompare={handleToggleCompare}
        />

        <SafetyShowcase />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isComparing={selectedProduct ? compareList.some(p => p.id === selectedProduct.id) : false}
        onToggleCompare={handleToggleCompare}
        isFavorite={selectedProduct ? favoriteIds.includes(selectedProduct.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      <ComparisonDrawer
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareList={compareList}
        onRemoveFromCompare={handleRemoveFromCompare}
        onClearCompare={handleClearCompare}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

    </div>
  );
}

export default App;
