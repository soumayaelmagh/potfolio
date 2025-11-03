"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Experience
      </h2>
      <Timeline items={experiences} />
    </section>
  );
}

/* ---------------- Timeline ---------------- */

type Item = typeof experiences[number];

function Timeline({ items }: { items: Item[] }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { margin: "-10% 0px", once: true });
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative">
      {/* vertical line */}
      <motion.div
        ref={lineRef}
        aria-hidden
        className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-500/70 to-yellow-300/30 rounded-full"
        initial={{ scaleY: 0, originY: 0 }}
        animate={inView && !prefersReduced ? { scaleY: 1 } : { scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <ul className="space-y-8 md:space-y-10">
        {items.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({ item, index }: { item: Item; index: number }) {
  const cardRef = useRef<HTMLLIElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-15% 0px" });
  const prefersReduced = useReducedMotion();

  return (
    <li
      ref={cardRef}
      className="relative pl-12 md:pl-16"
      aria-label={`${item.role} at ${item.company} (${item.start} – ${item.end})`}
    >
      {/* dot */}
      <motion.span
        aria-hidden
        className="absolute left-4 md:left-6 mt-2 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400 ring-4 ring-yellow-400/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView && !prefersReduced ? { scale: 1, opacity: 1 } : { opacity: 1 }}
        transition={{ delay: 0.05 + index * 0.06, type: "spring", stiffness: 220, damping: 18 }}
      />

      {/* card */}
      <motion.div
        role="group"
        tabIndex={0}
        className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:border-yellow-400/40
                   hover:shadow-[0_0_24px_-6px_rgba(250,204,21,0.35)] focus:outline-none focus:ring-2
                   focus:ring-yellow-400/40 transition"
        initial={{ opacity: 0, y: 18 }}
        animate={inView && !prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.05 + index * 0.06, ease: "easeOut" }}
        whileHover={!prefersReduced ? { scale: 1.01 } : undefined}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg md:text-xl font-semibold">
            {item.role} <span className="text-yellow-400">@ {item.company}</span>
          </h3>
          <div className="text-sm text-gray-400">
            {item.start} — {item.end}
          </div>
        </div>

        {item.location && (
          <div className="text-sm text-gray-500 mt-1">{item.location}</div>
        )}

        <ul className="mt-3 list-disc list-inside space-y-1.5 text-gray-300">
          {item.bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">{b}</li>
          ))}
        </ul>

        {item.stack && item.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((t) => (
              <span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </li>
  );
}
