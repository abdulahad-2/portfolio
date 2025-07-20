"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

// Additional projects specific to portfolio page
const portfolioSpecificProjects = [
  {
    id: 101,
    number: "07",
    title: "Dark‑Mode React Admin Dashboard",
    description: "Lead Front‑End Developer & DevOps Engineer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/nextjs.svg",
      "/techstack/ts.svg",
    ],
    imageSrc: "/proj/reactdashboard.jpg",
    link: "https://abdulahad-2.github.io/admin-dashboard/#/dashboard",
  },
  {
    id: 102,
    number: "08",
    title: "Responsive Personal Branding Website Design & Development",
    description: "Lead Web Designer & Front‑End Developer",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/igor.jpg",
    link: "https://igorvainshtein.com/",
  },
  {
    id: 103,
    number: "09",
    title: "Responsive B2B Consulting Website Design & Development",
    description: " Lead Web Designer & Front‑End Developer",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/priotize.jpg",
    link: "https://priorityib.com.au/",
  },
  {
    id: 104,
    number: "10",
    title: "Nonprofit Advocacy Website Design & Development",
    description: " Lead Web Designer & WordPress Developer",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/australia.jpg",
    link: "https://aidn.org.au/",
  },
  {
    id: 105,
    number: "11",
    title: "The Mehfil – Modern Catering & Events Website",
    description: "The Mehfil – Modern Catering & Events Website",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/mehfil.jpg",
    link: "https://themehfil.ca/",
  },
];

const skills = [
  "React & Next.js", "TypeScript", "Node.js", "WordPress", "UI/UX Design",
  "DevOps", "JavaScript", "CSS3", "HTML5", "PHP", "Responsive Design"
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" }
];

// Define the line type
interface Line {
  id: number;
  left: number;
  top: number;
  width: number;
  rotation: number;
  delay: number;
}

// Floating lines component
const FloatingLines = () => {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines = [];
      for (let i = 0; i < 8; i++) {
        newLines.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          width: Math.random() * 200 + 100,
          rotation: Math.random() * 360,
          delay: Math.random() * 2,
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-400/30 to-transparent animate-pulse"
          style={{
            left: `${line.left}%`,
            top: `${line.top}%`,
            width: `${line.width}px`,
            transform: `rotate(${line.rotation}deg)`,
            animationDelay: `${line.delay}s`,
            animationDuration: "4s",
          }}
        />
      ))}
    </div>
  );
};

export default function PortfoliosPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  // Combine original projects with portfolio-specific ones
  const allProjects = [...projects, ...portfolioSpecificProjects];

  const filters = ["All", "Web Development", "UI/UX Design", "Full-Stack"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(147,51,234,0.1),transparent)]" />
      </div>

      {/* Floating purple lines */}
      <FloatingLines />

      <div className="relative z-10 text-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                My Portfolio
              </h1>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences through innovative solutions, cutting-edge technologies, 
              and pixel-perfect designs that bring ideas to life.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 sm:p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-purple-400/40 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-900/40 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:border-purple-400/60 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Filter Section */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                      : "bg-purple-900/20 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-800/30"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {allProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <ProjectCard index={idx} project={project} />
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                Ready to bring your vision to life? Let&apos;s collaborate and create 
                something extraordinary that exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40">
                  Start a Project
                </button>
                <button className="px-8 py-4 border border-purple-500/50 rounded-full font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-900/20 hover:scale-105">
                  View Resume
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}