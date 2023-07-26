export default function LeftColumn() {
    return (
        <>
        <div className="left-column">
            <h1 className="main-header">Mathijs de Bok</h1>
            <h3>Front End Developer</h3>
            <p className="main-content">I build accessible, user friendly products and digital experiences for the web.</p>
            <div className="mini-menu">
                <ul>
                    <li><a href="#top"><span className="nav-indicator"></span><span className="nav-text">About</span></a></li>
                    <li><a href="#top"><span className="nav-indicator"></span><span className="nav-text">Experience</span></a></li>
                    <li><a href="#top"><span className="nav-indicator"></span><span className="nav-text">Projects</span></a></li>
                    <li><a href="#top"><span className="nav-indicator"></span><span className="nav-text">Mini experiments</span></a></li>
                </ul>
            </div>
            <h3>Tech Stack</h3>
            <p><b>Programming Languages: </b>HTML, CSS, SASS, JavaSCript, Liquid, HubL</p>
            <p><b>Libraries & Frameworks: </b>React, TailwindCSS, BootStrap</p>
            <p><b>Tools & Platforms: </b>Git, GitHub, WordPress, Adobe, Affinity</p>
        </div>
        </>
    )
}