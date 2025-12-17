import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Truck, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../constants';
import Button from '../components/Button';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <Link to="/shop"><Button>Return to Shop</Button></Link>
      </div>
    );
  }

  const handleInquiry = () => {
    // Simulating WhatsApp or Email opening
    const message = `Hello Aurora, I am interested in the ${product.name} (Ref: ${product.id}).`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-white fade-in relative">
      <div className="container mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center text-stone-500 hover:text-stone-900 mb-8 text-sm uppercase tracking-wider transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery (Simplified to single image for now with zoom hover effect concept) */}
          <div className="relative group overflow-hidden bg-stone-50 h-[500px] lg:h-[700px]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
             <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-xs text-stone-600 uppercase tracking-widest">
               Hover to Zoom
             </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-gold-600 text-sm uppercase tracking-widest font-bold mb-2">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">{product.name}</h1>
            <p className="text-2xl text-stone-800 font-light mb-8">${product.price.toLocaleString()}</p>
            
            <div className="prose prose-stone text-stone-600 font-light mb-8">
              <p className="text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-b border-stone-100 py-6 mb-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-stone-900">Materials</span>
                <span className="text-stone-600 text-sm text-right">{product.materials.join(', ')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-serif text-stone-900">Availability</span>
                <span className="text-green-600 text-sm flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> In Stock</span>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex gap-4 mb-8">
               <Button onClick={handleInquiry} fullWidth className="flex items-center gap-2">
                 <MessageCircle size={18} /> Inquire via WhatsApp
               </Button>
            </div>

             {/* Additional Info */}
             <div className="grid grid-cols-2 gap-4 text-xs text-stone-500">
               <div className="flex items-center gap-3 p-4 bg-stone-50">
                 <Truck size={20} className="text-stone-400" />
                 <span>Free Global Shipping & Insurance</span>
               </div>
               <div className="flex items-center gap-3 p-4 bg-stone-50">
                 <RefreshCw size={20} className="text-stone-400" />
                 <span>Lifetime Warranty & Cleaning</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3">
          <div className="flex-1">
             <p className="text-xs text-stone-500 uppercase">Total</p>
             <p className="text-lg font-serif text-stone-900">${product.price.toLocaleString()}</p>
          </div>
          <Button onClick={handleInquiry} className="flex-1 bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 text-white flex items-center justify-center gap-2">
            <MessageCircle size={18} /> Inquire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;