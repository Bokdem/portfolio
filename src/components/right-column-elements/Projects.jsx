import ExperienceBlock from "../ExperienceBlock";
import data from "../../json-data/data-projects.js";

function Projects() {
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
                <span className="title-number">04</span><h3 className="section-title">Projects</h3><span className="title-indicator"></span>
                    <ul>
                        {experienceblocks}
                    </ul>
                </div>
                <div id="projects" className="projects"></div>
                <div id="experiments" className="experiments"></div>
            </>
        )
}

export default Projects;

