import React from "react";
import Navbar from "../sections/Navbar";
import Card from "../components/Card";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-800 min-h-screen p-40">
        <div className="hero bg-[#181935] min-h-screen rounded-lg">
          <div className="hero-content flex-col lg:flex-row-reverse">          
            <div>
              <h1 className="text-4xl font-bold">Precentacion de sitios y diseños elaborados por mi!</h1>
              <p className="py-6">
                Un breve resumen de diseños que he elaborado y son relevantes para la precentacion de mi lado visual dentro del desarrollo front'end
              </p>
              <button className="btn btn-primary">Demos Inicio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
