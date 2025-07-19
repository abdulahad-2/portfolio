"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolios" },
    { label: "Achievements", href: "/Achievements" },
    { label: "Contact", href: "/Contact" },
  ];

  // Social links
  const socialLinks = [
    {
      platform: "GitHub",
      href: "https://github.com/abdulahad-2",
      iconPath: "/icons/github_icon.svg",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/abdul-ahad-7908a82b4/",
      iconPath: "/icons/linkedin_icon.svg",
    },
    {
      platform: "Gmail",
      href: "mailto:ahadking6152@gmail.com",
      iconPath: "/icons/gmail_icon.svg",
    },
  ];

  // Services
  const services = [
    "Web Development",
    "UI/UX Design",
    "WordPress Development",
    "E-commerce Solutions",
    "Mobile App Development",
    "SEO Optimization",
  ];

  // Contact info
  const contactInfo = [
    { label: "Email", value: "ahadking6152@gmail.com" },
    { label: "Location", value: "Lahore, Pakistan" },
    { label: "Phone", value: "+92 3259684493" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden pt-16 z-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/logo/logofixxed.svg"
                    alt="Sage Devs Logo"
                    width={120}
                    height={120}
                    className="transition-all duration-300 hover:scale-105 hover:rotate-3"
                  />
                </Link>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-6">
                  Crafting digital experiences that blend innovation with
                  purpose. Full-stack development and UI/UX design solutions
                  that make a difference.
                </p>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.platform}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                      >
                        <Image
                          src={link.iconPath}
                          alt={`${link.platform} icon`}
                          width={20}
                          height={20}
                          className="opacity-70 hover:opacity-100"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-6 relative">
                  Navigation
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-400 rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-6 relative">
                  Services
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-purple-400 rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <span className="text-gray-400 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="text-center md:text-left">
                <p className="text-gray-500 text-sm mb-1">{info.label}</p>
                <p className="text-white font-medium">{info.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} Sage Devs. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span className="hidden md:block">Made with ❤️ in Pakistan</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute inset-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
