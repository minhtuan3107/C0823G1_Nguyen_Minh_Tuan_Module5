import {useEffect, useState} from "react";
import {getList} from "./ToDoService";

export default function Home() {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        getList().then((listToDo) => {
            setTodo(listToDo);
        })
    }, []);
    return (
        <>
            <table>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        Title
                    </td>
                    <td>
                        Completed
                    </td>
                </tr>
                {todo.map((list) => (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                        <td>{list.flag ? "OK" : "NO"}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}