import *  as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {add} from "./fruitService";

export function Add() {
    const back = useNavigate();
    return (
        <>
            <Formik initialValues={{
                name: "",
                type: ""
            }} validationSchema={Yup.object({
                name: Yup.string().required("Vui lòng khong để trống"),
                type: Yup.string().required("Vui long khong de trong")
            })}
                    onSubmit={values => {
                        add(values).then(back('/'))
                    }}>
                <Form>
                    <p>Nhap ten</p>
                    <Field name='name'/>
                    <ErrorMessage name='name'/>
                    <p>Nhap loai</p>
                    <Field name='type'/>
                    <ErrorMessage name='type'/>
                    <button type={"submit"}>Xac nhan</button>
                </Form>
            </Formik>
        </>
    )
}