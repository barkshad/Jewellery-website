import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Heart } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/191/1920/1080" 
            alt="Luxury Jewellery Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-gold-200 animate-fadeIn">Est. 1985</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight">
            Crafted to Shine.<br />
            <span className="italic text-gold-200">Designed to Last.</span>
          </h1>
          <p className="max-w-xl mx-auto text-stone-100 text-lg md:text-xl font-light mb-10 leading-relaxed">
            Experience the epitome of luxury with our ethically sourced, handcrafted collections that tell your unique story.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="secondary" className="min-w-[180px]">View Collection</Button>
            </Link>
            <Link to="/location">
               <Button variant="outline" className="min-w-[180px] bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-stone-900">Visit Our Store</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center p-6">
               <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mb-6 text-gold-600">
                 <ShieldCheck size={32} strokeWidth={1.5} />
               </div>
               <h3 className="text-xl font-serif mb-3">Certified Quality</h3>
               <p className="text-stone-600 font-light leading-relaxed">Every gemstone is certified for authenticity and ethically sourced from conflict-free zones.</p>
            </div>
            <div className="flex flex-col items-center p-6 border-l-0 md:border-l border-r-0 md:border-r border-stone-100">
               <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mb-6 text-gold-600">
                 <Heart size={32} strokeWidth={1.5} />
               </div>
               <h3 className="text-xl font-serif mb-3">Master Craftsmanship</h3>
               <p className="text-stone-600 font-light leading-relaxed">Hand-finished by artisans with decades of experience in traditional jewellery making.</p>
            </div>
            <div className="flex flex-col items-center p-6">
               <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mb-6 text-gold-600">
                 <Truck size={32} strokeWidth={1.5} />
               </div>
               <h3 className="text-xl font-serif mb-3">Secure Delivery</h3>
               <p className="text-stone-600 font-light leading-relaxed">Insured, discreet shipping worldwide to ensure your precious pieces arrive safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-gold-50/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gold-600 text-sm uppercase tracking-widest mb-2">Curated for You</p>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Featured Collections</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-stone-900 hover:text-gold-600 transition-colors uppercase text-xs tracking-widest font-semibold border-b border-stone-900 pb-1 hover:border-gold-600">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/shop">
              <Button variant="outline">View All Collections</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">"A legacy of elegance"</h2>
            <div className="w-24 h-px bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 p-8 backdrop-blur-sm border border-white/10 rounded-sm">
                <div className="flex text-gold-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-300 font-light italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-serif text-lg">{t.name}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-serif text-stone-900 mb-6">Visit Our Flagship Store</h2>
          <p className="text-stone-600 mb-8 font-light">
            Immerse yourself in the world of Aurora. Book a private consultation with our jewellery experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button>Book Appointment</Button>
            </Link>
            <Link to="/location">
               <Button variant="outline">Get Directions</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;