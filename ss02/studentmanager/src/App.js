import './App.css';

function App() {
    let studentList = [{name: "tuan", age: 18}, {name: "Hai", age: 28}];
    return (
        <div>
            <table>
                <tr>
                    <td>Ten</td>
                    <td>Tuoi</td>
                </tr>
                {studentList.map(student => (
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default App;
