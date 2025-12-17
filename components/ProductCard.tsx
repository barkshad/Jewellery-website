import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col h-full bg-white transition-all duration-500 hover:shadow-xl">
      <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square block bg-stone-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
           <span className="bg-white/90 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-widest font-serif text-stone-900">View Details</span>
        </div>
      </Link>
      
      <div className="p-6 text-center flex-grow flex flex-col justify-between">
        <div>
          <p className="text-xs text-gold-600 uppercase tracking-widest mb-2">{product.category}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-serif text-stone-900 mb-2 group-hover:text-gold-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="text-stone-600 font-sans mt-2">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;