import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className='mb-10'>
            <div className='flex justify-end'>
                <a href="https://github.com/faysiripa" target="_blank">
                    <span>
                        Powered by React and Tailwind
                        <FontAwesomeIcon className="ml-1" icon={faGithub} />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer;