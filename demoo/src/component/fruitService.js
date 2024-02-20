import axios from "axios";

export async function getList(){
    const result = await axios.get("http://localhost:8080/fruit");
    return result.data;
}
export async function add(fruit){
    await axios.post("http://localhost:8080/fruit",fruit);
}
export async function edit(fruit){
    await axios.put("http://localhost:8080/fruit/"+fruit.id , fruit);
}
export async function findById(id){
    const result = await axios.get(`http://localhost:8080/fruit/${id}`);
    return result.data
}
export async function deleteFruit(id){
    await axios.delete(`http://localhost:8080/fruit/${id}`)
}