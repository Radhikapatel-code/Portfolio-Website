import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Coursework', href: '#coursework' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tighter">
            RADHIKA<span className="text-aqua-400">.DEV</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-400 hover:text-aqua-300 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-aqua-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Social Icons */}
            <div className="flex gap-3 ml-4 pl-4 border-l border-white/10">
              <a href="https://github.com/Radhikapatel-code" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/radhika-sangadhiya-b8b32b271/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
            </div>

            {/* Resume CTA */}
            <a 
              href="https://github.com/Radhikapatel-code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-aqua-400 to-purple-500 text-black hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              <Download size={13} /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-aqua-300 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 mt-2 border-t border-white/10 flex items-center gap-4">
              <a href="https://github.com/Radhikapatel-code" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/radhika-sangadhiya-b8b32b271/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Radhikapatel-code"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-aqua-400 to-purple-500 text-black"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}