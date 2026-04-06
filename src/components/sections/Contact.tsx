"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { PERSONAL } from "@/data/constants";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: "from-red-500 to-orange-500",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "mohamed-akees",
    href: PERSONAL.linkedin,
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "MMMAkees",
    href: PERSONAL.github,
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Ampara, Sri Lanka",
    href: "#",
    color: "from-primary-500 to-accent-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg" />
      <div className="container-custom relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold text-dark-900 dark:text-white mb-3">
              Let&apos;s Connect 🚀
            </h3>
            <p className="text-dark-400 dark:text-dark-500 mb-8 leading-relaxed">
              I&apos;m currently open to internship opportunities and junior
              developer positions. Whether you have a question or just want to
              say hi — I&apos;d love to hear from you!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-400 dark:text-dark-500 font-medium uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-dark-700 dark:text-dark-200 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              className="glass rounded-2xl p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
                const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
                window.location.href = `mailto:${PERSONAL.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
              }}
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-50/50 dark:bg-dark-800/50 border border-dark-200/50 dark:border-dark-700/50 text-dark-800 dark:text-dark-200 placeholder-dark-400 dark:placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all duration-300 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-50/50 dark:bg-dark-800/50 border border-dark-200/50 dark:border-dark-700/50 text-dark-800 dark:text-dark-200 placeholder-dark-400 dark:placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all duration-300 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50/50 dark:bg-dark-800/50 border border-dark-200/50 dark:border-dark-700/50 text-dark-800 dark:text-dark-200 placeholder-dark-400 dark:placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all duration-300 resize-none text-sm"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <GradientButton
                  onClick={() => {}}
                  icon={<HiPaperAirplane className="w-4 h-4 rotate-90" />}
                  className="w-full justify-center"
                >
                  Send Message
                </GradientButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
