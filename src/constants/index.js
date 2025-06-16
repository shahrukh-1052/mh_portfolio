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
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: fullstack,
  },
  {
    title: "Proficient in Python",
    icon: java,
  },
  {
    title: "Cyber Security Enthusiast",
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
    name: "python",
    icon: typescript,
  },
  {
    name: "Django",
    icon: reactjs,
  },
/*   {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "java",
    icon: tailwind,
  },
  {
    name: "c",
    icon: nodejs,
  },
/*   {
    name: "MongoDB",
    icon: mongodb,
  }, */
  {
    name: "AWS",
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
  title: "Generative AI Virtual Internship",
  company_name: "AICTE Eduskills + Google Cloud",
  icon: walmart,
  iconBg: " #EAF6FF",
  date: "Feb 2024 – March 2024",
  points: [
    "Completed a hands-on virtual internship on Generative AI under AICTE Eduskills, powered by Google Cloud",
    "Explored foundational and advanced concepts in LLMs, Prompt Engineering, and model fine-tuning",
    "Gained practical skills in deploying and experimenting with generative models using Google Cloud tools",
    "Built a strong understanding of modern AI applications and ethical considerations in GenAI systems"
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
    name: "Bank Management System",
    description:
      "A secure Python-MySQL application that enables users to manage accounts, perform transactions, and track banking activities via a clean command-line interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: finly,
    source_code_link: "https://github.com/shahrukh-1052/BANKING-MANAGEMENT-SYSTEM",
  },
  {
    name: "Priority Planner",
    description:
      "A Django-based web app that helps users organize and prioritize tasks efficiently with deadline tracking, user authentication, and a responsive UI.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "html/css/bootstrap",
        color: "orange-text-gradient",
      }
    ],
    image: calculator,
    source_code_link: "https://github.com/shahrukh-1052/PRIORITY_PLANNER",
    live_demo_link: "https://priority-planner-chi.vercel.app/",
  },
  {
    name: "Password Manager",
    description:
      "A secure password management tool built in Python to help users generate strong passwords, assess password strength, and learn modern security practices to guard against digital threats.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html/css/bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: paint,
    source_code_link: "https://github.com/shahrukh-1052/PASSWORD_MANAGER",
    live_demo_link: "https://shahrukh-1052.github.io/SecurePasswords-Hub/",
  },
];

export { services, technologies, experiences, projects };
