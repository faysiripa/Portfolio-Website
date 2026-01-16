import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-3 text-2xl'>
            <a href="https://github.com/faysiripa" target="_blank">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/faysiripa/" target="_blank">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} />
            </a>
            <a href="https://medium.com/@siripa.aung" target="_blank">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faMedium} />
            </a>
        </div>
    )
}

export default Contact;