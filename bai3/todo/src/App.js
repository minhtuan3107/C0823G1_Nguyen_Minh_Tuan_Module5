import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: '',
        };
    }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.newTask],
            newTask: '',
        });
    };

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Todo</h1>
                <div>
                    <input
                        type="text" value={this.state.newTask}
                        onChange={(e) => this.setState({newTask: e.target.value})}
                    />
                    <button onClick={this.addTask}>Add</button>
                </div>
                <table style={{textAlign: "center"}}>
                    {this.state.tasks.map((task, index) => (
                        <tr>
                            <td>{task}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default App;
