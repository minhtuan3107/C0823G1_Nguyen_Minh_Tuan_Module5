import {ErrorMessage, Field, Form, Formik} from "formik";
import *  as Yup from 'yup';

function Medical() {
    return (
        <>
            <Formik initialValues={{
                name: "",
                numberId: 0,
                age: "",
                gender: "1",
                country: "",
                city: "",
                numberMedical: "1",
                province: "",
                township: "",
                wards: "",
                numberHome: "",
                phone: 0,
                email: "",
                fourteenDays: '',
                fourteenFever: [],
                fourteenContact: ""
            }} validationSchema={Yup.object({
                name: Yup.string().required("Vui long nhap"),
                numberId: Yup.number().required("Vui long nhap khong duoc de trong"),
                age: Yup.date().required("Vui long nhap khong de trong").min(new Date('1900-01-01'), 'Khong duoc nhap duoi 1900'),
                country: Yup.string().required("Vui long nhap khong duoc de trong"),
                province: Yup.string().required("Khong duoc de trong"),
                township: Yup.string().required("Khong duoc de trong"),
                wards: Yup.string().required("Khong duoc de trong"),
                numberHome: Yup.string().required("Khong duoc de trong"),
                phone: Yup.number().required("Khong duoc de trong"),
                email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
            })}
                    onSubmit={(values) => {
                        alert("Khai báo thành cong")
                        console.log(values);
                    }}>
                <div>
                    <h1>Tờ khai y tế</h1>
                    <Form>
                        <p> Họ tên</p>
                        <Field name='name'/>
                        <ErrorMessage name='name' component={'span'}/>
                        <p>Số cmnd</p>
                        <Field name='numberId'/>
                        <ErrorMessage name='numberId' component={'span'}/>
                        <p>Tuổi</p>
                        <Field name='age'/>
                        <ErrorMessage name='age' component={'span'}/>
                        <p>Chon gioi tinh</p>
                        <Field type='radio' value="1" name='gender'/>Nam
                        <Field type='radio' value="2" name='gender'/>Nu
                        <p>Quốc tịch</p>
                        <Field name='country'/>
                        <ErrorMessage name='country' component={'span'}/>
                        <p>Công ty làm việc</p>
                        <Field name='city'/>
                        <p>Có thẻ bảo hiểm không ?</p>
                        <Field type='radio' value="1" name='numberMedical'/>Có
                        <Field type='radio' value="2" name='numberMedical'/>Không
                        <h1>Địa chỉ liên lạc tại Việt Nam</h1>
                        <p>Tỉnh thành</p>
                        <Field name='province'/>
                        <ErrorMessage name='province' component={'span'}/>
                        <p>Quận huyện</p>
                        <Field name='township'/>
                        <ErrorMessage name='township' component={'span'}/>
                        <p>Phường xã</p>
                        <Field name='wards'/>
                        <ErrorMessage name='wards' component={'span'}/>
                        <p>Số nhà</p>
                        <Field name='numberHome'/>
                        <ErrorMessage name='numberHome' component={'span'}/>
                        <p>Số điện thoại</p>
                        <Field name='phone'/>
                        <ErrorMessage name='phone' component={'span'}/>
                        <p>Email</p>
                        <Field name='email'/>
                        <ErrorMessage name='email' component={'span'}/>
                        <p>Trong 14 ngày qua Anh/Chị có đến quốc gia lãnh thổ nào?</p>
                        <Field name='fourteenDays'/>
                        <p>Trong 14 ngày Anh/Chị có thấy dấu hiệu nào sốt hay không?</p>
                        <Field type='checkbox' value="Sốt" name='fourteenFever'/>Sốt
                        <Field type='checkbox' value="Ho" name='fourteenFever'/>Ho
                        <Field type='checkbox' value="Khó thở" name='fourteenFever'/>Khó thở
                        <Field type='checkbox' value="Viêm phổi" name='fourteenFever'/>Viêm phổi
                        <Field type='checkbox' value="Đau họng" name='fourteenFever'/>Đau họng
                        <Field type='checkbox' value="mệt mỏi" name='fourteenFever'/>Mệt mỏi
                        <p>Trong 14 ngày qua Anh/Chị có tiếp xúc với ?</p>
                        <Field type='checkbox' value="1" name='fourteenContact'/>Người bệnh hoặc nghi ngờ mắc covid
                        <Field type='checkbox' value="2" name='fourteenContact'/>Người có bệnh covid
                        <Field type='checkbox' value="3" name='fourteenContact'/>Người có biểu hiện sốt/ho
                        <button type='submit'>Xac nhan</button>

                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default Medical;