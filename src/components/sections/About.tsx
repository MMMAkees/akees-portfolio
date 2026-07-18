"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONAL } from "@/data/constants";
import { HiLocationMarker, HiSparkles, HiAcademicCap } from "react-icons/hi";
import { HiCode, HiChartBar, HiLightBulb } from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  code: <HiCode className="w-8 h-8" />,
  chart: <HiChartBar className="w-8 h-8" />,
  puzzle: <HiLightBulb className="w-8 h-8" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg" />
      <div className="container-custom relative z-10">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full" />
              <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-4">
                A Passionate Developer
              </h3>
              <p className="text-dark-500 dark:text-dark-400 leading-relaxed mb-6 whitespace-pre-line">
                {PERSONAL.aboutSummary}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium border border-primary-500/20">
                  <HiLocationMarker className="w-3.5 h-3.5" /> {PERSONAL.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium border border-green-500/20">
                  <HiSparkles className="w-3.5 h-3.5" /> Open to Work
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium border border-accent-500/20">
                  <HiAcademicCap className="w-3.5 h-3.5" /> HND in SE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 grid sm:grid-cols-3 gap-4"
          >
            {PERSONAL.aboutHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center text-primary-500 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-500">
                  {iconMap[item.icon]}
                </div>
                <h4 className="text-lg font-heading font-bold text-dark-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-dark-400 dark:text-dark-500 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
