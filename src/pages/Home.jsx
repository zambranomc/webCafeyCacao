import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cafeycacaoweb from '../assets/cafeycacaoweb.jpg';
import AboutCoffe from '../components/AboutCoffee';
import { FaSearch } from "react-icons/fa";



const Home = () =>{

    const navigate = useNavigate();

    return (
        <div className="homePage-box">
            <div className="homePage-imgbox">
                <img src={cafeycacaoweb} className="homePage-img" alt="taza y granos de cafe cremoso" />
            </div>
            <div className="homePage-infoP"> 
                <p>El DÚO PERFECTO</p>
            </div>
            <div className="homePage-infoH">
                <h1>Comienza tus mañanas con el mejor CAFÉ y CHOCOLATE venezolano</h1>
                <button onClick={()=>navigate('/Products')} className="btn-homePage" >Buscar<FaSearch /></button>
            </div>
              
            <div className="homePage-bestcoffee">
                <h2>Los preferidos de nuestros clientes</h2>
            </div>

            <div className="homePage-imgProductsbox">
                <Link to='/products/3' >
                    <img src="/image/cafeMolidoEspecial3.jpg" className="homePage-imgProducts" alt="cafe molido especial" />
                </Link>

                <Link to='/products/2'>
                    <img src="/image/cafeGranoFuerte2.jpg" className="homePage-imgProducts" alt="cafe en grano fuerte" />
                </Link>
                   
                <Link to='/products/5'>
                    <img src="/image/cafeCapsulaMedio5.jpg" className="homePage-imgProducts" alt="cafe en capsula medio" />
                </Link>
                
            </div>

           <AboutCoffe />
       
            
        </div>
    )
}

export default Home;