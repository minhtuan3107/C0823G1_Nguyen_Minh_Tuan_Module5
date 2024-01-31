import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {editStudent, findById} from "./StudentService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import *  as Yup from 'yup';
export default function Edit() {
    const [student, setStudent] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const test = async () => {
            try {
                const a = await findById(id);
                setStudent(a);
            } catch (error) {
                console.log(error)
            }
        }
        test();
        console.log(student)
    }, [id])
    if (!student) return <h1>Loading....</h1>
    return (
        <>
            <Formik initialValues={
                {
                    id: student.id,
                    name: student.name,
                    age: student.age
                }
            }
                    validationSchema={Yup.object({
                        id: Yup.number().required("Vui lòng nhập không được để trống"),
                        name: Yup.string().required("Vui lòng nhập không được để trống"),
                        age: Yup.number().required("Vui lòng nhập không được để trống")
                    })}
                    onSubmit={(values) => {
                        editStudent(values).then(console.log);
                        navigate('/')
                    }}>
                <Form>
                    <p>Nhập id</p>
                    <Field type={'hidden'} name='id'/>
                    <ErrorMessage name='id'/>
                    <p>Nhập tên</p>
                    <Field name='name'/>
                    <ErrorMessage name='name'/>
                    <p>Nhập tuổi</p>
                    <Field name='age'/>
                    <ErrorMessage name='age'/>
                    <button type='submit'>Them</button>
                </Form>
            </Formik>
        </>
    )
}