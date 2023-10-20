import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1, 
            tag: 'Главная', 
            link: 'home'

        }, 
        {
            id: 2, 
            tag: 'O нас',
            link: 'about'
        }, 
        {
            id: 3, 
            tag: 'Контакты',
            link: 'contacts'
        }, 
    ];
    return (
        <>
        <div class="flex justify-between items-center w-full h-20 text-white bg-[#02013d] fixed px-10 border-b shadow-xl">
            <div>
                <h1 className="text-3xl ml-4">ЦР 2.0</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({tag, id, link}) => (
                    <li key={id} 
                    className="px-6 py-2 text-2xl cursor-pointer font-bold hover:scale-105 duration-200">
                        <Link to={link} smooth={true} duration={500}>{tag}</Link></li>
                ))}      
                <button className="bg-white text-black font-bold rounded px-4 hover:scale-105 duration-200">
                   <a className="text-xl" href="/course"> 
                   Конспекты
                   </a>
                </button>          
            </ul>

            <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer px-4 z-10">
                {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900">
            {links.map(({tag, id, link}) => (
                    <li key={id} 
                    className="px-4 cursor-pointer font-bold hover:scale-105 duration-200 py-6 text-4xl">
                        <Link to={link} onClick={() => setNav(!nav)} smooth={true} duration={500} offset={-70}>{tag}</Link>
                    </li>
                ))}    
                <button className="bg-white text-black font-bold rounded py-3 px-12 text-2xl hover:scale-105 duration-200">
                <a href="/course">Конспекты</a>
                </button>    
            </ul>
            )}
        </div>
        </>
    );
}