import React from 'react'

function PageNotFound() {
  return (
    <div className='text-4xl md:text-5xl max-w-screen-lg px-3 mx-auto flex flex-col justify-center w-full h-ful py-56 md:py-96'>
      <p>Ошибка 404! Страница не найдена.</p>
      <a href='/' className='text-blue-800'>Вернуться на главную страницу</a>
    </div>
  )
}

export default PageNotFound