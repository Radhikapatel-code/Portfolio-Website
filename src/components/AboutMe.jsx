import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Award, BookOpen, Code2 } from 'lucide-react';

export default function AboutMe() {
  const stats = [
    { value: "754+", label: "Problems Solved", sublabel: "LeetCode" },
    { value: "Specialist", label: "Codeforces Rank", sublabel: "Competitive Programming" },
    { value: "8.78", label: "CPI", sublabel: "Academic Score" },
    { value: "415+", label: "Day Streak", sublabel: "LeetCode Daily" },
  ];

  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-aqua-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Transforming Ideas into <br />
            <span className="text-gradient">
              Intelligent Systems
            </span>
          </h2>
          
          <p className="text-gray-500 text-sm uppercase tracking-widest font-mono-code mb-10">
            B.Tech ICT (Minor in CS) · DA-IICT · Class of 2027
          </p>

          {/* Narrative Text */}
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>
              I'm <b className="text-white font-semibold">Radhika Sanagadhiya</b>, a final-year 
              <b className="text-aqua-300 font-normal"> Information & Communication Technology</b> student 
              with a minor in Computer Science at <b className="text-white font-medium">Dhirubhai Ambani University</b>. 
              I live at the intersection of <b className="text-aqua-300 font-normal">AI research</b> and 
              <b className="text-aqua-300 font-normal"> software engineering</b>, building systems that are 
              both technically rigorous and genuinely useful.
            </p>
            <p>
              This year, I've been fortunate to work as a <b className="text-white font-medium">Research Intern at USC Marshall School of Business & NYU Stern</b>, 
              designing multi-agent market simulations powered by LLMs — studying how algorithmic recommendations shape consumer behavior and platform revenue. 
              I was selected for this through a <b className="text-purple-300 font-normal">competitive scholarship program</b> after a rigorous multi-round process.
            </p>
            <p>
              Beyond research, I interned at <b className="text-white font-medium">Schneider Electric</b> where I maintained and enhanced 
              web applications interfaced with SE SCADA Systems, and led an <b className="text-white font-medium">undergraduate research project</b> on 
              fairness in machine learning — implementing Fair K-Means Clustering algorithms for bias mitigation.
            </p>
            <p>
              From building <b className="text-white font-medium">SentinelAI</b> (an explainable AI fraud detection engine) to 
              <b className="text-white font-medium"> WealthMap</b> (an AI-powered tax intelligence platform) to 
              <b className="text-white font-medium"> Echolingo</b> (an end-to-end dubbing pipeline), 
              I've shipped projects that span full-stack development, LLM agents, and applied ML.
              You can explore all my work on{' '}
              <a 
                href="https://github.com/Radhikapatel-code" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-aqua-400 hover:text-aqua-300 underline underline-offset-4 decoration-aqua-400/30 hover:decoration-aqua-300 transition-colors inline-flex items-center gap-1"
              >
                GitHub <ExternalLink size={14} />
              </a>.
            </p>
            <p>
              Whether I'm maintaining my <span className="text-white font-medium">415+ day streak on LeetCode</span>, 
              competing as a <span className="text-white font-medium">Codeforces Specialist</span>, 
              or exploring the depths of multi-agent AI systems, 
              I am always driven to <span className="italic text-aqua-200">learn, build, and push boundaries</span>.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-aqua-400/30 transition-all duration-300 group"
              >
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-aqua-300 transition-colors">
                  {stat.value}
                </h4>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                <p className="text-xs text-gray-600 mt-1">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}