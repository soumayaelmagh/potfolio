export type Project = {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  image: string;        // remote url or /public path
  tech: string[];       // ["Next.js","Tailwind","Node"]
  links?: { live?: string; github?: string; caseStudy?: string };
};
