const Tech = ({ isHighlight, data }) => {
    return (
        <div>
            <div className="flex gap-x-2 text-sm">
                {
                    data.map((item, index) => (
                        <div key={`${item}-tech-${index}`} className={`bg-primarySubcontent px-2 py-1 rounded-md ${isHighlight ? "text-primaryTitle text-primaryTitle" : ""} `}>{item}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tech