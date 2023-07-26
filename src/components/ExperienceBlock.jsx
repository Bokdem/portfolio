export default function ExperienceBlock(props) {
    const splitTags = props.experience.tags.split(/,/);
    const tags = splitTags.map(tag => {
        return (
            <span className="experience-block--tag" key={tag}>{tag}</span>
        )
    })

    return (
        <>
            <li className="experience-block--item">
                <div className="experience-block--date">{props.experience.dateMonths}<br />{props.experience.dateYears}</div>
                <div className="experience-block--content">
                    <h3>{props.experience.title}</h3>
                    <h4>{props.experience.company}</h4>
                    <p>{props.experience.description}</p>
                    <div className="experience-block--tags">
                        {tags}
                    </div>
                </div>
            </li>
        </>
    )
}