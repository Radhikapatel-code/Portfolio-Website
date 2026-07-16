import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter">
              RADHIKA<span className="text-aqua-400">.DEV</span>
            </a>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Final year B.Tech ICT student at DA-IICT. Building intelligent systems at the intersection of AI and software engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-500 hover:text-aqua-300 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://github.com/Radhikapatel-code" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:bg-aqua-400 hover:text-black hover:border-aqua-400 transition-all text-gray-400"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/radhika-sangadhiya-b8b32b271/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:bg-purple-400 hover:text-black hover:border-purple-400 transition-all text-gray-400"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:202301184@dau.ac.in" 
                className="p-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:bg-white hover:text-black hover:border-white transition-all text-gray-400"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="flex items-center gap-2 text-sm text-gray-600">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Radhika Sanagadhiya
          </p>
          <p className="text-xs text-gray-700">
            © 2026. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:bg-white/10 transition-all text-gray-500 hover:text-white"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}