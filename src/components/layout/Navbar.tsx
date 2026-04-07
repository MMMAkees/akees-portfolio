"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/data/constants";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

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

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
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
              className="relative group flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/logo.png"
                alt="Mohamed Akees Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                priority
              />
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
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/15 rounded-lg"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle - Telegram style */}
              {mounted && (
                <motion.button
                  onClick={toggleTheme}
                  className="relative p-2 rounded-xl text-yellow-500 dark:text-slate-200 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors focus:outline-none"
                  aria-label="Toggle theme"
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                      rotate: isDark ? -90 : 0,
                    }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  >
                    <mask id="theme-mask">
                      <rect x="0" y="0" width="100%" height="100%" fill="white" />
                      <motion.circle
                        r="9"
                        fill="black"
                        initial={false}
                        animate={{
                          cx: isDark ? 17 : 25,
                          cy: isDark ? 7 : -5,
                        }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                      />
                    </mask>
                    <motion.circle
                      cx="12"
                      cy="12"
                      fill="currentColor"
                      mask="url(#theme-mask)"
                      initial={false}
                      animate={{
                        r: isDark ? 9 : 5,
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    />
                    <motion.g
                      stroke="currentColor"
                      initial={false}
                      animate={{
                        opacity: isDark ? 0 : 1,
                        scale: isDark ? 0.5 : 1,
                      }}
                      style={{ transformOrigin: "center" }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </motion.g>
                  </motion.svg>
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
