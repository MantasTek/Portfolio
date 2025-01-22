import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Technical Skills</h2>
            <div className="skills-content">
                <div className="skill-card">
                    <h3>Core</h3>
                    <div className="skill-item">.NET</div>
                    <div className="skill-item">C#</div>
                    <div className="skill-item">SQL</div>
                </div>

                <div className="skill-card">
                    <h3>Web</h3>
                    <div className="skill-item">HTML</div>
                    <div className="skill-item">CSS</div>
                    <div className="skill-item">JavaScript</div>
                </div>

                <div className="skill-card">
                    <h3>Tools</h3>
                    <div className="skill-item">Visual Studio</div>
                    <div className="skill-item">Git</div>
                    <div className="skill-item">VS Code</div>
                    <div className="skill-item">GitHub</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;