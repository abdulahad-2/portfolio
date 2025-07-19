"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { gilroy } from "@/fonts/fonts";
import Footer from "@/components/Footer";

// Memoize static data to prevent re-creation on every render
const items = [
  { label: "Home", href: "/" },
  { label: "Achievements", href: "/Achievements" },
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/portfolios" }, // Fixed: was "Portfolios"
  { label: "Contact", href: "/Contact" },
];

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

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Memoize activeIndex calculation
  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => {
      return item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href);
    });
    return index;
  }, [pathname]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
  }, []);

  useEffect(() => {
    // More efficient throttle implementation
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle body overflow
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Memoize mobile menu handler
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gilroy.variable} antialiased font-gilroy bg-black relative overflow-x-hidden`}
      >
        {/* Background Threads/Lines - Fixed z-index to be behind everything */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ minHeight: "100vh" }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="threadGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.05)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.05)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.05)" />
              </linearGradient>
              <linearGradient
                id="threadGradient2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.05)" />
                <stop offset="50%" stopColor="rgba(245, 101, 101, 0.05)" />
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.05)" />
              </linearGradient>
            </defs>

            {/* Diagonal threads */}
            <motion.line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="url(#threadGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.line
              x1="100%"
              y1="0"
              x2="0"
              y2="100%"
              stroke="url(#threadGradient2)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Horizontal threads */}
            <motion.line
              x1="0"
              y1="30%"
              x2="100%"
              y2="30%"
              stroke="rgba(99, 102, 241, 0.05)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
            />
            <motion.line
              x1="0"
              y1="70%"
              x2="100%"
              y2="70%"
              stroke="rgba(16, 185, 129, 0.05)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
            />

            {/* Vertical threads */}
            <motion.line
              x1="25%"
              y1="0"
              x2="25%"
              y2="100%"
              stroke="rgba(245, 101, 101, 0.05)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.line
              x1="75%"
              y1="0"
              x2="75%"
              y2="100%"
              stroke="rgba(168, 85, 247, 0.05)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 1.5 }}
            />
          </svg>
        </div>

        {/* Header - Fixed z-index */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-200 ${
            scrolled || mobileMenuOpen
              ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 lg:h-24">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 z-[10000]">
                <Image
                  src="/logo/logofixxed.svg"
                  alt="Sage Devs Logo"
                  width={200}
                  height={200}
                  priority
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition-all duration-200 hover:scale-105 hover:rotate-3 hover:brightness-110"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-center flex-1 z-[10000]">
                <div
                  className="relative"
                  style={{
                    height: "70px",
                    width: "min(500px, 80vw)",
                    maxWidth: "650px",
                  }}
                >
                  <GooeyNav
                    items={items}
                    particleCount={6}
                    particleDistances={[70, 10]}
                    particleR={60}
                    initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
                    animationTime={300}
                    timeVariance={150}
                    colors={[1, 2, 3, 4]}
                  />
                </div>
              </div>

              {/* Tablet Navigation */}
              <nav className="hidden md:flex lg:hidden items-center space-x-3 xl:space-x-5 z-[10000]">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs xl:text-sm font-medium transition-all duration-200 hover:text-cyan-400 whitespace-nowrap px-2 py-1 rounded-md ${
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                        ? "text-cyan-400 bg-cyan-400/10"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Hamburger */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="md:hidden relative z-[10000] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: 45, y: 8 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.2 }}
                    className="w-full h-0.5 bg-white block transform origin-center"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-0.5 bg-white block"
                  />
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: -45, y: -8 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.2 }}
                    className="w-full h-0.5 bg-white block transform origin-center"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Mobile Overlay Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-[9998] ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center space-y-8">
              {items.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    y: mobileMenuOpen ? 0 : 20,
                  }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`text-white text-2xl md:text-3xl font-medium transition-all duration-200 ${
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                        ? "text-cyan-400"
                        : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <main className="pt-20 lg:pt-24 relative z-[1]">{children}</main>

        {/* Social Icons */}
        <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-[100]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-black/70 border border-white/20 border-dashed rounded-full p-3 lg:p-4 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-4 lg:space-y-5">
              {socialLinks.map((link, idx) => (
                <motion.div
                  key={link.platform}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.7 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-all duration-200 hover:scale-105 hover:rotate-6"
                  >
                    <Image
                      src={link.iconPath}
                      alt={`${link.platform} icon`}
                      width={24}
                      height={24}
                      className="w-5 h-5 lg:w-6 lg:h-6 object-contain opacity-80 hover:opacity-100"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
