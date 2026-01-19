// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CertITS from "../assets/ITS-Cert.jpg";
import CertDepa from "../assets/depaCert.jpg";
// import depaIcon from "../assets/depa-logo.ico";
// import depaLogo from "/depa-logo.png";

// const websi = {
//     icon: depaLogo,
//     className: "w-10 h-10 rounded-sm",
// };

export const data = [
    {
        date: "22/12/2025",
        title: "IT Specialist - Cybersecurity",
        descriptions: [
            'Issued by Certiport, a Pearson VUE business.',
        ],
        picture: CertITS,
    },
    {
        date: "13/1/2026",
        title: "DEPA Penetration Tester Certification ",
        descriptions: [
            'Online training for 10 days (60 hours) with hands-on workshops, covering the full spectrum of VAPT, Threat Hunting, SIEM, and security tools.',
            'Focuses on building technical skills in vulnerability discovery and management, network security protection, the use of international standard security tools, and the integration of knowledge in programming, network security, Linux, cloud computing, and incident response.',
            'Issued by Digital Economy Promotion Agency (depa) of Thailand.'
        ],
        picture: CertDepa,
    },
];
