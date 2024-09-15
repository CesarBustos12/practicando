import React from 'react'

function Hero  ()  {
  return (
    <div className="hero bg-slate-100 min-h-screen rounded-lg">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold text-black">Site web</h1>
        <p className="py-6 text-black">
          Estamos haciendo las pruebas en las que podemos interactuar con los estilos de Tailwind y Heidi UI
        </p>
        <button className="btn btn-primary border-2 border-black">Demos inicio!</button>
      </div>
    </div>
  </div>
  );
}

export default Hero