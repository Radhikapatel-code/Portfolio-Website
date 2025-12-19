import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, BookOpen, Layout, Code } from 'lucide-react';

// Your Real Projects Data
const projects = [
  {
    id: 1,
    title: "Classync",
    category: "Full Stack Platform",
    description: "A comprehensive virtual classroom environment bridging the gap between students and teachers with real-time interaction.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    gradient: "from-blue-500 to-aqua-400",
    icon: <BookOpen size={40} className="text-white" />,
    link: "#", // Add actual link
    github: "#"
  },
  {
    id: 2,
    title: "EV Flash Charging",
    category: "Hardware Research",
    description: "Optimizing charging algorithms for Electric Vehicles to reduce downtime. Integrating VLSI concepts with modern power systems.",
    tech: ["Python", "Optimization", "VLSI", "Matlab"],
    gradient: "from-purple-500 to-pink-500",
    icon: <Zap size={40} className="text-white" />,
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Neuromorphic UI",
    category: "Design System",
    description: "My personal portfolio (this website). Built with a focus on 'Tech-Doll' aesthetics, high-performance animations, and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    gradient: "from-emerald-400 to-cyan-500",
    icon: <Layout size={40} className="text-white" />,
    link: "#",
    github: "#"
  }
];

export default function PortfolioGallery() {
  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Background Grid (Matches Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-purple-400">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects where logic meets creativity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-aqua-400/50 transition-all duration-300"
            >
              
              {/* Image / Gradient Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                {/* Abstract Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                
                {/* Floating Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 bg-white/20 p-4 rounded-full backdrop-blur-md shadow-lg"
                >
                  {project.icon}
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-aqua-300 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
                
                <p className="text-sm text-aqua-400/80 mb-4 font-mono uppercase tracking-wider">
                  {project.category}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-aqua-300 transition-colors">
                  View Case Study <ExternalLink size={16} />
                </a>
              </div>

              {/* Hover Glow Effect at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aqua-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}