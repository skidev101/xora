import React from 'react'
import Inputfield from './Inputfield'
import Button from './Button'

const Hero = () => {
  
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="flex flex-col text-center">
        <p className="py-2">Simple course platform with xora</p>
        <h1>Create a course <br/> with xora</h1>
        <p className="mt-2">Turn your docs anywhere into a fully operational online course in <span>seconds</span>.<br/> All the power of a traditional course platform with an advanced AI tool, built in the same place you take notes.
        </p>
      </div>
      
      <div className="flex flex-col py-2">
        <p className="text-left">John, Dave, Alice and 9544 others are on the waitlist</p>
        <div className="flex items-center gap-1">
          <Inputfield />
          <Button />
        </div>
      </div>
    </div>
  )
}


export default Hero