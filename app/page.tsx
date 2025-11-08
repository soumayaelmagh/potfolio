import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
import Contact from "@/components/Contact";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
