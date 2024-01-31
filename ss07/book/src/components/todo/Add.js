import {Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import {addTodo} from "./ToDoService";
import {useNavigate, useNavigation} from "react-router-dom";

export default function Add() {
    const back = useNavigate();
    return (
        <>
            <Formik initialValues={{
                id: 0,
                title: "",
                flag: false
            }} onSubmit={(values) => {
                addTodo(values);
                back("/")
            }}>
                <Form>
                    <p>ID</p>
                    <Field name='id'/>
                    <p>Title</p>
                    <Field name='title'/>
                    <p>Completed</p>
                    <Field type='radio' name='flag' value='true'/>OK
                    <Field type='radio' name='flag' value='false'/>NO
                    <Button type={"submit"}>Them</Button>
                </Form>
            </Formik>
        </>
    )
}