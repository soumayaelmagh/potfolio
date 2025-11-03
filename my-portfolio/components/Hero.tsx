"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useAnimationFrame,
  useMotionTemplate,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  // Detect coarse pointer (touch/mobile) to avoid cursor tracking there
  const [isCoarse, setIsCoarse] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      setIsCoarse(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  // Mouse position (raw), then smoothed springs for main spotlight
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.25 });

  // Trail/after-glow: a second pair of springs with softer/laggier response
  const tx = useSpring(rawX, { stiffness: 70, damping: 18, mass: 0.6 });
  const ty = useSpring(rawY, { stiffness: 70, damping: 18, mass: 0.6 });

  // Enable spotlight only on desktop + not reduced motion
  const enableSpotlight = !prefersReduced && !isCoarse;

  // === Dynamic hue cycle (0..360). Disabled under reduced motion.
  const hue = useMotionValue(48); // start golden
 useAnimationFrame((t) => {
  if (prefersReduced) return;
  hue.set((t / 300) % 360);
});

  // Build spotlight gradients in HSL for smooth hue shifts
  // Knobs (tweak to taste)
  const R_MAIN = 420; // px
  const SAT = 92; // %
  const L1 = 62; // center lightness
  const L2 = 50; // outer lightness
  const A1 = 0.48; // center alpha
  const A2 = 0.20; // outer alpha
  const STOP1 = 44; // %
  const STOP2 = 82; // %


  // Main spotlight (stronger)
  const spotlight = useMotionTemplate`
  radial-gradient(420px circle at ${x}px ${y}px,
    hsl(${hue} 92% 62% / 0.48),
    hsl(${hue} 92% 50% / 0.20) 44%,
    rgba(0,0,0,0) 82%)
`;

  // Trail spotlight (bigger, softer, lower alpha)
  const trail = useMotionTemplate`
  radial-gradient(520px circle at ${tx}px ${ty}px,
    hsl(${hue} 92% 62% / 0.20),
    hsl(${hue} 92% 50% / 0.10) 45%,
    rgba(0,0,0,0) 85%)
`;

  // Mouse handlers (desktop only)
  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableSpotlight) return;
      const r = e.currentTarget.getBoundingClientRect();
      rawX.set(e.clientX - r.left);
      rawY.set(e.clientY - r.top);
    },
    [enableSpotlight, rawX, rawY]
  );

  const onLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableSpotlight) return;
      const r = e.currentTarget.getBoundingClientRect();
      rawX.set(r.width / 2);
      rawY.set(r.height / 2);
    },
    [enableSpotlight, rawX, rawY]
  );

  // Center spotlight on mount (desktop)
  useEffect(() => {
    if (!enableSpotlight) return;
    rawX.set(window.innerWidth / 2);
    rawY.set(window.innerHeight / 2);
  }, [enableSpotlight, rawX, rawY]);

  // Shiny name only if not reduced
  const nameClass =
    "bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-[length:200%_100%] bg-clip-text text-transparent " +
    (prefersReduced ? "" : "animate-shine");

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden"
      aria-label="Intro"
    >
      {/* Designer blobs (motion-safe respects reduced motion) */}
      <div className="absolute -top-36 -left-36 w-[420px] h-[420px] bg-purple-600 rounded-full blur-[150px] opacity-50 motion-safe:animate-blob" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-blue-500 rounded-full blur-[150px] opacity-50 motion-safe:animate-blob motion-safe:animation-delay-2000" />
      <div className="absolute top-[40%] left-[40%] w-[320px] h-[320px] bg-pink-500 rounded-full blur-[150px] opacity-40 motion-safe:animate-blob motion-safe:animation-delay-4000" />

      {/* Contrast veil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/60" />

      {/* Spotlight layers */}
      {enableSpotlight ? (
        <>
          {/* Softer, larger trail below */}
          <motion.div
            aria-hidden
            style={{ background: trail }}
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          />
          {/* Stronger main spot above */}
          <motion.div
            aria-hidden
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
          />
        </>
      ) : (
        // Mobile/touch or reduced motion: static centered glow with slow hue cycle (if not reduced)
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(${R_MAIN}px circle at 50% 50%,
              hsla(48, ${SAT}%, ${L1}%, ${A1}),
              hsla(48, ${SAT}%, ${L2}%, ${A2}) ${STOP1}%,
              rgba(0,0,0,0) ${STOP2}%)`,
            mixBlendMode: "soft-light",
          }}
        />
      )}

      {/* Content */}
      <motion.h1
        className="relative z-10 text-5xl md:text-7xl font-bold tracking-tight"
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Hi, I’m <span className={nameClass}>Soumaya</span>
      </motion.h1>

      <motion.p
        className="relative z-10 mt-4 text-lg md:text-2xl text-gray-300"
        initial={prefersReduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReduced ? 0 : 0.1, duration: 0.6 }}
      >
        Software Developer · Creative Builder · Problem Solver
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={prefersReduced ? undefined : { scale: 1.06 }}
        whileTap={prefersReduced ? undefined : { scale: 0.97 }}
        className="relative z-10 mt-8 inline-block px-7 py-3 rounded-full font-medium bg-yellow-400 text-black shadow-lg"
      >
        View My Work
      </motion.a>
    </section>
  );
}
