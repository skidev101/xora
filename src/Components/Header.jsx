import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 w-full h-max flex justify-center items-center text-white bg-black">
      <div className="flex justify-between items-center w-[95%] max-w-[780px] h-[2.8em] mt-4 py-3 px-2 bg-[#212121] border-[#b5b5b5a4] rounded-[50px]">
        <div className="flex items-center">
        <img src={logo}
        alt="logo"
        className="w-[30px] h-[30px] object-cover object-center rounded-[50px]"
        />
        <h1 className="text-[1.5em] px-1">xora</h1>
      </div>
      
      <ul className="hidden xl:flex items-center gap-[24px] text-[18px] mr-4">
        <li className="text-[1.1em] font-semibold hover:text-emerald-400 list-none hover:scale-100 transition-all">About</li>
        <li className="text-[1.1em] font-semibold hover:text-emerald-400 list-none hover:scale-100 transition-all">Blog</li>
      </ul>
      
      <div className="grid place-items-center xl:hidden text-[30px]">
        <i className="fa fa-bars text-[20px] pr-2" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      </div>
      <ul className={`absolute top-0 ${isMenuOpen ? "right-0" : "right-[-100%]"} xl:hidden flex justify-center items-center flex-col gap-5 backdrop-blur w-full h-[100vh] transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
       style={{transform: "right 0.5s ease-out, transition 0.5s ease, opacity 0.5s ease"}}>
        <i className="fa fa-xmark text-white text-2xl absolute top-6 right-5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        <li className="list-none w-full p-5 text-center text-2xl text-white hover:text-emerald-400 transition transition-all">About</li>
        <li className="list-none w-full p-5 text-center text-2xl text-white hover:text-emerald-400 transition transition-all">Blog</li>
      </ul>
      
      </div>
    </header>
  )
}


export default Header