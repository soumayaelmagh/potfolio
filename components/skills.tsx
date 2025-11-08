"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import {useRef, useState } from "react";

/* ---------- Types & Data ---------- */
type Skill = { name: string; level: number; note?: string; icon?: string }; // level 0..100

const DATA: Record<string, Skill[]> = {
  Frontend: [
    { name: "React", level: 70, note: "Hooks, RSC", icon: "react" },
    { name: "Next.js", level: 90, note: "App Router, SEO", icon: "next" },
    { name: "Tailwind", level: 95, note: "Design systems", icon: "tailwind" },
    { name: "Framer Motion", level: 88, note: "Micro-interactions", icon: "framer" },
  ],
  Backend: [
    { name: "Node.js", level: 80, note: "REST, queues", icon: "node" },
    { name: "PostgreSQL/Oracle", level: 90, note: "Schema + tuning", icon: "db" },
    { name: "Prisma/TypeORM", level: 78, icon: "orm" },
    { name: "Auth/Payments", level: 90, note: "JWT, Stripe/Paystack", icon: "lock" },
  ],
  Tools: [
    { name: "Git/GitHub", level: 95, note: "Actions, monorepos", icon: "git" },
    { name: "Docker", level: 80, note: "Local envs", icon: "docker" },
    { name: "Shopify/WordPress", level: 90, note: "Apps & plugins", icon: "shop" },
    { name: "Figma", level: 50, note: "Handoff, prototypes", icon: "figma" },
  ],
};

/* ---------- Icon set (inline SVG, no extra deps) ---------- */
function SkillIcon({ id }: { id?: string }) {
  const common = "w-6 h-6";
  switch (id) {
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.3">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" />
          </g>
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path fill="#fff" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" opacity=".06"/>
          <path d="M13.5 16V8h1.5v8h-1.5ZM9 8h1.5v8H9V8Z" fill="#fff"/>
          <path d="m8 8 8 8" stroke="#fff" strokeWidth="1.5"/>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path
            d="M12 6c-3 0-4 2-4 2s1-1 3-1c2 0 3 1 4 2s2 2 4 2c3 0 4-2 4-2s-1 1-3 1c-2 0-3-1-4-2s-2-2-4-2Zm-8 6c-3 0-4 2-4 2s1-1 3-1c2 0 3 1 4 2s2 2 4 2c3 0 4-2 4-2s-1 1-3 1c-2 0-3-1-4-2s-2-2-4-2Z"
            fill="#38BDF8"
          />
        </svg>
      );
    case "framer":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M6 3h12v6H6L6 3Z" fill="#fff"/>
          <path d="M6 9h6l6 6H6V9Z" fill="#9999FF"/>
          <path d="M6 15h6v6l-6-6Z" fill="#7C7CFF"/>
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke="#84CC16" strokeWidth="1.3" />
          <path d="M8 10v4l4 2 4-2v-4l-4-2-4 2Z" fill="#84CC16" opacity=".8"/>
        </svg>
      );
    case "db":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#60A5FA" strokeWidth="1.2">
          <ellipse cx="12" cy="6" rx="7.5" ry="3.5" fill="#1e293b" />
          <path d="M4.5 6v12c0 2 6 3.5 7.5 3.5S19.5 20 19.5 18V6" />
          <path d="M4.5 12c0 2 6 3.5 7.5 3.5S19.5 14 19.5 12" />
        </svg>
      );
    case "orm":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#F59E0B" strokeWidth="1.3">
          <rect x="3.5" y="4" width="6.5" height="6.5" rx="1.2" />
          <rect x="14" y="4" width="6.5" height="6.5" rx="1.2" />
          <rect x="8.8" y="13.5" width="6.5" height="6.5" rx="1.2" />
          <path d="M7 7.25h10" />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#FDE68A" strokeWidth="1.3">
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V8a4 4 0 1 1 8 0v2" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className={common}>
          <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 14.5c0 .83-.67 1.5-1.5 1.5S10 17.33 10 16.5c0-.56.31-1.05.77-1.3v-3.4L9.5 10V8.5l2.5 1.5v5.2c.46.25.77.74.77 1.3Z" fill="#F97316"/>
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#38BDF8" strokeWidth="1.2">
          <rect x="3" y="10" width="4" height="3" />
          <rect x="7.5" y="10" width="4" height="3" />
          <rect x="12" y="10" width="4" height="3" />
          <rect x="7.5" y="7" width="4" height="3" />
          <path d="M4 14c0 3 3 5 8 5s8-2 8-5" />
        </svg>
      );
    case "shop":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="#22C55E" strokeWidth="1.2">
          <path d="M4 8h16l-1.5 10a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7L4 8Z" />
          <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={common}>
          <path d="M9 3h3a3 3 0 1 1 0 6H9V3Z" fill="#F24E1E"/>
          <path d="M9 9h3a3 3 0 1 1 0 6H9V9Z" fill="#FF7262"/>
          <path d="M9 15h3a3 3 0 1 1-3 3v-3Z" fill="#1ABCFE"/>
          <path d="M9 3v6H6a3 3 0 1 1 0-6h3Z" fill="#A259FF"/>
          <path d="M9 9v6H6a3 3 0 1 1 0-6h3Z" fill="#0ACF83"/>
        </svg>
      );
    default:
      return <div className={`${common} rounded-full bg-gray-700`} />;
  }
}

/* ---------- Component ---------- */
export default function Skills() {
  const tabs = Object.keys(DATA);
  const [active, setActive] = useState(tabs[0]);

  return (
    <motion.section
      id="skills"
      className="px-6 md:px-10 py-20 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Capabilities</h2>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-10">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative rounded-full px-4 py-2 text-sm md:text-base transition
                ${isActive ? "bg-yellow-400 text-black shadow" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}
              `}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {DATA[active].map((s, i) => (
          <SkillRing key={s.name} skill={s} delay={i * 0.08} />
        ))}
      </div>

      {/* Optional marquee */}
      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
        <motion.div
          className="flex gap-6 text-gray-400 whitespace-nowrap text-sm md:text-base"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {Array(2)
            .fill(0)
            .flatMap(() => Object.values(DATA).flat())
            .map((s, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-gray-800/60">
                {s.name}
              </span>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------- Skill Ring (with synced icon pulse) ---------- */

function SkillRing({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const target = skill.level;

  // Motion values
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 80, damping: 20 });
  const pct = useTransform(spring, (v) => Math.max(0, Math.min(100, v)));

  // Start animation when visible
  if (inView) mv.set(target);

  // Background conic gradient bound to pct
  const background = useTransform(pct, (v) => {
    const deg = v * 3.6;
    return `conic-gradient(#facc15 ${deg}deg, #1f2937 ${deg}deg)`; // yellow to slate
  });

  // Icon pulse & glow synced with progress
  const pulse = useTransform(pct, (v) => 1 + 0.06 * Math.sin((v / Math.max(1, target)) * Math.PI));
  const glow = useTransform(pct, (v) => {
    const remain = Math.max(0, target - v) / Math.max(1, target);
    const alpha = 0.35 * (1 - remain);
    const blur = 10 + (1 - remain) * 10;
    return `0 0 ${blur}px rgba(250,204,21,${alpha})`;
  });

  // Live number text
  const [display, setDisplay] = useState(0);
  useMotionValueEvent(pct, "change", (v) => setDisplay(Math.round(v)));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative rounded-2xl bg-gray-900/60 border border-gray-800 p-6 hover:border-yellow-400/40 hover:shadow-[0_0_24px_-6px_rgba(250,204,21,0.35)]"
    >
      {/* Skill icon ring */}
      <div className="mx-auto w-28 h-28 rounded-full grid place-items-center relative">
        {/* Outer ring */}
        <motion.div className="absolute inset-0 rounded-full" style={{ background }} />
        {/* Inner circle */}
        <div className="absolute inset-[10px] rounded-full bg-gray-950 border border-gray-800" />

        {/* Icon */}
        <motion.div
          className="relative z-10 grid place-items-center"
          style={{
            scale: prefersReduced ? 1 : pulse,
            boxShadow: prefersReduced ? undefined : glow,
          }}
        >
          <SkillIcon id={skill.icon} />
        </motion.div>
      </div>

      {/* Skill text */}
      <div className="mt-5 text-center">
        <div className="font-medium text-white">{skill.name}</div>
        {skill.note && <div className="text-xs text-gray-400 mt-1">{skill.note}</div>}

        {/* Percentage under note */}
        <div className="text-sm font-medium text-yellow-400 mt-3">
          {display}
          <span className="text-gray-400 ml-[2px]">%</span>
        </div>
      </div>

     
      
    </motion.div>
  );
}

