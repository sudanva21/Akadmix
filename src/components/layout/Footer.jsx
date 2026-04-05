import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t-2 border-electric text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading font-bold text-3xl tracking-tighter text-pure-white">
                Akad<span className="text-electric">mix</span>.
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-body">
              Empowering the next generation of thinkers, creators, and innovators through specialized tutoring and holistic mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-pure-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-body">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/materials" className="hover:text-gold transition-colors">Study Materials</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Latest News & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-pure-white">Our Programs</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-body">
              <li><Link to="/services" className="hover:text-electric transition-colors">Offline Batches (LKG - 10th)</Link></li>
              <li><Link to="/services" className="hover:text-electric transition-colors">1-on-1 Online Tutoring</Link></li>
              <li><Link to="/services" className="hover:text-electric transition-colors">Group Online Classes</Link></li>
              <li><Link to="/services" className="hover:text-electric transition-colors">Competitive Exam Prep</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-pure-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-body">
              <li className="flex items-start space-x-3">
                 <span className="mt-0.5">✦</span>
                 <span>India</span>
              </li>
              <li className="flex items-start space-x-3">
                 <span className="mt-0.5">✦</span>
                 <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                 <span className="mt-0.5">✦</span>
                 <span>hello@akadmix.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 font-body">
          <p>© {new Date().getFullYear()} Akadmix Education. All rights reserved.</p>
          <p className="flex items-center space-x-2">
            <span>Built for learners, by Akadmix.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
