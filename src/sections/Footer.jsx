import React from 'react'

function Footer  ()  {
  return (
    <footer className="footer bg-blue-700 border-2 border-black text-base-content p-10 rounded-lg">
  <nav>
    <h6 className="footer-title text-black">Servicios</h6>
    <a className="link link-hover">Diseño</a>
    <a className="link link-hover">Soluciones</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Compañia</h6>
    <a className="link link-hover">Sobre Nosotros</a>
    <a className="link link-hover">Contacto</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Legal</h6>
    <a className="link link-hover">Terminos de uso</a>
    <a className="link link-hover">Politica de privacidad</a>
  </nav>
  <form>
    <h6 className="footer-title text-black">Recibe Novedades</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Ingresa tu email</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item border-2 border-black" />
        <button className="btn btn-primary border-2 border-black join-item">Subscribete</button>
      </div>
    </fieldset>
  </form>
</footer>
  );
}

export default Footer