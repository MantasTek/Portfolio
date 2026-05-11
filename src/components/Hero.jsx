import React from 'react';

const Hero = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section className="hero">
            <div className="hero-content">
                <img src={`${baseUrl}images/myphoto.jpg`} alt="Mantas Petrovas portrait" className="portrait" />
                <h1>Mantas Petrovas</h1>
                <p className="tagline">Program Developer .NET</p>
                <div className="hero-buttons">
                <a href={`${baseUrl}Mantas_Petrovas_CV.pdf`} download className="cv-button">
                    Download CV
                </a>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/mantas-petrovas-4260a4a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/MantasTek" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;