import './Skills.css'

const skills = {
    "frontend": {
        "React": 90,
        "TypeScript": 85,
        "JavaScript": 90,
        "HTML/CSS": 95,
        "Redux Toolkit": 75,
    },
    "backend": {
        "Node.js": 80,
        "Express": 75,
        "REST APIs": 85,
        "GraphQL": 70,
        "MongoDB": 75,
    },
    "tools": {
        "Git": 85,
        "Docker": 70,
        "Adobe suite": 65,
        "Scrum": 75,
        "Figma": 80,
        "Jira": 95,
    },
}

export const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title">Vaardigheden & Technologieën</h2>
                </div>

                <div className="skills-grid">
                    <div className="skill-category">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <h3>Frontend Development</h3>
                        </div>
                        <div className="skills-list">
                            {Object.entries(skills.frontend).map(([name, level]) => (
                                <div key={name} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{name}</span>
                                        <span className="skill-percent">{level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{width: `${level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fa-solid fa-server"></i>
                            </div>
                            <h3>Backend Development</h3>
                        </div>
                        <div className="skills-list">
                            {Object.entries(skills.backend).map(([name, level]) => (
                                <div key={name} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{name}</span>
                                        <span className="skill-percent">{level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{width: `${level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <div className="category-header">
                            <div className="category-icon">
                                <i className="fa-solid fa-toolbox"></i>
                            </div>
                            <h3>Tools & Technologies</h3>
                        </div>
                        <div className="skills-list">
                            {Object.entries(skills.tools).map(([name, level]) => (
                                <div key={name} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{name}</span>
                                        <span className="skill-percent">{level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{width: `${level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}