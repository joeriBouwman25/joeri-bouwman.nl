import './Hero.css'
import React, { useEffect, useState } from "react";
import avatar from '../../assets/joeri.png'

export const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='hero'>
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <nav className="navbar">
                <div className="nav-logo">JB</div>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection('about')}>Over mij</li>
                    <li onClick={() => scrollToSection('projects')}>Projecten</li>
                    <li onClick={() => scrollToSection('skills')}>Vaardigheden</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </nav>

            <div className="hero-content" style={{opacity: 1 - scrollPosition / 500}}>
                <div className="hero-text">
                    <h1 className="hero-name">Joeri Bouwman</h1>
                    <h2 className="hero-title">
                        <span className="gradient-text">Front-end Developer</span>
                    </h2>
                    <p className="hero-description">
                        Gespecialiseerd in React, TypeScript, en UX design.
                    </p>
                    <div className="hero-cta">
                        <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                            Bekijk mijn werk
                        </button>
                        <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                            Neem contact op
                        </button>
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/joeribouwman25" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/joeri-bouwman-15002a177/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src={avatar}
                        alt="Joeri Bouwman"
                        style={{transform: `translateX(${scrollPosition * .5}px)`}}
                    />
                </div>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Verder</p>
            </div>
        </section>
    )
}
