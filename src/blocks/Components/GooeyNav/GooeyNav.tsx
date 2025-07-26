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

export interface GooeyNavProps {
  items: GooeyNavItem[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);
  const [filterPosition, setFilterPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

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

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>, index: number) => {
      if (activeIndex === index) return;

      const liEl = e.currentTarget;
      setActiveIndex(index);
      updateFilterPosition(liEl);
    },
    [activeIndex, updateFilterPosition]
  );

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

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateFilterPosition(activeLi);
    }

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
    };
  }, [activeIndex, updateFilterPosition]);

  const memoizedStyles = useMemo(
    () => ({
      __html: `
      :root {
        --color-1: #8B5CF6; /* Purple */
        --color-2: #3B82F6; /* Blue */
        --color-3: #FFFFFF; /* White */
        --color-4: #000000; /* Black */
      }
      
      .gooey-nav-container {
        contain: layout style;
        isolation: isolate;
        position: relative;
        z-index: 10;
      }

      .gooey-nav-ul {
        background: linear-gradient(to right, rgba(20, 0, 40, 0.8), rgba(0, 10, 30, 0.8)); /* Darker, more distinct gradient */
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      }
      
      .gooey-filter {
        position: absolute;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        contain: layout style;
        opacity: 1;
        background: linear-gradient(to right, var(--color-1), var(--color-2));
        border-radius: 9999px;
      }
      
      .gooey-filter::before {
        content: "";
        position: absolute;
        inset: -20px;
        z-index: -1;
        background: transparent;
      }
      
      /* Removed .gooey-filter::after and .gooey-filter.active::after as they are no longer needed */
      
      /* Removed .gooey-particle and its keyframes */
      
      .gooey-nav-item {
        position: relative;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        contain: layout style;
        z-index: 1;
        color: var(--color-3);
        padding: 0.4em 0.7em;
        border-radius: 9999px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }
      
      .gooey-nav-item:hover {
        color: var(--color-3); /* White text on hover */
        background: linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2)); /* A subtle purple/blue gradient hover */
        transform: translateY(-3px) scale(1.02); /* More pronounced lift and slight scale */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Stronger shadow */
      }

      .gooey-nav-item.active {
        color: var(--color-4); /* Black text when active */
        text-shadow: none;
        background: linear-gradient(to right, var(--color-3), rgba(255,255,255,0.9)); /* Solid white gradient for active */
        transform: translateY(-2px); /* Maintain a slight lift */
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); /* Very pronounced shadow */
      }
      
      .gooey-nav-item.active::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 9999px;
        background: transparent;
        opacity: 0;
        transform: scale(1);
        transition: none;
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
        outline: 2px solid var(--color-3);
        outline-offset: 2px;
      }
      
      @media (prefers-reduced-motion: reduce) {
        .gooey-filter,
        .gooey-nav-item,
        .gooey-nav-item::after {
          transition: none !important;
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
            className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-6 list-none p-0 m-0 relative gooey-nav-ul"
          >
            {items.map((item, index) => (
              <li
                key={`${item.href}-${index}`}
                className={`gooey-nav-item text-xs sm:text-sm md:text-base cursor-pointer ${activeIndex === index ? "active" : ""}`}
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
          className={`gooey-filter`}
          style={{
            left: `${filterPosition.left}px`,
            top: `${filterPosition.top}px`,
            width: `${filterPosition.width}px`,
            height: `${filterPosition.height}px`,
          }}
        />
      </div>
    </>
  );
};

export default GooeyNav;
