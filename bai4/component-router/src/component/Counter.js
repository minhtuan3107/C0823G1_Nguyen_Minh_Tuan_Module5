import {useState} from "react";

export function Counter() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    let handleCount1 = () => {
        setCount1(count1 + 1);
    };
    let handleCount2 = () => {
        setCount2(count2 + 2);
    };
    return (
        <div>
            <p>Count: {count1}</p>
            <button onClick={handleCount1}>UP</button>
            <p>Count: {count2}</p>
            <button onClick={handleCount2}>UP</button>
        </div>
    )
}