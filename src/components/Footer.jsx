import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 border-t border-white/5 bg-[#050505] relative z-10">
      <p className="flex items-center justify-center gap-2">
        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Radhika Patel
      </p>
      <p className="mt-2 text-xs">
        © 2025. Built with React and Tailwind.
      </p>
    </footer>
  );
}