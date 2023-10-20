import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Login = () => {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");

  let navigate = useNavigate()


  const initialValuesLogin ={
    email: "", 
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Это поле обязательно для заполнения'),
    password: Yup.string().max(20, "Пароль не может быть длинее 20 символов").required('Это поле обязательно для заполнения')

  });

  const onSubmit = (data) => {
    axios.post('http://80.67.212.178:8800/auth/login/', data).then((response) => {
      if (response.data.status){
        sessionStorage.setItem("token", response.data.token);
        navigate("/course");
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
          <h1 className='font-bold text-3xl'>Авторизация</h1>
          <hr className='mt-3'/>
          <Formik initialValues={initialValuesLogin}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
            <Form>

              <label className='block mb-2 text-xl font-normal'>Электронная почта</label>
              <ErrorMessage name="email" component="span" className='text-red-700' />
              <Field name="email" autoComplete="off" id="inputCreatePost" title="email" placeholder="Введите электронную почту"
                className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>
              
              
              <label className='block mb-2 text-xl font-normal'>Пароль</label>
              <ErrorMessage name="password" component="span" className='text-red-700' />
              <Field type="password" name="password" autoComplete="off" id="inputCreatePost" title="password" placeholder="Введите пароль"
                className='border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-400'/>
                  <div className='flex items-center justify-between'>
                    <a href="/resetpassword" className='text-blue-700 font-bold'>Восстановить</a>
                  </div>
              
                <div className='mt-5 justify-center flex'>
                  <button className='border bg-blue-400 py-2 px-6 rounded-lg'>
                    Войти
                  </button>
                </div>
                <div className='mt-5 flex items-center justify-between'>
                  <p>
                    Ещё нет профиля? 
                  </p>
                  <a href="/registration" className='text-blue-700 font-bold'>Зарегистрироваться</a>
                </div>
            </Form>
          </Formik>
          
        </div>
      </div>

      <Modal onClose={() => setModal(false)} visible={modal} message={message}/> 
    </>
  )
};

export default Login;