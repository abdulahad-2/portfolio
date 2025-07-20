"use client";
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
    // Start from 30-40 below the target value
    const offset = Math.floor(Math.random() * 11) + 30; // Random between 30-40
    const startVal = Math.max(0, value - offset); // Don't go below 0
    const diff = value - startVal;

    // Set initial display to start value
    setDisplay(
      decimal ? parseFloat(startVal.toFixed(1)) : Math.floor(startVal)
    );

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // Use easing function for smoother animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = startVal + diff * easeOutCubic;

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
