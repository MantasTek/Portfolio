import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-brand">Mantas Petrovas</div>
            <input 
                type="checkbox" 
                id="nav-toggle" 
                className="nav-toggle"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
            />
            <label 
                htmlFor="nav-toggle" 
                className="nav-toggle-label"
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </label>
            
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
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
