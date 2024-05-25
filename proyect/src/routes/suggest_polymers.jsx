import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";
import React, { useState } from 'react';
import axios from 'axios';

const SuggestForm = ({ inputValue, handleInputChange, handleSubmit, loading }) => (
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
      disabled={loading}
    />
  </form>
);

const Message = ({ loading, responseMessage, errorMessage }) => (
  <>
    {loading && <p className="text-center text-gray-500">Submitting...</p>}
    {responseMessage && <p className="text-center text-green-500">{responseMessage}</p>}
    {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
  </>
);

export default function Vista4() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setLoading(true);
    setResponseMessage(null);
    setErrorMessage(null);

    try {
      const response = await axios.post(`http://51.222.143.27:5000/suggest`, { prompt: inputValue }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      setResponseMessage('Response from API: ' + JSON.stringify(response.data));
    } catch (error) {
      setErrorMessage('Error submitting form: ' + error.message);
    } finally {
      setLoading(false);
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
        <h1 className="text-white font-bold text-center text-2xl mt-2">Suggest polymers</h1>
        <SuggestForm 
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Message 
          loading={loading}
          responseMessage={responseMessage}
          errorMessage={errorMessage}
        />
      </section>
    </div>
  );
}
