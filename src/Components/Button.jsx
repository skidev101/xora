import React from 'react'
import ShinyText from './ShinyText'

const Button = ({ value, icon }) => {
  
  return (
    <div>
      <button type="submit" className="flex justify-center items-center gap-2 w-[5em] h-[2.2em] border-0 outline-0 text-white text-center bg-[#212121] text-[1.2em] rounded-[50px] hover:scale-100 active:border-emerald-400 transition transition-all">
        <ShinyText text={value}
          disabled={false}
          speed={3} 
          className=''
          />
        </button>
    </div>
  )
}


export default Button