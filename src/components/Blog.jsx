import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: "collaborative-environment",
    title: "Working in a collaborative environment",
    excerpt: "My first big project taught me teamwork, communication, and adaptability.",
    date: "Dec 10, 2025",
    tag: "Career",
    content: `
Working on my first major project helped me understand how essential collaboration is.
I learned how to communicate ideas clearly, handle conflicts professionally,
and adapt to changing requirements while working in a team environment.
    `
  },
  {
    id: 2,
    slug: "ev-flash-charging",
    title: "Project Opportunities in EV Flash Charging",
    excerpt: "Research project on rapid EV charging with my professor.",
    date: "Dec 15, 2025",
    tag: "Research",
    content: `
This research project explored flash charging technologies for electric vehicles.
It gave me hands-on exposure to real-world problem solving and academic research.
    `
  },
  {
    id: 3,
    slug: "aesthetics-of-code",
    title: "The Aesthetics of Code",
    excerpt: "Why frontend code should feel as elegant as it functions.",
    date: "Oct 15, 2025",
    tag: "Design",
    content: `
Code is not just logic—it is also design.
This article explores how clean UI, spacing, typography,
and animations improve user experience.
    `
  }
];

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400">Thoughts on Technology, Design, and Research.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl"
            >
              <div className="mb-4 text-xs text-gray-400 flex gap-4">
                <span className="flex items-center gap-1">
                  <Tag size={12} /> {post.tag}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {post.date}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-400 mb-6">{post.excerpt}</p>

              <div
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="flex items-center gap-2 cursor-pointer text-aqua-400"
              >
                Read Article <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
