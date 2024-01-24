import React, {Component} from "react";
class ColorComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {color : 'black'};
    }
    componentDidMount() {
        setTimeout(() => {
            this.state({color: 'pink'})
        },3000);
    }
    render() {
        return(
            <div>
                <div style={{backgroundColor: this.state.color}}></div>
            </div>
        )
    }
}
export default ColorComponent;