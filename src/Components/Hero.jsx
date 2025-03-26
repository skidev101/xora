import React from 'react'
import Inputfield from './Inputfield'
import Button from './Button'

const Hero = () => {
  
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center flex-col px-1.5 mt-5 xl:min-h-[80vh]">
      <div className="flex flex-col text-center">
        <p className="">Simple course platform with xora</p>
        <h1 className="text-4xl py-1.5 xl:text-5xl py-3">Create a course <br/> with xora</h1>
        <p className="mt-1 text-[1.1em] xl:mt-2 text-2xl">Turn your docs anywhere into a fully operational online course in <span>seconds</span>.<br/> All the power of a traditional course platform with an advanced AI tool, built in the same place you take notes.
        </p>
      </div>
      
      <div className="flex justify-center flex-col mt-3">
        <p className="text-left py-2">John, Alice and 9544 others are on the waitlist</p>
        <div className="flex items-center gap-1">
          <Inputfield placeholder="Enter your email"/>
          <Button value="Join" />
        </div>
      </div>
    </div>
  )
}


export default Hero