import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {edit, findById} from "./fruitService";
import {Field, Form, Formik} from "formik";

export function Edit() {
    const {id} = useParams();
    const [fruit, setFruit] = useState(null);
    const back = useNavigate();
    useEffect(() => {
        const findFruit = async () => {
            const fruits = await findById(id);
            setFruit(fruits);
        }
        findFruit()
    }, [id]);
    console.log(fruit)
    return (
        <>
            {fruit !== null &&
                <Formik initialValues={{
                    id: id,
                    name: fruit.name,
                    type: fruit.type
                }} onSubmit={values => {
                    edit(values).then(back("/"))
                }}
                >
                    <Form>
                        <p>Nhap ten</p>
                        <Field type="hidden" name="id"/>
                        <Field name="name"/>
                        <p>Nhap loai</p>
                        <Field name="type"/>
                        <button type={"submit"}>Xac nhan sua</button>
                    </Form>
                </Formik>
            }
        </>
    )
}