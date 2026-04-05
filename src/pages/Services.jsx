import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OFFLINE_BATCHES, ONLINE_PROGRAMS } from '../data/mockData';
import { Check, MapPin, Clock, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('offline');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-pure-white"
    >
      {/* Split Hero */}
      <section className="pt-32 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-900 mb-6">
                  Programs built for <span className="text-electric">excellence.</span>
                </h1>
                <p className="text-lg text-gray-600 font-body mb-8 max-w-lg leading-relaxed">
                  Whether you learn best in a dynamic classroom environment or through focused one-on-one digital sessions, we have a pathway designed for you.
                </p>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md h-80"
              >
                {/* Hero Image */}
                <div className="absolute inset-0 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/images/services/hero.svg" 
                    alt="Akadmix - Programs built for excellence" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-electric/20"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-200 p-1 rounded-full relative">
              <button
                onClick={() => setActiveTab('offline')}
                className={`relative z-10 px-8 py-3 rounded-full font-heading font-medium text-lg transition-colors ${
                  activeTab === 'offline' ? 'text-white' : 'text-charcoal hover:text-navy-900'
                }`}
              >
                Offline Batches
              </button>
              <button
                onClick={() => setActiveTab('online')}
                className={`relative z-10 px-8 py-3 rounded-full font-heading font-medium text-lg transition-colors ${
                  activeTab === 'online' ? 'text-white' : 'text-charcoal hover:text-navy-900'
                }`}
              >
                Online Programs
              </button>
              
              <motion.div
                layoutId="tab-bg"
                animate={{ x: activeTab === 'offline' ? 0 : '100%' }}
                className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] bg-electric rounded-full shadow-md z-0"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'offline' && (
              <motion.div
                key="offline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {OFFLINE_BATCHES.map((batch) => (
                  <div key={batch.id} className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center font-heading font-bold text-xl mb-6">
                      {batch.group.split(' ')[1]}
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2 text-navy-900">{batch.group}</h3>
                    <p className="text-electric font-medium text-sm mb-6 pb-6 border-b border-gray-100">{batch.range}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-charcoal">Timings</p>
                          <p className="text-sm text-gray-500">{batch.timings}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-charcoal">Location</p>
                          <p className="text-sm text-gray-500">{batch.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <p className="text-sm font-semibold text-charcoal mb-3">Core Subjects</p>
                      <div className="flex flex-wrap gap-2">
                        {batch.subjects.map(sub => (
                          <span key={sub} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/enroll" className="w-full block text-center py-3 border border-electric text-electric font-medium hover:bg-electric hover:text-white transition-colors">
                      Enroll Batch
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'online' && (
              <motion.div
                key="online"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                {ONLINE_PROGRAMS.map((prog) => (
                  <div key={prog.id} className="bg-navy-900 text-white p-10 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-electric/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    <Video className="w-10 h-10 text-electric mb-6" />
                    <h3 className="font-heading text-3xl font-bold mb-6">{prog.title}</h3>
                    <ul className="space-y-4 mb-8">
                      {prog.points.map((pt, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-gold shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-10 text-sm text-gray-400 border-t border-white/10 pt-4">
                      Platform: <span className="text-white font-medium">{prog.platform}</span>
                    </div>
                    <Link to="/enroll" className="w-full inline-flex justify-between items-center bg-electric px-6 py-4 font-medium text-white hover:bg-blue-600 transition-colors">
                      Book Session <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-pure-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-navy-900">Compare Methodologies</h2>
          
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-navy-900 text-white sticky top-0">
                <tr>
                  <th className="p-6 font-heading font-semibold text-lg w-1/3">Feature</th>
                  <th className="p-6 font-heading font-semibold text-lg border-l border-white/10">Offline Center</th>
                  <th className="p-6 font-heading font-semibold text-lg border-l border-white/10">Online 1-on-1</th>
                </tr>
              </thead>
              <tbody className="bg-white text-charcoal">
                {[
                  { feature: "Personalized Study Plan", offline: false, online: true },
                  { feature: "Peer Interaction", offline: true, online: false },
                  { feature: "Flexible Timings", offline: false, online: true },
                  { feature: "Mock Exam Environment", offline: true, online: false },
                  { feature: "Monthly Progress Report", offline: true, online: true },
                  { feature: "Direct Mentorship", offline: true, online: true }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 md:p-6 font-medium border-t border-gray-100">{row.feature}</td>
                    <td className="p-4 md:p-6 border-t border-gray-100 border-l">
                      {row.offline ? <Check className="w-6 h-6 text-emerald-500" /> : <div className="w-6 h-6 border-b-2 border-gray-300"></div>}
                    </td>
                    <td className="p-4 md:p-6 border-t border-gray-100 border-l">
                      {row.online ? <Check className="w-6 h-6 text-emerald-500" /> : <div className="w-6 h-6 border-b-2 border-gray-300"></div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Services;
