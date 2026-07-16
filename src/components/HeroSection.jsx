import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, BrainCircuit, Sparkles, GlobeLock, Download } from 'lucide-react';

// --- Typewriter Component ---
const Typewriter = ({ words, wait = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? wait : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, wait]);

  return (
    <span className="text-aqua-300 font-mono-code text-xl md:text-3xl">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

// --- Floating Particle ---
const FloatingParticle = ({ delay, x, y, size }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
      y: [0, -100],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay,
      ease: "easeOut" 
    }}
    className="absolute rounded-full bg-aqua-400/30"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
  />
);

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-transparent">
      
      {/* FLOATING PARTICLES */}
      <FloatingParticle delay={0} x={10} y={60} size={4} />
      <FloatingParticle delay={1} x={80} y={70} size={3} />
      <FloatingParticle delay={2} x={30} y={80} size={5} />
      <FloatingParticle delay={3} x={60} y={50} size={3} />
      <FloatingParticle delay={1.5} x={90} y={40} size={4} />
      <FloatingParticle delay={2.5} x={20} y={30} size={3} />

      {/* GLOWING ORBS (Move with Mouse) */}
      <motion.div 
        animate={{
          x: mousePosition.x / 20,
          y: mousePosition.y / 20,
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 opacity-50"
      />
      <motion.div 
        animate={{
          x: mousePosition.x / -20,
          y: mousePosition.y / -20,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aqua-500/10 rounded-full blur-[120px] -z-10 opacity-50"
      />

      {/* MAIN CONTENT */}
      <div className="z-10 text-center px-4">
        
        {/* Floating Icons Top */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-6 mb-6"
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:scale-110 transition-transform cursor-pointer"
          >
             <BrainCircuit size={28} className="text-aqua-300" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-110 transition-transform cursor-pointer"
          >
             <Sparkles size={28} className="text-purple-400" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:scale-110 transition-transform cursor-pointer"
          >
             <GlobeLock size={28} className="text-aqua-300" />
          </motion.div>
        </motion.div>

        {/* STATIC NAME */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter"
        >
          RADHIKA <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-purple-500">SANAGADHIYA</span>
        </motion.h1>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm md:text-base text-gray-500 font-medium tracking-widest uppercase mb-6 font-mono-code"
        >
          Final Year B.Tech ICT @ DA-IICT &nbsp;·&nbsp; USC Marshall Research Intern
        </motion.p>

        {/* DYNAMIC TYPEWRITER TEXT */}
        <div className="h-12 mb-8">
           <span className="text-gray-400 text-xl md:text-3xl font-light mr-3">I am a</span>
           <Typewriter 
             words={["AI/ML Researcher.", "Full Stack Developer.", "Competitive Programmer.", "LLM Agent Builder.", "Problem Solver."]} 
             wait={2000} 
           />
        </div>

        {/* ACTION BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center items-center mt-8"
        >
          <a href="#projects" className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 cursor-pointer">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-aqua-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
          </a>
          
          <a 
            href="https://github.com/Radhikapatel-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm flex items-center gap-2"
          >
            <Download size={18} /> Resume
          </a>
          
          <div className="flex gap-4">
            <a href="https://github.com/Radhikapatel-code" target="_blank" rel="noopener noreferrer">
              <Github className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </a>
            <a href="https://www.linkedin.com/in/radhika-sangadhiya-b8b32b271/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
            </a>
            <a href="#contact" className="cursor-pointer">
              <Mail className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-gray-500 w-8 h-8" />
      </motion.div>

    </section>
  );
}