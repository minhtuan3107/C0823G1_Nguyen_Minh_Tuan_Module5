import axios from "axios";

export async function getList() {
    const result = await axios.get("http://localhost:8080/teacher")
    return result.data;
}

export async function add(teacher) {
    await axios.post("http://localhost:8080/teacher", teacher);
}

export async function edit(teacher) {
    await axios.put("http://localhost:8080/teacher/", teacher.id + teacher);
}

export async function findById(id) {
    const result = await axios.get(`http://localhost:8080/teacher/${id}`);
    return result.data
}

export async function deleteTeacher(id) {
    await axios.delete(`http://localhost:8080/teacher/${id}`)
}