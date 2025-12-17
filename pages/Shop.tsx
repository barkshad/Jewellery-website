import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

const CATEGORIES: (Category | 'All')[] = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Custom'];

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-stone-50/50 fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-4">The Collection</h1>
          <p className="text-stone-500 max-w-lg mx-auto font-light">
            Discover our hand-picked selection of fine jewellery, designed to capture the light and the imagination.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 sticky top-20 z-30 bg-stone-50/95 py-4 backdrop-blur-md border-b border-stone-200 lg:static lg:bg-transparent lg:border-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-stone-500 font-serif">No pieces found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;