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
            <div className="">
                <div className=" grid-rows-2 gap-4 ">
                    <button onClick={this.handleAddInput} className=" relative ml-8 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={this.state.inputs.length >= 5}>Add Input</button>
                    <button onClick={this.handleRemoveInput} className=" relative ml-2 mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" disabled={this.state.inputs.length <= 2}>Remove Input</button>
                </div>
                <form>
                    <div id="dynamicInput" className="grid-rows-2">
                    {this.state.inputs.map((input, index) => (
                        <FormInput key={input} isLast={index === this.state.inputs.length - 1} />
                    ))}
                    </div>
                    <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
                </form>
            </div>
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
        <div className="relative mt-2 ml-16 grid-cols-2  ">
            <div className="flex items-center rounded-md shadow-sm">
                <div className="grid-flow-col-3 ">
                    <label htmlFor="material" className="text-sm font-semibold leading-6 text-white">Insert material</label>
                    <input className="appearance-none block w-72 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="material" type="text" placeholder="Insert material" />
                </div>
                <div className="grid-flow-col-3 ml-2">
                    <label htmlFor="material" className="text-sm font-semibold leading-6 text-white">Insert percentage</label>
                    <input type="number" className="appearance-none block w-44  bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  placeholder="Insert percentage" />
                </div>
            </div>
        </div>
        <span>{isLast ? null : <img src={plus} className="w-9 ml-8" alt="Polimer plus" />}</span>
        </>
    );
}

export default MultipleChoice;
