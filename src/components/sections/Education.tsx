"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { EDUCATION, LANGUAGES } from "@/data/constants";
import { HiAcademicCap, HiBookOpen, HiGlobe } from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  graduation: <HiAcademicCap className="w-6 h-6" />,
  certificate: <HiBookOpen className="w-6 h-6" />,
  school: <HiAcademicCap className="w-6 h-6" />,
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Education" subtitle="Academic Background" />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Education cards */}
          <div className="lg:col-span-2 space-y-4">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 8 }}
                className="glass rounded-2xl p-6 flex gap-5 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center text-primary-500 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-500">
                  {iconMap[edu.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-dark-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-dark-400 dark:text-dark-500 font-medium">
                    📅 {edu.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                  <HiGlobe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-900 dark:text-white">
                  Languages
                </h3>
              </div>
              <div className="space-y-4">
                {LANGUAGES.map((lang, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-50/50 dark:bg-dark-800/50"
                  >
                    <span className="text-sm font-semibold text-dark-700 dark:text-dark-200">
                      {lang.language}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
