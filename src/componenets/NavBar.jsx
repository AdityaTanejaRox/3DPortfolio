import React from 'react'
import {navLinks} from '../constants/index.js';
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <HashLink className="logo" to="/#hero">
                Aditya
            </HashLink>
            <nav className="desktop">
               <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                {link.startsWith('#') ? (
                  <HashLink smooth to={`/${link}`}>
                    <span>{name}</span>
                    <span className="underline" />
                  </HashLink>
                ) : (
                  <Link to={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
            </nav>

            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar