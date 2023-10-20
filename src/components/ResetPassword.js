import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

export default function ResetPassword() {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState("");
    let navigate = useNavigate()

    const initialValuesRegister ={
        email: "", 
        password: "",
        };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Это поле обязательно для заполнения'),
        password: Yup.string().min(8, 'пароль должен содержать не менее 8 символов').max(20).required('Это поле обязательно для заполнения'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Это поле обязательно для заполнения') 
    }); 

    const onSubmit = (data) => {
        axios.post('http://80.67.212.178:8800/reset', data).then((response) => {
        

        if (response.data.status) {
            navigate("/login");
        }
        else {
            setMessage(response.data.message)
            setModal(true)
        }

        });
    };

  return (
    <div className='flex justify-center items-center h-screen bg-[#02013d] px-3'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
            <h1 className='font-bold text-2xl'>Восстановление пароля</h1>
            <hr className='mt-3'/>
            <Formik initialValues={initialValuesRegister}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}>
                <Form>
                    <label className='block mb-2 text-xl font-normal'>Электронная почта</label>
                    <ErrorMessage name="email" component="span" className='text-red-700' />
                    <Field name="email" autoComplete="off" placeholder="Введите электронную почту"
                    className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>

                    <label className='block mb-2 mt-3 text-xl font-normal'>Пароль</label>
                    <ErrorMessage name="password" component="span" className='text-red-700' />
                    <Field name="password" autoComplete="off" type="password" placeholder="Введите пароль"
                    className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>

                    <label className='block mb-2 mt-3 text-xl font-normal'>Повторите пароль</label>
                    <ErrorMessage name="confirmPassword" component="span" className='text-red-700' />
                    <Field type="password" name="confirmPassword" autoComplete="off" id="inputCreatePost" placeholder="Повторите пароль"
                    className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>

                    <div className='mt-5 justify-center flex'>
                        <button type="submit" className='border bg-blue-400 py-3 px-6 rounded-lg font-normal'>
                            Восстановить пароль
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>

        <Modal onClose={() => setModal(false)} visible={modal} message={message}/> 
    </div>

    
  )
}
