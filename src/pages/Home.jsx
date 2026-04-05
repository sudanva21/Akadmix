import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Marquee from '../components/ui/Marquee';
import { TESTIMONIALS, OFFLINE_BATCHES, ONLINE_PROGRAMS } from '../data/mockData';
import { ArrowRight, BookOpen, Users, Star, Monitor, ChevronRight, ChevronLeft } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-pure-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-pure-white border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 h-64 bg-electric/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-20">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-navy-900 leading-[1.1] mb-8 text-balance">
                Elevate your learning <span className="text-electric italic">potential.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-charcoal/70 font-body mb-10 max-w-2xl leading-relaxed"
            >
              Expert-led programs designed for deep comprehension, from elementary basics to competitive exams. Join the next generation of top performers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services" className="px-8 py-4 bg-navy-900 text-white rounded-full font-medium inline-flex items-center justify-center hover:bg-electric transition-colors">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/enroll" className="px-8 py-4 bg-transparent border border-navy-900 text-navy-900 rounded-full font-medium inline-flex items-center justify-center hover:bg-navy-50 transition-colors">
                Enroll Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <Marquee textItems={['Online Classes', 'Offline Batches', '1-on-1 Tutoring', 'Group Sessions', 'Study Materials', 'Expert Tutors']} />

      {/* Why Akadmix */}
      <section className="py-24 lg:py-32 bg-navy-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Why Akadmix?</h2>
            <div className="w-20 h-1 bg-electric"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "500+", title: "Students Menteed", icon: Users, delay: 0.1 },
              { num: "10+", title: "Subjects Covered", icon: BookOpen, delay: 0.2 },
              { num: "3", title: "Batch Levels", icon: Star, delay: 0.3 },
              { num: "100%", title: "Expert Tutors", icon: Monitor, delay: 0.4 }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                whileHover={{ y: -8, rotate: idx % 2 === 0 ? 2 : -2 }}
                className="bg-white/5 border border-white/10 p-8 flex flex-col items-start backdrop-blur-sm shadow-xl"
              >
                <stat.icon className="h-8 w-8 text-gold mb-6" />
                <h3 className="font-heading text-4xl font-bold mb-2">{stat.num}</h3>
                <p className="font-body text-gray-400">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Carousel */}
      <section className="py-24 lg:py-32 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Programs</h2>
              <div className="w-20 h-1 bg-electric"></div>
            </div>
            <Link to="/services" className="text-electric font-medium inline-flex items-center hover:text-navy-900 transition-colors mt-6 md:mt-0">
              View all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="w-full overflow-hidden pb-12 relative group/marquee cursor-default">
            <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
              {[...OFFLINE_BATCHES, ...ONLINE_PROGRAMS, ...OFFLINE_BATCHES, ...ONLINE_PROGRAMS].map((prog, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="w-80 min-w-80 bg-charcoal p-8 flex flex-col justify-between group/card border border-gray-800 mr-6"
                >
                  <div>
                    <div className="text-electric text-sm font-bold tracking-wider uppercase mb-4">
                      {prog.group ? 'Offline' : 'Online'}
                    </div>
                    <h3 className="text-white font-heading text-2xl font-bold mb-2">
                      {prog.group || prog.title}
                    </h3>
                    <p className="text-gray-400 font-body text-sm mb-6 h-12">
                      {prog.range || prog.points[0] + ', ' + prog.points[1]}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center group-hover/card:border-electric/50 transition-colors">
                    <span className="text-white font-medium text-sm">Learn more</span>
                    <ArrowRight className="text-gold h-5 w-5 transform group-hover/card:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-6">How It Works</h2>
            <p className="font-body text-charcoal/70 max-w-2xl mx-auto">A seamless path to start your academic growth journey.</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "Choose Program", desc: "Browse our offline and online programs to find the right fit." },
                { step: "02", title: "Book a Session", desc: "Select a timing and enroll through our streamlined online portal." },
                { step: "03", title: "Start Learning", desc: "Join your batch, meet your tutor, and elevate your academics." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="bg-white p-8 border border-gray-100 shadow-xl shadow-gray-200/40 relative text-center"
                >
                  <div className="w-16 h-16 bg-electric text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-6 shadow-lg shadow-electric/30">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-navy-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold flex items-center">
              Student Stories <Star className="ml-4 text-gold h-8 w-8 fill-gold" />
            </h2>
          </div>
          
          <div className="relative min-h-[300px]">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: idx === currentTestimonial ? 1 : 0, 
                  x: idx === currentTestimonial ? 0 : 50,
                  pointerEvents: idx === currentTestimonial ? 'auto' : 'none'
                }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-full md:w-2/3"
              >
                <div className="text-gold mb-6 text-6xl font-serif">"</div>
                <h3 className="font-heading text-3xl md:text-4xl leading-tight mb-8 font-medium">
                  {t.quote}
                </h3>
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-electric font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex space-x-3 mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-12 h-1 transition-colors ${idx === currentTestimonial ? 'bg-electric' : 'bg-white/20'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Preview CTA */}
      <section className="bg-electric py-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8">Ready to grow?</h2>
          <Link to="/enroll" className="inline-block bg-navy-900 text-white font-medium px-10 py-5 hover:bg-charcoal transition-colors uppercase tracking-widest text-sm rounded-none border border-navy-900 hover:border-gold">
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
