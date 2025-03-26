import React from 'react'

const Inputfield = ({ placeholder }) => {
  
  return (
    <div className="w-full h-[3em] border focus:border-black rounded pl-1.5">
      <input type="email"
      placeholder={placeholder}
      required
      className="w-full h-full border-0 outline-0 bg-none"
      />
    </div>
  )
}


export default Inputfield