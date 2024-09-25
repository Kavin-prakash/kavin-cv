import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu =()=>{
        setIsOpen(false)
    }

    return (
        <nav className='Navbar-Component'>
            <button className='toggle-button' onClick={toggleMenu}>
                <MenuIcon />
            </button>
            <ul className={`Unordered-List ${isOpen ? 'open' : ''}`}>
                <li className='list'>
                    <Link smooth={true} duration={500} to='Home' onClick={closeMenu}>Home</Link>
                </li>
                <li className='list'>
                    <Link smooth={true} duration={500} to='About'  onClick={closeMenu}>About</Link>
                </li>
                <li className='list'>
                    <Link smooth={true} duration={500} to='Education'  onClick={closeMenu}>Education</Link>
                </li>
                <li className='list'>
                    <Link smooth={true} duration={500} to='Skills'  onClick={closeMenu}>Skills</Link>
                </li>
                <li className='list'>
                    <Link smooth={true} duration={500} to='Projects'  onClick={closeMenu}>Projects</Link>
                </li>
                <li className='list'>
                    <Link smooth={true} duration={500} to='Contacts'  onClick={closeMenu}>Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};
