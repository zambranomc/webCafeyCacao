import React, { useState } from "react";
import { Link } from "react-router-dom";
import dataProducts from "../assets/dataProducts.json";
import { FaSearch } from "react-icons/fa";


const Products = () => {

    const [ buscarPalabra, setBuscarPalabra] = useState("");
    
    const filtrarProducts = dataProducts.filter((cafe) => {
        const query = buscarPalabra.toLowerCase().trim();

        const igualNombre = cafe.nombre.toLowerCase().includes(query);
        const igualKeywords = cafe.keywords ? cafe.keywords.some(keyword => keyword.toLowerCase().includes(query)) : false;
          return igualNombre || igualKeywords;
        
    });

    return (
        <section className="products-container">
            <div className="buscar-box">
                <input type="text" className="productsbuscar-box" 
                placeholder= "Busca tu café preferido aquí, chocolate" 
                value={buscarPalabra}
                onChange={(e) => setBuscarPalabra(e.target.value)} />
            </div>

            <div className="products-box">
            
            {filtrarProducts.length > 0 ? (
                filtrarProducts.map((cafe)=>{
                    return( 
                        <div key={cafe.id} className="products-card">
                            <Link to={`/products/${cafe.id}`}  >
                            
                            <div className="products-image-container">
                                <img src={cafe.imagen} className="products-img" alt={cafe.nombre} />
                            </div>
                            <div className="products-info">
                                <h4 className="products-title">{cafe.nombre} </h4>
                                <p className="products-type">{cafe.producto} </p>
                                <p className="products-price">Precio:  ${cafe.precio} </p>
                            </div>
                            
                            </Link>
                        </div>
                        );
                })
            ) : (
                <p>No se encontraron productos</p>
            )}
            </div>

        </section>
       
    )
}


export default Products;



