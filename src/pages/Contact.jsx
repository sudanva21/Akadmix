import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const FloatingInput = ({ label, id, type = 'text', as = 'input', rows, required = true }) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const Component = as;

  return (
    <div className="relative mb-6">
      <Component
        id={id}
        type={type}
        rows={rows}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        className={`w-full bg-gray-50 border-b-2 px-4 py-4 outline-none transition-all duration-300 font-body text-charcoal ${
          focused ? 'border-electric bg-white' : 'border-gray-200'
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 font-body pointer-events-none ${
          focused || hasValue 
            ? '-top-2 text-xs text-electric font-semibold bg-white/0 px-1' 
            : 'top-4 text-gray-400 text-base'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-pure-white min-h-screen"
    >
      <section className="bg-navy-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric via-navy-900 to-navy-900"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Get in <span className="text-electric italic">Touch</span>
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
            Have questions about our programs, fees, or want to schedule a visit? Our admission counselors are ready to help.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          
          {/* Left: Contact Form */}
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="font-heading text-3xl font-bold text-navy-900 mb-8">Send a Message</h2>
            
            <form className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FloatingInput label="Your Name" id="name" />
                <FloatingInput label="Phone Number" id="phone" type="tel" />
              </div>
              <FloatingInput label="Email Address" id="email" type="email" />
              <FloatingInput label="Student Grade / Level" id="grade" />
              <FloatingInput label="Your Message" id="message" as="textarea" rows="4" />
              
              <button 
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-electric text-white py-4 mt-4 font-heading font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center rounded uppercase tracking-wider group"
              >
                Send Request <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="bg-charcoal text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric/20 rounded-full blur-3xl"></div>
            
            <h2 className="font-heading text-3xl font-bold mb-12 relative z-10">Contact Information</h2>
            
            <div className="space-y-8 relative z-10 font-body mb-16">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded mr-4">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Main Center</h4>
                  <p className="text-gray-400">14 Sector Road, Tech City<br/>State, 100010</p>
                  <p className="text-sm text-electric mt-2">Open: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded mr-4">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Enquiries</h4>
                  <p className="text-gray-400">+1 (800) 123-4567</p>
                  <p className="text-gray-400">+1 (800) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded mr-4">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-400">hello@akadmix.com</p>
                  <p className="text-gray-400">admissions@akadmix.com</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="#"
              className="relative z-10 w-full bg-[#25D366] text-white py-4 font-heading font-bold text-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center rounded"
            >
              <MessageCircle className="w-6 h-6 mr-2" /> Chat with us on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full relative bg-gray-200 overflow-hidden">
        {/* Abstract Map Visual */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="font-heading font-bold text-gray-500 text-xl">[ Interactive Map Placeholder ]</p>
              <p className="font-body text-gray-400 mt-2">Google Maps Embed will render here.</p>
            </div>
            
            {/* Some CSS grid lines to fake a map feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
