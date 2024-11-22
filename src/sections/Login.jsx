import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="hero bg-gradient-to-r from-blue-800 to-indigo-900 min-h-screen">
        <div className="lg:flex-row-reverse">
          <div className="justify-center">
            <h1 className="text-5xl font-bold text-white pb-8">
              Inicia Sesion
            </h1>
          </div>
          <div className="card bg-slate-200 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Correo</span>
                </label>
                <input
                  type="Correo"
                  placeholder="Correo"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Contraseña</span>
                </label>
                <input
                  type="Contraseña"
                  placeholder="Contraseña"
                  className="input input-bordered bg-white"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-black"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Ingresa</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
