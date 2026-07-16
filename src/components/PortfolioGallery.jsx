import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, BookOpen, Layout, Code, Shield, Brain, Globe, Wallet } from 'lucide-react';

// All Projects Data
const projects = [
  {
    id: 1,
    title: "SentinelAI",
    category: "Explainable AI Decision Engine for Fraud Detection",
    description: "Re-framed fraud detection as a cost-aware decision problem using A* search to select optimal actions under asymmetric cost constraints. Fully deployable with FastAPI backend, Streamlit dashboard, and SHAP post-hoc explanations for end-to-end auditability.",
    tech: ["Python", "Scikit-learn", "SHAP", "FastAPI", "Streamlit", "A* Search", "Isolation Forest"],
    gradient: "from-blue-500 to-aqua-400",
    icon: <Shield size={40} className="text-white" />,
    link: "https://github.com/Radhikapatel-code/SentinelAI",
    github: "https://github.com/Radhikapatel-code/SentinelAI"
  },
  {
    id: 2,
    title: "WealthMap",
    category: "AI-Powered Portfolio Intelligence Platform",
    description: "Built an AI-powered portfolio intelligence platform with a modular Indian tax engine — FIFO-based lot tracking, LTCG/STCG classification, and tax-loss harvesting — behind a FastAPI backend and Streamlit dashboard, powered by Claude LLM.",
    tech: ["Python", "FastAPI", "Streamlit", "Claude API", "Docker"],
    gradient: "from-emerald-400 to-green-600",
    icon: <Wallet size={40} className="text-white" />,
    link: "https://github.com/Radhikapatel-code/WealthMap",
    github: "https://github.com/Radhikapatel-code/WealthMap"
  },
  {
    id: 3,
    title: "Echolingo",
    category: "AI-Powered Voice Dubbing Pipeline",
    description: "End-to-end dubbing pipeline: Whisper ASR → 50+ language translation → TTS synthesis → audio–video remux with subtitles — with zero intermediate user intervention. Supports batch processing of video files.",
    tech: ["Python", "OpenAI Whisper", "deep-translator", "gTTS", "FFmpeg", "MoviePy"],
    gradient: "from-violet-500 to-purple-600",
    icon: <Globe size={40} className="text-white" />,
    link: "https://github.com/Radhikapatel-code/Echolingo",
    github: "https://github.com/Radhikapatel-code/Echolingo"
  },
  {
    id: 4,
    title: "Study-Easy",
    category: "Full Stack Productivity Application",
    description: "Aesthetic task management and habit tracking app designed to boost productivity with a sleek, user-friendly interface featuring note-taking, Pomodoro timer, and habit streaks visualization.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-pink-500 to-rose-500",
    icon: <BookOpen size={40} className="text-white" />,
    link: "https://github.com/Radhikapatel-code/study-easy",
    github: "https://github.com/Radhikapatel-code/study-easy"
  },
  {
    id: 5,
    title: "Multi-Agent Market Sim",
    category: "LLM-Powered Consumer Agent Simulation",
    description: "Research project at USC Marshall — multi-agent market simulation where LLM-powered consumer agents interact with recommendation algorithms to study platform dynamics, seller equity, and revenue impacts.",
    tech: ["Python", "LangChain", "OpenAI API", "Multi-Agent Systems", "Simulation"],
    gradient: "from-amber-500 to-orange-500",
    icon: <Brain size={40} className="text-white" />,
    link: "https://github.com/Radhikapatel-code",
    github: "https://github.com/Radhikapatel-code"
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Personal Developer Portfolio",
    description: "This very website — a modern, responsive portfolio built with React and Tailwind CSS. Features glassmorphism design, framer-motion animations, typewriter effects, and a dark theme with aqua-purple gradients.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    gradient: "from-aqua-400 to-blue-600",
    icon: <Layout size={40} className="text-white" />,
    link: "https://github.com/Radhikapatel-code/Portfolio-Website",
    github: "https://github.com/Radhikapatel-code/Portfolio-Website"
  }
];

export default function PortfolioGallery() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects where logic meets creativity — from AI research to full-stack applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm hover:border-aqua-400/30 transition-all duration-500"
            >
              
              {/* Gradient Header */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
                
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
                  <h3 className="text-xl font-bold text-white group-hover:text-aqua-300 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
                
                <p className="text-xs text-aqua-400/70 mb-4 font-mono-code uppercase tracking-wider">
                  {project.category}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] font-medium text-gray-400 bg-white/[0.04] rounded-full border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2.5 py-1 text-[11px] font-medium text-gray-500 bg-white/[0.04] rounded-full border border-white/[0.06]">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* View Project */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-aqua-300 transition-colors"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>

              {/* Bottom glow */}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

            </motion.div>
          ))}
        </div>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Radhikapatel-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-aqua-300 transition-colors text-sm font-medium"
          >
            View all projects on GitHub <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}