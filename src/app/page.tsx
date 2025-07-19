// app/page.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Import your components and blocks
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
// Removed Threads import since it's now in layout
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillTag from "@/components/SkillTag";
import ProjectCard from "@/components/ProjectCard";

// Project data
const projects = [
  {
    id: 1,
    number: "01",
    title: "Custom Shopify Store",
    description: "Shopify Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/js.svg",
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/ts.svg",
      "/techstack/shopify.svg",
    ],
    imageSrc: "/proj/projectOne.png",
    link: "by39tk-uv.myshopify.com",
  },
  {
    id: 2,
    number: "02",
    title: "GDSC PLM Website",
    description: "Web Developer",
    techstack: [
      "/techstack/nextjs.svg",
      "/techstack/tailwind.svg",
      "/techstack/shadcn.svg",
    ],
    imageSrc: "/proj/projectTwo.png",
    link: "https://www.gdsc-plm.org/",
  },
  {
    id: 3,
    number: "03",
    title: "GrievDesk",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/css.svg",
      "/techstack/springboot.svg",
    ],
    imageSrc: "/proj/projectThree.png",
    link: "https://plmce-grievdesk.web.app/",
  },
  {
    id: 4,
    number: "04",
    title: "Conso Programming Language and Compiler",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/css.svg",
      "/techstack/python.svg",
      "/techstack/fastapi.svg",
      "/techstack/websockets.svg",
    ],
    imageSrc: "/proj/projectFour.png",
    link: "https://conso-frontend-v2.onrender.com/",
  },
  {
    id: 5,
    number: "05",
    title: "AceFrame",
    description: "Web Developer",
    techstack: ["/techstack/nextjs.svg", "/techstack/tailwind.svg"],
    imageSrc: "/proj/projectFive.png",
    link: "https://aceframe.web.app/",
  },
  {
    id: 6,
    number: "06",
    title: "KhanJee – Authentic Pakistani Cuisine & Catering in Montreal",
    description: "WordPress Developer",
    techstack: [
      "/techstack/js.svg",
      "/techstack/php.svg",
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/wordpress.svg",
    ],
    imageSrc: "/proj/projectSix.png",
    link: "https://khanjeecanada.com/",
  },
];

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

// === Skill sections for Full Stack Developer card ===
const cmsAndEcommerce = [
  "WordPress (Theme & Plugin Customization)",
  "Elementor, WPBakery, Gutenberg",
  "WooCommerce",
  "Shopify (Dawn Theme, Liquid)",
  "Shopify App Integration",
  "Speed Optimization (Core Web Vitals)",
  "On-Page SEO (Yoast, RankMath)",
];

const frontend = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
];

const backend = [
  "Node.js",
  "Express.js",
  "Spring Boot",
  "Python (Flask, Django)",
  "REST API Integration",
];

const databases = ["MySQL", "Firebase", "Supabase", "MongoDB", "PostgreSQL"];

const mobile = ["React Native (basic)"];

const toolsAndDevOps = [
  "Git & GitHub",
  "Vercel / Netlify / cPanel",
  "Docker (basic)",
  "Postman",
  "CI/CD (basic)",
  "Figma (Developer Handoff)",
];

const otherSkills = [
  "SEO Optimization",
  "Performance Tuning (GTmetrix, PageSpeed)",
  "Agile / Scrum",
  "Client Communication (Upwork, Trello)",
];

const skillSections: { label: string; items: string[] }[] = [
  { label: "CMS & E‑commerce", items: cmsAndEcommerce },
  { label: "Frontend", items: frontend },
  { label: "Backend", items: backend },
  { label: "Databases", items: databases },
  { label: "Mobile", items: mobile },
  { label: "Tools & DevOps", items: toolsAndDevOps },
  { label: "Other", items: otherSkills },
];
// === end skill sections ===

const toolSkills = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Illustrator",
  "Photoshop",
  "Framer",
  "Notion",
  "Miro",
];

const processSkills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Accessibility",
  "Responsive Design",
  "Usability Testing",
  "Interaction Design",
];

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        {/* Removed Threads background since it's now in layout */}

        {/* Hero Text */}
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
            text="Sage Devs"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-9xl md:text-7xl text-4xl text-center"
          />
        </div>
        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
          <TrueFocus
            sentence="Full Stack Developer   UI/UX Designer   Solopreneur"
            manualMode
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>

        {/* Circular Scroll Cue + Logo */}
        <div className="hidden md:block w-full relative h-[300px] mt-8 mb-4 items-center">
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={5}
            className="absolute left-45 bottom-10"
          />
          <Image
            src="/logo/logofixxed.svg"
            alt="Logo"
            width={20}
            height={20}
            className="absolute left-44 bottom-9 m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125"
          />
        </div>

        {/* Tech & Design Cards */}
        <div className="flex-grow flex flex-col md:flex-row items-start justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 px-4 md:px-0">
          <div className="flex flex-col w-full max-w-lg mt-10 mb-20 space-y-8">
            {/* Full Stack Developer Card */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                Full Stack Developer
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                I craft seamless digital experiences with precision,
                performance, and purpose. From architecture to deployment, I
                bring ideas to life through clean, scalable code.
              </p>

              {skillSections.map(({ label, items }) => (
                <div key={label} className="mb-6">
                  <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                    {label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <SkillTag key={skill} skillName={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* UI/UX Designer Card */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                UI/UX Designer
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Designing interfaces that not only look beautiful but feel
                intuitive. I turn complex problems into simple, elegant user
                experiences that leave a lasting impact.
              </p>

              {/* Tools */}
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Tools I Use
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {toolSkills.map((tool) => (
                  <SkillTag key={tool} skillName={tool} />
                ))}
              </div>

              {/* Process */}
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                UX Process Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {processSkills.map((step) => (
                  <SkillTag key={step} skillName={step} />
                ))}
              </div>
            </div>
          </div>

          {/* Who Am I Section */}
          <div className="flex flex-col items-center md:items-start w-full max-w-2xl">
            <BlurText
              text="Who Am I?"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold mb-8"
            />

            {/* Introduction Text */}
            <div className="mb-8 text-center md:text-left max-w-xl">
              <p className="text-gray-300 md:text-lg text-base leading-relaxed mb-4">
                My name is{" "}
                <span className="text-cyan-300 font-semibold">Abdul Ahad</span>{" "}
                with 4+ years of experience in web development. I&apos;m from
                Pakistan, passionate about creating digital solutions that make
                a difference.
              </p>
              <p className="text-gray-400 md:text-base text-sm leading-relaxed mb-4">
                I specialize in building modern, scalable web applications using
                cutting-edge technologies. From concept to deployment, I ensure
                every project delivers exceptional user experiences and robust
                functionality.
              </p>
              <p className="text-gray-400 md:text-base text-sm leading-relaxed">
                Whether it&apos;s crafting pixel-perfect interfaces or
                architecting complex backend systems, I bring dedication,
                creativity, and technical expertise to every challenge I tackle.
              </p>
            </div>

            {/* TiltedCard for desktop */}
            <div className="hidden md:block mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="Profile"
                captionText="Abdul Ahad"
                containerHeight="600px"
                containerWidth="500px"
                imageHeight="600px"
                imageWidth="500px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <p className="absolute top-5 left-[85%] m-5 px-4 py-2 border rounded-lg opacity-50 font-bold">
                    Abdul Ahad
                  </p>
                }
              />
            </div>

            {/* TiltedCard for mobile */}
            <div className="md:hidden mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="Profile"
                captionText="Abdul Ahad"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <p className="absolute m-5 px-4 py-2 border rounded-lg opacity-50 font-bold">
                    Abdul Ahad
                  </p>
                }
              />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
          <BlurText
            text="My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        {/* Projects Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold">
          <BlurText
            text="My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1400px] mx-auto mt-10 gap-6 p-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex w-full items-center justify-center mt-16 mb-20">
          <Link href="/portfolios">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View All Projects</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </div>
      </main>
    </>
  );
}
