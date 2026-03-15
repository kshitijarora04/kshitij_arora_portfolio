/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Splash } from "./components/Splash";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { EducationAchievements } from "./components/EducationAchievements";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <main className="relative z-10 flex flex-col gap-12 md:gap-24 pb-24">
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <EducationAchievements />
          </main>
        </>
      )}
    </div>
  );
}
