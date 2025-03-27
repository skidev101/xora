import React from 'react'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu.png'

const Header = () => {
  
  return (
    <header className="fixed top-0 left-0 w-full h-max flex justify-center items-center bg-[#212121]">
      <div className="flex justify-between items-center w-[98%] max-w-[700px] h-[2.8em] mt-4 py-3 px-2 bg-[#333333] border rounded-[50px]">
        <div className="flex items-center">
        <img src={logo}
        alt="logo"
        className="w-[30px] h-[30px] object-cover object-center rounded-[50px]"
        />
        <h1 className="text-[1.5em] px-1">xora</h1>
      </div>
      
      <ul className="hidden xl:flex items-center gap-[24px] text-[18px] mr-2">
        <li className="text-[1.1em] font-semibold hover:text-blue-400 hover:scale-100 transition-all">About</li>
        <li className="text-[1.1em] font-semibold hover:text-blue-400 hover:scale-100 transition-all">Blog</li>
      </ul>
      
      <div className="grid place-items-center xl:hidden text-[30px]">
        <i className="fa fa-bars text-[20px] pr-2"></i>
      </div>
      </div>
      
    </header>
  )
}


export default Header