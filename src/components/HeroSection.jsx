import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Code2, Terminal, BrainCircuit, Sparkles, GlobeLock } from 'lucide-react';

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
    <span className="text-aqua-300 font-mono text-xl md:text-3xl">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default function HeroSection() {
  // Mouse Move Parallax Effect
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
    // Removed bg-[#050505] to let App.jsx background show
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-transparent">
      
      {/* GLOWING ORBS (Move with Mouse) - Kept as they are interactive specific to Hero */}
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
        
        {/* Floating Icons Top - AI & TECH EDITION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-6 mb-6"
        >
          <div className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:scale-110 transition-transform cursor-pointer">
             <BrainCircuit size={28} className="text-aqua-300" />
          </div>
          <div className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-110 transition-transform cursor-pointer">
             <Sparkles size={28} className="text-purple-400" />
          </div>
          <div className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:scale-110 transition-transform cursor-pointer">
             <GlobeLock size={28} className="text-aqua-300" />
          </div>
        </motion.div>

        {/* STATIC NAME */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
        >
          RADHIKA <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-purple-500">SANAGADHIYA</span>
        </motion.h1>

        {/* DYNAMIC TYPEWRITER TEXT */}
        <div className="h-12 mb-8">
           <span className="text-gray-400 text-xl md:text-3xl font-light mr-3">I am a</span>
           <Typewriter 
             words={["Creative Developer.", "Tech Enthusiast.", "Problem Solver.", "Tech Artist.","AI/ML Researcer."]} 
             wait={2000} 
           />
        </div>

        {/* ACTION BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-6 justify-center items-center mt-8"
        >
          {/* UPDATED: Button is now an Anchor tag linking to #projects */}
          <a href="#projects" className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 cursor-pointer">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-aqua-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
          </a>
          
          <div className="flex gap-4">
          <a 
  href="https://github.com/Radhikapatel-code" 
  target="_blank" 
  rel="noopener noreferrer"
>
            <Github className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a 
  href="https://www.linkedin.com/in/radhika-sangadhiya-b8b32b271/" 
  target="_blank" 
  rel="noopener noreferrer"
>
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a 
 href="#contact" 
 className="cursor-pointer"
>
            <Mail className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
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