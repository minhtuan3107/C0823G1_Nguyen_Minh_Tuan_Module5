import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/student/Home";
import Create from "./components/student/Create";
import Edit from "./components/student/Edit";

function App() {
    return (
        <>
            {/*<Create></Create>*/}
            {/*<Home></Home>*/}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/create'>Add</NavLink>
            <NavLink to='edit/:id'>Edit</NavLink>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/create' element={<Create/>}></Route>
                <Route path='/edit/:id' element={<Edit/>}></Route>
            </Routes>
        </>
    );
}

export default App;
