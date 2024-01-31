import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {editBook, findById} from "./BookService";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export default function Edit() {
    const back = useNavigate();
    const {id} = useParams();
    let [book, setBook] = useState();
    useEffect(() => {
      findById(id).then((result) => {
            setBook(result);
            console.log(result)
          console.log(book)

      })
    }, [id]);
    if (!book){
        return <p>Loading</p>
    }
    return (
        <>

            <Formik initialValues={{
                id: book.id,
                title: book.title,
                quantity: book.quantity
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Khong duoc de trong"),
                        quantity: Yup.number().required("Khong duoc de trong")
                    })}
                    onSubmit={(values) => {
                        editBook(values).then()
                        console.log(values)
                        back('/')
                    }}>
                <Form>
                    <p>Nhap ID</p>
                    <Field type={'hidden'} name='id'/>
                    <ErrorMessage name='id'/>
                    <p>Nhap Title</p>
                    <Field name='title'/>
                    <ErrorMessage name='title'/>
                    <p>Nhap Quantity</p>
                    <Field name='quantity'/>
                    <ErrorMessage name='quantity'/>
                    <button type='submit'>Xac nhan</button>
                </Form>
            </Formik>
        </>
    )
}