import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      {/* La barra de navegación se mantendrá siempre visible */}
      <Navbar />

      {/* Outlet renderiza dinámicamente la página actual (Home, Products, etc.) */}
      <main className="rootlayout-box">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
      
    </div>
  );
};

export default RootLayout;