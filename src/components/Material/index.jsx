import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ icon, link }) => {
    if (!link || link === '') {
        return null
    }

    return (
        <a href={link} target='_blank' className='hover:scale-110 transition-all'><FontAwesomeIcon icon={icon} /></a>
    )
}

export default Material