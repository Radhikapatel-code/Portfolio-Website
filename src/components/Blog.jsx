import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

// Plausible Blog Topics based on your profile
const blogPosts = [
  {
    id: 1,
    title: "Why I Refused to Choose Between Hardware & Software",
    excerpt: "In a world of specialized developers, I explore the power of being a generalist who understands both the silicon (VLSI) and the syntax (AI).",
    date: "Dec 10, 2025",
    tag: "Career"
  },
  {
    id: 2,
    title: "Optimizing EV Flash Charging using Genetic Algorithms",
    excerpt: "A deep dive into how I used bio-inspired logic to solve real-world constraints in Electric Vehicle charging infrastructure.",
    date: "Nov 28, 2025",
    tag: "Research"
  },
  {
    id: 3,
    title: "The Aesthetics of Code: Developing with a 'Doll' Mindset",
    excerpt: "Code isn't just logic; it's art. How I use design systems and precise typography to make technical dashboards feel elegant.",
    date: "Oct 15, 2025",
    tag: "Design"
  }
];

export default function Blog() {
  return (
    <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      
      {/* Background Grid (Matches Portfolio) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-aqua-500/5 rounded-full blur-[80px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-purple-400">Insights</span>
          </h2>
          <p className="text-gray-400">Thoughts on Technology, Design, and Research.</p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col justify-between bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-aqua-400/30 transition-all duration-300 cursor-pointer"
            >
              
              <div>
                {/* Meta Data */}
                <div className="flex items-center gap-4 mb-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1 text-aqua-300">
                    <Tag size={12} /> {post.tag}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-aqua-300 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-aqua-400 transition-colors">
                Read Article <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}