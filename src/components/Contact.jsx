import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Get data from the form
    const form = e.target;
    const name = form.name.value;
    const userEmail = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // 2. Format the Email Body
    // We put the user's name and email inside the body so you know who sent it
    const emailBody = `Name: ${name}\nUser Email: ${userEmail}\n\nMessage:\n${message}`;

    // 3. Construct the Special Gmail URL
    // 'view=cm' means "Compose Mode", 'fs=1' means "FullScreen"
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rp773061@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // 4. Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-transparent">
      
      {/* Background is handled by App.jsx, keeping this clean */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400">
          Have a project in mind? Let's collaborate and build innovative solutions together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl hover:border-aqua-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am currently open to freelance projects and full-time opportunities in AI,ML and Software Development.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-aqua-400/10 rounded-lg text-aqua-300 group-hover:bg-aqua-400 group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Email</p>
                  <a href="mailto:rp773061@gmail.com" className="text-white font-medium group-hover:text-aqua-300 transition-colors">rp773061@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-gray-300 group-hover:bg-white group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">Gujarat, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/10 flex gap-4">
               <a href="https://github.com/Radhikapatel-code" className="p-2 bg-white/5 rounded-full hover:bg-aqua-400 hover:text-black transition-colors text-gray-400"><Github size={20}/></a>
               <a href="https://www.linkedin.com/in/radhika-sangadhiya-b8b32b271/" className="p-2 bg-white/5 rounded-full hover:bg-purple-400 hover:text-black transition-colors text-gray-400"><Linkedin size={20}/></a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-transparent"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Name</label>
                  <input name="name" type="text" placeholder="John Doe" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-aqua-400 focus:ring-1 focus:ring-aqua-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Your Email</label>
                  <input name="email" type="email" placeholder="john@example.com" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-aqua-400 focus:ring-1 focus:ring-aqua-400 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Subject</label>
                <input name="subject" type="text" placeholder="Project Inquiry" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea name="message" placeholder="Tell me about your project..." required className="w-full px-4 py-3 h-40 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-aqua-400 focus:ring-1 focus:ring-aqua-400 transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-aqua-400 to-purple-500 text-black font-bold rounded-xl hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] flex justify-center items-center gap-2">
                Send via Gmail <Send size={18} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}