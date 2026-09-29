import React from "react";
import { Link } from "react-router";
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
        <div className="navbar">
            <a href={'/'}>
                <img src={logo} className='logo' alt="logo cafe y cacao" />
            </a>
            
            <ul>
                <Link to='/' ><li>Inicio</li></Link>
                <Link to='/products' ><li>Productos</li></Link>
                <Link to='/about' ><li>Nosotros</li></Link>
                <Link to='/contatc' ><li>Contacto</li></Link>
            </ul>
        </div>
    )
}

export default Navbar;