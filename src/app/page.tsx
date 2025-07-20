// app/page.tsx

"use client";

import React, { useEffect, useState } from "react";
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
import FAQ from "@/components/faq";

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
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    updateWindowSize();

    // Add event listener
    window.addEventListener("resize", updateWindowSize);

    // Cleanup
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <>
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-purple-600/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {windowSize.width > 0 &&
            [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                initial={{
                  x: Math.random() * windowSize.width,
                  y: Math.random() * windowSize.height,
                }}
                animate={{
                  y: [null, -100, windowSize.height + 100],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
        </div>

        {/* Hero Text */}
        <motion.div
          className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <BlurText
            text="Sage Devs"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-9xl md:text-7xl text-4xl text-center bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text"
          />
        </motion.div>

        <motion.div
          className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <TrueFocus
            sentence="Full Stack Developer   UI/UX Designer   Solopreneur"
            manualMode
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </motion.div>
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
          .bg-gradient-radial {
            background: radial-gradient(
              circle at center,
              var(--tw-gradient-stops)
            );
          }
        `}</style>

        {/* Circular Scroll Cue + Logo */}
        <motion.div
          className="hidden md:block w-full relative h-[300px] mt-8 mb-4 items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={5}
            className="absolute left-45 bottom-10"
          />
          <motion.div
            whileHover={{ scale: 1.5, rotate: 10, filter: "brightness(1.25)" }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo/logofixxed.svg"
              alt="Logo"
              width={20}
              height={20}
              className="absolute left-44 bottom-9 m-10"
            />
          </motion.div>
        </motion.div>

        {/* Tech & Design Cards */}
        <motion.div
          className="flex-grow flex flex-col md:flex-row items-start justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 px-4 md:px-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col w-full max-w-lg mt-10 mb-20 space-y-8">
            {/* Full Stack Developer Card */}
            <motion.div
              className="relative p-6 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 custom-corner-border bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50"
              whileHover={{
                boxShadow:
                  "0 20px 40px rgba(6, 182, 212, 0.1), 0 0 60px rgba(6, 182, 212, 0.05)",
                borderColor: "rgba(6, 182, 212, 0.3)",
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-lg" />
              <h3 className="font-bold md:text-2xl text-lg tracking-wide mb-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Full Stack Developer
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                I craft seamless digital experiences with precision,
                performance, and purpose. From architecture to deployment, I
                bring ideas to life through clean, scalable code.
              </p>

              {skillSections.map(({ label, items }, index) => (
                <motion.div
                  key={label}
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <h4 className="font-semibold mb-3 text-base bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <SkillTag key={skill} skillName={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* UI/UX Designer Card */}
            <motion.div
              className="relative p-6 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 custom-corner-border bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm border border-gray-700/50"
              whileHover={{
                boxShadow:
                  "0 20px 40px rgba(168, 85, 247, 0.1), 0 0 60px rgba(168, 85, 247, 0.05)",
                borderColor: "rgba(168, 85, 247, 0.3)",
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-lg" />
              <h3 className="font-bold md:text-2xl text-lg tracking-wide mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                UI/UX Designer
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Designing interfaces that not only look beautiful but feel
                intuitive. I turn complex problems into simple, elegant user
                experiences that leave a lasting impact.
              </p>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <h4 className="font-semibold mb-3 text-base bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Tools I Use
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {toolSkills.map((tool) => (
                    <SkillTag key={tool} skillName={tool} />
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                <h4 className="font-semibold mb-3 text-base bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  UX Process Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {processSkills.map((step) => (
                    <SkillTag key={step} skillName={step} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Who Am I Section */}
          <motion.div
            className="flex flex-col items-center md:items-start w-full max-w-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          >
            <BlurText
              text="Who Am I?"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text"
            />

            {/* Introduction Text */}
            <motion.div
              className="mb-8 text-center md:text-left max-w-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
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
            </motion.div>

            {/* TiltedCard for desktop */}
            <motion.div
              className="hidden md:block mt-10 mb-20"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
            >
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
                  <p className="absolute top-5 left-[85%] m-5 px-4 py-2 border rounded-lg opacity-50 font-bold bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-sm">
                    Abdul Ahad
                  </p>
                }
              />
            </motion.div>

            {/* TiltedCard for mobile */}
            <motion.div
              className="md:hidden mt-10 mb-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
            >
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
                  <p className="absolute m-5 px-4 py-2 border rounded-lg opacity-50 font-bold bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-sm">
                    Abdul Ahad
                  </p>
                }
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="flex w-full items-center justify-center p-4 md:mt-25 mt-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <BlurText
            text="My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ExperienceTimeline />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <BlurText
            text="My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text"
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1400px] mx-auto mt-10 gap-6 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex w-full items-center justify-center mt-16 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="/portfolios">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 40px rgba(6, 182, 212, 0.15), 0 0 60px rgba(6, 182, 212, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-gray-900/80 to-gray-800/60 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 overflow-hidden backdrop-blur-sm"
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-lg" />
            </motion.button>
          </Link>
        </div>
      </main>
    </>
  );
}
