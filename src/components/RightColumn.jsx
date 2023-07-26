import ExperienceBlock from "./ExperienceBlock";
import data from "../data.js"

export default function RightColumn() {
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
            <main id="content">
                <section id="about" className="about">
                    <h3 className="section-title">About</h3>
                    <p>
                        Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
                        <br /><br />
                        My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                        <br /><br />
                        When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
                    </p>
                </section>
                <section id="experience" className="experience">
                <h3 className="section-title">Experiences</h3>
                    <ul>
                        {experienceblocks}
                    </ul>
                </section>
                <section id="projects" className="projects"></section>
                <section id="experiments" className="experiments"></section>
                <p>Custom built in React using 'local' data fetching, component based UI, single page routing and more. Design credits go out to Brittany/c/</p>
            </main>
        </>
    )
}