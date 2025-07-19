// src/app/portfolios/page.tsx
"use client";

import React from "react";
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

export default function PortfoliosPage() {
  // Combine original projects with portfolio-specific ones
  const allProjects = [...projects, ...portfolioSpecificProjects];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Portfolio
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            A collection of my projects showcasing full-stack development, UI/UX
            design, and innovative solutions across various technologies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {allProjects.map((project, idx) => (
            <ProjectCard key={project.id} index={idx} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
