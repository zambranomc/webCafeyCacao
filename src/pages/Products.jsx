import React from "react";
import { Link, useLoaderData } from "react-router-dom";



const Products = () => {

    const productsData = useLoaderData();

    return (
        <section className="products-container">
            <div className="products-box">
            
                {productsData.map((cafe)=>{
                    return( 
                        <div key={cafe.id} className="products-card">
                            <Link to={`/products/${cafe.id}`}  >
                            
                            <div className="products-image-container">
                                <img src={cafe.imagen} className="products-img" alt={cafe.nombre} />
                            </div>
                            <div className="products-info">
                                <h4 className="products-title">{cafe.nombre} </h4>
                                <p className="products-type">{cafe.producto} </p>
                                <p className="products-price">Precio:  {cafe.precio} </p>
                            </div>
                            
                            </Link>
                        </div>
                        )
                })}
            </div>

        </section>
       
    )
}


export default Products;



export const productsLoader = async () => {
  
    const res = await fetch("http://localhost:5000/cafes");

     return  res.json();
};