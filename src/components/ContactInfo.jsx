import React from "react";
import { FaPhoneAlt, FaStore, FaClock } from "react-icons/fa";
import degustarCafe from '../assets/degustarCafe.jpg';


const ContactInfo = () => {
    return (
        
        <div className="contactInfo-box1">
            <div className="contactInfo-box2">
                <div className="contactInfo-imgbox">
                    <img src={degustarCafe} className="contactInfo-img" alt="" />
                </div>
                <div className="contactInfo-infobox">
                    <div className="contatcInfo-titlebox">
                        <h1 className="contactInfo-title">¡Te esperamos!</h1>
                    </div>
                    <a 
                    href="https://maps.app.goo.gl/8ZbBMAqoPa4sRoRaA"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contactInfo-infoA">
                        KFE & KKO
                    </a>
                    
                    <p className="contactInfo-info"><FaStore className="contactInfo-icon" />Avenida Principal Los 
                    Naranjos, & Av. El Paují, Local 3A, Caracas 1083, Miranda - Venezuela
                    </p>
                    <p className="contactInfo-info"><FaClock className="contactInfo-icon" />Lunes a Jueves 8:00 am a 8:00 pm, Vienes a Domingo 
                    y Festivos 8:00 am a 10:00 pm
                    </p>
                    <p className="contactInfo-info1"><FaPhoneAlt className="contactInfo-icon1" />+58 412 9007854</p>
                </div>
            
            </div>
    

        </div>
    )
}


export default ContactInfo;
