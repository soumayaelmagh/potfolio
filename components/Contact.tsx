"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section id="contact" className="px-8 py-20 bg-gray-900 text-center"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7 }}>
      <h2 className="text-3xl font-semibold mb-6">Let’s Connect</h2>
      <p className="text-gray-400 mb-6">Interested in working together? Let’s build something amazing!</p>
      <a href="mailto:your.email@example.com"
         className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium shadow-lg hover:scale-105 inline-block">
        Say Hello
      </a>
    </motion.section>
  );
}
