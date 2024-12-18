import React from "react";
import { Bell, Settings } from "lucide-react";
import profile from "../img/logo/profile.jpeg";
import Logo from "../img/logo/Logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => (

  <header className="flex justify-between items-center mb-10">
    <div className="flex items-center space-x-2">
      <img src={Logo} className="h-8" alt="Logo" />
      <div className="h-6 w-[2px] bg-slate-200 mx-2 "/> 
     
    </div>
    <nav className="hidden md:flex space-x-8 font-semibold">
    <Link to="#" className="text-blue-500">
        DASHBOARD
      </Link>
      <Link to="#" className="text-gray-500">
        EXCHANGE
      </Link>
      <Link to="#" className="text-gray-500">
        STE BANK
      </Link>
      <Link to="#" className="text-gray-500">
        AFFILIATE
      </Link>
      <Link to="#" className="text-gray-500">
        ABOUT
      </Link>
    </nav>
    <div className="flex items-center space-x-5">
      <Settings className="w-5 h-5 text-gray-500" />
      <Bell className="w-5 h-5 text-gray-500" />
      <img src={profile} className="h-8 rounded-full" alt="Profile" />
    </div>
  </header>
);

export default Header;
