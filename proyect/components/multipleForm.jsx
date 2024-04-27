import { Component } from "react";
import plus from '../src/assets/plus.svg'
class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs: ['input-0', 'input-1']
        };
    }
 

    render() {
        return (
            <div>
                <div className=" grid-rows-2 gap-4 ">
                    <button onClick={this.handleAddInput} className=" relative ml-8 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={this.state.inputs.length >= 5}>Add Input</button>
                    <button onClick={this.handleRemoveInput} className=" relative ml-2 mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" disabled={this.state.inputs.length <= 2}>Remove Input</button>
                </div>
                <form>
                    <div id="dynamicInput" className="grid-rows-2">
                        {this.state.inputs.map(input => <FormInput key={input} />)}
                    </div>
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

function FormInput() {
    return (
        <div className="mt-2 grid-rows-2">
            <div className="relative w-80 ml-8 mt-2 rounded-md shadow-sm">
                <input type="text" className="w-20 rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600/55 sm:text-sm sm:leading-6" />
                <input type="number" className="w-8  rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600/55 sm:text-sm sm:leading-6" />
            </div>
            <img src={plus} className="relative" alt="Polimer plus" />
        </div>
    );
}

export default MultipleChoice;
