/**
 * Sample project data for the portfolio
 * Replace this with your actual projects
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "MongoDB",
    ],
    imageUrl: "/projects/ecommerce.jpg",
    liveUrl: "https://example-ecommerce.vercel.app",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    imageUrl: "/projects/taskapp.jpg",
    liveUrl: "https://example-tasks.netlify.app",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions, forecasts, and weather maps using external APIs.",
    technologies: ["Vue.js", "JavaScript", "Chart.js", "OpenWeather API"],
    imageUrl: "/projects/weather.jpg",
    liveUrl: "https://example-weather.vercel.app",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: false,
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
  },
];
