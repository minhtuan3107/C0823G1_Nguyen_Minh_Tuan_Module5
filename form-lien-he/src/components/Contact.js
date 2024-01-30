import {ErrorMessage, Field, Form, Formik} from "formik";
import *  as Yup from 'yup';

function Contact() {
    return (
        <>
            <Formik initialValues={{
                name: "",
                email: "",
                phone: 0,
                message: ""
            }} validationSchema={Yup.object({
                name: Yup.string().required("Vui long nhap khong duoc de trong"),
                email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).required("Vui long nhap khong duoc de trong"),
                phone: Yup.number("Vui long nhap so").required("Vui long nhap khong duoc de trong"),
                message: Yup.string().required("Vui long nhap khong duoc de trong")
            })}
                    onSubmit={(values) => {
                        alert("Them thanh cong")
                    }}>
                <Form>
                    <p>Nhap ten</p>
                    <Field name='name'/>
                    <ErrorMessage name='name' component={'span'}/>
                    <p>Nhap email</p>
                    <Field name='email'/>
                    <ErrorMessage name='email' component={'span'}/>
                    <p>Nhap so dien thoai</p>
                    <Field name='phone'/>
                    <ErrorMessage name='phone' component={'span'}/>
                    <p>Nhap message</p>
                    <Field name='message'/>
                    <ErrorMessage name={'message'} component={'span'}/>
                    <button type='submit'>Xac Nhan</button>
                </Form>
            </Formik>
        </>
    )
}

export default Contact;