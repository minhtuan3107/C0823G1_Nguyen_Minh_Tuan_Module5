import {Component} from "react";
class AddComponents extends Component{
    render() {
        return <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>
    }
}
export default AddComponents;