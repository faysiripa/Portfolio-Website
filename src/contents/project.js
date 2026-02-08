import { faGithub } from "@fortawesome/free-brands-svg-icons";
import picProductWeb from "../assets/crud-product-web.png";
import picWebBuilder from "../assets/web-builder.jpg";
import picBookWorm from "../assets/book-worm.jpg";

export const data = [
    {
        date: "2026",
        title: "BookWorm",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/faysiripa/BookWorm",
            },
        ],
        descriptions: [
            "Build a full stack book review mobile app.",
            "Features: Auth, Home Feed, Create Post, Profile Screen, Delete Post, 4 instant themes, Web support, Logout.",
        ],
        techs: [
            ["React Native"], // frontend
            ["MongoDB", "Express", "Node"], // backend
        ],
        picture: picBookWorm,
    },
    {
        date: "2025",
        title: "Product Website",
        link: "https://mern-crash-course-v91l.onrender.com",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/faysiripa/CRUD-Product-Web",
            },
        ],
        descriptions: [
            "My first full stack website development project that serves as an opportunity for me to deepen my understanding of CRUD operations create, read, update, and delete products.",
        ],
        techs: [
            ["React", "Tailwind"], // frontend
            ["MongoDB", "Express", "Node"], // backend
        ],
        picture: picProductWeb,
    },
    {
        date: "2025",
        title: "WebBuilder",
        link: "",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/faysiripa/Web-Builder",
            },
        ],
        descriptions: [
            "Build an AI-Powered Website Builder using Gemini API. Can see live preview, download for export, and click show code in pattern of html file to copy or edit by yourself.",
        ],
        techs: [
            ["React", "Tailwind"], // frontend
        ],
        picture: picWebBuilder,
    },
];
