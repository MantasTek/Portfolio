import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>Get to know ME!</h2>
            <div className="about-content">
                <div className="about-card">
                    <h3>About Me</h3>
                    <div className="about-item">
                        <p>👋 My name is Mantas Petrovas, and I’m a student at Nackademin, studying Programutvecklare .NET. I am originally from Lithuania and have been living in Sweden for 7 years.
                                I’m an ambitious and social person with a passion for learning, problem-solving, and building creative digital solutions. I enjoy taking on new challenges that push me to grow both personally and professionally. My goal is to combine logic and creativity to develop applications that make a real impact.</p>
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