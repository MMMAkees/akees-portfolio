"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChat, HiX, HiPaperAirplane } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";
import { PERSONAL } from "@/data/constants";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
};

export default function AkeeBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: "1", 
      text: "Hi there! 👋 I'm Mohamed Akees' AI assistant.\n\nAsk me about him — skills, projects, education, experience — or ask programming questions!\n\nType **help** to see all topics. 💡", 
      sender: "bot" 
    }
  ]);
  const suggestions = [
    "Who is Akees?", "Skills", "Projects", 
    "Education", "Experience", "Certificates", 
    "Contact Info"
  ];
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [isTyping, setIsTyping] = useState(false);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const renderMessage = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const sendQuery = (queryText: string) => {
    if (!queryText.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), text: queryText, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulated Pro Bot AI
    setTimeout(() => {
      const lowerInput = queryText.toLowerCase();
      let botReply = "I'm not exactly sure how to answer that just yet! Try asking me specifically about Akees' **skills**, **projects**, **experience**, or **contact info**.";
      
      const responses = {
        skills: [
          "Akees works extensively with the **MERN stack**! He is skilled in React, Next.js, TypeScript, Node.js, PHP, C# .NET, and Tailwind CSS.",
          "He's a Full-Stack Developer with strong expertise in Frontend (React, Next.js, Tailwind), Backend (Node.js, Express, PHP), and databases (MongoDB, SQL)."
        ],
        experience: [
          "Akees worked as a **Junior Software Engineer Intern** at E-Space Solutions (Feb 2024 - Dec 2024). Before that, he built solid foundations through real-world projects.",
          "He gained enterprise experience at E-Space Solutions building scalable software for 10 months as a Software Engineer Intern."
        ],
        contact: [
          `You can drop him a direct email at **${PERSONAL.email}**, or reach out via his LinkedIn! You can also find his number in the Contact section.`,
          `He is currently **Available for opportunities**! Feel free to email him at ${PERSONAL.email}.`
        ],
        projects: [
          "Akees has built several major apps, including **FoodieHub**, **E-Space Solutions Management System**, and **Velvet Vogue**. You can interact with the live demos in the Projects section!",
          "Check out the Projects section! He's built full-stack apps ranging from eCommerce (Velvet Vogue) to AI Agent learning platforms."
        ],
        education: [
          "He is pursuing a **Bachelor of Engineering, Computer Software Engineering** at London Metropolitan University (Jul 2026 – Aug 2027).",
          "He holds an HND in Software Engineering from ESOFT Metro Campus and is pursuing a BEng in Computer Software Engineering at London Metropolitan University."
        ],
        analytics: [
          "Aside from web dev, Akees is very passionate about **Data Analytics**! He's proficient in Power BI, SQL, and Excel for deriving deep data insights."
        ],
        greeting: [
          "Hello! 👋 I'm Akee Bot! Want to know about Akees' tech stack or work experience?",
          "Hi there! How can I help you navigate the portfolio today?"
        ],
        about: [
          "**Mohamed Akees** is a passionate Full-Stack Developer and Data Analytics Enthusiast from Sri Lanka. He specializes in the MERN stack and loves turning data into actionable insights!",
          "Akees is a dedicated Software Engineer who builds modern web apps using React, Node.js, and Tailwind CSS. He's always on the lookout for exciting new tech challenges!"
        ],
        thanks: [
          "You're very welcome! If there's anything else you'd like to know, just ask! 😊",
          "No problem! Let me know if you need any more info."
        ],
        whoareyou: [
          "I am **Akee Bot** 🤖—a specialized virtual digital assistant built right into this portfolio to answer all your questions about Mohamed Akees!",
          "I'm Akee Bot, your friendly digital guide. I live right here in the code!"
        ]
      };

      const match = (keywords: string[]) => keywords.some(k => lowerInput.includes(k));

      if (match(["skill", "tech", "stack", "know", "react", "node", "frontend", "backend"])) {
        botReply = responses.skills[Math.floor(Math.random() * responses.skills.length)];
      } else if (match(["experience", "work", "job", "intern", "company", "career"])) {
        botReply = responses.experience[Math.floor(Math.random() * responses.experience.length)];
      } else if (match(["contact", "hire", "email", "phone", "reach", "linkedin"])) {
        botReply = responses.contact[Math.floor(Math.random() * responses.contact.length)];
      } else if (match(["project", "portfolio", "app", "build", "made"])) {
        botReply = responses.projects[Math.floor(Math.random() * responses.projects.length)];
      } else if (match(["study", "education", "degree", "school", "college", "hnd", "certific", "university"])) {
        botReply = responses.education[Math.floor(Math.random() * responses.education.length)];
      } else if (match(["data", "analytic", "power bi", "excel", "insight"])) {
        botReply = responses.analytics[0];
      } else if (match(["who is ake", "about ake", "who are you ake", "who is he", "about him", "tell me about ake", "who is mohamed"])) {
        botReply = responses.about[Math.floor(Math.random() * responses.about.length)];
      } else if (match(["certific"])) {
        botReply = "Akees holds a **Certificate in Information Technology and English** from BCAS Campus (2022).";
      } else if (match(["help", "topic"])) {
        botReply = "Here are the topics I can help you with:\n1. **Skills & Tech Stack**\n2. **Projects**\n3. **Work Experience**\n4. **Education & Certificates**\n5. **Contact Info**\nJust click one of the suggested buttons or type your question!";
      } else if (match(["hi", "hello", "hey", "greetings"])) {
        botReply = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
      } else if (match(["thank", "thx"])) {
        botReply = responses.thanks[Math.floor(Math.random() * responses.thanks.length)];
      } else if (match(["who are you", "your name", "what are you", "are you ai", "are you a bot"])) {
        botReply = responses.whoareyou[Math.floor(Math.random() * responses.whoareyou.length)];
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: botReply, sender: "bot" }]);
    }, 1000 + Math.random() * 1500); // 1-2.5 second realistic delay
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendQuery(input);
    setInput("");
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed bottom-[100px] right-6 z-50 cursor-grab active:cursor-grabbing flex flex-col items-end pointer-events-auto"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }}
            className="mb-4 w-[320px] sm:w-[380px] glass-strong rounded-2xl shadow-2xl border border-white/20 dark:border-dark-700 overflow-hidden flex flex-col cursor-default"
            style={{ height: "450px" }}
            onPointerDownCapture={(e) => e.stopPropagation()} // Stop drag inside chat window
          >
            {/* Header */}
            <div 
              className="bg-gradient-to-r from-primary-600 to-accent-500 p-4 flex items-center justify-between text-white cursor-grab active:cursor-grabbing"
              onPointerDownCapture={(e) => {}} // Let header drag the whole motion.div
            >
              <div className="flex items-center gap-3 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <FaRobot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm tracking-wide">Akee Bot</h3>
                  <p className="text-[10px] text-white/80 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/40 dark:bg-dark-900/60 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className="flex flex-col"
                >
                  <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user" 
                        ? "bg-primary-500 text-white rounded-tr-sm" 
                        : "glass border border-dark-100 dark:border-dark-700 text-dark-800 dark:text-dark-200 rounded-tl-sm"
                    }`}>
                      {msg.sender === "bot" ? renderMessage(msg.text) : msg.text}
                    </div>
                  </div>
                  
                  {/* Suggestion Chips purely for the initial welcome message */}
                  {msg.id === "1" && (
                    <div className="flex flex-wrap gap-2 mt-3 pl-1">
                      {suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => sendQuery(suggestion)}
                          disabled={isTyping}
                          className="px-3 py-1.5 rounded-full text-xs font-medium border border-primary-500/30 text-primary-600 dark:text-primary-400 bg-primary-500/10 hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] rounded-2xl p-4 text-sm shadow-sm glass border border-dark-100 dark:border-dark-700 text-dark-800 dark:text-dark-200 rounded-tl-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white dark:bg-dark-950 border-t border-dark-100 dark:border-dark-800">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-dark-50 dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:border-primary-500 transition-colors dark:text-white"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 w-8 h-8 flex items-center justify-center bg-primary-500 text-white rounded-full hover:bg-primary-600 disabled:opacity-50 disabled:hover:bg-primary-500 transition-colors cursor-pointer"
                >
                  <HiPaperAirplane className="w-4 h-4 ml-0.5 rotate-90" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-tr from-primary-600 to-accent-500 rounded-full shadow-lg shadow-primary-500/30 flex items-center justify-center text-white relative cursor-pointer"
      >
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-dark-900 rounded-full animate-pulse"></span>
        {isOpen ? <HiX className="w-6 h-6" /> : <HiChat className="w-7 h-7" />}
      </motion.button>
    </motion.div>
  );
}
