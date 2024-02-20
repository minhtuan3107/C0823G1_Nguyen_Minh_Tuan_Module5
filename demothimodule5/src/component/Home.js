import {useEffect, useState} from "react";
import {getList} from "./TeacherService";

export function Home() {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const listTeacher = async () => {
            const teacher = getList();
            setTeachers(teacher);
        }
        listTeacher()
    }, []);
    return (
        <>
            <table>
                <tr>
                    <td>
                        STT
                    </td>
                    <td>NAME</td>
                    <td>CLASS</td>
                </tr>
                {teachers.map((teacher) => (
                    <tr key={teacher.id}>
                        <td>{teacher.id}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.class}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}