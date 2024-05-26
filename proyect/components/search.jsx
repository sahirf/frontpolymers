import { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      error: null,
      showModal: false,
      loading: false,
      responseMessage: '',
      errorMessage: '',
      polymers: [[0, "Polymer1", "Type1"], [1, "Polymer2", "Type2"]] // Ejemplo de polímeros
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.match_api()) {
      this.setState({ showModal: true, loading: true });

      try {
        const id = this.getPolymerId();

        // Llamar al primer endpoint
        const response1 = await axios.get(`http://51.222.143.27:5000/properties-from-polymer_id:${id}`, {
          headers: { 'Content-Type': 'application/json' }
        });

        const properties = response1.data;

        // Llamar a los otros dos endpoints para verificar el tipo de polímero
        const response2 = await axios.get('http://51.222.143.27:5000/polymers-from-type_id:2');
        const response3 = await axios.get('http://51.222.143.27:5000/polymers-from-type_id:3');

        const typeData2 = response2.data;
        const typeData3 = response3.data;

        let types = '';
        if (typeData2.some(polymer => polymer.id === id)) {
          types = `<h1>Tipos</h1><ul><li><strong>Por temperatura</strong></li><li><strong>Termoplásticos</strong></li><li>de Ingenieria</li></ul>`;
        } else if (typeData3.some(polymer => polymer.id === id)) {
          types = `<h1>Tipos</h1><ul><li><strong>Por temperatura</strong></li><li><strong>Termoplásticos</strong></li><li>comunes</li></ul>`;
        }

        this.setState({
          responseMessage: `
            <h1>Propiedades</h1>
            <ul>
              <li>Densidad: ${properties.densidad}</li>
              <li>ID de polímero: ${properties['id de polímero']}</li>
              <li>Módulo de tracción: ${properties['módulo de tracción']}</li>
              <li>Resistencia al impacto: ${properties['resistencia al impacto']}</li>
              <li>Resistencia de tracción: ${properties['resistencia de tracción']}</li>
              <li>Índice de flujo: ${properties['índice de flujo']}</li>
            </ul>
            ${types}
          `,
          loading: false,
          errorMessage: ''
        });
      } catch (error) {
        this.setState({
          loading: false,
          errorMessage: 'Error fetching data'
        });
        console.error('Error fetching data:', error);
      }
    } else {
      this.setState({ errorMessage: 'Digite un polímero valido' });
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  match_api = () => {
    const { inputValue, polymers } = this.state;
    const lowerInput = inputValue.toLowerCase();

    return polymers.some(polymer =>
      polymer[1].toLowerCase() === lowerInput || polymer[2].toLowerCase() === lowerInput
    );
  };

  getPolymerId = () => {
    const { inputValue, polymers } = this.state;
    const lowerInput = inputValue.toLowerCase();

    const polymer = polymers.find(polymer =>
      polymer[1].toLowerCase() === lowerInput || polymer[2].toLowerCase() === lowerInput
    );

    return polymer ? polymer[0] : null;
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { inputValue, showModal, loading, responseMessage, errorMessage } = this.state;
    return (
      <>
        <h1 className="text-white font-bold text-center text-2xl mt-2">Search polymers</h1>
        <form onSubmit={this.handleSubmit} className="mx-auto max-w-lg">
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
            className="mt-4 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
          <input
            type="submit"
            className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            value="Submit"
          />
        </form>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
            <article className="bg-white p-8 rounded w-4/5 max-w-screen-lg mx-4 overflow-auto max-h-screen modal-content">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  <div dangerouslySetInnerHTML={{ __html: responseMessage }} />
                </>
              )}
              <div className="flex justify-end">
                <button onClick={this.toggleModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
              </div>
            </article>
          </div>
        )}
      </>
    );
  }
}

export default Search;
