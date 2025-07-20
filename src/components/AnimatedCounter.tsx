import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimal?: boolean;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  decimal = false,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  // Specify the return type as number
  const rounded = useTransform(count, (latest: number) =>
    decimal ? parseFloat(latest.toFixed(1)) : Math.round(latest)
  );

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count, value]);

  return (
    <motion.div
      className="text-center group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text mb-3 group-hover:from-purple-300 group-hover:to-purple-100 transition-all duration-300">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-gray-300 text-lg group-hover:text-purple-200 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
}

("use client");
import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimal?: boolean;
  duration?: number; // total animation time in ms
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  decimal = false,
  duration = 1500,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(decimal ? 0.0 : 0);

  useEffect(() => {
    const start = performance.now();
    const startVal = decimal ? 0 : 0;
    const diff = value - startVal;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = startVal + diff * progress;
      setDisplay(
        decimal ? parseFloat(current.toFixed(1)) : Math.floor(current)
      );
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, decimal, duration]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl font-bold mb-1">
        {display}
        {suffix}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}
