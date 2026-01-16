import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const data = [
    {
        date: "April’1 - Sep’30",
        title: "Manao Software - Quality Analyst Intern",
        materials: [
            { type: faGithub, link: "https://github.com/faysiripa/learn-automated-testing-py"}
        ],
        descriptions: [
            'Manual tested a food ordering web app and mobile app called “Manao Meals” using Proxyman.',
            'Automated tested the swag labs web app using Playwright with Python to create test scripts for testing.',
            'Collaborated with development teams to identify, report, and resolve bugs using Jira in Agile environment.',
        ],
        techs: [
            ["Playwright", "Python", "Proxyman", "Jira"],
        ],
    },
    {
        date: "2025",
        title: "International Engineering Design Challenge (IEDC 2025) in Noshiro, Japan",
        materials: [
            { type: faYoutube, link: "https://youtu.be/wP-MANVCDJQ?si=NY2zP1netu15GfGu" },
            { type: faMedium, link: "https://medium.com/@siripa.aung/fun-facts-from-workshop-experience-in-japan-dd888fa7834e"}
        ],
        descriptions: [
            'Conducted field research on local culture, nature, and wood industries in Noshiro City, Japan.',
            'Applied Design Thinking to develop a tourism promotional video.',
            'Collaborated with international students from Japan, Taiwan, and Thailand.'
        ],
        // techs: [
        //     ["KineMaster"], 
        // ],
    },
];
