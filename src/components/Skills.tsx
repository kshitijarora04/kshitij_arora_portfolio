import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import resumeData from "../data/resume.json";

export const Skills: React.FC = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            <Layers className="w-10 h-10 text-indigo-500" />
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies, spanning
            languages, frameworks, and core computer science concepts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-slate-900/40 border border-slate-800 p-6 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>

              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                {skillGroup.group}
              </h3>

              <div className="flex flex-col gap-3">
                {skillGroup.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-500 transition-colors"></div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
