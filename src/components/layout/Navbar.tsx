"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/data/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active section detection
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-heading font-bold gradient-text">
                AK
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white"
                  }`}
                >
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/15 rounded-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              {mounted && (
                <motion.button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl glass hover:scale-110 transition-all duration-300"
                  whileTap={{ scale: 0.9, rotate: 180 }}
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <BsSunFill className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <BsMoonStarsFill className="w-4 h-4 text-primary-600" />
                  )}
                </motion.button>
              )}

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-xl glass"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <HiX className="w-5 h-5" />
                ) : (
                  <HiMenu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="glass-strong m-4 rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-primary-500/10 text-primary-600 dark:text-primary-400"
                        : "text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
