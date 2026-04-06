"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ANALYTICS_DATA } from "@/data/constants";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { HiChartBar, HiDatabase, HiTable, HiTrendingUp } from "react-icons/hi";
import { FaChartPie } from "react-icons/fa";

const analyticsTools = [
  {
    name: "SQL Queries",
    icon: HiDatabase,
    description: "Complex queries, joins, aggregations & stored procedures",
    color: "#4479A1",
  },
  {
    name: "Microsoft Excel",
    icon: HiTable,
    description: "Pivot tables, VLOOKUP, data cleaning & formulas",
    color: "#217346",
  },
  {
    name: "Power BI",
    icon: FaChartPie,
    description: "Interactive dashboards, DAX measures & data modeling",
    color: "#F2C811",
  },
  {
    name: "Data Visualization",
    icon: HiChartBar,
    description: "Charts, graphs & storytelling with data",
    color: "#8B5CF6",
  },
];

export default function Analytics() {
  return (
    <section id="analytics" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg" />
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Data Analytics Showcase"
          subtitle="Insights & Dashboards"
        />

        {/* Dashboard-style grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Skill proficiency chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                <HiChartBar className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-dark-900 dark:text-white">
                  Analytics Skill Proficiency
                </h3>
                <p className="text-xs text-dark-400 dark:text-dark-500">
                  Self-assessed proficiency levels
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={ANALYTICS_DATA.skillDistribution} barSize={40}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(148, 163, 184, 0.15)"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                    borderRadius: "12px",
                    color: "#e2e8f0",
                    fontSize: "13px",
                  }}
                />
                <Bar
                  dataKey="value"
                  radius={[8, 8, 0, 0]}
                  fill="url(#barGradient)"
                />
                <defs>
                  <linearGradient
                    id="barGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                label: "Projects Analyzed",
                value: "8+",
                icon: HiChartBar,
                color: "from-blue-500 to-cyan-500",
              },
              {
                label: "Dashboards Built",
                value: "5+",
                icon: FaChartPie,
                color: "from-amber-500 to-yellow-500",
              },
              {
                label: "Data Points",
                value: "10K+",
                icon: HiDatabase,
                color: "from-primary-500 to-accent-500",
              },
              {
                label: "Growth Rate",
                value: "↑ 85%",
                icon: HiTrendingUp,
                color: "from-green-500 to-emerald-500",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass rounded-xl p-4 flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-dark-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-dark-400 dark:text-dark-500">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
              <HiTrendingUp className="w-5 h-5 text-accent-500" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-dark-900 dark:text-white">
                Learning Progress
              </h3>
              <p className="text-xs text-dark-400 dark:text-dark-500">
                Projects completed & insights generated over time
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={ANALYTICS_DATA.monthlyProgress}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(148, 163, 184, 0.15)"
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  borderRadius: "12px",
                  color: "#e2e8f0",
                  fontSize: "13px",
                }}
              />
              <defs>
                <linearGradient id="areaGradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="areaGradient2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="projects"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#areaGradient1)"
                name="Projects"
              />
              <Area
                type="monotone"
                dataKey="insights"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#areaGradient2)"
                name="Insights"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Analytics tools */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 text-center group cursor-default"
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${tool.color}15` }}
              >
                <tool.icon
                  className="w-7 h-7"
                  style={{ color: tool.color }}
                />
              </div>
              <h4 className="font-heading font-bold text-dark-900 dark:text-white mb-1">
                {tool.name}
              </h4>
              <p className="text-xs text-dark-400 dark:text-dark-500 leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
