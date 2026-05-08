import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <div className="nav-brand">Mantas Petrovas</div>
            <input 
                type="checkbox" 
                id="nav-toggle" 
                className="nav-toggle"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
                aria-hidden="true"
            />
            <label 
                htmlFor="nav-toggle" 
                className="nav-toggle-label"
                aria-label="Toggle navigation menu"
                aria-controls="main-nav"
                aria-expanded={isOpen}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen); }}
                tabIndex={0}
            >
                <span></span>
                <span></span>
                <span></span>
            </label>
            
            <ul id="main-nav" className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
                <li><a href="#references" onClick={() => setIsOpen(false)}>References</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
