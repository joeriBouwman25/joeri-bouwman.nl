import './About.css'

export const About = () => {
    return (
        <section className='about' id='about'>
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">Over mij</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Creatieve front-end ontwikkelaar met oog voor UX/UI. Ik geniet van het bouwen van interfaces die niet alleen goed werken, maar ook prettig aanvoelen voor de gebruiker.

                        </p>
                        <p>
                            Ik werk het liefst samen met anderen en haal energie uit een omgeving waar ideeën worden gedeeld — de hele week thuiswerken? Dat voelt voor mij al snel te stil.
                        </p>
                        <p>

                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <div className="card-icon">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <h3>Ervaring</h3>
                            <p>3+ Jaren</p>
                            <span>Front end Development</span>
                        </div>


                        <div className="about-card">
                            <div className="card-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h3>Opleiding</h3>
                            <p>HBO Bachelor</p>
                            <span>Communication & Multimedia Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

