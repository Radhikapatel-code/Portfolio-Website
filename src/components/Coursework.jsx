import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, BarChart3, Zap, Puzzle, Gamepad2, 
  Binary, HardDrive, Database, Network, BrainCircuit 
} from 'lucide-react';

const courses = [
  { 
    name: "Modeling & Simulation", 
    code: "Mod Sim",
    icon: <BarChart3 size={22} />,
    color: "from-blue-500 to-cyan-400",
    desc: "Stochastic modeling, Monte Carlo methods, discrete-event simulation"
  },
  { 
    name: "High Performance Computing", 
    code: "HPC",
    icon: <Zap size={22} />,
    color: "from-orange-500 to-yellow-400",
    desc: "Parallel programming, MPI, OpenMP, GPU computing, distributed systems"
  },
  { 
    name: "VLSI Testing & Validation", 
    code: "VLSI T&V",
    icon: <Cpu size={22} />,
    color: "from-green-500 to-emerald-400",
    desc: "Fault modeling, test generation, DFT, formal verification"
  },
  { 
    name: "Approximation Algorithms", 
    code: "Approx Algo",
    icon: <Puzzle size={22} />,
    color: "from-purple-500 to-pink-400",
    desc: "NP-hard problems, approximation ratios, LP relaxation, greedy heuristics"
  },
  { 
    name: "Game Theory", 
    code: "GT",
    icon: <Gamepad2 size={22} />,
    color: "from-red-500 to-rose-400",
    desc: "Nash equilibria, mechanism design, auction theory, cooperative games"
  },
  { 
    name: "Data Structures & Algorithms", 
    code: "DSA",
    icon: <Binary size={22} />,
    color: "from-aqua-500 to-blue-400",
    desc: "Advanced data structures, graph algorithms, dynamic programming"
  },
  { 
    name: "Operating Systems", 
    code: "OS",
    icon: <HardDrive size={22} />,
    color: "from-indigo-500 to-violet-400",
    desc: "Process scheduling, memory management, concurrency, file systems"
  },
  { 
    name: "Database Management Systems", 
    code: "DBMS",
    icon: <Database size={22} />,
    color: "from-amber-500 to-orange-400",
    desc: "Relational algebra, SQL optimization, transactions, normalization"
  },
  { 
    name: "Computer Networks", 
    code: "CN",
    icon: <Network size={22} />,
    color: "from-teal-500 to-cyan-400",
    desc: "TCP/IP, routing protocols, network security, socket programming"
  },
  { 
    name: "AI Search Methods", 
    code: "AI",
    icon: <BrainCircuit size={22} />,
    color: "from-fuchsia-500 to-pink-400",
    desc: "Heuristic search, A*, adversarial search, constraint satisfaction"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1 }
};

export default function Coursework() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-aqua-500/8 rounded-full blur-[100px] -z-10"></div>

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
            Academic <span className="text-gradient">Coursework</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Key courses that shaped my understanding of computing — from theory to systems.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${course.color} mb-3`}>
                  <span className="text-white">{course.icon}</span>
                </div>
                
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-aqua-300 transition-colors">
                  {course.name}
                </h3>
                
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
