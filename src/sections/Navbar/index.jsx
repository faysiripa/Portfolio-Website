import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

const navs = [
    // { title: 'About', sectionId: 'About-section' },
    { title: 'Experience', sectionId: 'Experience-section' },
    { title: 'Project', sectionId: 'Project-section' },
    { title: 'Certifications', sectionId: 'Certifications-section' },
]

const Navbar = () => {
    // const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='flex flex-col font-semibold lg:mt-15'>
            {
                navs.map((item, index) => (
                    <div
                        key={`${item.sectionId}-${index}`}
                        onClick={() => handleClick(item.sectionId)}
                        // onMouseEnter={() => setIsMouseEnter({ [`${item.sectionId}-${index}`]: true })}
                        // onMouseLeave={() => setIsMouseEnter({ [`${item.sectionId}-${index}`]: false })}
                        className="cursor-pointer py-2"
                    >
                        {/* <FontAwesomeIcon className={`mr-2 text-primaryTitle ${isMouseEnter[`${item.sectionId}-${index}`] ? "" : "hidden"}`} icon={faArrowRight} /> */}
                        <FontAwesomeIcon className={`mr-2 text-primaryTitle animate-bounce -rotate-90`} icon={faArrowDown} />
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar;