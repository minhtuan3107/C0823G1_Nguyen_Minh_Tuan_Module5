import axios from "axios";

export async function getList() {
    const result = await axios.get("http://localhost:8080/students");
    return result.data;
}

export async function add(student) {
    await axios.post("http://localhost:8080/students", student);
}

export async function editStudent(student) {
    await axios.put("http://localhost:8080/students/" + student.id, student);
}

export async function deleteStudent(id) {
    await axios.delete("http://localhost:8080/students" + id);
}

export async function findById(id) {
    const result = await axios.get(`http://localhost:8080/students/${id}`);
    return result.data;
}