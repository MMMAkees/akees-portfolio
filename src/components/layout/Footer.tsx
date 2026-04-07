"use client";

import { PERSONAL } from "@/data/constants";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: PERSONAL.github,
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: PERSONAL.linkedin,
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: `mailto:${PERSONAL.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t border-dark-200/50 dark:border-dark-800/50">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.a
              href="#home"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/logo.png"
                alt="Mohamed Akees Logo"
                width={100}
                height={100}
                className="w-20 h-20 object-contain"
              />
              <span className="text-xl font-heading font-bold text-dark-900 dark:text-white">
                Mohamed Akees
              </span>
            </motion.a>
            <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center gap-1">
              &copy; {currentYear} Mohamed Akees. Built with{" "}
              <FaHeart className="text-red-600 text-s" /> using Next.js.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
