import React from "react";
import tienda from '../assets/tienda.jpg';
import { FaAngleDoubleRight  } from "react-icons/fa";


const ContactForm = () => {
    return(
        <div className="contactForm-box">
            
            <form className="contactForm" action="">
                <label htmlFor="name" className="contactForm-label">Nombre y Apellido:</label>
                <input className="contactForm-intext" id="name" type="text"  placeholder="Nombre y apellido" />
                <br/>
                <label htmlFor="email" className="contactForm-label">Email:</label>
                <input className="contactForm-intext" id="email" type="email" placeholder="email@gmail.com" />
                <br/>
                <label htmlFor="message" className="contactForm-label">Escribe tu mensaje:</label>
                <textarea className="contatcForm-textA" id="message" placeholder="Mensaje"></textarea>
                <br/>
                <button className="btn-contactForm" type="submit">Enviar <FaAngleDoubleRight /></button>
            </form>
            <div className="contactForm-imgbox">
                <img src={tienda} className="contactForm-img" alt="tienda cafe y cacao" />
            </div>
           
        </div>
    )
}


export default ContactForm;
