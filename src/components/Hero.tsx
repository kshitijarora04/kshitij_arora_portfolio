import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import resumeData from "../data/resume.json";

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // In a real app, this would point to a PDF file or generate one
    // alert('Resume download triggered. (Placeholder)');
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1vPmFP7UZ-NML6A7jHjtb_u4bVGCX5OI4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
        >
          {basics.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-medium text-slate-300 mb-8 max-w-3xl leading-tight"
        >
          {basics.title.split("|").map((part, index) => (
            <span key={index} className={index === 1 ? "text-indigo-400" : ""}>
              {part}{" "}
              {index === 0 && <span className="text-slate-600 mx-2">|</span>}
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed"
        >
          {basics.summary.split(".")[0]}. {basics.summary.split(".")[1]}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-6 text-slate-400 mb-10"
        >
          <a
            href={`mailto:${basics.email}`}
            className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
          >
            <span className="flex items-center gap-2">📧 {basics.email}</span>
          </a>

          <span className="flex items-center gap-2">📱 {basics.phone}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToExperience}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group"
          >
            View Experience
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={handleDownloadResume}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/50 text-white font-semibold border border-slate-700 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm group"
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest font-mono">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};
