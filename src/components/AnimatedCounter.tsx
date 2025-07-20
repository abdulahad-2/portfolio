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
