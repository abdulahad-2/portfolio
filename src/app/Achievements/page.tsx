// src/app/Achievements/page.tsx
"use client";

import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
// Removed Threads import since it's now in layout
import AchievementEntry, { AchievementEntryProps } from "./achievemententry";

const handleAnimationComplete = () => {
  console.log("Achievements page animation completed!");
};

const entries: AchievementEntryProps[] = [
  {
    entryNumber: "01",
    title: "Procrash",
    award: "3rd Place",
    description: "Designed for procrastinators ...",
    imageSrc: "/solutions/procrash.svg",
    projectLink: "https://procrash-hdps5h.flutterflow.app/",
    trophyType: "third",
    techStackIcons: ["/techstack/flutterflow.svg", "/techstack/gemini.svg"],
  },
  {
    entryNumber: "02",
    title: "Talento",
    award: "Special Award",
    description: "Talento is a mobile app ...",
    imageSrc: "/solutions/talento.svg",
    projectLink: "https://talento-xi.vercel.app/",
    trophyType: "special",
    techStackIcons: ["/techstack/javascript.svg", "/techstack/css.svg"],
  },
  {
    entryNumber: "03",
    title: "Project Phoenix",
    award: "1st Place",
    description:
      "A revolutionary web application that transforms user experience through innovative design and cutting-edge technology ...",
    imageSrc: "/solutions/neosolutions.svg",
    projectLink: "https://phoenix-project.vercel.app/",
    trophyType: "first",
    techStackIcons: [
      "/techstack/react.svg",
      "/techstack/nextjs.svg",
      "/techstack/ts.svg",
    ],
  },
  {
    entryNumber: "04",
    title: "EcoTrack",
    award: "Participant",
    description:
      "An environmental monitoring system that helps track and reduce carbon footprint with real-time analytics ...",
    imageSrc: "/solutions/kachingko.svg",
    projectLink: "https://ecotrack-app.vercel.app/",
    trophyType: "participant",
    techStackIcons: ["/techstack/react.svg", "/techstack/nextjs.svg"],
  },
  {
    entryNumber: "05",
    title: "CodeMentor",
    award: "Participant",
    description:
      "A peer-to-peer learning platform connecting developers worldwide for knowledge sharing and collaboration ...",
    imageSrc: "/solutions/ecarga.svg",
    projectLink: "https://codementor-platform.vercel.app/",
    trophyType: "participant",
    techStackIcons: [
      "/techstack/python.svg",
      "/techstack/openai.svg",
      "/techstack/rasa.svg",
    ],
  },
];

export default function AchievementsPage() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center relative pt-20">
        {/* Removed Threads component since background is now in layout */}

        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Achievements"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center text-white"
          />
        </div>

        <RollingGallery autoplay pauseOnHover={false} />

        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 my-20">
          <div className="hidden md:block mb-10">
            <FallingText
              text="Besides being a developer, I'm someone who deeply values curiosity, continuous growth, and creative collaboration. I enjoy learning new technologies, solving real-world problems through code, and turning complex ideas into functional and elegant solutions. I believe great products are built through empathy, iteration, and teamwork. ..."
              highlightWords={["developer", "creative", "teamwork", "complex"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
          <div className="md:hidden mb-10">
            <FallingText
              text="Besides being a developer, I'm someone who deeply values curiosity, continuous growth, and creative collaboration. I enjoy learning new technologies, solving real-world problems through code, and turning complex ideas into functional and elegant solutions. I believe great products are built through empathy, iteration, and teamwork. ..."
              highlightWords={["developer", "creative", "teamwork", "complex"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          <div className="mt-20 md:mt-40 space-y-12">
            {entries.map((entry, idx) => (
              <AchievementEntry key={idx} {...entry} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
