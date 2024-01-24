import React,{Component} from "react";
import AlertComponent from "./components/AlertComponent";
class AppAlert extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display:true
        };
    }
    delete = () => {
        this.setState({display:false})
    }

    render() {
        let comp;
        if (this.state.display){
            comp = <AlertComponent/>;
        }
        return (
            <div>
                {comp}<button onClick={this.delete}>Delete</button>
            </div>
        );
    }
}
export default AppAlert;