import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const FloatingInput = ({ label, id, type = 'text', as = 'input', rows, required = true, value, onChange }) => {
  const [focused, setFocused] = useState(false);

  const Component = as;

  return (
    <div className="relative mb-6">
      <Component
        id={id}
        name={id}
        type={type}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-gray-50 border-b-2 px-4 py-4 outline-none transition-all duration-300 font-body text-charcoal ${
          focused ? 'border-electric bg-white' : 'border-gray-200'
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 font-body pointer-events-none ${
          focused || (value && value.length > 0)
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        status: 'new',
        submittedAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', grade: '', message: '' });
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-electric" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 font-body mb-6">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-electric font-medium hover:underline font-body"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <FloatingInput label="Your Name" id="name" value={formData.name} onChange={handleChange} />
                    <FloatingInput label="Phone Number" id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>
                  <FloatingInput label="Email Address" id="email" type="email" value={formData.email} onChange={handleChange} />
                  <FloatingInput label="Student Grade / Level" id="grade" value={formData.grade} onChange={handleChange} />
                  <FloatingInput label="Your Message" id="message" as="textarea" rows="4" value={formData.message} onChange={handleChange} />
                  
                  {error && (
                    <p className="text-red-500 text-sm font-body">{error}</p>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-electric text-white py-4 mt-4 font-heading font-bold text-lg hover:bg-blue-600 disabled:bg-electric/50 transition-colors flex items-center justify-center rounded uppercase tracking-wider group"
                  >
                    {isSubmitting ? (
                      <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                        Sending...
                      </motion.span>
                    ) : (
                      <>Send Request <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
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
                  <p className="text-gray-400">Anand Talkies 1st Main,<br/>Adi Jambav Nagar, Gokak,<br/>Karnataka 591307</p>
                  <p className="text-sm text-electric mt-2">Open: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded mr-4">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Enquiries</h4>
                  <p className="text-gray-400">+91 84970 90712</p>
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
              href="https://wa.me/918497090712"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full bg-[#25D366] text-white py-4 font-heading font-bold text-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center rounded"
            >
              <MessageCircle className="w-6 h-6 mr-2" /> Chat with us on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* Live Google Map */}
      <section className="h-[400px] w-full relative overflow-hidden">
        <iframe
          title="Akadmix Location - Open Minds, Gokak"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1920!2d74.821119!3d16.166040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f8a4a0000001%3A0x1!2zMTbCsDA5JzU3LjciTiA3NMKwNDknMTYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />
      </section>

    </motion.div>
  );
};

export default Contact;
