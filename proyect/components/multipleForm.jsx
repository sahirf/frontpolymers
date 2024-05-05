import { Component } from "react";
import plus from '../src/assets/plus.svg'
import PropTypes from 'prop-types';

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs: ['input-0', 'input-1']
        };
    }
 

    render() {
        return (
            <>
                <div className=" grid md:grid-cols-2 sm:grid-cols-1 ml-8 mt-2 gap-4 md:w-80 sm:w-56 ">
                    <button onClick={this.handleAddInput} className=" relative  bg-blue-500 hover:bg-blue-700 text-white font-bold h-11  py-2 px-4 rounded" disabled={this.state.inputs.length >= 5}>Add Input</button>
                    <button onClick={this.handleRemoveInput} className=" relative   bg-red-500 hover:bg-red-700 text-white font-bold h-11 py-2 px-4 rounded" disabled={this.state.inputs.length <= 2}>Remove Input</button>
                </div>
                <form>
                    <div className=" w-11/12  ml-8">
                        <div id="dynamicInput" className="grid-rows-2">
                        <table>
                            {this.state.inputs.map((input, index) => (
                                <FormInput key={input} isLast={index === this.state.inputs.length - 1} />
                            ))}
                        </table>
                        </div>
                        <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
                
                    </div>
                </form>
            </>
        );
    }

    handleAddInput = () => {
        if (this.state.inputs.length < 5) {
            this.appendInputs(1);
        }
    }

    handleRemoveInput = () => {
        if (this.state.inputs.length > 2) {
            this.removeInputs(1);
        }
    }

    appendInputs(count) {
        const newInputs = Array.from({ length: count }, (_, i) => `input-${this.state.inputs.length + i}`);
        this.setState(prevState => ({ inputs: prevState.inputs.concat(newInputs) }));
    }

    removeInputs(count) {
        this.setState(prevState => ({ inputs: prevState.inputs.slice(0, -count) }));
    }
}
FormInput.propTypes = {
    isLast: PropTypes.bool.isRequired // Valida que isLast sea un booleano requerido
};
function FormInput({ isLast }) {
    return (
        <>
        <div className="relative mt-2 ml-3 grid grid-cols-2  lg:grid-cols-5">
            <div className="flex items-center rounded-md shadow-sm gap-3 ">
                <tr>
                    <td>
                        <div className="grid grid-flow-col-3 md:grid-flow-row ">
                            {/* grid grid-flow-col md:grid-flow-row md:grid-cols-3 */}
                            <label htmlFor="material" className="text-sm font-semibold leading-6 text-neutral-400 ">Insert material</label>

                            <input className="appearance-none block w-full md:w-72 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="material" type="text" placeholder="Insert material" />
                        </div>
                    </td>
                    <td>
                        <div className="grid-flow-col-3 ml-2">
                            <label htmlFor="material" className="text-sm font-semibold leading-6  text-neutral-400">Insert percentage</label>
                            <input type="number" className="appearance-none block w-full md:w-44  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  placeholder="Insert percentage" />
                        </div>

                    </td>

                </tr>
            </div>
        </div>
        <span>{isLast ? null : <img src={plus} className="w-9" alt="Polimer plus" />}</span>
        </>
    );
}

export default MultipleChoice;
