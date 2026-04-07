"use client";

import { SKILLS } from "@/data/constants";

export default function SkillsMarquee() {
  // Gather only technical skills
  const techSkillsRaw = SKILLS.filter(c => c.category !== "Soft Skills").flatMap(
    (c) => c.skills
  );

  // Deduplicate icons programmatically (since text is hidden, duplicate icons look like bugs)
  const seenIcons = new Set();
  const techSkills = techSkillsRaw.filter((skill) => {
    const iconName = skill.icon.name;
    if (seenIcons.has(iconName)) return false;
    seenIcons.add(iconName);
    return true;
  });

  return (
    <section className="relative overflow-hidden py-10 bg-dark-50 dark:bg-dark-900/20 border-y border-dark-200/50 dark:border-dark-800/50">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark-50 dark:from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark-50 dark:from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-[200%] animate-marquee">
        {/* We double the array to create a seamless infinite loop */}
        {[...techSkills, ...techSkills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center justify-center min-w-[80px] md:min-w-[100px] mx-2 md:mx-4 transition-transform duration-300 hover:scale-110 cursor-default"
          >
            <div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass flex items-center justify-center shadow-sm border border-dark-200 dark:border-white/10"
            >
              <skill.icon
                className="w-8 h-8 md:w-10 md:h-10 text-dark-900 dark:text-slate-300 transition-colors"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
