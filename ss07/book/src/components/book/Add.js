import {ErrorMessage, Field, Form, Formik} from "formik";
import {addBook} from "./BookService";
import {useNavigate} from "react-router-dom";
import *  as Yup from 'yup';

export default function Add() {
    const back = useNavigate();
    return (
        <Formik initialValues={{
            name: "",
            quantity: 0
        }}
                validationSchema={Yup.object({
                    title: Yup.string().required("Khong duoc de trong"),
                    quantity: Yup.number().required("Khong duoc de trong")
                })}
                onSubmit={(values) => {
                    addBook(values).then()
                    console.log(values)
                    back('/')
                }}>
            <Form>
                <p>Nhap Title</p>
                <Field name='title'/>
                <ErrorMessage name='title'/>
                <p>Nhap Quantity</p>
                <Field name='quantity'/>
                <ErrorMessage name='quantity'/>
                <button type='submit'>Xac nhan</button>
            </Form>
        </Formik>
    )
}