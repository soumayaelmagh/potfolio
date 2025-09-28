// app/page.tsx
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-yellow-400">Soumaya</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Software Developer • Creative Builder • Problem Solver
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-full font-medium shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </section>
      <motion.section
          className="px-8 py-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // animate only once
        >
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m a passionate software developer with experience in building scalable
            web applications and creative digital solutions.
          </p>
        </motion.section>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-400 mt-2">
            Short description of the project goes here.
          </p>
        </motion.div>

    </main>
  );
}

