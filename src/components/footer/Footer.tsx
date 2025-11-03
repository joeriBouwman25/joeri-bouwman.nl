import './Footer.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>JB</h3>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navigatie</h4>
                            <ul>
                                <li><a href="#about">Over mij</a></li>
                                <li><a href="#projects">Projecten</a></li>
                                <li><a href="#skills">Vaardigheden</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="https://github.com/joeribouwman25" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="https://linkedin.com/in/joeri-bouwman-15002a177/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Joeri Bouwman.</p>
                    <p>Built with React & TypeScript</p>
                </div>
            </div>
        </footer>
    )
}