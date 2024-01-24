import './App.css';
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {input: '', result: '',};
    }

    handleNumberClick = (value) => {
        this.setState((prevState) => ({input: prevState.input + value}));
    };

    handleOperatorClick = (operator) => {
        if (this.state.input !== '') {
            this.setState((prevState) => ({input: prevState.input + operator}));
        }
    };


    handleEqualClick = () => {
        this.setState({result: eval(this.state.input).toString()});
    };

    render() {
        const {input, result} = this.state;

        return (
            <div className="calculator">
                <input type="text" value={input} readOnly/>
                <br/>
                <button onClick={() => this.handleNumberClick('1')}>1</button>
                <button onClick={() => this.handleNumberClick('2')}>2</button>
                <button onClick={() => this.handleNumberClick('3')}>3</button>
                <button onClick={() => this.handleOperatorClick('+')}>+</button>
                <br/>
                <button onClick={() => this.handleNumberClick('4')}>4</button>
                <button onClick={() => this.handleNumberClick('5')}>5</button>
                <button onClick={() => this.handleNumberClick('6')}>6</button>
                <button onClick={() => this.handleOperatorClick('-')}>-</button>
                <br/>
                <button onClick={() => this.handleNumberClick('7')}>7</button>
                <button onClick={() => this.handleNumberClick('8')}>8</button>
                <button onClick={() => this.handleNumberClick('9')}>9</button>
                <button onClick={() => this.handleOperatorClick('*')}>*</button>
                <br/>
                <button onClick={() => this.handleNumberClick('0')}>0</button>
                <button onClick={() => this.handleOperatorClick('/')}>/</button>
                <button onClick={this.handleEqualClick}>=</button>
                <br/>
                <div>Result: {result}</div>
            </div>
        );
    }
}

export default App;
