import axios from "axios";

export async function getList() {
    const result = await axios.get("http://localhost:8080/music");
    return result.data;
}

export async function addMusic(music) {
    await axios.post("http://localhost:8080/music", music);
}

export async function editMusic(music) {
    await axios.put("http://localhost:8080/music/" + music.id, music);
}

export async function findById(id) {
    const result = await axios.get(`http://localhost:8080/music/${id}`)
    return result.data;
}
export async function searchMusic(name){
    const result = await axios.get(`http://localhost:8080/music?name_like=${name}`);
    return result.data;
}
export async function getListt(number){
    const result = await axios.get(`http://localhost:8080/music?_page=${number}&_limit=4`);
    return result.data;
}
