"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Generate deterministic positions for particles to avoid hydration mismatch
  const particlePositions = React.useMemo(() => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      // Use a deterministic seed based on index to ensure same positions on server and client
      const seed = i * 1234567;
      const left = ((seed % 10000) / 100).toFixed(1);
      const top = (((seed * 7) % 10000) / 100).toFixed(1);
      positions.push({ left: `${left}%`, top: `${top}%` });
    }
    return positions;
  }, []);

  // Navigation links
  const navLinks = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "About", href: "/about", icon: "👨‍💻" },
    { label: "Portfolio", href: "/portfolios", icon: "💼" },
    { label: "Achievements", href: "/Achievements", icon: "🏆" },
    { label: "Contact", href: "/Contact", icon: "📧" },
  ];

  // Social links
  const socialLinks = [
    {
      platform: "GitHub",
      href: "https://github.com/abdulahad-2",
      iconPath: "/icons/github_icon.svg",
      color: "hover:text-white hover:bg-gray-800",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/abdul-ahad-7908a82b4/",
      iconPath: "/icons/linkedin_icon.svg",
      color: "hover:text-white hover:bg-blue-600",
    },
    {
      platform: "Gmail",
      href: "mailto:ahadking6152@gmail.com",
      iconPath: "/icons/gmail_icon.svg",
      color: "hover:text-white hover:bg-red-500",
    },
  ];

  // Enhanced services with icons
  const services = [
    {
      name: "Web Development",
      icon: "🌐",
      description: "Modern web solutions",
    },
    { name: "UI/UX Design", icon: "🎨", description: "Beautiful interfaces" },
    {
      name: "WordPress Development",
      icon: "📝",
      description: "Custom CMS solutions",
    },
    { name: "E-commerce Solutions", icon: "🛒", description: "Online stores" },
    {
      name: "Mobile App Development",
      icon: "📱",
      description: "iOS & Android apps",
    },
    { name: "SEO Optimization", icon: "🔍", description: "Search visibility" },
    { name: "Digital Marketing", icon: "📈", description: "Brand growth" },
    {
      name: "Cloud Solutions",
      icon: "☁️",
      description: "Scalable infrastructure",
    },
    { name: "API Development", icon: "🔗", description: "System integration" },
    {
      name: "DevOps & Deployment",
      icon: "⚙️",
      description: "Automated workflows",
    },
  ];

  // Contact info with enhanced styling
  const contactInfo = [
    {
      label: "Email",
      value: "ahadking6152@gmail.com",
      icon: "📧",
      href: "mailto:ahadking6152@gmail.com",
    },
    {
      label: "Location",
      value: "Lahore, Pakistan",
      icon: "📍",
      href: "#",
    },
    {
      label: "Phone",
      value: "+92 3259684493",
      icon: "📞",
      href: "tel:+923259684493",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-purple-950/20 to-black border-t border-purple-500/20 overflow-hidden z-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - Responsive sizing */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute top-5 left-5 sm:top-10 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-cyan-400/10 rounded-full blur-3xl"
        />

        {/* Grid pattern - Responsive */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:25px_25px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]" />

        {/* Floating particles */}
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={position}
          />
        ))}
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Top section with enhanced animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-10 sm:py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
            {/* Logo and description - Enhanced */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 lg:col-span-5 text-center sm:text-left"
            >
              <Link href="/" className="inline-block mb-6 lg:mb-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-xl opacity-20" />
                  <Image
                    src="/logo/logofixxed.svg"
                    alt="Sage Devs Logo"
                    width={100}
                    height={100}
                    className="sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] relative z-10 transition-all duration-300 "
                  />
                </motion.div>
              </Link>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-3 lg:mb-4"
              >
                Sage Devs
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 lg:mb-8 max-w-md mx-auto sm:mx-0"
              >
                Transforming ideas into extraordinary digital experiences. Where
                innovation meets excellence in every pixel and line of code.
              </motion.p>

              {/* Enhanced social links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.platform}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 ${link.color}`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src={link.iconPath}
                        alt={`${link.platform} icon`}
                        width={20}
                        height={20}
                        className="sm:w-[24px] sm:h-[24px] relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation - Enhanced */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-1 lg:col-span-2 text-center sm:text-left"
            >
              <h3 className="text-white font-bold text-lg sm:text-xl mb-6 lg:mb-8 relative">
                <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                  Navigation
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-0 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                />
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-center sm:justify-start space-x-3 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-base sm:text-lg"
                      >
                        {link.icon}
                      </motion.span>
                      <span className="relative text-sm sm:text-base">
                        {link.label}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services - Completely redesigned */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 lg:col-span-5"
            >
              <h3 className="text-white font-bold text-lg sm:text-xl mb-6 lg:mb-8 relative text-center sm:text-left">
                <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                  Our Services
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute bottom-0 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-start space-x-2 sm:space-x-3">
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-xl sm:text-2xl flex-shrink-0 mt-1"
                      >
                        {service.icon}
                      </motion.span>
                      <div>
                        <h4 className="text-white font-medium text-xs sm:text-sm mb-1 group-hover:text-purple-200 transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 sm:py-10 lg:py-12 border-t border-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        >
          <div className="text-center mb-6 sm:mb-8">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text text-transparent mb-2"
            >
              Let&apos;s Connect
            </motion.h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Ready to bring your ideas to life?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <Link
                  href={info.href}
                  className="block p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-cyan-500/10 hover:border-purple-400/50 transition-all duration-300 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-2xl sm:text-3xl mb-3 sm:mb-4 inline-block"
                  >
                    {info.icon}
                  </motion.div>
                  <p className="text-purple-300 text-xs sm:text-sm font-medium mb-2 group-hover:text-purple-200">
                    {info.label}
                  </p>
                  <p className="text-white font-semibold text-sm sm:text-base group-hover:text-purple-100 transition-colors duration-300 break-words">
                    {info.value}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom section - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-6 sm:py-8 border-t border-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent text-center"
              >
                © {currentYear} Sage Devs. All rights reserved.
              </motion.span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-purple-300 transition-colors duration-300 relative"
                >
                  Privacy Policy
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 relative"
                >
                  Terms of Service
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
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
