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
                <li><a href="https://github.com/Bokdem" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
                <li><a href="https://www.linkedin.com/in/mathijs-de-bok-58b90866/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a></li>
                <li><a href="https://stackoverflow.com/users/2067808/bokdem" target="_blank" rel="noreferrer"><svg aria-hidden="true" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="currentColor"></path><path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="currentColor"></path></svg></a></li>
                <li><a href="https://www.untappd.com/user/Bokdem" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                        <g fill="currentColor">
                            <path d="M76.1 468 c-29.4 -6.2 -58.1 -27.7 -71.2 -53.5 -4 -7.9 -4.1 -8.5 -3.8 -16.1 0.3 -5.6 1 -9.1 2.5 -11.9 2.4 -4.5 124.6 -175.4 130.7 -182.8 5.4 -6.6 13.4 -12 32 -21.8 18 -9.5 18.7 -10.1 42.1 -35.9 8.7 -9.6 30.8 -33 49 -51.9 20.5 -21.4 33.5 -35.6 34.1 -37.5 0.6 -1.8 1.8 -3.2 3 -3.4 3.4 -0.7 4.5 -2.3 4.5 -6.5 l0 -4 4.5 0.6 c12.3 1.3 32.5 17.3 32.5 25.6 0 1.6 -0.8 2.3 -3 2.8 -3.4 0.6 -5.3 3.3 -4.3 5.9 0.4 1.2 -0.3 2.5 -2.5 4.3 -2.2 1.8 -8.4 12.8 -21.3 38.1 -18.5 36.2 -27 52.4 -41.1 77.8 -12 21.6 -12.3 22.4 -16.2 45.3 -3.4 20.1 -5.6 27.9 -9.9 34.9 -2.8 4.6 -125 175.3 -129.2 180.5 -5 6.2 -12.4 9.8 -20.9 10.1 -3.9 0.2 -9.1 -0.1 -11.5 -0.6z"/>
                            <path d="M417.4 467.9 c-9.4 -2.7 -9.7 -3 -72.6 -90.9 -71.6 -99.9 -70.9 -98.9 -74.2 -106.7 -5.3 -12.6 -6.9 -32.5 -3.4 -43.3 0.6 -1.9 5.1 -10.7 10.1 -19.5 4.9 -8.8 13.6 -24.9 19.4 -35.8 5.8 -10.8 10.8 -19.9 11.2 -20.2 0.4 -0.2 4.3 3.7 8.7 8.6 9.1 10.4 13.5 13.6 33.3 23.9 24.1 12.6 18.7 6.3 92.3 109 35.6 49.8 65.6 92.1 66.6 94 1.2 2.6 1.7 5.9 1.7 12.5 0 8.5 -0.2 9.4 -3.8 15.8 -10.3 18.8 -25.6 33.6 -44.4 43.1 -16.8 8.6 -35 12.4 -44.9 9.5z"/>
                            <path d="M198.5 102.9 c-6.7 -13.5 -9.9 -18.8 -12.3 -20.7 -2.4 -1.8 -3.2 -3.1 -2.8 -4.5 0.8 -3 -1 -5.4 -4.4 -6 -11.6 -2.4 13.4 -26.6 29.4 -28.4 l4.5 -0.5 0.3 4.2 c0.2 2.9 0.9 4.6 2.1 5.1 0.9 0.5 2.5 1.3 3.5 1.8 0.9 0.4 1.9 1.9 2 3.2 0.2 1.5 4.9 7 11.9 14.1 10.5 10.6 11.4 11.9 10.2 13.5 -2.6 3.3 -34.3 36.3 -34.9 36.3 -0.3 0 -4.6 -8.2 -9.5 -18.1z"/>
                        </g>
                    </svg>
                </a></li>
            </ul>
        </header>
        </>
    )
}