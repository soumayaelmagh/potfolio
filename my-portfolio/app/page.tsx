"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
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

      {/* About Me */}
      <motion.section
        className="px-8 py-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a passionate software developer with experience in building
          scalable web applications and creative digital solutions. I love
          blending technology with creativity to craft experiences that stand
          out.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="px-8 py-20 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">Project {project}</h3>
              <p className="text-gray-400 mt-2">
                Short description of the project goes here. Highlight the stack
                and unique features.
              </p>
              <a
                href="#"
                className="text-yellow-400 mt-4 inline-block hover:underline"
              >
                View Details →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="px-8 py-20 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["React", "Next.js", "Node.js", "TailwindCSS", "Oracle", "Shopify"].map(
            (skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1, rotate: -2 }}
                className="px-6 py-3 bg-gray-800 rounded-lg shadow-lg"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="px-8 py-20 bg-gray-900 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">Let’s Connect</h2>
        <p className="text-gray-400 mb-6">
          Interested in working together? Let’s build something amazing!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium shadow-lg hover:scale-105 inline-block"
        >
          Say Hello
        </a>
      </motion.section>
    </main>
  );
}
