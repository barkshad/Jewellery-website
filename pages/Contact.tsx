import React from 'react';
import Button from '../components/Button';
import { Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50 min-h-screen fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Get in Touch</h1>
          <p className="text-stone-600 font-light">
            Whether you have a question about a piece, need assistance with sizing, or want to discuss a custom design, we are here to help.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-lg rounded-sm border border-stone-100">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">First Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent placeholder-stone-300"
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Last Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent placeholder-stone-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Email</label>
                <input 
                  type="email" 
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent placeholder-stone-300"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Phone (Optional)</label>
                <input 
                  type="tel" 
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent placeholder-stone-300"
                  placeholder="+1 ..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Subject</label>
              <select className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent text-stone-600">
                <option>General Inquiry</option>
                <option>Custom Design Request</option>
                <option>Appointment Booking</option>
                <option>Order Status</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Message</label>
              <textarea 
                rows={4}
                className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent placeholder-stone-300 resize-none"
                placeholder="How can we assist you today?"
              ></textarea>
            </div>

            <div className="pt-4 text-center md:text-left">
              <Button type="submit" className="min-w-[200px]">Send Message</Button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 border border-stone-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-4">
               <div className="bg-green-100 p-3 rounded-full text-green-600">
                 <MessageCircle size={24} />
               </div>
               <div>
                 <h3 className="font-serif text-lg">WhatsApp Us</h3>
                 <p className="text-sm text-stone-500">Instant response during business hours</p>
               </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-400">Chat</span>
          </div>
          
          <div className="bg-white p-6 border border-stone-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-4">
               <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                 <Mail size={24} />
               </div>
               <div>
                 <h3 className="font-serif text-lg">Email Us</h3>
                 <p className="text-sm text-stone-500">concierge@aurorajewels.com</p>
               </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-400">Mail</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;