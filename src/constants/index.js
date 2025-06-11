import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  walmart,
  finly,
  calculator,
  paint,
  threejs,
  fullstack,
  devops,
  ai,
  java,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
    {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: fullstack,
  },
  {
    title: "Proficient in Java",
    icon: java,
  },
  {
    title: "DevOps Enthusiast",
    icon: devops,
  },
  {
    title: "Generative AI Explorer",
    icon: ai,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
/*   {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
/*   {
    name: "MongoDB",
    icon: mongodb,
  }, */
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
/*   {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
{
  title: "Software Engineering Virtual Experience",
  company_name: "Walmart Global Tech",
  icon: walmart,
  iconBg: "#0071ce",
  date: "May 2025 - June 2025",
  points: [
    "Completed Walmart’s Software Engineering Virtual Job Simulation on Forage, gaining hands-on experience in software development best practices.",
    "Implemented scalable backend systems and contributed to API design decisions based on real-world engineering scenarios.",
    "Debugged, optimized, and tested code to meet performance and functionality standards aligned with Walmart’s engineering practices.",
    "Demonstrated strong problem-solving skills by completing tasks simulating actual developer challenges in a large-scale tech environment."
  ]
},
];

/* const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]; */

const projects = [
  {
    name: "Finly - Finance Management Web App",
    description:
      "Finly is a sleek, modern web application designed to help individuals take control of their personal finances.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: finly,
    source_code_link: "https://github.com/asarkar2210/finly-finance-webapp",
  },
  {
    name: "Simple Calculator Web App",
    description:
      "A lightweight React application that provides basic calculator functionality with a clean, responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/asarkar2210/simple-calculator-webapp",
  },
  {
    name: "Paint Application",
    description:
      "A simple desktop drawing application built with Python. Draw freehand with customizable brush sizes and colors, erase, add text, and save your creations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter-library",
        color: "green-text-gradient",
      },
      {
        name: "pillow-library",
        color: "pink-text-gradient",
      },
    ],
    image: paint,
    source_code_link: "https://github.com/asarkar2210/paint-application",
  },
];

export { services, technologies, experiences, projects };
