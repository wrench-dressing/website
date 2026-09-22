import { useEffect, useRef, useState } from "react";
import { sponsors } from "@/data/sponsors";

// Two identical strips slide left at a constant speed; whichever one runs off
// the left edge jumps back out to the right. Every logo sits in a fixed-width
// slot, so the strip width is known up front instead of depending on when the
// SVGs finish loading - that timing is what made the old CSS marquee jump.
const SCROLL_SPEED = 50; // pixels per second
const STRIP_HEIGHT = 80; // pixels
const SLOT_PADDING = 16; // pixels either side of a logo
const OFF_SCREEN_BUFFER = 500; // keep this much strip past the right edge

const slotWidth = (sponsor: (typeof sponsors)[number]) => sponsor.scrollWidth + SLOT_PADDING * 2;
const setWidth = sponsors.reduce((total, sponsor) => total + slotWidth(sponsor), 0);

const repeatsForViewport = () => {
  if (setWidth === 0) return 1;
  const needed = (typeof window === "undefined" ? 1920 : window.innerWidth) + OFF_SCREEN_BUFFER;
  return Math.max(1, Math.ceil(needed / setWidth));
};

export const SponsorScroll = () => {
  const [repeats, setRepeats] = useState(repeatsForViewport);
  const strip1 = useRef<HTMLDivElement>(null);
  const strip2 = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  // Rebuild on resize so the strip always covers the window, debounced so a
  // drag doesn't re-run this on every frame
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setRepeats(repeatsForViewport()), 200);
    };

    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const stripWidth = setWidth * repeats;

  useEffect(() => {
    if (stripWidth === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos1 = 0;
    let pos2 = stripWidth;
    let lastTimestamp = performance.now();
    let frame: number;

    const animate = (timestamp: number) => {
      const elapsed = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!isPaused.current) {
        const move = SCROLL_SPEED * elapsed;
        pos1 -= move;
        pos2 -= move;

        // Send whichever strip has scrolled off the left edge back out to the right
        if (pos1 <= -stripWidth) pos1 += stripWidth * 2;
        if (pos2 <= -stripWidth) pos2 += stripWidth * 2;

        // If the two ever drift apart (a dropped frame, a tab coming back from
        // the background), pull the trailing one back against the leading one
        if (Math.abs(pos1 - pos2) > stripWidth + 10) {
          if (pos1 < pos2) pos1 = pos2 - stripWidth;
          else pos2 = pos1 - stripWidth;
        }

        if (strip1.current) strip1.current.style.transform = `translate3d(${pos1}px, 0, 0)`;
        if (strip2.current) strip2.current.style.transform = `translate3d(${pos2}px, 0, 0)`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [stripWidth]);

  if (sponsors.length === 0) {
    return null;
  }

  const strip = Array.from({ length: repeats }, () => sponsors).flat();

  const renderStrip = (ref: React.RefObject<HTMLDivElement>, offset: number) => (
    <div
      ref={ref}
      className="absolute top-0 left-0 flex items-center h-full"
      style={{ width: `${stripWidth}px`, transform: `translate3d(${offset}px, 0, 0)`, willChange: "transform" }}
    >
      {strip.map((sponsor, index) => (
        <a
          key={`${sponsor.name}-${index}`}
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center flex-shrink-0 h-full"
          style={{ width: `${sponsor.scrollWidth}px`, padding: `0 ${SLOT_PADDING}px` }}
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            draggable={false}
            className="w-full h-full object-contain"
          />
        </a>
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-card border-y-2 border-team-blue overflow-hidden">
      <div
        className="relative overflow-hidden w-full"
        style={{ height: `${STRIP_HEIGHT}px` }}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        {renderStrip(strip1, 0)}
        {renderStrip(strip2, stripWidth)}
      </div>
    </section>
  );
};
