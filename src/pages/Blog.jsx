import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../data/mockData';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  // For the magazine layout, we extract top 3 if 'All' is selected.
  const isAllCategory = activeCategory === 'All';
  const featuredPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1, 3);
  const remainingPosts = isAllCategory ? filteredPosts.slice(3) : filteredPosts;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-pure-white min-h-screen"
    >
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-navy-900 mb-6"
          >
            Insights & <span className="text-electric">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/70 font-body max-w-2xl mx-auto"
          >
            Strategies, parenting advice, and the latest on academic excellence from our expert editorial team.
          </motion.p>
        </div>
      </section>

      {/* Category Strip */}
      <section className="border-y border-gray-100 bg-gray-50 mb-12 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto hide-scrollbar py-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap font-heading font-medium tracking-wide text-sm transition-colors uppercase ${
                  activeCategory === cat ? 'text-electric border-b-2 border-electric pb-1' : 'text-gray-500 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Magazine Layout - Only when 'All' is selected */}
            {isAllCategory && featuredPost && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                
                {/* Featured Left */}
                <Link to={`/blog/${featuredPost.slug}`} className="lg:col-span-8 group cursor-pointer block">
                  <div className="relative h-[400px] md:h-[500px] mb-6 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="w-full h-full">
                      <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                    </motion.div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
                      {featuredPost.category}
                    </div>
                  </div>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-900 mb-4 group-hover:text-electric transition-colors line-clamp-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 font-body text-lg mb-6 max-w-3xl line-clamp-2">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400 font-medium">
                    <span className="flex items-center hover:text-navy-900"><User className="w-4 h-4 mr-2" /> {featuredPost.author}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {featuredPost.readTime}</span>
                  </div>
                </Link>

                {/* Stacked Right */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                  {secondaryPosts.map(post => (
                    <Link to={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer flex flex-col h-full">
                      <div className="relative h-[200px] mb-4 overflow-hidden">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="w-full h-full">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                          {post.category}
                        </div>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-navy-900 mb-2 group-hover:text-electric transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="mt-auto flex justify-between items-center text-xs text-gray-400 font-medium">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <p className="font-heading font-medium text-electric mb-2 text-sm uppercase tracking-widest">Newsletter</p>
                    <h4 className="font-heading text-xl font-bold mb-4">Never miss an update.</h4>
                    <div className="flex w-full">
                      <input type="email" placeholder="Your email address" className="bg-gray-50 border border-gray-200 px-4 py-3 w-full focus:outline-none focus:border-electric" />
                      <button className="bg-navy-900 text-white px-4 font-medium hover:bg-electric transition-colors">→</button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Standard Grid for remaining or filtered posts */}
            <h3 className="font-heading text-2xl font-bold text-navy-900 mb-8 border-b-2 border-electric inline-block pb-2">
              {isAllCategory ? 'More Articles' : `${activeCategory} Articles`}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {remainingPosts.map(post => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer block">
                  <div className="relative h-[240px] mb-6 overflow-hidden bg-gray-100">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="w-full h-full">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                  
                  <div className="mb-3 flex items-center space-x-3 text-xs font-bold text-electric uppercase tracking-widest">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3 group-hover:text-electric transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-gray-600 mb-4 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                    <span className="flex items-center font-medium"><User className="w-3 h-3 mr-1.5" /> {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            {remainingPosts.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <p>No articles found in this category.</p>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

    </motion.div>
  );
};

export default Blog;
