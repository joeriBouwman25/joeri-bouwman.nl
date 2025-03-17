import './Skills.css'
import {Experiences} from "../experiences/Experiences";

export const Skills = () => {

    const skills = {
        "techStack": {
            "HTML": 4,
            "CSS": 4,
            "JavaScript": 4,
            "NodeJS": 3,
            "ReactJS": 4,
            "TypeScript": 3,
            "Redux": 2,
            "Git": 3,
        },
        "native": {
            "Ionic": 2,
            "Capacitor": 2,
            "XCode": 3,
            "Android Studios": 2
        },
        "overig": {
            "Adobe Suite": 3,
            "UX/UI Ontwerp": 3,
            "Agile Methodologie": 3,
            "Teamleiderschap": 4
        },
    }

    return (
        <section className='skills'>
            <div className="skillsContainer">
                <article>
                    <div>
                        <h2><i className="fa-solid fa-code"></i> Tech Stack</h2>
                        <ul>
                            {Object.entries(skills.techStack).map(([key, value]) => (
                                <li className='skillLi' key={key}>
                                    <span>{key}</span>
                                    <div className='skillBar'>
                                        <div className={`skill_${value}`}></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
                <article>

                    <div>
                        <h2><i className="fa-regular fa-mobile"></i> Native Developer</h2>
                        <ul>
                            {Object.entries(skills.native).map(([key, value]) => (
                                <li className='skillLi' key={key}>
                                    <span>{key}</span>
                                    <div className='skillBar'>
                                        <div className={`skill_${value}`}></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
                <article>
                    <div>
                        <h2><i className="fa-regular fa-paintbrush"></i> Adobe Creative cloud</h2>
                        <ul>
                            {Object.entries(skills.overig).map(([key, value]) => (
                                <li className='skillLi' key={key}>
                                    <span>{key}</span>
                                    <div className='skillBar'>
                                        <div className={`skill_${value}`}></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
                <Experiences/>
            </div>
        </section>
    )
}