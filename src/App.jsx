import React from "react"
//import './App.css'
import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"

 const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/products" element={<Products /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
      
    </div>
  )
 }

 export default App