export default function LeftColumn() {
    return (
        <>
        <header className="left-column">
            <div className="header-top">
                <h1 className="main-header">Mathijs de Bok</h1>
                <h3>Front End Developer</h3>
                <p className="main-content">I build accessible, user friendly products and digital experiences for the web.</p>
                <nav className="mini-menu" id="navbar">
                    <ul>
                        <li>
                            <a href="#about">
                                <span className="nav-indicator" data-to-scrollspy-id="about"></span><span className="nav-text">About</span>
                            </a>
                        </li>
                        <li>
                            <a  href="#tech-stack">
                                <span className="nav-indicator" data-to-scrollspy-id="tech-stack"></span><span className="nav-text">Tech stack</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                <span className="nav-indicator" data-to-scrollspy-id="experience"></span><span className="nav-text">Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <span className="nav-indicator" data-to-scrollspy-id="projects"></span><span className="nav-text">Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experiments">
                                <span className="nav-indicator" data-to-scrollspy-id="experiments"></span><span className="nav-text">Mini experiments</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className="header-bottom">
                <li>hi<img src="" alt="" /></li>
                <li>hi<img src="" alt="" /></li>
                <li>hi<img src="" alt="" /></li>
            </ul>
        </header>
        </>
    )
}