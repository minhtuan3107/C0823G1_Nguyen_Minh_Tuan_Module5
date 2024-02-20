import logo from './logo.svg';
import './App.css';
import {Home} from "./component/Home";
import {NavLink, Route, Routes} from "react-router-dom";
import {Add} from "./component/Add";
import {Edit} from "./component/Edit";

function App() {
  return (
   <>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/add'>Add</NavLink>
       <NavLink to='/edit/:id'></NavLink>
       <Routes>
           <Route path='/' element={<Home/>}>Home</Route>
           <Route path='/add' element={<Add/>}>Add</Route>
           <Route path='/edit/:id' element={<Edit/>}>Edit</Route>
       </Routes>
   </>
  );
}

export default App;
