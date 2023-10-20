import React from 'react';
import home from '../assets/home.jpg';

const MainPage = () => {
  return (
   <div name="home" className='h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl sm:text-7xl font-bold'>Цифровое равенство</h1>
                <p className='py-5 max-w-md font-mono text-xl'>Это онлайн платформа, где хранятся все лекции и материалы нашего курса</p>
            </div>
            <div className='mx-auto py-4 w-2/3 px-4 md:w-full'>
                <img src={home} alt=""/>
            </div>
        </div>
   </div>
  );
}

export default MainPage;