import {useEffect, useState} from "react";
import {deleteFruit, getList} from "./fruitService";
import {Link} from "react-router-dom";

export function Home() {
    const [fruits, setFruits] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [fruitDelete, setFruitDelete] = useState({});
    useEffect(() => {
        const getListFruit = async () => {
            const listFruit = await getList();
            setFruits(listFruit);
        }
        getListFruit();
    }, [showModal]);
    console.log(fruits)
    return (
        <>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Status</td>
                </tr>
                {fruits.map((f) => (
                    <tr key={f.id}>
                        <td>{f.id}</td>
                        <td>{f.name}</td>
                        <td>{f.type}</td>
                        <td>
                            <Link to={`edit/${f.id}`}>Edit</Link>
                            <button onClick={() => {
                                setShowModal(true);
                                setFruitDelete(f);
                            }}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
            {showModal &&
                <div>
                    <div className='custom-modal'>
                        <p>Ban co muon xoa</p>
                        <button onClick={() => {
                            deleteFruit(fruitDelete.id);
                            setShowModal(false);
                        }}>Co
                        </button>
                        <button onClick={() => {
                            setShowModal(false);
                        }}>Không
                        </button>
                    </div>
                </div>}
        </>
    )
}