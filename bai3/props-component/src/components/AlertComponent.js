import React, {Component} from "react";

class AlertComponent extends Component {
    componentWillUnmount() {
        alert("Hehe")
    }

    render() {
        return <h1>Hello</h1>
    }
}

export default AlertComponent;