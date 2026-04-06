"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterTabs from "@/components/ui/FilterTabs";
import { PROJECTS, ProjectFilter } from "@/data/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Projects" subtitle="My Work" />

        <FilterTabs
          tabs={["All", "Web", "Data"]}
          activeTab={activeFilter}
          onTabChange={(tab) => setActiveFilter(tab as ProjectFilter | "All")}
        />

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl overflow-hidden group card-hover h-full flex flex-col">
                  {/* Gradient header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    {/* Pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <span className="text-4xl">
                          {project.category === "Data" ? "📊" : "🚀"}
                        </span>
                      </motion.div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-dark-400 dark:text-dark-500 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <HiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-dark-500 dark:text-dark-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-dark-200/50 dark:border-dark-700/50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
