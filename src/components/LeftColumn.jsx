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
            </ul></div>
        </div>
        </>
    )
}