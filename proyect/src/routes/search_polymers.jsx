import { useState, useEffect } from 'react';
import axios from 'axios';
import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";

export default function Vista5() {  
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null); // Estado para almacenar los datos de la respuesta
  const [error, setError] = useState(null); // Estado para almacenar errores
  const [openIndex, setOpenIndex] = useState(null); // Estado para controlar qué acordeón está abierto

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://51.222.143.27:5000/all-types`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setData(response.data); // Almacena la respuesta en el estado
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Llama a la función para obtener los datos
  }, []); // El array vacío asegura que se ejecute una vez al montar el componente
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    try {
      const response = await axios.get(`http://51.222.143.27:5000/all-types`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Response from API:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  

  return (
    <div className="min-h-screen">
      <FondoAzul />
      <Navbar_ />
      <section>
        <h1 className="text-white font-bold text-center text-2xl mt-2">Search polymers</h1>
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange}
            className="mt-4 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
          />
          <input 
            type="submit" 
            className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" 
            value="Submit" 
          />
        </form>
        {error && <p className="text-red-500">{error}</p>} {/* Muestra el error si existe */}
        {data ? (
          <div className="text-white mt-4">
            {data.map((item, index) => (
              <div key={item[0]} className="mb-4">
                <div
                  className="flex justify-between items-center bg-gray-800 text-white p-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold">{item[1]}</h3>
                  <svg
                    className={`w-6 h-6 transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="bg-gray-700 text-white p-4">
                    <p>{item[1]}</p> {/* Aquí puedes añadir más detalles si los tienes */}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white mt-4">Loading...</p> // Muestra un mensaje de carga mientras se obtienen los datos
        )}
      </section>

    </div>
  );
}
