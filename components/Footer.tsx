import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic">Aurora Jewel House</h3>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Crafting timeless elegance since 1985. We believe in ethical sourcing, unparalleled craftsmanship, and the eternal beauty of fine jewellery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-gold-400">Explore</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Collections</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/location" className="hover:text-white transition-colors">Visit Our Store</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-gold-400">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gold-500" />
                <span>123 Luxury Lane,<br />Mayfair, London, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+44 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500" />
                <span>concierge@aurorajewels.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-gold-400">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Be the first to know about new collections and exclusive events.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-stone-800 border border-stone-700 text-white px-4 py-2 focus:outline-none focus:border-gold-500 text-sm"
              />
              <button className="bg-gold-600 text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-gold-500 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Aurora Jewel House. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gold-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gold-400 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;