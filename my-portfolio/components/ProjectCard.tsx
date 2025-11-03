"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, tagline, description, image, tech, links } = project;
  return (
    <motion.article whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 220 }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_-5px_rgba(250,204,21,.35)] transition-all">
      <Image src={image} alt={title} width={900} height={600}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
        {tagline && <p className="text-gray-300 text-sm mb-2">{tagline}</p>}
        <div className="flex gap-2 justify-center mb-3 flex-wrap">
          {tech.map(t => <span key={t} className="px-2 py-1 text-xs bg-gray-700 rounded-full text-gray-300">{t}</span>)}
        </div>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex gap-3">
          {links?.live && <a className="px-4 py-2 bg-yellow-400 text-black rounded-full font-medium hover:bg-yellow-300 transition" href={links.live} target="_blank">Live</a>}
          {links?.github && <a className="px-4 py-2 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition" href={links.github} target="_blank">GitHub</a>}
          {links?.caseStudy && <a className="px-4 py-2 border border-gray-400 text-gray-100 rounded-full hover:bg-gray-700/50 transition" href={links.caseStudy}>Case Study</a>}
        </div>
      </div>
    </motion.article>
  );
}
