import React, { useState } from "react";
import { Link } from "react-router";
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';




const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <a href={'/'}>
                <img src={logo} className='logo' alt="logo cafe y cacao" />
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Muestra 'X' si está abierto, 'hamburguesa' si está cerrado */}
            </div>

            <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                <li><Link to='/' onClick={toggleMenu}>Inicio</Link></li> {/* Cierra el menú al hacer clic en un enlace */}
                <li><Link to='/products' onClick={toggleMenu}>Productos</Link></li>
                <li><Link to='/about' onClick={toggleMenu}>Nosotros</Link></li>
                <li><Link to='/contatc' onClick={toggleMenu}>Contacto</Link></li> {/* Corrige el error de ortografía en 'contact' */}
            </ul>
            
            
        </div>

        
        
    )
}

export default Navbar;