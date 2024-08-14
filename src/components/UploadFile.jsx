
import React, { useState } from 'react';

function UploadFile() {
    const [currentStep, setCurrentStep] = useState(1);
  
    const handleNextStep = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrevStep = () => {
      setCurrentStep(currentStep - 1);
    };
  
    return (
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Hola, [Nombre_Usuario]</h2>
        <p className="text-gray-600 mb-6">
          Seleccione el nombre del proveedor del cual desea procesar
          documentos. A continuación, elija el archivo PDF desde su equipo
          utilizando el botón 'Examinar'. Finalmente, presione 'Procesar' para
          iniciar la digitalización.
        </p>
  
        <div className="grid grid-cols-1 gap-6">
          {/* Step 1: Select Provider */}
          {currentStep === 1 && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">
                1. Seleccionar de Proveedor
              </h3>
              <input
                type="text"
                placeholder="Procter & Gamble"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end mt-4">
              </div>
            </div>
          )}
  
          {/* Step 2: Upload PDF */}
          {currentStep === 2 && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">
                2. Cargar Archivo PDF (Máximo 5 archivos o 10 MB a la vez)
              </h3>
              <div className="flex items-center">
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  id="upload-pdf"
                />
                <label
                  htmlFor="upload-pdf"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Examinar...
                </label>
                <span className="ml-4 text-gray-600">
                  4650387265.PDF, 4650387266.PDF, 4650387267.PDF, 4650387268.PDF,
                  4650387269.PDF
                </span>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                  onClick={handlePrevStep}
                >
                  Anterior
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-4"
                  onClick={handleNextStep}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
  
          {/* Step 3: Process PDF */}
          {currentStep === 3 && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">
                3. Procesar PDF para Digitalización
              </h3>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                onClick={handlePrevStep}
              >
                Anterior
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-4"
                disabled={true}
              >
                Procesar PDF
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default UploadFile;