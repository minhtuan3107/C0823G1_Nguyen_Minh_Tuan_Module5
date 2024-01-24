import React,{Component} from "react";
import Home from "./components/Home";
class LoginLogout extends Component{
   constructor(props) {
       super(props);
       this.state = {login: false};
   }
   login = () => {
       this.setState(this.state = true);
   }
   logout = () => {
       this.setState(this.state = false);
   }
   render() {
       let {login} = this.state;
       if (login){
           return <Home logout={this.logout}/>
       }
       return (
           <div>
               <h1>Login</h1>
               <button onClick={this.login}>Login</button>
           </div>
       )
   }
}
export default LoginLogout;