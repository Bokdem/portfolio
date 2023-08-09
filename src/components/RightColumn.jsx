// import ExperienceBlock from "./ExperienceBlock";
import ScrollSpy from "react-ui-scrollspy";
import About from "./right-column-elements/About";
import TechStack from "./right-column-elements/TechStack";
import Experiences from "./right-column-elements/Experiences";
import Projects from "./right-column-elements/Projects";

export default function RightColumn() {
    // const experienceblocks = data.map( experience => {
    //     return (
    //         <ExperienceBlock
    //             key={experience.id}
    //             experience={experience}
    //         />
    //     )
    // })

    return (
        <>
            <main id="content">
            <ScrollSpy>
                <About />
                <TechStack />
                <Experiences />
                <Projects />
                <p>Make sure to keep an eye out on my GitHub which I will continue to update with more fun projects to level up my React (and overall FE) skills!<br /><em>Design credits go out to Brittany/c/</em></p>
            </ScrollSpy>
            </main>
        </>
    )
}