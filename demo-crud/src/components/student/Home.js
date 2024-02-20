import {useEffect, useState} from "react";
import axios from "axios";
import {getList} from "./StudentService";
import {Link} from "react-router-dom";
import Modal from './Modal'; // Import modal component

function Home() {
    const [students, setStudents] = useState([]);
    const getStudent = async() => {
        const data = await getList();
        setStudents(data);
    }
    useEffect(() => {
        getStudent().then(r => console.log());
    }, []);
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Hanh dong</th>
                </tr>
                </tbody>
                {students.map((std) => (
                    <tr key={std.id}>
                        <td>{std.id}</td>
                        <td>{std.name}</td>
                        <td>{std.age}</td>
                        <td>
                            <Link to={`edit/${std.id}`}>Edit</Link>
                       </td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Home;