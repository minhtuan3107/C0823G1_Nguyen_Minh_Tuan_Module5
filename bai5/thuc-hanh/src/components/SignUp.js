import {useState} from "react";

function SignUp(){
    const [data, setData]= useState("")
    const [list, setList]=useState([]);
    const handleInput=(event) =>{
        setData(event.target.value)

    }
    const handleButton=()=>{
        setList((x)=>[data, ...x]);
        setData("")
    }
    return(
        <>
            <h1>Sign Up</h1>
            <input
            value={data}
            onChange={handleInput}
            ></input>
            <button
            onClick={handleButton}
            >Add</button>
            <ul>
                {list.map((data, index) =>
                <li key={index}>{data}</li>
                )}
            </ul>
        </>
    )
}
export default SignUp;