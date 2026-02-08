import CertITS from "../assets/ITS-Cert.jpg";
import CertDepa from "../assets/depa-cert.jpg";
import CertExcellence from "../assets/excellence-cert.jpg";
import { faLink } from "@fortawesome/free-solid-svg-icons";
// import depaIcon from "../assets/depa-logo.ico";
// import depaLogo from "/depa-logo.png";

// const websi = {
//     icon: depaLogo,
//     className: "w-10 h-10 rounded-sm",
// };

export const data = [
    {
        date: "Dec 2025",
        title: "IT Specialist - Cybersecurity",
        materials: [
            {
                type: faLink,
                link: "https://www.credly.com/badges/15933735-016f-4fd1-b066-a3ddc9364d2d/linked_in_profile",
            },
        ],
        descriptions: ["Issued by Certiport, a Pearson VUE business."],
        picture: CertITS,
    },
    {
        date: "Oct 2025 - Dec 2025",
        title: "DEPA Penetration Tester Certification ",
        materials: [
            {
                type: faLink,
                link: "https://nextpentest.com/",
            },
        ],
        descriptions: [
            "Online training for 10 days (60 hours) with hands-on workshops, covering the full spectrum of VAPT, Threat Hunting, SIEM, and security tools.",
            "Focuses on building technical skills in vulnerability discovery and management, network security protection, the use of international standard security tools, and the integration of knowledge in programming, network security, Linux, cloud computing, and incident response.",
            "Issued by Digital Economy Promotion Agency (depa) of Thailand.",
        ],
        picture: CertDepa,
    },
    {
        date: "24 Mar 2025",
        title: "Certificate of Academic Excellence",
        descriptions: [
            "Has been awarded in the Academic Excellence Award from Faculty of Engineering In the academic year 2024 with GPA of 3.82/4.00 (6 Semesters).",
            "Recipient of the Academic Excellence Award for three consecutive years.",
        ],
        picture: CertExcellence,
    },
];
