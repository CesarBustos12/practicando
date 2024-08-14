import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Login from "./components/Login";
import Contacto from "./components/Contacto";
import Carrucel from "./components/Carrucel";
import UploadFile from "./components/UploadFile";

//este tipo de codigo no es sostenible
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="join-item">
          <Navbar />
        </div>

        <Routes>

          <Route path="/" element={<Hero />} />
          <Route path="/carrucel" element={<Carrucel />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/subir" element={<UploadFile />} />

          useEffect(() { 
        console.log('useEfect')
    })


        </Routes>

        {/* <div className='flex justify-center'><Button /></div> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;