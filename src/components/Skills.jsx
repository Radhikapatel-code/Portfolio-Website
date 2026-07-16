import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Database, Globe, Server, Terminal, Zap, 
  GitGraph, BrainCircuit, Box, Cloud, Wrench, Layout,
  Blocks, Bot, Palette, Rocket, Shield, Container
} from 'lucide-react';

// Expanded Skills Data — 7 categories
const skillCategories = [
  {
    title: "Languages",
    color: "border-blue-500/50",
    skills: [
      { name: "C++", icon: <Code2 size={18} /> },
      { name: "Python", icon: <Terminal size={18} /> },
      { name: "C", icon: <Code2 size={18} /> },
      { name: "JavaScript", icon: <Globe size={18} /> },
      { name: "TypeScript", icon: <Globe size={18} /> },
      { name: "SQL", icon: <Database size={18} /> },
      { name: "HTML/CSS", icon: <Layout size={18} /> },
      { name: "Rust", icon: <Zap size={18} /> },
      { name: "Go", icon: <Rocket size={18} /> },
    ]
  },
  {
    title: "AI / ML / LLMs",
    color: "border-purple-500/50",
    skills: [
      { name: "Scikit-learn", icon: <BrainCircuit size={18} /> },
      { name: "PyTorch", icon: <BrainCircuit size={18} /> },
      { name: "TensorFlow", icon: <BrainCircuit size={18} /> },
      { name: "LangChain", icon: <Bot size={18} /> },
      { name: "LLM Agents", icon: <Bot size={18} /> },
      { name: "Multi-Agent Systems", icon: <Blocks size={18} /> },
      { name: "OpenAI API", icon: <Zap size={18} /> },
      { name: "Claude API", icon: <Zap size={18} /> },
      { name: "Hugging Face", icon: <BrainCircuit size={18} /> },
      { name: "Whisper (ASR)", icon: <Globe size={18} /> },
      { name: "SHAP", icon: <Shield size={18} /> },
      { name: "RAG Pipelines", icon: <Blocks size={18} /> },
      { name: "Fine-tuning", icon: <Wrench size={18} /> },
      { name: "Pandas", icon: <Database size={18} /> },
      { name: "NumPy", icon: <Cpu size={18} /> },
    ]
  },
  {
    title: "Web & Full Stack",
    color: "border-aqua-500/50",
    skills: [
      { name: "React.js", icon: <Layout size={18} /> },
      { name: "Next.js", icon: <Globe size={18} /> },
      { name: "Node.js", icon: <Server size={18} /> },
      { name: "Express.js", icon: <Server size={18} /> },
      { name: "FastAPI", icon: <Zap size={18} /> },
      { name: "Streamlit", icon: <Layout size={18} /> },
      { name: "REST APIs", icon: <Globe size={18} /> },
      { name: "GraphQL", icon: <Blocks size={18} /> },
      { name: "Tailwind CSS", icon: <Palette size={18} /> },
      { name: "Three.js", icon: <Box size={18} /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    color: "border-orange-500/50",
    skills: [
      { name: "Docker", icon: <Container size={18} /> },
      { name: "Kubernetes", icon: <Cloud size={18} /> },
      { name: "AWS", icon: <Cloud size={18} /> },
      { name: "GCP", icon: <Cloud size={18} /> },
      { name: "CI/CD", icon: <Rocket size={18} /> },
      { name: "GitHub Actions", icon: <GitGraph size={18} /> },
      { name: "Linux Shell", icon: <Terminal size={18} /> },
      { name: "Nginx", icon: <Server size={18} /> },
    ]
  },
  {
    title: "Databases",
    color: "border-emerald-500/50",
    skills: [
      { name: "MongoDB", icon: <Database size={18} /> },
      { name: "PostgreSQL", icon: <Database size={18} /> },
      { name: "Firebase", icon: <Zap size={18} /> },
      { name: "Redis", icon: <Database size={18} /> },
      { name: "Supabase", icon: <Cloud size={18} /> },
    ]
  },
  {
    title: "Tools & Platforms",
    color: "border-pink-500/50",
    skills: [
      { name: "Git", icon: <GitGraph size={18} /> },
      { name: "VS Code", icon: <Code2 size={18} /> },
      { name: "Postman", icon: <Globe size={18} /> },
      { name: "Figma", icon: <Palette size={18} /> },
      { name: "Jira", icon: <Blocks size={18} /> },
      { name: "Notion", icon: <Layout size={18} /> },
    ]
  },
  {
    title: "Competitive Programming",
    color: "border-red-500/50",
    skills: [
      { name: "Codeforces Specialist", icon: <Zap size={18} /> },
      { name: "750+ Problems", icon: <Code2 size={18} /> },
      { name: "DSA", icon: <Blocks size={18} /> },
      { name: "Graph Theory", icon: <GitGraph size={18} /> },
      { name: "Dynamic Programming", icon: <BrainCircuit size={18} /> },
    ]
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-aqua-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From low-level systems to cutting-edge AI — the tools and technologies I build with.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold text-white pl-3 border-l-4 ${category.color}`}>
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, borderColor: "rgba(45, 212, 191, 0.5)" }}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300 cursor-default group"
                  >
                    <span className="text-gray-500 group-hover:text-aqua-300 transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}