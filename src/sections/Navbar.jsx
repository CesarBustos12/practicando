import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <a href="#">Pinetech</a>
        </div>

        <button
          className="text-white md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-8 text-sm text-white font-medium`}
        >
          <li>
            <a className="hover:text-gray-300">
              Productos
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300">
              Soluciones
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300">
              Recursos
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300">
              Codigo Abierto
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300">
              Acerca de
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};

export default Navbar;