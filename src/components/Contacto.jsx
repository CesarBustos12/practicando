import React from 'react'

const Contacto = () => {
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contactanos!</h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 lg:w-1/3 p-4">
          <img src="/src/assets/phone.png" alt="Nuestro equipo" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 lg:w-2/3 p-4">
          <p className="text-lg text-gray-700 mb-4">
            Contactanos, de esta manera podras conseguir ayuda mas especifica o de igual manera aclarar tus dudas
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Correo electronico: help@host.com
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Telefono: 8142144099
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contacto