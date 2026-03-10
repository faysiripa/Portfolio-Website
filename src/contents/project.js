import { faGithub } from "@fortawesome/free-brands-svg-icons";
import picProductWeb from "../assets/crud-product-web.png";
import picWebBuilder from "../assets/web-builder.jpg";
import picBookWorm from "../assets/book-worm.jpg";
import picMaenak from "../assets/maenak-game.png";
import picDripper from "../assets/dripper.png";

export const data = [
    {
        date: "2026",
        title: "Book Review App",
        link: "",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/faysiripa/Book-Review-App",
            },
        ],
        descriptions: [
            "Built a full stack book review mobile app.",
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
        title: "Ecommerce Website",
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
        title: "Web Builder",
        link: "",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/faysiripa/Web-Builder",
            },
        ],
        descriptions: [
            "Built an AI-powered website builder with Gemini API, featuring live preview, downloadable export, and editable HTML code generation.",
        ],
        techs: [
            ["React", "Tailwind"], // frontend
        ],
        picture: picWebBuilder,
    },
    {
        date: "2023",
        title: "Dripper",
        link: "",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/faysiripa/E-Commerce-Coffee-Shop-Website",
            },
        ],
        descriptions: [
            "Developed an e-commerce website for a coffee shop using Laravel, MySQL, and DBeaver.",
            "Features: Auth, Product Catalog, Shopping Cart, and Order Summary.",
        ],
        techs: [
            ["Laravel", "MySQL", "DBeaver"], 
        ],
        picture: picDripper,
    },
    {
        date: "2023",
        title: "Maenak Game",
        link: "",
        materials: [
            {
                type: faGithub,
                link: "https://github.com/faysiripa/Maenak-Game",
            },
        ],
        descriptions: [
            "Developed a Java-based horror visual novel game using Object-Oriented Programming (OOP) principles.",
            "Features: Object Movement, Scoring System, Jump Scare Mechanics, and Random Object Spawning.",
        ],
        techs: [
            ["Java"], 
        ],
        picture: picMaenak,
    },
];
