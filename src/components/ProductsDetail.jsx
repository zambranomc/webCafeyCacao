import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaAngleDoubleRight  } from "react-icons/fa";
import productsData from "../assets/dataProducts.json";



const ProductsDetail  = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const productsDetail = productsData.find((item) => item.id.toString() === id.toString());
  
    const handleAddToCart = () => {
        if (!productsDetail) return;

        // 1. Obtenemos el carrito actual del localStorage o un array vacío
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // 2. Verificamos si el producto ya existe en el carrito
        const existingIndex = cart.findIndex((item) => item.id === productsDetail.id);

        if (existingIndex >= 0) {
            cart[existingIndex].quantity += 1;
        } else {
            // Guardamos el objeto completo del JSON local con cantidad 1
            cart.push({ ...productsDetail, quantity: 1 });
        }

        // 3. Guardamos de vuelta en el localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // 4. Redirigimos a la ruta relativa del carrito dentro de products
        navigate("/products/cart");
    };

    if (!ProductsDetail) return <p>Producto no encontrado.</p>;


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
                <p className="productsDetail-price">Precio: ${productsDetail.precio} </p>

                <button onClick={()=>navigate('/Products')} className="btn-products">Catálogo de Productos  <FaAngleDoubleRight /></button>
                
                <button onClick={handleAddToCart} className="btn-cart"><FaShoppingCart />  Agregar al carrito</button>

            </div>
           
           
          
        </div>
        
    )
    

}

export default ProductsDetail;


