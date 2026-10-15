import React from "react";
import { Link} from "react-router-dom";
import logo from '../assets/logo.png';
import { FaEnvelope, FaTiktok, FaInstagram, FaYoutube  } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="footer-box">
            <div className="footer-boxcolumn">
                <div className="footer-imgbox">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="footer-imglogo" alt="logo cafe y cacao" />
                    </Link>
                    
                </div>
                <div className="footer-info">
                    <p className=" footer-fa"><FaEnvelope />kfekko@gmail.com</p>
                </div>   
            </div>
            <div className="footer-boxcolumn">
                <ul className="footer-listUl">
                    <li>
                        <Link to="/products" className="footer-infolink footer-infolink2">Productos</Link>
                    </li>
                    <li>
                        <Link to="/about" className="footer-infolink footer-infolink2">Nosotros</Link>
                    </li>

                </ul>
                
            </div>
             <div className="footer-boxcolumn">
                <ul className="footer-listUl">
                    <li>
                        <Link to="/contact" className="footer-infolink footer-infolink2">Contáctanos</Link>
                    </li>
                    <li>
                       <a href="https://maps.app.goo.gl/8ZbBMAqoPa4sRoRaA"
                        target="_blank" 
                        rel="noopener noreferrer"  className="footer-infolink footer-infolink2">
                            Ubicación
                        </a> 
                    </li>
                </ul>
                
            </div>
            <div className="footer-boxcolumn">
                <ul className="footer-listUl">
                    <li>
                        <a href="https://www.instagram.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-infolink footer-infofaicon"><FaInstagram />Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-infolink footer-infofaicon"><FaTiktok />TikTok
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-infolink footer-infofaicon"><FaYoutube />YouTube</a>
                    </li>
                </ul>
            </div>

            
        </div>
    )
}

export default Footer;