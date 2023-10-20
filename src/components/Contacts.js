import React from 'react';

export const Contacts = () => {
  return (
    <div name="contacts" className='w-full h-screen'>
      <div className='justify-center flex pt-16 md:pt-40'>
        <h1 className='font-bold text-5xl'>Контакты</h1>
      </div>
      <div>
        <p className='justify-center flex pt-2 text-center px-8 text-2xl'>Центр цифрового образования “IT-Куб.Норильск”</p>
      </div>
      <div className='grid sm:grid-cols-4 text-center pt-10 px-24 gap-16 md:pt-52'>
        <div className=''>
          <svg className='inline-table w-14' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
          </svg>
          <h2 className='text-2xl font-semibold pt-5'>Электронная почта</h2>
          <p className='text-xl'>equality2.0@yandex.ru</p>
        </div>
        <div>
          <svg className='inline-table w-14' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <h2 className='text-2xl font-semibold pt-5'>Телефон</h2>
          <p className='text-xl'>+7 (913) 504-33-00</p>
        </div>
        <div>
          <svg className='inline-table w-14' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <h2 className='text-2xl font-semibold pt-5'>Адрес</h2>
          <p className='text-xl md:mb-0'>ул. 50 лет Октября, 10</p>
        </div>
        <div className='mb-8 md:mb-0'>
          <a href="https://vk.com/club220040136"><svg  className='inline-table w-16 h-14 ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path class="a" d="M27.55,35.19V28.55c4.46.68,5.87,4.19,8.71,6.64H43.5a29.36,29.36,0,0,0-7.9-10.47c2.6-3.58,5.36-6.95,6.71-12.06H35.73c-2.58,3.91-3.94,8.49-8.18,11.51V12.66H18l2.28,2.82,0,10.05c-3.7-.43-6.2-7.2-8.91-12.87H4.5C7,20.32,12.26,37.13,27.55,35.19Z"></path></svg></a>
          <h2 className='text-2xl font-semibold pt-5'>Соцсети</h2>
          <a href="https://vk.com/club220040136" className='text-xl  text-blue-800 font-semibold'>Наш ВК</a>
        </div>
      </div>
    </div>
  );
}
