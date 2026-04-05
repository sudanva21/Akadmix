import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/mockData';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find related posts (same category, exclude current)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Simple markdown-to-JSX renderer for the blog content
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];
    let inBlockquote = false;
    let blockquoteText = '';

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 my-6 pl-6">
            {listItems.map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed relative before:content-[''] before:absolute before:-left-4 before:top-[10px] before:w-2 before:h-2 before:bg-electric before:rounded-full">
                {item}
              </li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushBlockquote = () => {
      if (blockquoteText) {
        elements.push(
          <blockquote key={`bq-${elements.length}`} className="my-8 pl-6 border-l-4 border-electric bg-blue-50/50 py-6 pr-6 italic text-navy-900 text-lg font-medium">
            {blockquoteText}
          </blockquote>
        );
        blockquoteText = '';
        inBlockquote = false;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        flushBlockquote();
        continue;
      }

      if (trimmed.startsWith('> ')) {
        flushList();
        inBlockquote = true;
        blockquoteText += (blockquoteText ? ' ' : '') + trimmed.slice(2).replace(/^"|"$/g, '');
        continue;
      }

      if (inBlockquote) {
        flushBlockquote();
      }

      if (trimmed.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={`h4-${i}`} className="font-heading text-xl font-bold text-navy-900 mt-8 mb-3">
            {trimmed.slice(5).replace(/\*\*/g, '')}
          </h4>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${i}`} className="font-heading text-2xl font-bold text-navy-900 mt-10 mb-4">
            {trimmed.slice(4).replace(/\*\*/g, '')}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${i}`} className="font-heading text-3xl font-bold text-navy-900 mt-12 mb-6">
            {trimmed.slice(3).replace(/\*\*/g, '')}
          </h2>
        );
      } else if (trimmed.startsWith('---')) {
        flushList();
        elements.push(<hr key={`hr-${i}`} className="my-10 border-gray-200" />);
      } else if (trimmed.startsWith('- ')) {
        inList = true;
        const content = trimmed.slice(2)
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        listItems.push(<span dangerouslySetInnerHTML={{ __html: content }} />);
      } else if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
        flushList();
        elements.push(
          <p key={`em-${i}`} className="text-gray-600 italic my-4 text-lg">
            {trimmed.replace(/^\*|\*$/g, '')}
          </p>
        );
      } else {
        flushList();
        const content = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        elements.push(
          <p key={`p-${i}`} className="text-gray-700 leading-relaxed my-4 text-[17px]" dangerouslySetInnerHTML={{ __html: content }} />
        );
      }
    }

    flushList();
    flushBlockquote();
    return elements;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-pure-white min-h-screen"
    >
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/30 to-navy-900/80" />

        {/* Back button overlaid */}
        <div className="absolute top-28 left-4 md:left-8 z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors font-medium text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </div>

        {/* Title overlaid at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-electric text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-sm">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Meta Bar */}
      <div className="border-b border-gray-100 bg-gray-50/80">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-5 flex flex-wrap items-center gap-6 text-sm text-gray-500 font-body">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="font-medium text-charcoal">{post.author}</span>
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <button 
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="ml-auto flex items-center gap-2 text-electric hover:text-navy-900 transition-colors font-medium"
          >
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="font-body">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Author Card */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12">
        <div className="bg-gray-50 border border-gray-100 p-8 flex items-center gap-6">
          <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-xl shrink-0">
            {post.author.split(' ').map(w => w[0]).join('')}
          </div>
          <div>
            <p className="font-heading font-bold text-navy-900 text-lg">{post.author}</p>
            <p className="text-gray-500 text-sm font-body">
              Contributing writer at Akadmix. Passionate about education, learning strategies, and student empowerment.
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h3 className="font-heading text-2xl font-bold text-navy-900 mb-8">More in {post.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(related => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading text-xl font-bold text-navy-900 group-hover:text-electric transition-colors mb-2">
                      {related.title}
                    </h4>
                    <p className="text-gray-500 text-sm font-body line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <h3 className="font-heading text-3xl font-bold text-white mb-4">Want more insights?</h3>
        <p className="text-gray-400 font-body mb-8 max-w-md mx-auto">
          Subscribe to the Akadmix blog for weekly articles on education, parenting, and student success.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-electric text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
        >
          Explore All Articles
        </Link>
      </section>
    </motion.div>
  );
};

export default BlogPost;
