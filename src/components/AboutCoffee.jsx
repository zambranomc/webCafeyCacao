import React from "react";
import {  useNavigate } from "react-router-dom";
import tostadoCafe from '../assets/tostadoCafe.jpg';
import { FaAngleDoubleRight } from "react-icons/fa";
import Products from "../pages/Products";


const AboutCoffee = () => {

    const navigate = useNavigate();

    return (
        <div className="aboutCoffee-box">
            <div className="aboutCoffee-imgbox">
                <img className="aboutCoffee-img" src={tostadoCafe} alt="cafe tostado artesanal" />
            </div>
            
            <div className="aboutCoffe-info">

                <div className="aboutCoffee-title">
                    <h2 className="aboutCoffee-titleH"> 3 Razones para elegir nuestro café</h2>
                </div>

                <p><FaAngleDoubleRight className="aboutInfo-icon" />
                    La diversidad geográfica de regiones como Sanare, Caripe o Santa Cruz de Aragua 
                    ofrece altitudes e inclinaciones óptimas con suelos ricos en nutrientes, 
                    ideales para desarrollar perfiles de taza complejos y equilibrados.
                </p>
                <p><FaAngleDoubleRight className="aboutInfo-icon" />
                    El proceso artesanal de tostado, cuida el punto exacto de tueste para cada lote, resaltando 
                    los aceites esenciales, dulzura natural y aromas florales o frutales propios del grano.
                </p>
                <p><FaAngleDoubleRight className="aboutInfo-icon" />
                    Al ser procesado y distribuido en pequeños lotes, el café conserva intactas sus notas 
                    organolépticas, ofreciendo una taza viva, de cuerpo denso y acidez brillante que 
                    no se encuentra en cafés comerciales.
                </p>
                <div className="aboutCoffe-btnbox">
                    <button onClick={()=>navigate('/Products')} className="btn-aboutCoffe">
                        Catálogo de Productos  <FaAngleDoubleRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutCoffee;