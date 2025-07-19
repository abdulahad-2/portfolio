import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import Link from "next/link";

interface GooeyNavItem {
  label: string;
  href: string;
}

interface Particle {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  time: number;
  scale: number;
  color: number;
  rotate: number;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 200, // Reduced from 300
  particleCount = 4, // Reduced from 6
  particleDistances = [40, 6], // Reduced distances
  particleR = 40, // Reduced radius
  timeVariance = 100, // Reduced variance
  colors = [1, 2, 3, 4],
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [filterPosition, setFilterPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Simplified noise function
  const noise = useCallback((n = 1) => (Math.random() - 0.5) * n, []);

  // Optimized getXY function
  const getXY = useCallback(
    (
      distance: number,
      pointIndex: number,
      totalPoints: number
    ): [number, number] => {
      const angle = (360 / totalPoints) * pointIndex * (Math.PI / 180);
      return [
        distance * Math.cos(angle) + noise(1),
        distance * Math.sin(angle) + noise(1),
      ];
    },
    [noise]
  );

  // Optimized particle creation
  const createParticles = useCallback(() => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime + noise(timeVariance);
      const rotate = noise(r / 30) * 15; // Reduced rotation
      const start = getXY(d[0], i, particleCount);
      const end = getXY(d[1], i, particleCount);

      newParticles.push({
        id: `particle-${Date.now()}-${i}`,
        startX: start[0],
        startY: start[1],
        endX: end[0],
        endY: end[1],
        time: t,
        scale: 1 + noise(0.1), // Reduced scale variance
        color: colors[Math.floor(Math.random() * colors.length)],
        rotate: rotate,
      });
    }

    return newParticles;
  }, [
    animationTime,
    particleCount,
    particleDistances,
    particleR,
    timeVariance,
    colors,
    getXY,
    noise,
  ]);

  // Optimized position update with throttling
  const updateFilterPosition = useCallback((element: HTMLElement) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    setFilterPosition({
      left: elementRect.left - containerRect.left,
      top: elementRect.top - containerRect.top,
      width: elementRect.width,
      height: elementRect.height,
    });
  }, []);

  // Debounced animation trigger
  const triggerAnimation = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newParticles = createParticles();
    setParticles(newParticles);

    // Clear existing timeouts
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    if (cleanupTimeoutRef.current) {
      clearTimeout(cleanupTimeoutRef.current);
    }

    // Cleanup particles after animation
    cleanupTimeoutRef.current = setTimeout(() => {
      setParticles([]);
      setIsAnimating(false);
    }, animationTime + timeVariance + 50);
  }, [isAnimating, createParticles, animationTime, timeVariance]);

  // Optimized click handler
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>, index: number) => {
      if (activeIndex === index) return;

      const liEl = e.currentTarget;
      setActiveIndex(index);
      updateFilterPosition(liEl);

      // Debounce animation
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }

      animationTimeoutRef.current = setTimeout(() => {
        triggerAnimation();
      }, 30); // Reduced delay
    },
    [activeIndex, updateFilterPosition, triggerAnimation]
  );

  // Keyboard handler
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const liEl = e.currentTarget.parentElement;
        if (liEl) {
          handleClick(
            { currentTarget: liEl } as React.MouseEvent<HTMLLIElement>,
            index
          );
        }
      }
    },
    [handleClick]
  );

  // Initial setup and cleanup
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateFilterPosition(activeLi);
    }

    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const currentActiveLi = navRef.current?.querySelectorAll("li")[
          activeIndex
        ] as HTMLElement;
        if (currentActiveLi) {
          updateFilterPosition(currentActiveLi);
        }
      }, 150);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
    };
  }, [activeIndex, updateFilterPosition]);

  // Optimized styles with reduced effects
  const memoizedStyles = useMemo(
    () => ({
      __html: `
      :root {
        --color-1: #ff6b6b;
        --color-2: #4ecdc4;
        --color-3: #45b7d1;
        --color-4: #96ceb4;
      }
      
      .gooey-nav-container {
        contain: layout style;
        isolation: isolate;
        position: relative;
        z-index: 10;
      }
      
      .gooey-filter {
        position: absolute;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        filter: blur(2px) contrast(15);
        mix-blend-mode: multiply;
        contain: layout style;
        opacity: 0.7;
      }
      
      .gooey-filter::before {
        content: "";
        position: absolute;
        inset: -20px;
        z-index: -1;
        background: transparent;
      }
      
      .gooey-filter::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.9);
        transform: scale(0);
        opacity: 0;
        z-index: -1;
        border-radius: 9999px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .gooey-filter.active::after {
        transform: scale(1);
        opacity: 1;
      }
      
      .gooey-particle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        pointer-events: none;
        will-change: transform;
        contain: layout style;
        animation: gooey-particle-move var(--duration) cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      
      .gooey-particle::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: var(--particle-color);
        opacity: 0.8;
        animation: gooey-particle-scale var(--duration) cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      
      @keyframes gooey-particle-move {
        0% {
          transform: translate(-50%, -50%) translate(var(--start-x), var(--start-y)) rotate(0deg);
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        80% {
          transform: translate(-50%, -50%) translate(var(--end-x), var(--end-y)) rotate(var(--rotate));
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) translate(var(--end-x), var(--end-y)) rotate(var(--rotate));
          opacity: 0;
        }
      }
      
      @keyframes gooey-particle-scale {
        0% {
          transform: scale(0);
        }
        30% {
          transform: scale(calc(var(--scale) * 0.6));
        }
        60% {
          transform: scale(var(--scale));
        }
        100% {
          transform: scale(0);
        }
      }
      
      .gooey-nav-item {
        position: relative;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        contain: layout style;
        z-index: 1;
      }
      
      .gooey-nav-item.active {
        color: #1a1a1a;
        text-shadow: none;
      }
      
      .gooey-nav-item.active::after {
        opacity: 1;
        transform: scale(1);
      }
      
      .gooey-nav-item::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.95);
        opacity: 0;
        transform: scale(0);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
      }
      
      .gooey-nav-link {
        display: block;
        text-decoration: none;
        color: inherit;
        outline: none;
        white-space: nowrap;
        position: relative;
        z-index: 1;
      }
      
      .gooey-nav-link:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.8);
        outline-offset: 2px;
      }
      
      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        .gooey-filter,
        .gooey-nav-item,
        .gooey-nav-item::after,
        .gooey-filter::after {
          transition: none;
        }
        
        .gooey-particle {
          display: none;
        }
      }
    `,
    }),
    []
  );

  return (
    <>
      <style dangerouslySetInnerHTML={memoizedStyles} />
      <div className="gooey-nav-container" ref={containerRef}>
        <nav className="flex relative">
          <ul
            ref={navRef}
            className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-6 list-none p-0 px-2 md:px-3 m-0 relative"
            style={{
              color: "white",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            {items.map((item, index) => (
              <li
                key={`${item.href}-${index}`}
                className={`gooey-nav-item py-[0.4em] px-[0.7em] md:py-[0.5em] md:px-[0.8em] rounded-full text-white text-xs sm:text-sm md:text-base cursor-pointer ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, index)}
              >
                <Link
                  href={item.href}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="gooey-nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`gooey-filter ${isAnimating ? "active" : ""}`}
          style={{
            left: `${filterPosition.left}px`,
            top: `${filterPosition.top}px`,
            width: `${filterPosition.width}px`,
            height: `${filterPosition.height}px`,
          }}
        >
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="gooey-particle"
              style={
                {
                  "--start-x": `${particle.startX}px`,
                  "--start-y": `${particle.startY}px`,
                  "--end-x": `${particle.endX}px`,
                  "--end-y": `${particle.endY}px`,
                  "--duration": `${particle.time}ms`,
                  "--scale": `${particle.scale}`,
                  "--particle-color": `var(--color-${particle.color})`,
                  "--rotate": `${particle.rotate}deg`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GooeyNav;
