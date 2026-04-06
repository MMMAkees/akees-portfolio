"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";
import { PERSONAL } from "@/data/constants";
import { HiArrowDown, HiEye } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-accent-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-dark-600 dark:text-dark-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4"
            >
              <span className="text-dark-900 dark:text-white">Hi, I&apos;m </span>
              <span className="gradient-text">{PERSONAL.name}</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-dark-500 dark:text-dark-400 mb-3 h-[36px]"
            >
              <TypeAnimation
                sequence={[
                  "Junior Full-Stack Developer",
                  2000,
                  "Data Analytics Enthusiast",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-base md:text-lg text-dark-400 dark:text-dark-500 max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {PERSONAL.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <GradientButton href="#projects" icon={<HiEye className="w-4 h-4" />}>
                View Projects
              </GradientButton>
              <GradientButton href="#contact" variant="outline" icon={<HiArrowDown className="w-4 h-4" />}>
                Contact Me
              </GradientButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 blur-2xl animate-pulse-glow" />

              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 dark:border-dark-700/30 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Mohamed Akees"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl rotate-12 opacity-80 flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-xs text-center leading-tight">
                  MERN<br />Stack
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-6 px-4 py-2 glass rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold text-dark-700 dark:text-dark-200">
                  📊 Data Analytics
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-dark-400 dark:text-dark-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-dark-300 dark:border-dark-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
