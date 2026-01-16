import { useState } from "react";
import FormattedDate from "../FormattedDate";
import TitleLink from "../TitleLink";
import Picture from "../Picture";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    title: sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;

    return (
        <div id={SECTION_ID} className="scroll-m-14">
            <div className="text-primaryAccent font-medium px-2">{sectionTitle}</div>
            {
                data.map(({
                    date = "",
                    title = "",
                    link = "",
                    materials = [],
                    descriptions = [],
                    techs = [],
                    picture = ""
                }, index) => (
                    <div
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
                        className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                    >
                        <div>
                            <FormattedDate isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} >{date}</FormattedDate>
                            <Picture picture={picture} title={title} />
                        </div>

                        <div className="grid gap-y-4">
                            <TitleLink isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                            {
                                materials.length > 0 ?
                                    <div className="flex gap-x-4 text-xl items-center">
                                        {
                                            materials.map((item, index) => (
                                                <Material key={`${item}-material-${index}`} icon={item.type} link={item.link} />
                                            ))
                                        }
                                    </div>
                                    : null
                            }

                            {
                                descriptions.map((item, index) => (
                                    <Description key={`${item}-description-${index}`} description={item} />
                                ))
                            }

                            {
                                techs.map((item, index) => (
                                    <Tech key={`${item}-tech-${index}`} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} data={item} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContentContainer;