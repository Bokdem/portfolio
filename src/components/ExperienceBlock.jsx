export default function ExperienceBlock(props) {
    const splitTags = props.experience.tags.split(/,/);
    const contentTypeChecker = props.experience.dateMonths;

    const tags = splitTags.map(tag => {
        return (
            <span className="experience-block--tag" key={tag}>{tag}</span>
        )
    })

    return (
        <>
            <a className="experience-block--item-wrapper" href={props.experience.hrefLink} target="_blank">
            <li className="experience-block--item">

                {
                contentTypeChecker === "" ?
                <div className="experience-block--date"><img src={`${props.experience.thumbnail}`} /></div> :
                <div className="experience-block--date">{props.experience.dateMonths} {props.experience.dateYears}</div>
                }

                
                <div className="experience-block--content">
                    <h3>{props.experience.title}</h3>
                    <h4>{props.experience.company}</h4>
                    <p>{props.experience.description}</p>
                    <div className="experience-block--tags">
                        {tags}
                    </div>
                </div>
            </li>
            </a>
        </>
    )
}