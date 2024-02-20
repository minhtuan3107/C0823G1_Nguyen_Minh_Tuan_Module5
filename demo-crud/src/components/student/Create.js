import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import *  as Yup from 'yup';
import {add} from "./StudentService";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();

    return (
        <>
            <Formik initialValues={
                {
                    name: "",
                    age: 0
                }
            }
                    validationSchema={Yup.object({
                        name: Yup.string().required("Vui lòng nhập không được để trống"),
                        age: Yup.number().required("Vui lòng nhập không được để trống")
                    })}
                    onSubmit={(values, {resetForm}) => {
                       const data =  async => {
                            add(values).then(r => console.log())
                       }
                       data()
                        navigate('/')
                    }}>
                <Form>

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