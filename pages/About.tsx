import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="fade-in pt-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <img 
          src="https://picsum.photos/id/20/1920/1080" 
          alt="Artisan working on jewellery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white">Our Story</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Intro */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 italic">"Jewellery is not just an accessory, it is a memory kept in stone and gold."</h2>
          <div className="w-24 h-px bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Founded in 1985 in the heart of London, Aurora Jewel House began with a singular vision: to create pieces that transcend generations. What started as a small artisan workshop has grown into a globally recognized name, yet our heart remains in the meticulous details of hand-craftsmanship.
          </p>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://picsum.photos/id/252/600/800" 
              alt="Design Sketch" 
              className="w-full h-auto rounded-sm shadow-xl"
            />
          </div>
          <div className="md:pl-10">
            <h3 className="text-2xl font-serif text-stone-900 mb-4">The Art of Creation</h3>
            <p className="text-stone-600 mb-4 font-light leading-relaxed">
              Every Aurora piece begins as a sketch, born from inspiration found in nature, architecture, and art. We do not mass produce. Instead, we allow the character of the stones to dictate the design.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              Our goldsmiths use traditional techniques passed down through centuries—hand-forging, pavé setting under microscopes, and polishing to perfection—ensuring that your piece is not just beautiful, but structurally sound for a lifetime of wear.
            </p>
          </div>
        </div>

        {/* Ethical Sourcing */}
        <div className="bg-stone-50 p-10 md:p-16 text-center rounded-sm">
           <h3 className="text-2xl font-serif text-stone-900 mb-6">Our Commitment to Ethics</h3>
           <p className="text-stone-600 font-light leading-relaxed mb-8">
             Beauty should not come at a cost to the earth or its people. We are proud members of the Responsible Jewellery Council. We exclusively use recycled gold and platinum, and our diamonds are sourced from suppliers who adhere strictly to the Kimberley Process.
           </p>
           <Link to="/contact">
             <Button variant="outline">Learn More</Button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default About;