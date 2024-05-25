import { Component } from 'react';
import axios from 'axios';
import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";

class Vista5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      data: null,
      error: null,
      openIndex: null,
      subOpenIndex: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const [responseTypes, responsePolymers2, responsePolymers4] = await Promise.all([
        axios.get(`http://51.222.143.27:5000/types-from-type_id:2`, {
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        axios.get(`http://51.222.143.27:5000/polymers-from-type_id:2`, {
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        axios.get(`http://51.222.143.27:5000/polymers-from-type_id:4`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      ]);

      const data = {
        name: "Comportamiento con la temperatura",
        subItems: [
          {
            id: responseTypes.data[0][0],
            name: responseTypes.data[0][1],
            polymers: responsePolymers2.data
          },
          {
            id: responseTypes.data[1][0],
            name: responseTypes.data[1][1],
            polymers: responsePolymers4.data
          }
        ]
      };

      this.setState({ data });
    } catch (error) {
      this.setState({ error: 'Error fetching data' });
      console.error('Error fetching data:', error);
    }
  };

  toggleAccordion = (index) => {
    this.setState({ openIndex: this.state.openIndex === index ? null : index });
  };

  toggleSubAccordion = (index) => {
    this.setState({ subOpenIndex: this.state.subOpenIndex === index ? null : index });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Aquí puedes realizar otra petición si es necesario
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue, data, error, openIndex, subOpenIndex } = this.state;

    return (
      <div className="min-h-screen">
        <FondoAzul />
        <Navbar_ />
        <section>
          <h1 className="text-white font-bold text-center text-2xl mt-2">Search polymers</h1>
          <form onSubmit={this.handleSubmit} className="mx-auto max-w-lg">
            <input 
              type="text" 
              value={inputValue} 
              onChange={this.handleInputChange}
              className="mt-4 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            />
            <input 
              type="submit" 
              className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" 
              value="Submit" 
            />
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {data ? (
            <div className="text-white mt-4">
              <div key={data.name} className="mb-4">
                <div
                  className="flex justify-between items-center bg-gray-800 text-white p-4 cursor-pointer"
                  onClick={() => this.toggleAccordion(data.name)}
                >
                  <h3 className="text-lg font-semibold">{data.name}</h3>
                  <svg
                    className={`w-6 h-6 transform ${openIndex === data.name ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === data.name && (
                  <div className="bg-gray-700 text-white p-4">
                    {data.subItems.map((subItem, index) => (
                      <div key={subItem.id} className="mb-2">
                        <div
                          className="flex justify-between items-center bg-gray-800 text-white p-2 cursor-pointer"
                          onClick={() => this.toggleSubAccordion(index)}
                        >
                          <h4 className="text-md font-semibold">{subItem.name}</h4>
                          <svg
                            className={`w-5 h-5 transform ${subOpenIndex === index ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {subOpenIndex === index && (
                          <div className="bg-gray-700 text-white p-4">
                            {subItem.polymers ? (
                              <div className="text-white">
                                {subItem.polymers.map((polymer, polymerIndex) => (
                                  <div key={polymerIndex} className="mb-2">
                                    <div className="flex justify-between items-center bg-gray-800 text-white p-2">
                                      <h4 className="text-md font-semibold">{polymer[1]}</h4>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p>Loading...</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-white mt-4">Loading...</p>
          )}
        </section>
      </div>
    );
  }
}

export default Vista5;
