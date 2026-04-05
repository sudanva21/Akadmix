import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MATERIALS } from '../data/mockData';
import { Download, FileText, Filter, ChevronRight } from 'lucide-react';

const CATEGORIES = ['All', 'By Subject', 'Hackathon Prep', 'Competitive Exams'];

const Materials = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMaterials = activeCategory === 'All' 
    ? MATERIALS 
    : MATERIALS.filter(m => m.category === activeCategory);

  const featuredMaterials = MATERIALS.slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen"
    >
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric via-navy-900 to-navy-900"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Study <span className="text-electric italic">Materials</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 font-body"
          >
            Resources crafted for learners and achievers. Download curated notes, worksheets, and guides.
          </motion.p>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-16">
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
          {featuredMaterials.map((item, idx) => (
            <motion.div 
              key={`feat-${item.id}`}
              whileHover={{ y: -5 }}
              className="min-w-[320px] md:min-w-[400px] bg-electric text-white p-8 rounded-xl shadow-lg shadow-electric/20 shrink-0 snap-start relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none group-hover:scale-110 transition-transform">
                <FileText size={80} />
              </div>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium tracking-wider mb-4 uppercase">
                Featured
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/80 font-body text-sm mb-6 max-w-[250px]">{item.description}</p>
              <button className="flex items-center text-gold font-medium group-hover:underline">
                View Resource <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 gap-6">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${
                  activeCategory === cat 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-sm font-body text-gray-500 font-medium">
            Showing {filteredMaterials.length} resources
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMaterials.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="bg-white border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-shadow group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-2.5 py-1 text-xs font-bold rounded uppercase tracking-wider ${
                    item.category === 'Hackathon Prep' ? 'bg-orange-100 text-orange-700' :
                    item.category === 'Competitive Exams' ? 'bg-purple-100 text-purple-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {item.category}
                  </div>
                  <span className="text-gray-400 font-medium text-xs border border-gray-200 px-2 py-1 rounded">
                    {item.grade}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-xl text-navy-900 mb-3 group-hover:text-electric transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-8 flex-grow">{item.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs font-bold text-gray-400 uppercase">{item.extension}</span>
                  <a href="#" className="flex items-center justify-center p-2 rounded bg-gray-50 text-electric hover:bg-electric hover:text-white transition-colors" aria-label="Download">
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

    </motion.div>
  );
};

export default Materials;
