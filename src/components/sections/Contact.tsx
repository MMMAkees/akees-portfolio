"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { PERSONAL } from "@/data/constants";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiCheckCircle,
  HiXCircle,
  HiX,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

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
    value: PERSONAL.location,
    href: "#",
    color: "from-primary-500 to-accent-500",
  },
];

/* ── Popup Toast ───────────────────────────── */
function Popup({
  type,
  message,
  onClose,
}: {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}) {
  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md"
    >
      <div
        className={`relative flex items-start gap-3 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl ${
          isSuccess
            ? "bg-emerald-500/10 border-emerald-500/30 dark:bg-emerald-900/30 dark:border-emerald-400/30"
            : "bg-red-500/10 border-red-500/30 dark:bg-red-900/30 dark:border-red-400/30"
        }`}
      >
        {/* icon */}
        <div
          className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
            isSuccess
              ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
              : "bg-red-500/20 text-red-600 dark:text-red-400"
          }`}
        >
          {isSuccess ? (
            <HiCheckCircle className="h-5 w-5" />
          ) : (
            <HiXCircle className="h-5 w-5" />
          )}
        </div>

        {/* text */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-bold ${
              isSuccess
                ? "text-emerald-700 dark:text-emerald-300"
                : "text-red-700 dark:text-red-300"
            }`}
          >
            {isSuccess ? "Message Sent! ✅" : "Failed to Send ❌"}
          </p>
          <p
            className={`mt-0.5 text-xs leading-relaxed ${
              isSuccess
                ? "text-emerald-600/80 dark:text-emerald-400/80"
                : "text-red-600/80 dark:text-red-400/80"
            }`}
          >
            {message}
          </p>
        </div>

        {/* close */}
        <button
          onClick={onClose}
          className={`mt-0.5 flex-shrink-0 rounded-lg p-1 transition-colors ${
            isSuccess
              ? "hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
              : "hover:bg-red-500/20 text-red-600 dark:text-red-400"
          }`}
        >
          <HiX className="h-4 w-4" />
        </button>

        {/* progress bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 5, ease: "linear" }}
          className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-b-2xl ${
            isSuccess ? "bg-emerald-500" : "bg-red-500"
          }`}
        />
      </div>
    </motion.div>
  );
}

/* ── Contact Section ───────────────────────── */
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const showPopup = (type: "success" | "error", message: string) => {
    setPopup({ show: true, type, message });
    setTimeout(() => setPopup((p) => ({ ...p, show: false })), 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${PERSONAL.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _subject: `Portfolio Contact from ${formData.get("name")}`,
            _template: "table",
          }),
        }
      );

      const data = await response.json();

      if (data.success === "true" || data.success === true || response.ok) {
        showPopup(
          "success",
          "Thank you! Your message has been delivered successfully. I'll get back to you soon! 🚀"
        );
        formRef.current?.reset();
      } else {
        showPopup(
          "error",
          data.message || "Something went wrong. Please try again later."
        );
      }
    } catch {
      showPopup(
        "error",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Popup Toast */}
      <AnimatePresence>
        {popup.show && (
          <Popup
            type={popup.type}
            message={popup.message}
            onClose={() => setPopup((p) => ({ ...p, show: false }))}
          />
        )}
      </AnimatePresence>

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
                Let&apos;s Connect
              </h3>
              <p className="text-dark-400 dark:text-dark-500 mb-8 leading-relaxed">
                I&apos;m currently open to internship opportunities and full-stack
                developer roles. Whether you have a question or just want to
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
                ref={formRef}
                className="glass rounded-2xl p-8"
                onSubmit={handleSubmit}
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
                    type="submit"
                    disabled={isLoading}
                    icon={
                      isLoading ? (
                        <ImSpinner8 className="w-4 h-4 animate-spin" />
                      ) : (
                        <HiPaperAirplane className="w-4 h-4 rotate-90" />
                      )
                    }
                    className="w-full justify-center"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </GradientButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
