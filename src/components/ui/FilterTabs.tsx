"use client";

import { motion } from "framer-motion";

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function FilterTabs({
  tabs,
  activeTab,
  onTabChange,
}: FilterTabsProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-12">
      <div className="glass rounded-xl p-1.5 flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "text-white"
                : "text-dark-500 dark:text-dark-400 hover:text-dark-700 dark:hover:text-dark-200"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
