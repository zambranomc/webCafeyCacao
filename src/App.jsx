import React from "react"
//import './App.css'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom"; // Importado desde 'react-router-dom'

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Products, { productsLoader } from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsLayout from "./layout/ProductsLayout";
import ProductsDetail, { productsDetailLoader } from "./components/ProductsDetail";

// Se crea el router fuera de la función del componente
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<ProductsLayout /> } >
        <Route index element={<Products /> } loader={productsLoader} />
        <Route path=":id" element={<ProductsDetail/> } loader={productsDetailLoader} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;