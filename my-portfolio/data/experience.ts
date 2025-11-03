import type { Experience } from "@/types/Experience";

export const experiences: Experience[] = [
  {
    id: "attolabs",
    role: "Technical Business Analyst",
    company: "Attolabs",
    location: "Istanbul, Turkey (Remote)",
    start: "May 2023",
    end: "Apr 2024",
    bullets: [  "Collaborated with stakeholders to gather, analyze, and document functional and technical requirements.",
                "Assisted the development team by translating business needs into clear technical specifications.",
                "Conducted system analysis and supported process optimization to enhance business efficiency.",
                "Facilitated communication between business and technical teams, ensuring alignment on project goals.",
                "Created detailed documentation, including case studies, process flows, and technical requirements.",
                "Assisted in testing and validation to ensure developed solutions met business expectations."
    ],
    stack: ["Business Analysis","Process Modeling","Jira","Figma" ],
  },
  {
    id: "near-east",
    role: "Software Developer",
    company: "Near East Technology",
    location: "Nicosia, North Cyprus",
    start: "Sep 2020",
    end: "Dec 2024",
    bullets: [
      "Developed web applications and optimized business processes for the banking sector using IBM Process Designer.",
      "Designed and implemented scalable solutions that enhanced operational workflows.",
      "Optimized database schemas and improved performance using Oracle.",
      "Collaborated with stakeholders to gather, analyze, and document technical requirements.",
      "Facilitated communication between business and technical teams, ensuring project alignment and delivery quality.",
    ],
    stack: ["IBM Process Designer", "JavaScript", "MySQL"],
  },
  {
    id: "highlevel",
    role: "Junior Software Engineer",
    company: "High Level Software Ltd",
    location: "Nicosia, North Cyprus",
    start: "Oct 2019",
    end: "Aug 2020",
    bullets: [
      "Developed a JavaFX web application for school course registration management.",
      "Created an XML data parser to auto-generate database schemas.",
      "Implemented an image processing system to extract numeric data from images and store it in a database.",
    ],
    stack: ["Java", "JavaFX", "MySQL", "Image Processing","Python","OpenCV"],
  },
  {
    id: "freelance",
    role: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    start: "2019",
    end: "Present",
    bullets: [
      "Designed and developed custom Shopify and WordPress websites for clients.",
      "Built responsive front-end experiences and optimized backend logic.",
      "Delivered creative and functional solutions for various industries.",
    ],
    stack: ["Shopify", "WordPress", "React", "Next.js", "Node.js", "TypeScript"],
  },
];
