// Make sure this file is named page.tsx (not page.ts)
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Full Stack Developer & Digital Innovator
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hello! I&apos;m a passionate web developer with a deep love for
                creating digital experiences that matter. My journey in tech
                started with curiosity and has evolved into a career dedicated
                to building innovative solutions that solve real-world problems.
              </p>

              <p className="text-lg">
                I specialize in modern web technologies, with expertise in
                React, Next.js, and the entire JavaScript ecosystem. Whether
                it&apos;s crafting pixel-perfect user interfaces or architecting
                scalable backend systems, I bring both technical excellence and
                creative vision to every project.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Based in Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
                <Image
                  src="/photos/tiltedcard.svg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React & Next.js (App Router, SSR, ISR)</li>
                <li>• TypeScript & JavaScript (ES6+)</li>
                <li>• Tailwind CSS & CSS Modules</li>
                <li>• Responsive Design & Animations</li>
                <li>• State Management (Redux, Zustand)</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Backend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js & Express.js</li>
                <li>• REST & GraphQL APIs</li>
                <li>• Database Design (SQL & NoSQL)</li>
                <li>• Authentication & Security</li>
                <li>• Cloud Services (AWS, Vercel)</li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Tools & Workflow
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git & GitHub/GitLab</li>
                <li>• Docker & Containerization</li>
                <li>• Testing (Jest, Cypress)</li>
                <li>• CI/CD Pipelines</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Journey Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Timeline */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Started Coding Journey
                  </h3>
                  <p className="text-gray-300">
                    Began with curiosity about how websites work, diving into
                    HTML, CSS, and JavaScript.
                  </p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-green-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    First Major Project
                  </h3>
                  <p className="text-gray-300">
                    Built my first full-stack application using React and
                    Node.js, learning the importance of user experience.
                  </p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Open Source Contributions
                  </h3>
                  <p className="text-gray-300">
                    Started contributing to open-source projects, learning
                    collaboration and best practices from the community.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Professional Development
                  </h3>
                  <p className="text-gray-300">
                    Now building production-grade applications and mentoring
                    other developers in their journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Philosophy */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  My Philosophy
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">Code with Purpose:</strong>{" "}
                    Every line of code should serve a meaningful purpose and
                    contribute to solving real problems.
                  </p>
                  <p>
                    <strong className="text-white">Continuous Learning:</strong>{" "}
                    Technology evolves rapidly, and I believe in staying curious
                    and adaptable to new tools and methodologies.
                  </p>
                  <p>
                    <strong className="text-white">User-Centric Design:</strong>{" "}
                    Great software isn&apos;t just about clean code—it&apos;s
                    about creating experiences that users love and find
                    valuable.
                  </p>
                  <p>
                    <strong className="text-white">Collaboration:</strong> The
                    best products are built by teams that communicate
                    effectively and support each other&apos;s growth.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  When I&apos;m Not Coding
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I enjoy exploring new technologies, reading about industry
                    trends, and experimenting with creative projects. I&apos;m
                    also passionate about sharing knowledge through writing and
                    mentoring aspiring developers.
                  </p>
                  <p>
                    Outside of tech, I love solving puzzles, playing strategy
                    games, and discovering new music that keeps me inspired
                    during long coding sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I&apos;m always excited to work on new projects and collaborate with
            fellow creators. Whether you have a startup idea, need to revamp
            your existing application, or just want to chat about tech, I&apos;d
            love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="/portfolios"
              className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
