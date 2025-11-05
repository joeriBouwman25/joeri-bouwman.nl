import './Contact.css'

export const Contact = () => {

    return (
        <section className='contact' id='contact'>
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Neem Contact Op</h2>
                    <p className="section-subtitle">Laten we samenwerken aan jouw volgende project</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Laten we Verbinden</h3>
                        <p>
                            Ik sta altijd open voor het bespreken van nieuwe projecten, creatieve ideeën,
                            of kansen om deel uit te maken van jouw visie.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <a href="https://linkedin.com/in/joeri-bouwman-15002a177/" target="_blank" rel="noopener noreferrer">
                                    <p>https://www.linkedin.com/in/joeri-bouwman</p>
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <h4>Locatie</h4>
                                    <p>Almere, Nederland</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <div>
                                    <h4>Beschikbaarheid</h4>
                                    <p>Open voor kansen</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

