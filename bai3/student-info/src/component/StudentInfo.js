function StudentInfo() {
    let student = [{name: "Tuan", age: 18}, {name: "Bao", age: 20}, {name: "Tuan", age: 19}, {
        name: "Tuan",
        age: 20
    }, {name: "Tuan", age: 21}]
    return (
        <div>
            <table>
                <tr>
                    <td>#</td>
                    <td>Ten</td>
                    <td>Tuoi</td>
                </tr>
                {student.map((item, index) => (
                    <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default StudentInfo;