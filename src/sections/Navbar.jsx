import React from 'react'
import { Link } from 'react-router-dom';

 function Navbar  ()  {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-md z-10">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-white text-lg font-semibold">
        <a href="#">Pinetech</a>
      </div>
      <ul className="flex space-x-8 text-sm text-white font-medium">
        <li>
          <a href="#" className="hover:text-gray-300">
            Productos
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Soluciones
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Recursos
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Codigo Abierto
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Acerca de
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300">Ingresar</button>
        <button className="text-white border border-white px-4 py-1 rounded hover:bg-gray-700 transition duration-200">
          Registrarse
        </button>
      </div>
    </div>
  </nav>
  );
}

export default Navbar