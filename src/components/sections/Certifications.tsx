"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/data/constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import Image from "next/image";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Certifications" subtitle="Licenses & Credentials" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 relative group card-hover flex flex-col h-full"
            >
              {/* Top Section - Image Thumb */}
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="w-full sm:w-1/3 aspect-[4/3] sm:aspect-square relative rounded-xl overflow-hidden shadow-inner flex-shrink-0 bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/5">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-dark-500 dark:text-dark-400 text-sm">
                    Issued {cert.date}
                  </p>
                  <p className="text-xs text-dark-400 dark:text-dark-500 mt-2 font-mono bg-dark-100 dark:bg-dark-800/50 py-1 px-2 rounded inline-block w-max border border-dark-200/50 dark:border-dark-700/50">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6 flex-1">
                <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-3 flex items-center gap-2">
                  Skills Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-dark-100 dark:bg-dark-700/50 text-dark-600 dark:text-dark-300 flex items-center gap-1.5 border border-dark-200/50 dark:border-dark-600/30"
                    >
                      {skill !== "+5 skills" && skill !== "+3 skills" && (
                         <HiCheckCircle className="w-3 h-3 text-primary-500" />
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="mt-auto border-t border-dark-200/50 dark:border-dark-700/50 pt-4">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:underline underline-offset-4"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Show credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
