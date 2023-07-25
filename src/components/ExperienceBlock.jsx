export default function ExperienceBlock(props) {
    const splitTags = props.experience.tags.split(/,/);
    const tags = splitTags.map(tag => {
        return (
            <span className="tags" key={tag}>{tag}</span>
        )
    })

    return (
        <>
            <li className="experience-block--item">
                <div className="experience-block--date">JULY - AUG 2017</div>
                <div className="experience-block--content">
                    <h4>{props.experience.title}</h4>
                    <p>{props.experience.description}</p>
                    {tags}
                </div>
            </li>
        </>
    )
}