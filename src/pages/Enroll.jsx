import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Navigation2 } from 'lucide-react';
import { OFFLINE_BATCHES, ONLINE_PROGRAMS } from '../data/mockData';

const Enroll = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Combine programs for easy mapping
  const allPrograms = [
    ...OFFLINE_BATCHES.map(b => ({ ...b, type: 'Offline Batch' })),
    ...ONLINE_PROGRAMS.map(p => ({ ...p, type: 'Online Program', group: p.title }))
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy-900 mb-4">
                  Start Your <span className="text-electric">Journey</span>
                </h1>
                <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
                  Select your program and complete the enrollment form below. Our academic counselors will get in touch within 24 hours.
                </p>
              </div>

              {/* Program Selector */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">1. Select a Program</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {allPrograms.map((prog, idx) => {
                    const isSelected = selectedProgram?.id === prog.id;
                    return (
                      <div 
                        key={prog.id}
                        onClick={() => setSelectedProgram(prog)}
                        className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 relative ${
                          isSelected 
                            ? 'border-electric bg-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                            : 'border-transparent bg-white shadow-sm hover:border-gray-200 hover:shadow-md'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-4 right-4">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                              <CheckCircle2 className="w-5 h-5 text-electric" />
                            </motion.div>
                          </div>
                        )}
                        <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${isSelected ? 'text-electric' : 'text-gray-400'}`}>
                          {prog.type}
                        </span>
                        <h3 className={`font-heading text-xl font-bold ${isSelected ? 'text-navy-900' : 'text-charcoal'}`}>
                          {prog.group}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Enrollment Form */}
              <motion.div 
                initial={false}
                animate={{ opacity: selectedProgram ? 1 : 0.5, pointerEvents: selectedProgram ? 'auto' : 'none' }}
                className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 rounded-2xl relative overflow-hidden"
              >
                {!selectedProgram && (
                   <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-[2px]">
                      <p className="font-heading font-bold text-xl text-navy-900 flex items-center">
                        <Navigation2 className="w-5 h-5 mr-2 -rotate-45" /> Please select a program first
                      </p>
                   </div>
                )}
                
                <h2 className="font-heading text-2xl font-bold text-navy-900 mb-8 border-b pb-4">2. Student Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 font-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Student Name *</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Parent/Guardian Name *</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number *</label>
                      <input required type="tel" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Email Address *</label>
                      <input required type="email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Grade / Standard *</label>
                      <select required className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors appearance-none">
                        <option value="">Select Grade</option>
                        <option value="LKG-UKG">LKG / UKG</option>
                        <option value="1-5">1st - 5th Standard</option>
                        <option value="6-8">6th - 8th Standard</option>
                        <option value="9-10">9th - 10th Standard</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Preferred Timing</label>
                      <input type="text" placeholder="e.g. Evenings after 5 PM" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Additional Notes / Requirements</label>
                    <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-electric text-white py-4 rounded font-heading font-bold text-lg hover:bg-blue-600 transition-colors flex justify-center items-center overflow-hidden relative"
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ opacity: [1, 0.5, 1] }} 
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        Processing...
                      </motion.div>
                    ) : (
                      "Submit Enrollment"
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="success-view"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 text-center shadow-2xl rounded-2xl border border-gray-100 max-w-2xl mx-auto"
            >
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1, rotate: [0, 10, 0] }} 
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle2 className="w-12 h-12 text-electric" />
              </motion.div>
              <h2 className="font-heading text-4xl font-bold text-navy-900 mb-4">Application Received!</h2>
              <p className="font-body text-gray-600 text-lg mb-8">
                Thank you for choosing Akadmix. Our academic team has received your enrollment request for <span className="font-bold text-charcoal">{selectedProgram?.group}</span>. We will contact you within 24 hours to finalize your schedule.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-navy-900 text-white px-8 py-3 rounded-full font-medium hover:bg-electric transition-colors"
              >
                Return to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default Enroll;
