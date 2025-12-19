import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decor (Subtle Glows) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-aqua-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      {/* Main Container: Focused & Readable */}
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Transforming Data into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-purple-400">
              Intelligent Solutions
            </span>
          </h2>
          
          {/* Narrative Text */}
          <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-light">
            <p>
              I’m Radhika, a pre-final-year ICT(information and communication technology) with minors in Computer Science student passionate about the world of <b className="text-aqua-300 font-normal">Software Development & AI</b>. 
              I love bridging the gap between theoretical algorithms and real-world applications.
            </p>
            <p>
              Recently, I've built <b className="text-white font-medium">Classync</b>, a virtual classroom platform, and currently am researching <b className="text-white font-medium">optimization algorithms</b> for EV Charging systems.
            </p>
            <p>
              Whether I'm maintaining my streak on <span className="text-white font-medium">LeetCode</span> or exploring the depths of <span className="text-white font-medium">Machine Learning</span>, 
              I am always eager to <span className="italic text-aqua-200"> learn, build, and debug</span> my way to a solution.
            </p>
          </div>

          {/* Stats / Highlights - Tailored for a Software Student */}
          <div className="flex flex-wrap gap-12 mt-12 border-t border-white/10 pt-10">
            
            {/* STAT 1: LeetCode/Problem Solving */}
            <div>
              {/* UPDATE THIS NUMBER with your real streak/problems count */}
              <h4 className="text-4xl font-bold text-white mb-1">200+</h4> 
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">LeetCode Streak</p>
            </div>
            
            {/* STAT 2: Competitive Programming / Interest */}
            <div>
               {/* Update "Pupil" to your actual rank or use "Active" */}
              <h4 className="text-4xl font-bold text-white mb-1">Pupil</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">CodeForces Rank</p>
            </div>
            
            {/* STAT 3: Academic Achievement (Good for students) */}
            <div>
              <h4 className="text-4xl font-bold text-white mb-1">8.75 CGPA</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Academic Score</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}