import { useState } from 'react';
import axios from 'axios';
import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";

export default function Vista5() {  
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    try {
      const response = await axios.post(`http://51.222.143.27:5000/mix`, { data: inputValue }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
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
      </section>
    </div>
  );
}
