import React,{Component} from "react";

class Home extends Component{
    render() {
        return(
            <div>
                <h1>WellCome</h1>
                <button onClick={this.props.logout}>OUT</button>
            </div>
        )
    }
}

export default Home;