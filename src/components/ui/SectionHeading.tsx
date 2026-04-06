"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 mb-4"
      >
        {subtitle}
      </motion.span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 dark:text-white">
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: align === "center" ? "80px" : "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
