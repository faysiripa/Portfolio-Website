import { faFacebook, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const data = [
    {
        date: "Apr 2025 - Sep 2025",
        title: "Manao Software - Quality Analyst Intern",
        materials: [
            { type: faFacebook, link: "https://www.facebook.com/share/p/1DEtRv4pGR/"}
        ],
        descriptions: [
            'Manual tested a food ordering web app and mobile app called “Manao Meals” using Proxyman in more than 500+ test cases.',
            'Automated tested the swag labs web app using Playwright with Python to create test scripts for testing.',
            'Collaborated with development teams to identify, report, and resolve bugs using Jira in Agile environment.',
        ],
        techs: [
            ["Playwright", "Python", "Proxyman", "Jira"],
        ],
    },
    {
        date: "1 Sep 2025 - 6 Sep 2025",
        title: "International Engineering Design Challenge (IEDC 2025) in Noshiro, Japan",
        materials: [ 
            { type: faLink, link: "https://eng.cmu.ac.th/?p=48337" },
            { type: faFacebook, link: "https://www.facebook.com/share/p/17xrFapVnU/" },
            { type: faYoutube, link: "https://youtu.be/wP-MANVCDJQ?si=NY2zP1netu15GfGu" },
            { type: faMedium, link: "https://medium.com/@siripa.aung/fun-facts-from-workshop-experience-in-japan-dd888fa7834e"}
        ],
        descriptions: [
            'Conducted field research on local culture, nature, and wood industries in Noshiro City, Japan.',
            'Applied Design Thinking to develop a tourism promotional video.',
            'Collaborated with international students from Japan, Taiwan, and Thailand.'
        ],
        techs: [
            ["KineMaster"], 
        ],
    },
];
