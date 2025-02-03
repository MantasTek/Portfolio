import React from 'react'

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2>My Projects</h2>
            <div className="portfolio-grid">
                <div className="project-card">
                    <div className="project-image">
                        <img src="/image/project-placeholder.jpg" alt="Project 1" />
                    </div>
                    <div className="project-info">
                        <h3>Portfolio Website</h3>
                        <p>My personal portfolio website built with React and CSS showcasing my development journey.</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>CSS</span>
                        </div>
                        <a href="https://github.com/MantasTek/Portfolio" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="project-link">
                            View on GitHub
                        </a>
                    </div>
                </div>
                
                <div className="project-card">
                    <div className="project-image">
                        <img src="/image/project-placeholder.jpg" alt="Project 2" />
                    </div>
                    <div className="project-info">
                        <h3>Coming Soon</h3>
                        <p>Future .NET project placeholder. This space will be updated with my upcoming projects.</p>
                        <div className="project-tech">
                            <span>.NET</span>
                            <span>C#</span>
                        </div>
                        <button className="project-link" onClick={() => alert('Coming Soon!')}>
                            View on GitHub
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio