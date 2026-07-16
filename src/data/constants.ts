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
  FaChartPie,
  FaFileExcel,
  FaComments,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaSync,
  FaBrain,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";
import { IconType } from "react-icons";
import React from "react";

const LaragonCustomIcon = ({ className, style }: any) => {
  return React.createElement("img", {
    src: "/images/laragon.png",
    alt: "Laragon",
    className: className,
    style: { ...style, objectFit: "contain" }
  });
};

const VercelCustomIcon = ({ className, style }: any) => {
  return React.createElement(React.Fragment, null,
    React.createElement(SiVercel, { className: `dark:hidden ${className || ""}`, style }),
    React.createElement("img", {
      src: "/images/vercel.png",
      alt: "Vercel",
      className: `hidden dark:inline-block ${className || ""}`,
      style: { ...style, objectFit: "contain" }
    })
  );
};

import { TbBrandCSharp } from "react-icons/tb";

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
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ──────────────────────────────────────────────
// Personal Info
// ──────────────────────────────────────────────
export const PERSONAL = {
  name: "Mohamed Akees",
  role: "Full-Stack Developer",
  tagline: "Building Modern Web Apps & Turning Data into Insights",
  location: "Ampara District, Eastern Province, Sri Lanka",
  email: "akeesak15@gmail.com",
  phone: "+94 771832725",
  linkedin: "https://linkedin.com/in/mohamed-akees",
  github: "https://github.com/MMMAkees",
  dob: "15 May 2004",
  nationality: "Sri Lankan",
  aboutSummary:
    "Motivated Full-Stack Developer with a passion for building modern web applications using the MERN stack and uncovering meaningful insights through Data Analytics. I combine clean code with creative problem-solving to deliver impactful solutions.",
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
      { name: "Next.js", icon: SiNextdotjs as IconType, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#888888" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "C# / .NET", icon: TbBrandCSharp, color: "#239120" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
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
      { name: "Data Visualization", icon: FaChartPie, color: "#8B5CF6" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#888888" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Laragon", icon: LaragonCustomIcon as IconType, color: "#00B4E6" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Vercel", icon: VercelCustomIcon as IconType, color: "#000000" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: FaLightbulb, color: "#F59E0B" },
      { name: "Teamwork", icon: FaUsers, color: "#3B82F6" },
      { name: "Communication", icon: FaComments, color: "#10B981" },
      { name: "Time Management", icon: FaClock, color: "#8B5CF6" },
      { name: "Adaptability", icon: FaSync, color: "#06B6D4" },
      { name: "Critical Thinking", icon: FaBrain, color: "#EF4444" },
    ],
  },
];

// ──────────────────────────────────────────────
// Experience
// ──────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Web Application Developer",
    company: "Binosoft",
    period: "Nov 2024 - Jun 2026",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js and modern JavaScript",
      "Designed and integrated clean, user-friendly frontend interfaces with optimization for various devices",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Optimized application performance for maximum speed, scalability, and seamless user experiences",
      "Wrote clean, modular, and maintainable code adhering to industry best practices",
      "Conducted thorough testing and debugging to identify and resolve issues promptly",
    ],
  },
  {
    role: "Web Application Developer",
    company: "Binosoft",
    period: "Jun 2024 - Nov 2024",
    type: "Internship",
    responsibilities: [
      "Assisted in the frontend development of web projects using React.js, HTML5, and CSS3",
      "Implemented responsive web designs under the guidance of senior developers",
      "Helped identify and fix frontend bugs and issues to ensure a smooth user experience",
      "Learned modern software development methodologies, workflows, and version control (Git/GitHub)",
    ],
  },
];

// ──────────────────────────────────────────────
// Projects
// ──────────────────────────────────────────────
export type ProjectFilter = "All" | "Web" | "Data" | "Software";

export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  category: ProjectFilter;
  github: string;
  live: string;
  gradient: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "MCM & Sons Jewellers",
    description:
      "A full-stack e-commerce platform built from scratch for a real jewellery business, designed around real business requirements focusing on performance, security, and user experience.",
    features: [
      "Dynamic admin-controlled homepage banners & real-time gold rate ticker",
      "Multi-image product gallery, synchronized shopping cart & wishlist across devices",
      "Comprehensive admin dashboard for product, category, order, and customer management",
      "Secure checkout with distance-based delivery pricing and Google OAuth authentication"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Zustand", "Framer Motion"],
    category: "Web",
    github: "https://github.com/MMMAkees/mcm-sons-jewellers",
    live: "https://mcm-sons-jewellers.vercel.app/",
    gradient: "from-yellow-600 to-amber-700",
    image: "/images/projects/mcm-jewellers.png",
  },
  {
    title: "Learn AI Agents",
    description:
      "A modern educational website designed to help developers understand and start building Autonomous AI Agents. It simplifies complex topics and provides a structured learning path.",
    features: [
      "Fully responsive modern landing page & blog section",
      "SEO optimized (Meta tags, Sitemap, Robots.txt)",
      "Social preview ready (LinkedIn/WhatsApp/Twitter cards)",
      "Custom domain + SSL deployment"
    ],
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "Netlify"],
    category: "Web",
    github: "https://lnkd.in/gCxmSDU9",
    live: "https://lnkd.in/gzaYCRQP",
    gradient: "from-blue-500 to-indigo-500",
    image: "/images/projects/ai-agents.png",
  },
  {
    title: "FoodieHub - Restaurant Website",
    description:
      "A modern and fully responsive restaurant landing page built to practice real-world UI design, responsive layouts, animations, and GitHub deployment.",
    features: [
      "Responsive sticky navbar & smooth scrolling",
      "Interactive food order modal",
      "Animated menu cards & special offers section",
      "Customer testimonials & reservation form"
    ],
    tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript", "GitHub Pages"],
    category: "Web",
    github: "https://lnkd.in/eYy9t6RS",
    live: "https://lnkd.in/eA2QyVgR",
    gradient: "from-orange-500 to-amber-500",
    image: "/images/projects/foodiehub.png",
  },
  {
    title: "Velvet Vogue Online Store",
    description:
      "A full-stack e-commerce web application featuring a complete shopping experience with user authentication, product catalogs, and backend database integration.",
    features: [
      "User Registration & Login Authentication",
      "Dynamic Product Catalog & Shopping Interface",
      "Secure Database integration via XAMPP & MySQL",
      "Responsive frontend using HTML, CSS, and Vanilla JS"
    ],
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "XAMPP"],
    category: "Web",
    github: "https://github.com/MMMAkees/VelvetVogueApp",
    live: "#",
    gradient: "from-rose-500 to-red-600",
    image: "/images/projects/velvet-vogue.png",
  },
  {
    title: "E-Space Solutions Management System",
    description:
      "A full-scale Database Design & Development project for a futuristic 2040 Mars colonization scenario. Supports end-to-end management of colonists, dependents, trips, and housing.",
    features: [
      "ERD and logical database design with normalization (up to 3NF/BCNF)",
      "Secure role-based access control with robust validation",
      "Complex SQL queries (DDL, DML, joins, group by, having, etc.)",
      "Comprehensive testing with detailed test plans & cases"
    ],
    tech: ["Microsoft SQL Server", "C#", "Visual Studio", "SQL"],
    category: "Software",
    github: "https://github.com/MMMAkees/E-Space-Solution",
    live: "#",
    gradient: "from-purple-500 to-fuchsia-500",
    image: "/images/projects/espace.png",
  },
  {
    title: "Grifindo Leave Management System",
    description:
      "A comprehensive desktop application developed to manage employee leave requests, user authentication, and staff rosters for Grifindo Toys.",
    features: [
      "User authentication and role-based access",
      "Staff rostering and leave tracking",
      "CRUD operations for user management",
      "Real-time updates and database integration"
    ],
    tech: ["C#", ".NET", "Windows Forms", "Microsoft SQL Server"],
    category: "Software",
    github: "https://github.com/MMMAkees/GrifindoLeaveManagement",
    live: "#",
    gradient: "from-blue-600 to-indigo-700",
    image: "/images/projects/grifindo.png",
  },
  {
    title: "MIM Distributors Analytics",
    description:
      "A data-driven business process analytics solution for a real-world wholesale distribution company. Analysed sales and logistics to build a solution for better decision-making.",
    features: [
      "Cleaned structured, semi-structured and unstructured data",
      "Applied the complete Data Science lifecycle (cleaning to modelling)",
      "Built interactive Power BI dashboard for P&L tracking",
      "Identified demand trends to optimize inventory planning"
    ],
    tech: ["Microsoft Excel", "SQL", "Power BI", "Data Science"],
    category: "Data",
    github: "#",
    live: "#",
    gradient: "from-emerald-500 to-teal-500",
    image: "/images/projects/mim-analytics.png",
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
    period: "Jan 2022 – Jul 2022",
    icon: "certificate",
  },
  {
    degree: "G.C.E. Advanced Level (ICT Stream)",
    institution: "Zahira College, Kalmunai",
    period: "Jan 2020 – Nov 2023",
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
    { name: "React/Next.js", value: 85, color: "#61DAFB" },
    { name: "Node.js", value: 80, color: "#339933" },
    { name: "MongoDB", value: 75, color: "#47A248" },
    { name: "Tailwind CSS", value: 90, color: "#06B6D4" },
    { name: "C# / .NET", value: 70, color: "#9B4993" },
    { name: "SQL", value: 75, color: "#4479A1" },
    { name: "Excel", value: 85, color: "#217346" },
    { name: "Power BI", value: 80, color: "#F2C811" },
    { name: "Data Viz", value: 70, color: "#8B5CF6" },
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

// ──────────────────────────────────────────────
// Certifications
// ──────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "Feb 2026",
    credentialId: "0KjbWmjl6r",
    verifyLink: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    skills: ["Python Programming", "Functions in Python", "+5 skills"],
    image: "/images/certificates/cert-python.png",
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "Feb 2026",
    credentialId: "Na0FQzxYYM",
    verifyLink: "https://open.uom.lk/verify",
    skills: ["HTML", "Cascading Style Sheets (CSS)", "+3 skills"],
    image: "/images/certificates/cert-webdesign.png",
  },
  {
    title: "Certificate in Information Technology",
    issuer: "BCAS Campus Kalmunai",
    date: "Feb 2022",
    credentialId: "KL/IBP/IT/16/05",
    verifyLink: "https://bcvs.bcas.ac/",
    skills: ["Web Development", "HTML", "+5 skills"],
    image: "/images/certificates/cert-it.png",
  },
  {
    title: "Certificate in English",
    issuer: "BCAS Campus Kalmunai",
    date: "Feb 2022",
    credentialId: "KL/IBP/EN/16/05",
    verifyLink: "https://bcvs.bcas.ac/",
    skills: ["English Communication", "Academic Writing", "+3 skills"],
    image: "/images/certificates/cert-english.png",
  },
];
