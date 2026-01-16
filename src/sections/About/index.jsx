import { data } from "../../contents/about"

const About = () => {
    const { title, description } = data;

    return (
        <div id="About-section" className="space-y-4 px-2 scroll-m-14">
            <div className="text-primaryAccent font-medium">{title}</div>
            <div>{description}</div> 
        </div>
    )
}

export default About;