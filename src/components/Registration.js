import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal';


export default function Registration() {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const initialValuesRegister ={
    username: "", 
    email: "", 
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Это поле обязательно для заполнения'), 
    email: Yup.string().email('Неверный формат электронной почты').required('Это поле обязательно для заполнения'),
    password: Yup.string().min(8, 'пароль должен содержать не менее 8 символов').max(20).required('Это поле обязательно для заполнения'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Это поле обязательно для заполнения') 

  });

  
  const onSubmit = (data) => {
    axios.post('http://80.67.212.178:8800/auth/', data).then((response) => {
      

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
    <>
    
     <div className='flex justify-center items-center h-screen bg-[#02013d] px-3'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='font-bold text-3xl'>Регистрация</h1>
          <hr className='mt-3'/>
          <div className='mt-3'>
           <Formik initialValues={initialValuesRegister}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}>
              <Form>
                <label className='block mb-2 text-xl font-normal'>Имя</label>
                <ErrorMessage name="username" component="span" className='text-red-700' />
                <Field name="username" autoComplete="off" id="inputCreatePost" title="username" placeholder="Введите имя"
                className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>

                <label className='block mb-2 mt-3 text-xl font-normal'>Электронная почта</label>
                <ErrorMessage name="email" component="span" className='text-red-700' />
                <Field name="email" autoComplete="off" id="inputCreatePost" placeholder="Введите электронную почту"
                className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>

                <label className='block mb-2 mt-3 text-xl font-normal'>Пароль</label>
                <ErrorMessage name="password" component="span" className='text-red-700' />
                <Field type="password" name="password" autoComplete="off" id="inputCreatePost" placeholder="Введите пароль"
                className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>

                <label className='block mb-2 mt-3 text-xl font-normal'>Повторите пароль</label>
                <ErrorMessage name="confirmPassword" component="span" className='text-red-700' />
                <Field type="password" name="confirmPassword" autoComplete="off" id="inputCreatePost" placeholder="Повторите пароль"
                className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>

                <div className='mt-5 justify-center flex'>
                    <button type="submit" className='border bg-blue-400 py-3 px-6 rounded-lg font-normal'>
                      Создать аккаунт
                    </button>
                </div>
                <div className='mt-5 flex'>
                  <p>
                    Есть профиль? 
                  </p>
                  <a href="/login" className='text-blue-700 font-bold pl-40'>Войти</a>
                </div>
              </Form>
           </Formik>
          </div>
        </div>
      </div>

      <Modal onClose={() => setModal(false)} visible={modal} message={message}/> 
    </>
  )
};