import {ErrorMessage, Field, Form, Formik} from "formik";
import {addMusic} from "./MusicService";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";

export default function Add() {
    const back = useNavigate();
    return (
        <>
            <Formik initialValues={{
                name: "",
                product: "",
                time: "",
                status: 0,
                love: 0
            }} validationSchema={Yup.object({
                name: Yup.string().required("Vui long khong de trong").max(30, "Khong duoc duoi 30 ki tu"),
                product: Yup.string().required("Khong duoc de trong").max(30, "Khong duoc nhap duoi 30 ki tu"),
                time: Yup.string().required("Vui long nhap khong duoc de trong").matches("^[0-9]{2}:[0-9]{2}$","Nhap dung dinh dang hh:mm")
            })}
                    onSubmit={(values) => {
                        addMusic(values).then()
                        back("/");
                    }}>
                <Form>
                    <p>Name</p>
                    <Field name='name'/>
                    <ErrorMessage name='name' component={"span"}/>
                    <p>Product</p>
                    <Field name='product'/>
                    <ErrorMessage name='product' component={"span"}/>
                    <p>Time</p>
                    <Field name='time'/>
                    <ErrorMessage name='time' component={"span"}/>
                    <button type={"submit"}>Add</button>
                </Form>
            </Formik>
        </>
    )
}