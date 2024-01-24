import {Component} from "react";

class UpDown extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0}
    }

    increase = () => {
        this.setState({number: this.state.number + 1});
    }
    down = () => {
        this.setState({number: this.state.number - 1});
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>UP</button>
                <button onClick={this.down}>DOWN</button>
                <h1>{this.state.number}</h1>
            </div>
        )
    }
}


export default UpDown;