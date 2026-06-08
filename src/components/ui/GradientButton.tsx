"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  download?: string;
}

export default function GradientButton({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  icon,
  download,
}: GradientButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden group";

  const primaryClasses =
    "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 active:scale-95";

  const outlineClasses =
    "border-2 border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-200 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105 active:scale-95";

  const classes = `${baseClasses} ${
    variant === "primary" ? primaryClasses : outlineClasses
  } ${className}`;

  const content = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative flex items-center gap-2">
        {icon}
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={classes}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
