"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/data/constants";
import {
  HiBriefcase,
  HiCheckCircle,
  HiCalendar,
  HiLocationMarker,
} from "react-icons/hi";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg" />
      <div className="container-custom relative z-10">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block" />

              <div className="flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 items-center justify-center shadow-lg shadow-primary-500/25 z-10"
                >
                  <HiBriefcase className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <div className="glass rounded-2xl p-6 md:p-8 flex-1 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-dark-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <HiLocationMarker className="w-4 h-4 text-primary-500" />
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
                      <HiCalendar className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <span className="inline-block px-3 py-1 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400 text-xs font-semibold mb-4">
                    {exp.type}
                  </span>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
