import React from 'react'

const Button = ({ value }) => {
  
  return (
    <div>
      <button type="submit" className="w-[5em] h-[2.8em] border-0 outline-0 font-bold text-white text-[1.2em] bg-blue-600 hover:bg-blue-400 transition-all rounded">{value}</button>
    </div>
  )
}


export default Button