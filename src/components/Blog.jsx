import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: "usc-marshall-research-internship",
    title: "How I Landed a USC Marshall Research Internship Through a Scholarship Program",
    excerpt: "The rigorous selection process, the research on LLM-powered consumer agents, and what I learned about academic research at a top global institution.",
    date: "Jun 20, 2025",
    tag: "Research",
    readTime: "8 min read",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 2,
    slug: "building-multi-agent-systems",
    title: "Building Multi-Agent Systems: When AI Agents Talk to Each Other",
    excerpt: "A deep dive into LLM agent architectures, LangChain orchestration, and why multi-agent systems are the future of AI applications.",
    date: "Mar 15, 2026",
    tag: "AI/ML",
    readTime: "10 min read",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 3,
    slug: "competitive-programming-journey",
    title: "From 0 to 750+: My Competitive Programming Journey",
    excerpt: "How I went from not knowing what a for-loop was to becoming a Codeforces Specialist with a 415+ day LeetCode streak. Tips, strategies, and honest reflections.",
    date: "Jan 10, 2026",
    tag: "Career",
    readTime: "7 min read",
    gradient: "from-aqua-400 to-blue-500",
  }
];

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-6">
      
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/8 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-gray-400">Thoughts on research, technology, and the journey of building things.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="group cursor-pointer bg-white/[0.03] border border-white/[0.06] p-8 rounded-2xl backdrop-blur-sm hover:border-white/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Tag + Meta */}
                <div className="mb-5 text-xs text-gray-500 flex flex-wrap gap-3">
                  <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-[10px] font-semibold uppercase tracking-wider`}>
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-aqua-300 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-aqua-400 text-sm font-medium group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>

              {/* Bottom glow */}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${post.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
