import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shoppingCart from '../assets/shoppingCart.png';
import { FaAngleDoubleRight, FaRegCreditCard, FaEraser  } from "react-icons/fa";

const ProductsCart = () => {
     const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const handleClearCart = () => {
        localStorage.removeItem("cart");
        setCartItems([]);
    };

    // Función auxiliar segura para convertir cualquier precio a número flotante
    const parsePrice = (valor) => {
        if (typeof valor === "number") return valor;
        if (!valor) return 0;
        // Remueve cualquier carácter que no sea número, punto o signo negativo
        const cleanValue = String(valor).replace(/[^0-9.-]+/g, "");
        return parseFloat(cleanValue) || 0;
    };

    // Calculamos el total general usando la función de limpieza
    const totalGeneral = cartItems.reduce((acc, item) => {
        const precioLimpio = parsePrice(item.precio);
        const cantidadLimpia = Number(item.quantity) || 0;
        return acc + (precioLimpio * cantidadLimpia);
    }, 0);

    return (
        <div className="productsCart-box">
            {cartItems.length === 0 ? (
                <div className="productsCart-boxEmpty">
                    
                    <p>Tu carrito está vacío, vuelve al catalogo de productos</p>
                        
                    <div className="productsCart-boxEmpty2">
                        <img src={shoppingCart} 
                            alt="imagen carrito de compras" 
                            className="productsCart-imgboxEmpty" />
                        <button 
                            onClick={()=>navigate('/Products')} 
                            className="btn-products">
                            Catálogo de Productos  <FaAngleDoubleRight />
                        </button>
                        </div>
                   
                </div>
            ) : (
                <div className="productsCart-boxCart">
                    
                    <div className="productsCart-boxColumn">
                        <p>¡Casi listo tu pedido!</p>
                        <img src={shoppingCart} className="productsCart-imgShoppingCart" alt="imagen carrito de compras" />
                        
                    </div>
                    <div className="productsCart-boxProducts">
                        <div className="productsCart-boxColumnTitle">
                            <p className="productsCart-itemP">Productos</p>
                            <p className="productsCart-itemP productCart-movil">Nombre</p>
                            <p className="productsCart-itemP productCart-desk">Subtotal</p>
                            <div className="productsCart-boxColumnTitle2 productCart-movil">
                                <p className="productsCart-itemP productCart-movil ">Precio </p>
                                <p className="productsCart-itemP productCart-movil">Cantidad</p>
                                <p className="productsCart-itemP productCart-movil">Subtotal</p>
                            </div>
                        </div>

                        {cartItems.map((item) => {
                        const precioUnitario = parsePrice(item.precio);
                        const cantidad = Number(item.quantity) || 0;
                        const subtotalItem = precioUnitario * cantidad;

                        return (
                            <div key={item.id} className="productsCart-itembox">
                                <img src={item.imagen} className="productsCart-imgProduct" alt={item.nombre} />
                                <h2>{item.nombre}</h2>
                                <div className="productsCart-price">
                                    <p > ${precioUnitario.toFixed(2)}</p>
                                    <p >{cantidad}</p>
                                    <p>${subtotalItem.toFixed(2)}</p>
                                </div>
                                
                                
                            </div>
                        );
                    })}

                        <div className="productsCart-totalGeneral">
                            <button 
                            onClick={()=>navigate('/Products')} 
                            className="btn-products">
                                Catálogo de Productos  <FaAngleDoubleRight />
                            </button>
                         
                            <p>Total a Pagar: <b>${totalGeneral.toFixed(2)}</b> </p>
                        </div>

                        <div className="productsCart-totalButton">
                            <button onClick={handleClearCart} className="btn-products"><FaEraser />
                                Vaciar Carrito
                            </button>
                            <button  className="btn-cart"><FaRegCreditCard />Pagar compra
                            </button>

                        </div>
                        

                    </div>
                    

                   
                </div>
            )}
        </div>
    );
};

export default ProductsCart;