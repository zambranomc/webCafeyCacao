import React from "react";
import { Outlet } from "react-router-dom";
import bannerCafe from "../assets/bannerCafe.png";



const ProductsLayout = () => {
    return (
        <div className="productsLayout-container">
            <div className="banner-container">
                <img src={bannerCafe} alt="cafe" className="banner-img" />
                <div className="banner-text">
                    <h2>Productos</h2>
                    <p>Encuentra el mejor café en grano o molido y chocolates artesanales</p>
                </div>
            </div>
            <div className="products-container">
            <Outlet />
            </div>
           
        </div>
    )
}

export default ProductsLayout;