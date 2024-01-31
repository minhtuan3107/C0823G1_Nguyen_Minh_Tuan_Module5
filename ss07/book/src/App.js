import logo from './logo.svg';
import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/todo/Home";
import Add from "./components/todo/Add";
import Edit from "./components/book/Edit";


function App() {
  return (
 <>
   <NavLink to='/'>Home</NavLink>
   <NavLink to='/add'>Add</NavLink>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/add' element={<Add/>}></Route>

   </Routes></>
  );

}

export default App;
