import ExperienceBlock from "../ExperienceBlock";
import data from "../../json-data/data-experiences.js";

function Experiences() {
    const experienceblocks = data.map( experience => {
        return (
            <ExperienceBlock
                key={experience.id}
                experience={experience}
            />
        )
    })

    return (
            <>
                <div id="experience" className="experience">
                <span className="title-number">03</span><h3 className="section-title">Experiences</h3><span className="title-indicator"></span>
                    <ul>
                        {experienceblocks}
                    </ul>
                </div>
                <div id="projects" className="projects"></div>
                <div id="experiments" className="experiments"></div>
            </>
        )
}

export default Experiences;