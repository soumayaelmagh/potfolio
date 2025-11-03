import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "nerdicity",
    title: "NERDICITY",
    tagline: "Modern e-commerce experience",
    description:
      "A storefront with custom shipping + optimized checkout.",
    image:
      "https://res.cloudinary.com/df8l2xqy2/image/upload/v1762035374/logo_grc5q1.png",
    tech: ["Vanilla JS", "HTML", "CSS", "Firebase","Paystack", "Node"],
    links: { live: "https://www.nerdcity.store/", github: "https://github.com/soumayaelmagh/nerdcity" }
  },
  {
    id: "wasila-tech",
    title: "Wasila Tech",
    tagline: "Learning platform",
    description:
      "Bilingual LMS with protected streaming and course authoring.",
    image:
      "https://res.cloudinary.com/df8l2xqy2/image/upload/v1762035360/HDLOGO_szs0lv.jpg",
    tech: ["WordPress", "Tutor LMS", "Stripe", "TranslatePress"],
    links: { live: "https://wasila.tech/en/", }
  },
   {
    id: "health360",
    title: "Health 360",
    tagline: "Educational platform",
    description:
      "Bilingual LMS with protected streaming and course authoring.",
    image:
      "https://res.cloudinary.com/df8l2xqy2/image/upload/v1762090929/Screenshot_2025-11-02_at_14.40.31_jecgfa.png",
    tech: ["WordPress", "Tutor LMS", "Stripe", "TranslatePress"],
    links: { live: "https://healthx360.com/", github: "https://github.com/soumayaelmagh/healthX360" }
  },
  {
    id: "hajari-minerals",
    title: "Hajari Minerals",
    tagline: "corporate B2B platform",
    description:
      "Mining Integrity. Delivering Value.",
    image:
      "https://res.cloudinary.com/df8l2xqy2/image/upload/v1762093262/logo_nunded.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS",],
    links: { live: "https://wasila.tech/en/", github:"https://..."  }
  },
  {
    id: "johnson-construction",
    title: "Micheal Johnson Construction",
    tagline: "corporate B2B platform",
    description:
      "Micheal Johnson Construction is an Arizona-based design and build firm specializing in innovative residential, commercial, and hospitality projects.",
    image:
      "https://res.cloudinary.com/df8l2xqy2/image/upload/v1762098375/Screenshot_2025-11-02_at_16.45.17_xamtvk.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS",],
    links: { live: "https://johnnsonmichealconstruction.com/", github:"https://..."  }
  },
];
