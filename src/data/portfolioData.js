import {
    Code2,
    Database,
    Layers3,
    Server,
} from "lucide-react";

export const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

export const projects = [
    {
        number: "01",
        title: "Task Manager API",
        category: "BACKEND / API",
        description:
            "A production-style REST API for task management with authentication, authorization, validation, pagination, RBAC and centralized error handling.",
        stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Joi", "Swagger"],
        github: "https://github.com/El3sawy27/task-manager-api",
        live: "https://task-manager-api-production-5c2a.up.railway.app",
        accent: "burgundy",
    },
    {
        number: "02",
        title: "Nody's Gallery",
        category: "FULL-STACK / REAL-WORLD",
        description:
            "A full-stack gallery platform for a handmade wedding and event business, including product management, favorites, image handling and WhatsApp contact.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
        github: "https://github.com/El3sawy27/nodys-gallery",
        live: "https://nodys-gallery.mohamed29-elesawy.workers.dev/",
        accent: "rose",
    },
    {
        number: "03",
        title: "E-Commerce React App",
        category: "FRONTEND / REACT",
        description:
            "A responsive e-commerce interface built around reusable React components and predictable client-side state management.",
        stack: ["React", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion"],
        github: "https://github.com/El3sawy27/E-commerce-Website-Using-React",
        live: "https://el3sawy27.github.io/E-commerce-Website-Using-React/",
        accent: "neutral",
    },
];

export const skillGroups = [
    {
        title: "Frontend",
        icon: Code2,
        items: [
            "React",
            "Angular",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
        ],
    },
    {
        title: "Backend",
        icon: Server,
        items: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT",
            "MVC",
            "Validation",
            "Error Handling",
        ],
    },
    {
        title: "Database",
        icon: Database,
        items: ["MongoDB", "Mongoose", "MySQL · Basic"],
    },
    {
        title: "Tools",
        icon: Layers3,
        items: [
            "Git",
            "GitHub",
            "Postman",
            "Swagger",
            "Docker · Basic",
            "Vercel",
            "Railway",
        ],
    },
];

export const profileStats = [
    { value: "3+", label: "Years learning" },
    { value: "8+", label: "Projects built" },
    { value: "100%", label: "Driven to ship" },
];

export const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/El3sawy27",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/el3sawii/",
    },
];
