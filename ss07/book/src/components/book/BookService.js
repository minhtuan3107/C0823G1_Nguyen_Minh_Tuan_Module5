import axios from "axios";

export async function getList() {
    const list = await axios.get("http://localhost:8080/posts");
    return list.data;
}

export async function findById(id) {
    const list = await axios.get(`http://localhost:8080/posts/${id}`);
    return list.data;
}

export async function addBook(book) {
    await axios.post("http://localhost:8080/posts", book);
}

export async function editBook(book) {
    await axios.put("http://localhost:8080/posts/" + book.id, book);
}

export async function deleteBook(id) {
    await axios.delete(`http://localhost:8080/posts/${id}`)
}