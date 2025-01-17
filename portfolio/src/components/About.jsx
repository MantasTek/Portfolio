import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>Get to know ME!</h2>
            <div className="about-content">
                <div className="about-card">
                    <h3>About Me</h3>
                    <div className="about-item">
                        <p>My name is Mantas Petrovas. I am a student at Nackademin, studying ProgramDevelopment.NET. I am 33 years old and from Lithuania. I have been living in Sweden for 5 years. I am a very ambitious and social person, always looking for new challenges.</p>
                    </div>
                </div>

                <div className="about-card">
                    <h3>I enjoy</h3>
                    <div className="about-item">Meeting new people</div>
                    <div className="about-item">Traveling</div>
                    <div className="about-item">Playing video games</div>
                    <div className="about-item">Watching movies</div>
                    <div className="about-item">Reading books</div>
                    <div className="about-item">Working out</div>
                    <div className="about-item">Being creative and productive</div>
                </div>
            </div>
        </section>
    );
};

export default About;