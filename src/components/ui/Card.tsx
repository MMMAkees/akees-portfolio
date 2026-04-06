"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-2xl p-6 ${
        hover ? "card-hover" : ""
      } ${glow ? "glow" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
