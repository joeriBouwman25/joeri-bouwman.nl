import './Projects.css'

const projectsData = [
    {
        id: 1,
        title: "Caspar Finance",
        description: "Voor Caspar Finance heb ik een volledig responsive website gebouwd met focus op gebruiksvriendelijkheid, snelheid en een strak, professioneel design dat past bij de financiële sector.",
        tags: ["React", "TypeScript", "Tailwind", "Google Maps API" ],
        image: "🛍️",
        link: "https://www.caspar.finance",
        github: "https://github.com/joeriBouwman25/caspar.finance",
        hasPreview: true
    },
    {
        id: 2,
        title: "1001 Albums",
        description: "Een project om muziek albums te ontdekken, beoordelen en verzamelen. Gebouwd met React voor de frontend en MySQL voor de backend database. in dit project lag voor mij de focus op het oefenen met Mysql",
        tags: ["React", "Redux Toolkit", "MySQL"],
        image: "💿",
        link: "https://joeribouwman25.github.io/1001-albums-statistics/",
        github: "https://github.com/joeriBouwman25/1001-albums-statistics",
        hasPreview: true
    },
    {
        id: 3,
        title: "Zig",
        description: "Onderhouden en verbeteren van de huurders- en woningzoekende apps, inclusief nieuwe features, UX-optimalisatie en systeemintegraties.",
        tags: ["React", "TypeScript", "Vite", "Firebase", "Redux Toolkit", "Ionic"],
        image: "📋",
        link: "https://zig.nl",
        github: "#",
        hasPreview: true
    },
];

export const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Mijn Projecten</h2>
                    <p className="section-subtitle">Een overzicht van mijn recente werk</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                {project.hasPreview ? (
                                    <iframe
                                        src={project.link}
                                        title={project.title}
                                        className="project-preview"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="project-emoji">{project.image}</span>
                                )}
                                <div className="project-overlay">
                                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
