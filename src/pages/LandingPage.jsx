import Button from "../components/Button";
import Card from "../components/Card";
import Navbar from "../sections/Navbar";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

export const LandingPage = () => {
  const [activeCategory] = useState("General");
  const [activeQuestionId, setActiveQuestionId] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const categories = [
    { id: "general", label: "Generales" },
    { id: "privacy", label: "Privacidad" },
    { id: "responsible-ai", label: "Respuestas" },
  ];

  const questions = [
    {
      id: "q1",
      question: "A que nos dedicamos?",
      answer:
        "GitHub Copilot is an AI-powered code completion tool that helps developers write code faster and more efficiently.",
    },
    {
      id: "q2",
      question: "Que planes podemos ofrecerte?",
      answer:
        "Each plan offers different features and capabilities tailored to different needs and organization sizes.",
    },
    {
      id: "q3",
      question: "Que tipos de lenguajes de programacion manejamos?",
      answer:
        "GitHub Copilot supports a wide range of programming languages and integrates with popular IDEs.",
    },
    {
      id: "q4",
      question: "Que es lo que hacemos con los datos sensibles?",
      answer:
        "GitHub Copilot has been trained on publicly available code from GitHub repositories.",
    },
    {
      id: "q5",
      question: 'Does GitHub Copilot "copy/paste"?',
      answer:
        "No, GitHub Copilot generates suggestions based on patterns it has learned, rather than copying code directly.",
    },
    {
      id: "q6",
      question: "Which plan includes GitHub Copilot Autofix?",
      answer:
        "GitHub Copilot Autofix is included in specific enterprise-level plans.",
    },
  ];

  const toggleQuestion = (id) => {
    setActiveQuestionId(activeQuestionId === id ? "" : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 to-black min-h-screen flex flex-col items-center text-center text-white relative">
        <div className="absolute inset-0 opacity-70 bg-gradient-to-b from-transparent to-black"></div>
        <div className="z-10 max-w-2xl pt-20 flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="p-[1px] bg-gradient-to-r from-blue-500 to-green-500 rounded-full inline-block">
              <p className="bg-slate-900 text-sm py-1 px-3 rounded-full font-semibold text-white flex items-center space-x-2">
                Pinetech Dev
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            El mundo se adapta porque tu código no lo haría?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              title="Demos Inicio y conozcamos! >"
              classNames="bg-white text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            />
          </motion.div>
        </div>

        <div className="flex justify-center items-center mt-10 w-full p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full max-w-4xl"
          >
            <img
              alt="Code Preview"
              className="rounded-lg w-full h-auto mx-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-[1px] bg-white rounded-full inline-block mb-4">
              <p className="bg-slate-900 text-sm py-1 px-3 rounded-full font-semibold text-white flex items-center space-x-2">
                Nivel De Desarrollo
              </p>
            </div>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <p className="text-white font-black text-6xl mb-8">
                Enfoque en una tarea a la vez,
                <span className="block">mas tareas menos enfoque!</span>
              </p>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Card className="h-96 bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col justify-between">
                <h2 className="text-3xl font-bold">
                  Incrementar el desarrollo requiere de varias etapas
                  anteriormente
                </h2>
                <Link href="#" className="gap-2 text-sm mt-4 flex items-center">
                  Visitar las etapas <span className="ml-1">→</span>
                </Link>
              </Card>

              <Card className="h-96 bg-[#1A1E24] flex flex-col justify-between p-6">
                <p className="text white">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-white-500 rounded-full mb-6"></div>
                </p>
                <p className="text-xl font-bold mt-4">
                  <p>45%</p>
                  Mas velocidad de codigo
                </p>
              </Card>

              <Card className="h-96 bg-[#1A1E24] flex flex-col justify-between p-6">
                <div className="flex gap-8">
                  <div className="w-8 h-6 bg-blue-400 rounded-full" />
                  <div className="w-6 h-6 bg-gray-500 rounded-full" />
                  <div className="w-6 h-6 bg-gray-600 rounded-full" />
                </div>
                <h3 className="text-xl font-bold mt-4">
                  Diseñado para que todos los desarrolladores lo puedan
                  comprender
                </h3>
              </Card>

              <Card className="h-96 bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col justify-between">
                <h2 className="text-3xl font-bold mb-4">
                  Los estandares de seguridad son importantes durante el
                  desarrollo
                </h2>
                <Link href="#" className="gap-2 text-sm mt-4 flex items-center">
                  Visita los estándares de seguridad
                  <span className="ml-1">→</span>
                </Link>
              </Card>
            </div>

            <div className="w-full">
              <Card className="bg-[#1A1E24]">
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-6">
                      Los espacios de trabajo son importantes; deben tener las
                      dependencias necesarias
                    </h2>
                    <button className="flex items-center gap-2 text-sm text-blue-400 mb-8">
                      Leer los artículos relacionados
                      <span className="ml-1">→</span>
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-4 bg-[#2D333B] rounded-lg">
                        <h3 className="text-3xl font-bold text-white">~25%</h3>
                        <p className="text-sm text-gray-400 mt-2">
                          Incremento en el desarrollo
                        </p>
                      </div>
                      <div className="p-4 bg-[#2D333B] rounded-lg">
                        <h3 className="text-3xl font-bold text-white">1m</h3>
                        <p className="text-sm text-gray-400 mt-2">
                          Mejora en tiempos
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>
                    <div className="space-y-8 pl-8">
                      <div className="relative">
                        <div className="absolute left-[-2.5rem] top-1 w-4 h-4 bg-white rounded-full border-4 border-[#1A1E24]"></div>
                        <h3 className="text-lg font-semibold mb-1">
                          Problemas
                        </h3>
                        <p className="text-gray-400">
                          Inconsistent submissions and workflows limited
                          developer productivity and efficiency...
                        </p>
                      </div>
                      <div className="relative">
                        <div className="absolute left-[-2.5rem] top-1 w-4 h-4 bg-white rounded-full border-4 border-[#1A1E24]"></div>
                        <h3 className="text-lg font-semibold mb-1">
                          Soluciones
                        </h3>
                        <p className="text-gray-400">
                          GitHub Copilot y GitHub Codespaces mejoran la
                          consistencia del código...
                        </p>
                      </div>
                      <div className="relative">
                        <div className="absolute left-[-2.5rem] top-1 w-4 h-4 bg-white rounded-full border-4 border-[#1A1E24]"></div>
                        <h3 className="text-lg font-semibold mb-1">
                          Proyectos
                        </h3>
                        <ul className="text-gray-400 space-y-2">
                          <li className="flex items-center">
                            <div className="mr-2"></div>
                            Santillana
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2"></div>
                            Richmond
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2"></div>
                            Nomi
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0D1117] p-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="md:text-5xl font-bold text-white mb-12"
          >
            El estándar en la industria
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl p-8 text-white bg-[#1A1E24] h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-6"></div>
                <div>
                  <h2 className="text-4xl font-bold mb-3">50+</h2>
                  <p className="text-gray-400">
                    Incrementamos dia a dia nuestro rendimiento
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl p-8 text-white bg-[#1A1E24] h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-6"></div>
                <div>
                  <h2 className="text-4xl font-bold mb-3">55%</h2>
                  <p className="text-gray-400">
                    De nuestros desarrolladores se ha adaptado al ritmo
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Pintech 2024 estadistica
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl p-8 text-white bg-[#1A1E24] h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-full mb-6"></div>
                <div>
                  <h2 className="text-4xl font-bold mb-3">{"+"}4</h2>
                  <p className="text-gray-400">
                    Creciendo de empleados en la region Huasteca
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 text-white relative overflow-hidden bg-[#1A1E24]">
              <div className="relative z-10">
                <div className="text-6xl text-purple-500 mb-4">"</div>
                <p className="text-xl md:text-2xl mb-6">
                  Al dedicarse a reducir al máximo el tiempo de trabajo mientras
                  plantea el tiempo de trabajo como fuente de riqueza, el
                  capitalismo es un sistema que se basa en una contradicción
                  temporal fundamental que excluye al hombre de su propio
                  trabajo.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">Gilles Lipovetsky</h3>
                    <p className="text-sm text-gray-400">Sociologist</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2"></div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-[1px] bg-white rounded-full inline-block mb-4">
              <p className="bg-slate-900 text-sm py-1 px-3 rounded-full font-semibold text-white flex items-center">
                Desarrollo
              </p>
            </div>
            <h2 className="text-white font-black text-6xl mb-10">
              Al tener varias herramientas en concreto podemos desarrollar mas
              agilmente
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full mb-20"
            >
              <video
                alt="Code Preview"
                controls
                autoPlay
                loop
                className="rounded-lg w-full"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Inicia conversacion con alguno de los desarrolladores
                </h2>
                <p className="text-xl text-gray-400">
                  Sabemos las dudas que pueden surgir a lo largo de este
                  proceso, por lo que tener una buena conversacion con los
                  desarrolladores es de mucha importancia
                </p>
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Saber mas en caso de ser necesario
                  <span className="ml-2">→</span>
                </button>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="text-white font-semibold">
                      Nos preocupamos por la confidencialidad de los datos.
                    </h3>
                  </div>
                  <p className="text-gray-400 pl-4">
                    Los desarrolladores{" "}
                    <Link
                      href="#"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      confian en nuestra seguridad
                    </Link>{" "}
                    cuando{" "}
                    <Link
                      href="#"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      usan herramientas que estan aprovadas por el equipo de
                      desarrollo
                    </Link>
                    , las posibilidades de insertar codigo malisioso son bajas
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <h3 className="text-white font-semibold">
                      Favorecemos a la colaboracion.
                    </h3>
                  </div>
                  <p className="text-gray-400 pl-4">
                    Los miembros del equipo de desarrollo son flexibles a la
                    hora de enseñar las distintas herramientas de desarrollo que
                    utilizamos, garantizando software de calidad
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Obten sugerencias de codigo por parte de nuetro equipo de
                  desarrollo
                </h2>
                <p className="text-gray-400">
                  Nuestro equipo de desarrollo ofrece porciones de codigo en
                  secciones especificas en caso de ser requerido
                </p>
                <Link
                  href="#"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Leer los terminos
                  <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-1 rounded-2xl">
                <div className="bg-[#1A1E24] rounded-2xl overflow-hidden">
                  <div className="bg-[#2D333B] px-4 py-2 flex items-center gap-2">
                    <span className="ml-2 text-sm text-gray-400">
                      button.jsx
                    </span>
                  </div>
                  <div className="p-4 font-mono text-sm text-gray-300 space-y-2">
                    <div>
                      <span className="text-purple-400">interface</span>{" "}
                      <span className="text-blue-400">ButtonProps</span> {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">onClick</span>: () =&gt;{" "}
                      <span className="text-blue-400">void</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">text</span>:{" "}
                      <span className="text-blue-400">string</span>;
                    </div>
                    <div>{"}"}</div>
                    <div></div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">Button</span>:
                      React.FC&lt;ButtonProps&gt; = ({"{"}onClick, text{"}"})
                      =&gt; {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span> &lt;button
                      onClick={"{"}onClick{"}"}&gt;{"{"}text{"}"}
                      &lt;/button&gt;;
                    </div>
                    <div>{"}"}</div>
                    <div></div>
                    <div>
                      <span className="text-purple-400">export default</span>{" "}
                      Button;
                    </div>
                    <div className="mt-4 bg-[#2D333B] p-2 rounded-md">
                      <div className="text-sm">
                        Crear un nuevo componente Button
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Link
                          href="#"
                          className="px-3 py-1 bg-blue-500 text-white rounded"
                        >
                          Aceptar
                        </Link>
                        <button className="px-3 py-1 bg-red-500 text-white rounded">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-[1px] bg-gradient-to-r from-blue-500 to-green-500 rounded-full inline-block">
                  <p className="bg-slate-900 text-sm py-1 px-3 rounded-full font-semibold text-white flex items-center space-x-2">
                    Pinetech Dev
                  </p>
                </div>
                <h2 className="text-4xl font-bold text-white">
                  No damos vueltas y damos respuestas contundentes
                </h2>
                <p className="text-gray-400">
                  Al tratar algun tema sabemos que se puede desviar el tema por
                  lo que evitamos los rodeos y vamos al grano, esto en caso de
                  respuestas rapidas
                </p>
                <Link className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Saber mas acerca de esto
                  <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-2xl">
                <div className="bg-[#1A1E24] rounded-2xl overflow-hidden">
                  <div className="p-4 space-y-4">
                    <div className="bg-[#2D333B] p-3 rounded-lg flex items-center">
                      <span className="text-white">
                        Create a new API route for sharing a story
                      </span>
                      <span className="ml-auto text-gray-400">▶</span>
                    </div>
                    <div className="bg-[#2D333B] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        <span className="text-white">GitHub Copilot</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="mb-2">Used 5 references</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
                            <span>
                              github.copilot.chat.codeGeneration.instruction...
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-purple-500"></div>
                            <span>copilot-instructions.md</span>
                            <span className="text-gray-500">github</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                            <span>page.tsx:</span>
                            <span className="text-gray-500">39-50 app</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
                            <span>schema.sql</span>
                            <span className="text-gray-500">scripts</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-red-500"></div>
                            <span>spec.md</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0D1117] p-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => category.label}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === category.label
                        ? "bg-[#2D333B] text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-4">
                {questions.map((item) => (
                  <div key={item.id} className="border-b border-gray-800">
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full flex items-center justify-between py-4 text-left text-white hover:text-gray-300 transition-colors"
                    >
                      <span className="text-lg">{item.question}</span>
                      <span className="text-2xl ml-4">
                        {activeQuestionId === item.id ? "−" : "+"}
                      </span>
                    </button>
                    {activeQuestionId === item.id && (
                      <div className="pb-4 text-gray-400">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-2 text-sm text-gray-500">
            <p className="flex gap-2">
              <span>1.</span>
              <span>
                Datos proveidos por Pinetech Dev 2024{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Aqui
                </a>
              </span>
            </p>
            <p className="flex gap-2">
              <span>2.</span>
              <span>
                Feature in public beta for Copilot Individual and Business
                plans. Requires use of repositories, Issues, discussions,
                Actions, and other features of GitHub.
              </span>
            </p>
            <p className="flex gap-2">
              <span>3.</span>
              <span>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Autenticate con doble factor (SSO)
                </a>{" "}
                disponible para todas las organizaciones.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
