import './Skills.css'
import {Experiences} from "../experiences/Experiences";
import {useCallback, useEffect, useRef, useState} from "react";

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

type DebounceFunction = (...args: unknown[]) => void;
export const Skills = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [showButton, setShowButton] = useState(false)

    const debounce = (func: DebounceFunction, wait: number) => {
        let timeout: NodeJS.Timeout | undefined
        return function executedFunction(...args: unknown[]) {
            const later = () => {
                timeout= undefined;
                func(...args);
            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)

        }
    }

    const checkVisibility = useCallback(() => {
        if(ref.current) {
            const elementTop = ref.current.getBoundingClientRect().top;
            console.log(elementTop)
           elementTop < 0 ? setShowButton(true) : setShowButton(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', debounce(checkVisibility, 100), true)
        return () => document.removeEventListener('scroll', debounce(checkVisibility, 100), true)
    }, [checkVisibility]);

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <section className='skills'>
            <div className="skillsContainer" ref={ref}>
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
                        <h2><i className="fa-regular fa-paintbrush"></i> Overig</h2>
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
            {showButton &&
                <button className='scrollButton hide' onClick={handleClick}><i className="fa-solid fa-arrow-up"></i></button>
            }
        </section>
    )
}