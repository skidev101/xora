import React, { useState } from 'react'
import Inputfield from './Inputfield'
import Button from './Button'
import ShinyText from './ShinyText'
import CountUp from './CountUp'
import Waves from './Waves';

const Hero = () => {
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const saveToLocalStorage = () => {
    localStorage.setItem('email', JSON.stringify(userEmail));
  }
  
  const waitlistCheck = () => {
    let email;
    if (localStorage.getItem(userEmail) !== '') {
      email = JSON.parse(localStorage.getItem(userEmail));
      if (userEmail == email) {
        setMessage(`You're already on the waitlist`);
    } else {
        setMessage('You are now on the waitlist');
      }
    } else {
      saveToLocalStorage();
    }
    
  }
  
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center flex-col text-white bg-black px-1.5 mt-5 ">
      
      <div className="flex justify-center items-center flex-col text-center">
        <div className="flex justify-center items-center w-max bg-[#212121] rounded-[50px]">
          <p className="text-emerald-400 py-2">{message}</p>
          <ShinyText text="Simple Course platform with xora" 
          disabled={false}
          speed={3} 
          className='px-4 py-1.5 text-[14px] text-center'
          />
        </div>
        
        <h1 className="text-4xl font-bold py-1.5 xl:text-5xl py-3">Create a course <br/> with xora</h1>
        
        <p className="mt-1 xl:mt-2 text-[1.1em] text-2xl">Turn your docs anywhere into a fully operational online course in <span>seconds</span><br/> with xora- An advanced AI tool, built in the same place you take notes.
        </p>
      </div>
      
      <div className="flex justify-center flex-col mt-3 h-max">
        <p className="text-[12px] text-left px-1 py-2">John, Alice and 
        <CountUp
          from={0}
          to={1558}
          separator=","
          direction="up"
          duration={1}
          className="px-1"
         />
          others are on the waitlist</p>
        <form className="flex items-center gap-1 w-full max-w-[700px] h-[2.5em]"
        onSubmit={waitlistCheck}>
          <Inputfield placeholder="Enter your email"
          value={userEmail}
          onChange={() => setUserEmail(userEmail)}/>
          <Button value="Join" icon="fa fa-arrow-right" />
        </form>
      </div>

    </div>
  )
}


export default Hero