import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/mockData';
import { Target, Lightbulb, Users, Trophy, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-pure-white"
    >
      {/* Cinematic Opening */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-charcoal text-white overflow-hidden py-32">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900 via-charcoal to-charcoal"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gold font-serif text-8xl md:text-[10rem] leading-none opacity-50 mb-4 h-24 overflow-hidden">"</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8">
              We do not just teach. <br className="hidden md:block"/>
              We <span className="text-electric italic">inspire</span> independent thought.
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Akadmix was founded on a simple premise: education should adapt to the student, not the other way around.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-electric mb-8"></div>
              <div className="space-y-6 font-body text-charcoal/80 text-lg leading-relaxed">
                <p>
                  Started in 2018 in a small one-room center, Akadmix began as an experiment by a group of passionate educators. They noticed that standardized schooling was leaving too many bright minds uninspired.
                </p>
                <p>
                  By focusing on comprehension over memorization, and by bringing in modern teaching tools, what started with 10 students has now grown into an academy empowering over 500 minds across multiple subjects and grades.
                </p>
                <p>
                  Today, we offer both state-of-the-art physical classrooms and seamless digital 1-on-1 mentorship, ensuring distance is never a barrier to quality education.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative h-[500px]">
               <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="bg-electric/10 rounded-tr-[5rem] overflow-hidden"></div>
                  <div className="bg-navy-900 overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-electric rounded-tl-full opacity-50"></div>
                  </div>
                  <div className="bg-gold/20 overflow-hidden rounded-bl-[5rem]"></div>
                  <div className="bg-gray-100 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gray-300" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-24 lg:pb-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-navy-900 text-white p-12 lg:p-16 relative overflow-hidden"
              >
                <Target className="w-12 h-12 text-gold mb-8" />
                <h3 className="font-heading text-4xl font-bold mb-6">Our Mission</h3>
                <p className="font-body text-gray-300 text-lg leading-relaxed relative z-10">
                  To democratize access to premium education by providing highly personalized, outcome-focused tutoring that bridges the gap between potential and achievement.
                </p>
                <div className="absolute -bottom-10 -right-10 text-9xl font-heading font-black opacity-5">M</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-electric text-white p-12 lg:p-16 relative overflow-hidden"
              >
                <Lightbulb className="w-12 h-12 text-navy-900 mb-8" />
                <h3 className="font-heading text-4xl font-bold mb-6 text-navy-900">Our Vision</h3>
                <p className="font-body text-white/90 text-lg leading-relaxed relative z-10">
                  A future where every student possesses the critical thinking skills to not only clear exams, but to confidently navigate and lead in a rapidly changing world.
                </p>
                <div className="absolute -bottom-10 -right-10 text-9xl font-heading font-black opacity-10 text-navy-900">V</div>
              </motion.div>
            </div>
         </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-4">Meet the Experts</h2>
          <div className="w-16 h-1 bg-electric"></div>
        </div>
        
        <div className="w-full overflow-x-auto pb-12 snap-x hide-scrollbar pl-4 sm:pl-6 lg:pl-16">
          <div className="flex gap-8 w-max pr-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="w-[300px] min-w-[300px] bg-white border border-gray-100 p-8 snap-start shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl mb-6 shadow-lg ${member.color}`}>
                  {member.initials}
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-900 mb-1">{member.name}</h3>
                <p className="text-electric font-medium text-sm mb-6">{member.subject}</p>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Timeline */}
            <div>
               <h3 className="font-heading text-3xl font-bold text-navy-900 mb-12">The Journey</h3>
               <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                 {[
                   { year: '2018', title: 'The Inception', desc: 'Started with a small batch of 10 students focusing on core Mathematics.' },
                   { year: '2020', title: 'Going Digital', desc: 'Adapted to remote learning by launching full-scale 1-on-1 digital mentorship.' },
                   { year: '2023', title: 'New Campus', desc: 'Opened our modern learning center in Tech City with advanced facilities.' },
                   { year: '2026', title: 'The Future', desc: 'Expanding curriculum to include tech, competitive prep, and beyond.' }
                 ].map((t, idx) => (
                   <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                     {/* Icon logic for timeline */}
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-electric text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -ml-5 md:ml-0">
                       <div className="w-2 h-2 bg-white rounded-full"></div>
                     </div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 p-6 bg-white border border-gray-100 shadow-sm group-hover:border-electric transition-colors">
                       <span className="font-bold text-electric text-sm mb-1 block">{t.year}</span>
                       <h4 className="font-heading text-xl font-bold text-navy-900 mb-2">{t.title}</h4>
                       <p className="text-gray-500 font-body text-sm">{t.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Values */}
            <div>
               <h3 className="font-heading text-3xl font-bold text-navy-900 mb-12">Our Core Values</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { icon: Users, title: 'Student-First', desc: 'Curriculum revolves around student comfort and pace.' },
                   { icon: Trophy, title: 'Result-Oriented', desc: 'Measurable progress with transparent monthly reporting.' },
                   { icon: Target, title: 'Targeted Prep', desc: 'Laser-focused modules for competitive and board exams.' },
                   { icon: BookOpen, title: 'Holistic Access', desc: 'Beyond syllabi—building critical life-long skills.' }
                 ].map((v, idx) => (
                   <div key={idx} className="bg-gray-50 p-8 hover:bg-navy-900 hover:text-white transition-colors group">
                     <v.icon className="w-8 h-8 text-electric mb-6 group-hover:text-gold transition-colors" />
                     <h4 className="font-heading text-xl font-bold mb-3 group-hover:text-white text-navy-900">{v.title}</h4>
                     <p className="font-body text-gray-500 text-sm group-hover:text-gray-300 leading-relaxed">{v.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default About;
