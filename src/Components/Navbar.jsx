import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  
  return (
    <div className="flex justify-between items-center w-full h-max border-black border-b px-5 py-10">
      <div className="flex items-center">
        <img src={logo}
        alt="logo"
        className="w-[30px] h-[30px] object-cover object-center rounded-[50px]"
        />
        <h1 className="text-4xl px-1">xora</h1>
      </div>
      
      <div className="flex items-center gap-[24px] text-[18px]">
        <p>About</p>
        <p>Blog</p>
      </div>
      
      <div className="w-[6em] h-[3em]">
        <button className="w-full h-full bg-black text-white border-0 outline-0 rounded-lg text-2xl px-[4px] py-[2px] transition">Log in</button>
      </div>
    </div>
  )
}


export default Navbar