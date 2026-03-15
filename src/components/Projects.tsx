import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import resumeData from "../data/resume.json";

export const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <section
      id="projects"
      className="py-24 px-6 relative z-10 bg-slate-950/50 backdrop-blur-sm border-y border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            <Code2 className="w-10 h-10 text-indigo-500" />
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects, demonstrating full-stack
            capabilities and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-slate-900/40 border border-slate-800 p-8 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={project.links}
                      className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                      title={link}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-400 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/50 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
