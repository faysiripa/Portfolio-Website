import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { data } from "../../contents/header"

const Header = () => {
    const { name, title, caption, btnText, link } = data

    return (
        <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle font-semibold'>{name}</div>
            <div className='text-primaryAccent font-semibold'>{title}</div>
            <div className='text-sm w-5/6'>{caption}</div>
            <div className='mt-4'>
                <a href={link} target='_blank'>
                    <span className='rounded-md bg-primaryTitle text-gray-200 py-2 px-4'>
                        {btnText}
                        <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon icon={faArrowDown} className='animate-bounce'/></span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;