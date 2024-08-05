import React from 'react'

const Nosotros = () => {
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sobre Nosotros</h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 lg:w-1/3 p-4">
          <img src="/src/assets/check.png" alt="Nuestro equipo" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 lg:w-2/3 p-4">
          <p className="text-lg text-gray-700 mb-4">
            Somos una empresa dedicada a proporcionar soluciones innovadoras en tecnología. Nuestro equipo está compuesto por expertos en diversas áreas que trabajan juntos para ofrecer productos y servicios de alta calidad.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Nuestra misión es ayudar a nuestros clientes a alcanzar sus objetivos mediante el uso de la tecnología más avanzada y eficaz. Nos enorgullecemos de nuestra capacidad para adaptarnos a las necesidades específicas de cada cliente y proporcionar soluciones personalizadas.
          </p>
          <p className="text-lg text-gray-700">
            Gracias por considerar nuestros servicios. Estamos aquí para ayudarle a llevar su negocio al siguiente nivel.
          </p>
        </div>
      </div>
    </div>
  </section>
);
};

export default Nosotros