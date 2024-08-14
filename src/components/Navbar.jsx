import React from 'react'

 function Navbar  ()  {
  return (
   
   <div className="navbar bg-blue-700 border-2 border-black rounded-lg shadow-xl">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Pruebas Site</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a className='menu-link' href='/'>Inicio</a></li>
      <li><a className='menu-link' href='/nosotros'>Nosotros</a></li>
      <li><a className='menu-link' href='/contacto'>Contacto</a></li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-blue-700 border-2 border-black border-inherit px-1">
            <li><a className='menu-link' href='/login'>Iniciar sesion</a></li>
            <li><a className='menu-link' href='/subir'>Subir archivos</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
}

export default Navbar