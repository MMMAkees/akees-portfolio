"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Technical Skills" subtitle="What I Know" />

        <div className="space-y-12">
          {SKILLS.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold border border-primary-500/20">
                  {category.category}
                </span>
                <div className="flex-1 h-px bg-dark-200/50 dark:bg-dark-700/50" />
              </div>

              {/* Skills grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="glass rounded-2xl p-5 flex flex-col items-center gap-3 group cursor-default"
                  >
                    <div
                      className="text-3xl transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-xs font-semibold text-dark-600 dark:text-dark-300 text-center group-hover:text-dark-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <div
                      className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                      style={{ backgroundColor: skill.color }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
