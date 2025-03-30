import React from 'react'

const Inputfield = ({ placeholder, value, onChange }) => {
  
  return (
    <div className="w-full h-full border hover:border-emerald-400 rounded-[50px] px-2">
      <input type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full h-full border-0 outline-0 bg-transparent"
      />
    </div>
  )
}


export default Inputfield