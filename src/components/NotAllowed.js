import React from 'react'

export default function NotAllowed() {
  return (
    <div className='max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full h-ful py-56 md:py-80'>
        <p className='text-3xl md:text-4xl'>Похоже вы не авторизировлись. Чтобы получить доступ к данным курса, 
        необходимо <a href='/login' className='text-blue-800'>войти</a> или <a href='/registration' className='text-blue-800'>зарегистрироваться</a>.</p>
    </div>
  )
}
