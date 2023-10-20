import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function CourseMaterial() {
  const [list, setList] = useState([])
  let navigate = useNavigate()


  useEffect(() => {
    axios.get('http://80.67.212.178:8800/link').then((response) => {
      setList(response.data)
    })
  }, [])


  return (
    <div className='w-full h-full md:h-screen'>
      <h1 className='pt-28 pb-5 text-4xl flex justify-center font-sans'>
        Конспекты курса
      </h1>      
      {list.map((value, key) => {return <div onClick={() => {navigate(`/course/${value.id}`)}} key={key} className='px-5 my-4 md:px-12'>
        <div className='bg-slate-400 bg-opacity-30 w-full h-16 rounded-md cursor-pointer'>
          <p className='truncate text-3xl py-3 px-4'>{value.title}</p>
        </div>
      </div>
    })}          
    </div>
  )
}
