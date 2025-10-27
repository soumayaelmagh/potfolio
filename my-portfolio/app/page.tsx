"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";


export default function Home() {
const particlesInit = async (engine: Engine): Promise<void> => {
  await loadFull(engine);
};

const particlesLoaded = async (container?: Container): Promise<void> => {
  console.log("Particles loaded:", container);
};

  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans relative">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: "#0a0a0a" },
          fpsLimit: 60,
          particles: {
            color: { value: "#facc15" }, // yellow particles
            links: {
              enable: true,
              color: "#facc15",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
      {/* Blurred Background Blobs with Animation */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-pink-500 rounded-full blur-[150px] opacity-40 animate-blob animation-delay-4000"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/60 z-0"></div>

      {/* Hero Content */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-purple-400">Soumaya</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-300 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Developer • Creative Builder • Problem Solver
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 bg-purple-400 text-black rounded-full font-medium shadow-lg relative z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.button>
    </section>



      {/* About Me */}
     <motion.section
  className="px-8 py-20 max-w-4xl mx-auto text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl text-purple-400 font-semibold mb-6">About Me</h2>
  <p className="text-gray-300 text-lg leading-relaxed">
    <Typewriter
      words={[
        " Passionate Software Engineer with 5 years of hands-on experience in the software development industry. I’m an open-minded and adaptable professional who thrives on continuous learning, growth,and staying updated with the latest technologies. I enjoy taking on challenges andembracing change. I’m always looking to expand my skills, collaborate on exciting projects, and deliver high-quality solutions that make a realimpact."
        ]}
      typeSpeed={40} // speed of typing
      cursor={true}
    />
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
  <h2 className="text-3xl font-semibold mb-10 text-center">Featured Projects</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((project) => (
      <motion.div
  key={project}
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg"
>
  {/* Project Image */}
  <Image
    src={`https://res.cloudinary.com/your-cloud-name/image/upload/v12345/project${project}.png`}
    alt={`Project ${project}`}
    width={600}
    height={400}
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-4">
    <h3 className="text-2xl font-semibold text-white mb-2">Project {project}</h3>
    <p className="text-gray-300 text-sm mb-4">
      A creative web project built with modern technologies.
    </p>

    <div className="flex gap-4">
      <a
        href="#"
        className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition"
      >
        Live Demo
      </a>
      <a
        href="#"
        className="px-4 py-2 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition"
      >
        GitHub
      </a>
    </div>
  </div>
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
          className="px-6 py-3 bg-purple-400 text-black rounded-full font-medium shadow-lg hover:scale-105 inline-block"
        >
          Say Hello
        </a>
      </motion.section>
    </main>
  );
}
