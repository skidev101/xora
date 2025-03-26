import React from 'react'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu.png'

const Navbar = () => {
  
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full h-max border-black border-b px-3 py-5 xl:px-5 py-10">
      <div className="flex items-center">
        <img src={logo}
        alt="logo"
        className="w-[30px] h-[30px] object-cover object-center rounded-[50px]"
        />
        <h1 className="text-4xl px-1">xora</h1>
      </div>
      
      <ul className="hidden xl:flex items-center gap-[24px] text-[18px]">
        <li className="text-3xl text-black font-semibold hover:text-blue-400 hover:scale-100 transition-all">About</li>
        <li className="text-3xl text-black font-semibold hover:text-blue-400 hover:scale-100 transition-all">Blog</li>
      </ul>
      
      <div className="grid place-items-center xl:hidden text-[30px]">
        <i className="fa fa-bars"></i>
      </div>
      
    </header>
  )
}


export default Navbar