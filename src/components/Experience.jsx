import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building2, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Research Intern",
    company: "USC Marshall School of Business & NYU Stern",
    type: "Research",
    location: "Remote",
    period: "Jun 2025 – Present",
    icon: <GraduationCap size={22} />,
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/30",
    advisors: "Prof. Saumya Singhvi (USC Marshall), Prof. Divya Singhvi (NYU Stern)",
    highlights: [
      "Designing a multi-agent market simulation of LLM-powered consumer agents",
      "Studying how algorithmic recommendations and sponsored placements shape consumer preferences",
      "Analyzing impact on platform revenue and small-seller market access",
      "Selected through a competitive scholarship program after rigorous multi-round process",
    ],
  },
  {
    id: 2,
    role: "Undergraduate Researcher",
    company: "Fairness in Machine Learning — Dhirubhai Ambani University",
    type: "Research",
    location: "Gandhinagar, Gujarat",
    period: "May – Jul 2025",
    icon: <GraduationCap size={22} />,
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500/30",
    advisors: "Prof. Rachit Chhaya",
    highlights: [
      "Implemented various Fair K-Means Clustering Algorithms in Python",
      "Reproduced paper experiments on bias mitigation across protected attributes",
      "Analyzed algorithmic fairness trade-offs between accuracy and equity",
    ],
  },
  {
    id: 3,
    role: "Software Development Intern",
    company: "Schneider Electric Systems India Pvt Ltd",
    type: "Industry",
    location: "Gandhinagar, Gujarat",
    period: "Jun – Jul 2026",
    icon: <Building2 size={22} />,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    advisors: null,
    highlights: [
      "Maintained and enhanced web applications interfaced with the SE SCADA System",
      "Worked alongside the SE Maintenance Engineer at GSPL Transmission Ltd Control Room",
      "Debugged software issues, shipped UI improvements, and tested features",
      "Improved overall performance and reliability of control room interfaces",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export default function Experience() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-aqua-500/8 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From academic research labs to industry control rooms — my journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-aqua-500/50 via-purple-500/50 to-transparent hidden md:block"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-8 top-8 -translate-x-1/2">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} animate-ping opacity-20`}></div>
                </div>
              </div>

              {/* Card */}
              <div className={`md:ml-20 group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-white/15 transition-all duration-500 overflow-hidden`}>
                
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                        <span className="text-white">{exp.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-aqua-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 mb-5 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>

                  {/* Advisors */}
                  {exp.advisors && (
                    <p className="text-sm text-purple-300/80 mb-4 font-mono-code">
                      Advisors: {exp.advisors}
                    </p>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0`}></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom glow line */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
