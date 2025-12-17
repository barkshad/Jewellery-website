import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Visit Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <MapPin className="text-gold-600" /> Mayfair Flagship
              </h2>
              <p className="text-stone-600 text-lg font-light leading-relaxed pl-9">
                123 Luxury Lane<br />
                Mayfair, London<br />
                W1J 9LL, United Kingdom
              </p>
            </div>

            <div>
               <h2 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <Clock className="text-gold-600" /> Opening Hours
              </h2>
              <ul className="pl-9 space-y-2 text-stone-600 font-light">
                <li className="flex justify-between max-w-xs border-b border-stone-100 pb-2">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs border-b border-stone-100 pb-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs border-b border-stone-100 pb-2">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <Phone className="text-gold-600" /> Contact Store
              </h2>
              <p className="pl-9 text-stone-600 font-light text-lg">+44 20 7123 4567</p>
            </div>

            <div className="bg-gold-50 p-6 rounded-sm border border-gold-100">
              <h3 className="font-serif text-lg mb-2">Private Consultations</h3>
              <p className="text-sm text-stone-600 mb-4">
                For engagement rings and custom designs, we recommend booking a private appointment to ensure a dedicated specialist is available.
              </p>
              <button className="text-gold-700 underline text-sm uppercase tracking-wide hover:text-gold-900">Book Appointment</button>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[400px] lg:h-full min-h-[500px] bg-stone-200 w-full rounded-sm overflow-hidden relative">
            {/* Using an iframe for a Google Maps embed mockup */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2889612081344!2d-0.1442124842299839!3d51.50792637963515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052d67d7164d%3A0x6b4478816c738e4a!2sMayfair%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1645564859522!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Aurora Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;