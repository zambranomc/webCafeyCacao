import React from "react";
import cafeCremoso from '../assets/cafeCremoso.jpg';
import cosechaCafe from '../assets/cosechaCafe.jpg';
import chocolateCafe from '../assets/chocolateCafe.jpg';
import chocolate from '../assets/chocolate.jpg';
import maquinaTostadoCafe from '../assets/maquinaTostadoCafe.jpg';




const About = () => {
    return (
        <div className="aboutpage-box">
            <div className="aboutpage-imgbox">
                <img src={cosechaCafe} className="aboutpage-img "  alt="cosecha café" />
                <img src={cosechaCafe} className=" aboutpage-imgMovil"  alt="cosecha café" />
                <img src={maquinaTostadoCafe} className="aboutpage-img" alt="maquita de tostar café" />
                <img src={maquinaTostadoCafe} className="aboutpage-imgMovil" alt="maquita de tostar café" />
                <img src={chocolateCafe} className="aboutpage-img" alt="chocolate y cafe venezolano" />
                <img src={cafeCremoso} className="aboutpage-img" alt="taza de cafe mocca" />
                <img src={chocolate} className="aboutpage-img" alt="chocolate" />
            </div>
            <div className="aboutpage-title">
                <h1 className="aboutpage-titleH">Somos KFE & KKO</h1>
            </div>
            <div className="aboutpage-info">
                <p>
                    En KFE y KKO rendimos homenaje a la tradición agrícola venezolana seleccionando granos 
                    de café de origen de Caripe, Sanare y Santa Cruz de Aragua. Cada lote es transformado 
                    mediante un tostado artesanal que resalta sus notas aromáticas únicas, ofreciendo 
                    presentaciones tanto en grano entero como molido para satisfacer a los paladares más 
                    exigentes.
                </p>
                <p>
                    Nuestra pasión es llevar a tu taza el mejor café de Venezuela, cuidando cada detalle 
                    desde la cosecha hasta el empaque final.
                </p>
                <p>
                    Complementamos esta experiencia sensorial con refinados chocolates artesanales 
                    elaborados con el legendario cacao de origen de Chuao, estado 
                    Aragua. A través de procesos de fabricación puramente artesanales, transformamos este 
                    fruto ancestral en finas tabletas que destacan por su riqueza, aroma e intensidad. 
                </p>
                <p>
                    En KFE y KKO fusionamos la mística del mejor café y el cacao venezolano para regalarte 
                    un viaje de sabores auténticos e inolvidables en cada bocado.
                </p>


            </div>
              
        </div>
    )
}


export default About;