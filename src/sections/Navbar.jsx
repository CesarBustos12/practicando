import { useState } from "react";
import { Link } from "react-router-dom";
import { DesingPage } from "../pages/DesingPage";
import Logo from "../img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-md shadow-md z-10 rounded-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <img
          src={Logo}
          alt="icono"
          className="w-14 h-14"
          />
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
            <Link to="/landingpage" className="hover:text-gray-300">
              Landing Page
            </Link>
          </li>
          <li>
            <Link to="/desing" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-300">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/pagina" className="hover:text-gray-300">
              Pagina diseño
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};

export default Navbar;
