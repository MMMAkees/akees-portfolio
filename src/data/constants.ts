import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaChartBar,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IconType } from "react-icons";

// ──────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ──────────────────────────────────────────────
// Personal Info
// ──────────────────────────────────────────────
export const PERSONAL = {
  name: "Mohamed Akees",
  role: "Junior Full-Stack Developer",
  tagline: "Building Modern Web Apps & Turning Data into Insights",
  location: "Ampara District, Eastern Province, Sri Lanka",
  email: "akeesak15@gmail.com",
  phone: "+94 771832725",
  linkedin: "https://linkedin.com/in/mohamed-akees",
  github: "https://github.com/MMMAkees",
  dob: "15 May 2004",
  nationality: "Sri Lankan",
  aboutSummary:
    "Motivated Junior Full-Stack Developer with a passion for building modern web applications using the MERN stack and uncovering meaningful insights through Data Analytics. I combine clean code with creative problem-solving to deliver impactful solutions.",
  aboutHighlights: [
    {
      title: "Web Development",
      description:
        "Building responsive, modern web applications with React, Node.js, and MongoDB.",
      icon: "code",
    },
    {
      title: "Data Analytics",
      description:
        "Transforming raw data into actionable insights using Power BI, Excel, and SQL.",
      icon: "chart",
    },
    {
      title: "Problem Solving",
      description:
        "Analytical thinker who thrives on debugging, optimizing, and architecting solutions.",
      icon: "puzzle",
    },
  ],
};

// ──────────────────────────────────────────────
// Skills
// ──────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#888888" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ],
  },
  {
    category: "Data Analytics",
    skills: [
      { name: "Microsoft Excel", icon: FaFileExcel, color: "#217346" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Data Visualization", icon: FaChartBar, color: "#8B5CF6" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#888888" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
];

// ──────────────────────────────────────────────
// Experience
// ──────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Junior Software Engineer Intern",
    company: "Marazin Academy",
    period: "2026 - Present",
    type: "Internship",
    responsibilities: [
      "Developing responsive web applications using React.js and Tailwind CSS",
      "Building RESTful APIs with Node.js and Express.js",
      "Collaborating with senior developers on full-stack projects",
      "Implementing database solutions using MongoDB and SQL",
      "Participating in agile development workflows and code reviews",
      "Debugging and testing applications for optimal performance",
    ],
  },
];

// ──────────────────────────────────────────────
// Projects
// ──────────────────────────────────────────────
export type ProjectFilter = "All" | "Web" | "Data";

export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  category: ProjectFilter;
  github: string;
  live: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Business Process Analytics System",
    description:
      "A comprehensive data analytics platform that transforms raw business data into actionable insights through advanced data cleaning, interactive dashboards, and demand forecasting.",
    features: [
      "Automated Data Cleaning & Preprocessing",
      "Interactive Dashboard (Power BI)",
      "Demand Forecasting & Trend Analysis",
    ],
    tech: ["Power BI", "Excel", "SQL", "Data Visualization"],
    category: "Data",
    github: "#",
    live: "#",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Food Delivery Web App",
    description:
      "A modern, responsive food delivery application featuring an intuitive user interface built with React components and backed by a MongoDB database for seamless ordering.",
    features: [
      "Fully Responsive UI Design",
      "Reusable React Components",
      "MongoDB Database Integration",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Web",
    github: "#",
    live: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
];

// ──────────────────────────────────────────────
// Education
// ──────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "Higher National Diploma (HND) in Software Engineering",
    institution: "ESOFT Metro Campus (BTEC Pearson)",
    period: "Feb 2024 – Nov 2025",
    icon: "graduation",
  },
  {
    degree: "Certificate in Information Technology and English",
    institution: "BCAS Campus",
    period: "Jan 2020 – Nov 2023",
    icon: "certificate",
  },
  {
    degree: "G.C.E. Advanced Level (ICT Stream)",
    institution: "Zahira College, Kalmunai",
    period: "2022",
    icon: "school",
  },
];

// ──────────────────────────────────────────────
// Languages
// ──────────────────────────────────────────────
export const LANGUAGES = [
  { language: "Tamil", level: "Native or Bilingual" },
  { language: "English", level: "Professional Working Proficiency" },
  { language: "Sinhala", level: "Professional Working Proficiency" },
];

// ──────────────────────────────────────────────
// Analytics Data (for charts)
// ──────────────────────────────────────────────
export const ANALYTICS_DATA = {
  skillDistribution: [
    { name: "SQL", value: 75, color: "#4479A1" },
    { name: "Excel", value: 85, color: "#217346" },
    { name: "Power BI", value: 80, color: "#F2C811" },
    { name: "Data Viz", value: 70, color: "#8B5CF6" },
    { name: "Data Cleaning", value: 78, color: "#06B6D4" },
  ],
  monthlyProgress: [
    { month: "Jan", projects: 2, insights: 5 },
    { month: "Feb", projects: 3, insights: 8 },
    { month: "Mar", projects: 4, insights: 12 },
    { month: "Apr", projects: 5, insights: 15 },
    { month: "May", projects: 6, insights: 18 },
    { month: "Jun", projects: 8, insights: 22 },
  ],
};
