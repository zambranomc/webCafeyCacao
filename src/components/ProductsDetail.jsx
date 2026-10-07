import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaAngleDoubleRight  } from "react-icons/fa";
import Products from "../pages/Products";



const ProductsDetail  = () => {

    const productsDetail = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="productsDetail-box">
            
            <img src={productsDetail.imagen} className="productsDetail-img" alt={productsDetail.nombre} />
            <div className="productsDetail-text">
                <p className="productsDetail-detail">Detalle del producto </p>
            
                <h2 className="productsDetail-name">{productsDetail.nombre} </h2>
                <p className="productsDetail-info"><b>Tipo:</b>  {productsDetail.formato} </p>
                <p className="productsDetail-info"><b>Origen:</b> {productsDetail.origen} </p>
                <p className="productsDetail-info"><b>Tostado:</b>  {productsDetail.tostado} </p>
                <p className="productsDetail-info"><b>Sabor:</b>  {productsDetail.percepcion_sabor} </p>
                <p className="productsDetail-info"><b>Descripción:</b> {productsDetail.experiencia_gusto} </p>
                <p className="productsDetail-price">Precio: {productsDetail.precio} </p>

                <button onClick={()=>navigate('/Products')} className="btn-products">Catálogo de Productos  <FaAngleDoubleRight /></button>
                <button className="btn-cart"><FaShoppingCart />  Agregar al carrito</button>

            </div>
           
           
          
        </div>
        
    )
    

}

export default ProductsDetail;


export const productsDetailLoader = async ({params}) => {
    const {id} =params;
    const res = await fetch("http://localhost:5000/cafes/" + id);
    return res.json();

}