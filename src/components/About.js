import React from 'react';

export const About = () => {
  return (
     <div name="about" className='w-full h-full md:h-screen bg-black text-white'>
        <div className='max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4'>O нас</p>
            </div>
                <p className='text-3xl mt-5'>
                Цифровое Равенство - проект, нацеленный на обучение людей пожилого возраста цифровым технологиям. Все лекции 
                и материалы для них готовят подростки-менторы. Они выступают в качестве наставников для слушателей. Проект реализуется на
                базе "IT-куб Норильск" благодаря победе в грантовом конкурсе "Мир новых возможностей" компании "Норникель".
                </p>
            </div>
     </div>
  );
}