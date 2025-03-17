import './Header.css'
import avatar from '../../assets/joeri 3.png'
import React, {useEffect, useState} from "react";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
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

    return(
        <>
            {/*<header>*/}
            {/*    <div className="menu-button">*/}
            {/*        <input className="menu-input" type="checkbox" id="menu-input" onClick={() => setShowMenu(!showMenu)}/>*/}
            {/*        <label className="menu-icon" htmlFor="menu-input">*/}
            {/*            <span className="navicon"/>*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*        <nav className={showMenu ? 'nav nav-open' : 'nav nav-closed'} >*/}
            {/*            <ul className='menu'>*/}
            {/*                <li>Specialized in</li>*/}
            {/*                <li>Projects</li>*/}
            {/*                <li>About</li>*/}
            {/*                <li>Contact</li>*/}
            {/*                <li>🇳🇱</li>*/}
            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*</header>*/}
            <section className='bioContainer'>
                <h2 style={{transform: `translateY(${scrollPosition * 0.85}px)`}}>Software Developer</h2>
                <h1 style={{transform: `translateY(${scrollPosition * 0.6}px)`}}>Joeri Bouwman</h1>
                <ul>
                    <li><a href="https://www.github.com/joeribouwman25"><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/joeri-bouwman-15002a177/"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
                <img style={{transform: `translateX(${scrollPosition * .5}px)`}} height={400} src={avatar} alt="avatar"/>
            </section>
        </>
    )
}
