import './App.css';
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {flag: false};
    }

    handler = () => {
        if (this.state.flag) {
            this.setState({flag: false});
        } else {
            this.setState({flag: true});
        }
    }

    render() {
        let comp;
        let button;
        if (this.state.flag) {
            comp = <h1>Hello hello helo</h1>
            button = <button onClick={this.handler}>Dong</button>;
        } else {
            comp = <h1></h1>
            button = <button onClick={this.handler}>Mo</button>;
        }
        return (
            <div>
                {comp}
                {button}
            </div>
        )
    }
}

export default App;
