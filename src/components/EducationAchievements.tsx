import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award } from "lucide-react";
import resumeData from "../data/resume.json";

export const EducationAchievements: React.FC = () => {
  const { education, achievements, certifications } = resumeData;

  return (
    <section
      id="education"
      className="py-24 px-6 relative z-10 bg-slate-950/50 backdrop-blur-sm border-t border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
              <GraduationCap className="w-8 h-8 text-indigo-500" />
              Education
            </h2>
            <p className="text-slate-400 text-lg">
              My academic background and foundational learning.
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-slate-900/40 border border-slate-800 p-8 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl"></div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-xl text-slate-300 font-medium mb-4">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    {edu.dates}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    {edu.location}
                  </span>
                </div>

                <div className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/20">
                  {edu.details}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
              <Trophy className="w-8 h-8 text-indigo-500" />
              Achievements
            </h2>
            <p className="text-slate-400 text-lg">
              Certifications and notable milestones.
            </p>
          </motion.div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 to-slate-900/40 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-slate-400" />
                Certifications
              </h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors p-3 rounded-xl hover:bg-slate-800/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500/50 shrink-0"></span>
                    <span className="font-medium">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
