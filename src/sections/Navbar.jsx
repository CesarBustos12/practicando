import React from 'react'
import { Link } from 'react-router-dom';

 function Navbar  ()  {
  return (
   
   <div className="navbar bg-primary border-black rounded-lg">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to={"/"}>Page</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link className='menu-link' to='/'>Inicio</Link></li>
      <li><Link className='menu-link' to='/nosotros'>Nosotros</Link></li>
      <li><Link className='menu-link' to='/contacto'>Contacto</Link></li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-primary">
            <Link className='menu-link' to='/subir'>Subir Archivos</Link>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
}

export default Navbar