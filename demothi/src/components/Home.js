import {useEffect, useState} from "react";
import {editMusic, getList, getListt, searchMusic} from "./MusicService";
import {Field, Form, Formik} from "formik";

export function Home() {
    const [musics, setMusics] = useState([]);
    const [status, setStatus] = useState(0);
    const [page, setPage] = useState(1);
    const [flag, setFlag] = useState(1);
    useEffect(() => {
        getListt(page).then((list) => {
            setMusics(list);
            if (page === 1) {
                setFlag(1);
            }else {
                setFlag(3)
            }
            getListt(page + 1).then((list1) => {
                if (list1.length === 0) {
                    setFlag(2);
                }
            })
        })
    }, [status, page]);
    return (
        <>
            <Formik initialValues={{
                name: ""
            }
            } onSubmit={(values) => {
                const result = searchMusic(values.name);
                {
                    const b = async () => {
                        await setMusics(await result)
                    }
                    b()
                }
            }}>
                <Form>
                    <Field name='name'/>
                    <button type={"submit"}>Tim</button>
                </Form>
            </Formik>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Time</th>
                    {/*<th>Love</th>*/}
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </tbody>
            </table>
            {musics.map((music) => (
                <tr key={music.id}>
                    <td>{music.id}</td>
                    <td>{music.name}</td>
                    <td>{music.product}</td>
                    <td>{music.time}</td>
                    {/*<td>{music.love}</td>*/}
                    <td>{music.status === 1 ? "Public" : "Private"}</td>
                    <td>
                        <Formik initialValues={{
                            id: music.id,
                            name: music.name,
                            product: music.product,
                            time: music.time,
                            love: music.love,
                            status: music.status
                        }} onSubmit={(values) => {

                            {
                                values.status === 1 ? values.status = 0 : values.status = 1
                            }

                            editMusic(values).then(console.log(values), console.log(music))
                            {
                                status === 0 ? setStatus(1) : setStatus(0)
                            }
                        }}>
                            <Form>
                                <button type={"submit"}>Change Status</button>
                            </Form>
                        </Formik>
                    </td>
                </tr>
            ))}
            <table>
                <tr>
                    <td>
                        {flag === 1 && (
                            <button onClick={() => setPage(page + 1)}>Next</button>
                        )}
                        {flag === 2 && (
                            <button onClick={() => setPage(page - 1)}>Back</button>
                        )}
                        {flag === 3 && (
                            <button onClick={() => setPage(page - 1)}>Back</button>
                        )} {flag === 3 && (
                            <button onClick={() => setPage(page + 1)}>Next</button>
                        )}
                    </td>
                </tr>
            </table>
        </>
    )
}