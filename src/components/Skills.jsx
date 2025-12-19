import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Figma, Globe, Layout, Server, Terminal, Zap, GitGraph, BrainCircuit, Box } from 'lucide-react';

// Organized Skills Data
const skillCategories = [
  {
    title: "Frontend & Design",
    skills: [
      { name: "React", icon: <Code2 size={20} /> },
      { name: "Tailwind CSS", icon: <Layout size={20} /> },
      { name: "Figma", icon: <Box size={20} /> }, // Using Box as generic design icon if Figma missing
      { name: "Three.js", icon: <Globe size={20} /> },
    ]
  },
  {
    title: "Backend & AI",
    skills: [
      { name: "Python", icon: <Terminal size={20} /> },
      { name: "Node.js", icon: <Server size={20} /> },
      { name: "TensorFlow", icon: <BrainCircuit size={20} /> },
      { name: "MongoDB", icon: <Database size={20} /> },
    ]
  },
  {
    title: "Hardware & IoT",
    skills: [
      { name: "Arduino", icon: <Cpu size={20} /> },
      { name: "VLSI", icon: <Cpu size={20} /> },
      { name: "IoT Systems", icon: <Globe size={20} /> },
      { name: "EV Logic", icon: <Zap size={20} /> },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <GitGraph size={20} /> },
      { name: "Linux", icon: <Terminal size={20} /> },
      { name: "VS Code", icon: <Code2 size={20} /> },
      { name: "Optimization", icon: <Zap size={20} /> },
    ]
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Skills() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Background Decor (Matches About Me) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-aqua-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-purple-400">Arsenal</span>
          </h2>
          <p className="text-gray-400">The tools I use to bridge software and hardware.</p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white pl-2 border-l-4 border-aqua-400">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: "rgba(45, 212, 191, 0.5)" }}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-default group"
                  >
                    <span className="text-gray-400 group-hover:text-aqua-300 transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-gray-200 font-medium text-sm group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}