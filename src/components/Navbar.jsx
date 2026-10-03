import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Alterna el estado del menú hamburguesa
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cierra el menú al hacer clic en cualquier enlace
      const closeMenu = () => {
       setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            
            <Link to="/" className="logo-link" >
                <img src={logo} className="logo" alt="Logo café y cacao" />
            </Link>

            <div className='menu-icon' onClick={toggleMenu}>
                    { isMenuOpen? <FaTimes/> : <FaBars/> }
            </div>



            <ul  className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/products" onClick={closeMenu} >Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={closeMenu} >Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={closeMenu} >Contacto</NavLink>
                </li>

            </ul>

        </nav>
    );
};

export default Navbar;