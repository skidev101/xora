import React, { useState, useEffect } from 'react'
import Images from './Images'
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import Inputfield from './Inputfield'
import Button from './Button'
import ShinyText from './ShinyText'
import CountUp from './CountUp'
import Confetti from './ConfettiAni'

const Hero = () => {
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isAddedToWaitlist, setIsAddedToWaitlist] = useState(false);
  
  const saveToLocalStorage = () => {
    let emailList = JSON.parse(localStorage.getItem('waitlist')) || [];
    emailList.push(userEmail);
    localStorage.setItem('waitlist', JSON.stringify(emailList));
    setMessage('You are now on the waitlist');
    setIsAddedToWaitlist(true);
    console.log(message);
  }
  
  const clearMessage = () => {
    setTimeout(() => {
        setMessage('');
        setIsAddedToWaitlist(false);
      }, 7000);
  }
  
  const waitlistCheck = (e) => {
    e.preventDefault();
    const emailList = JSON.parse(localStorage.getItem('waitlist')) || [];
    if (emailList.includes(userEmail)) {
      setMessage(`You're already on the waitlist`);
      console.log(message)
      clearMessage();
    } else {
      saveToLocalStorage();
      clearMessage();
      setUserEmail('');
    }
  }
  
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center flex-col text-white bg-black px-1.5 mt-5 ">
      {isAddedToWaitlist && <Confetti />}
      
      <Images src={bg1} className="object-center absolute z-[0] w-[100px] h-[100px] top-9 right-2 xl:w-[150px] xl:h-[150px]" />
      
      <div className="flex justify-center items-center flex-col text-center">
         <p className="text-emerald-400 py-2">{message}</p>
        <div className="flex justify-center items-center w-max bg-[#212121] rounded-[50px]">
          <ShinyText text="Simple Course platform with xora" 
          disabled={false}
          speed={3} 
          className='px-4 py-1.5 text-[14px] text-center'
          />
        </div>
        
        <Images src={bg2} className="object-center absolute z-[-1] w-[80px] h-[80px] top-12 left-1" />

        
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
          onChange={(e) => setUserEmail(e.target.value)}/>
          <Button value="Join" icon="fa fa-arrow-right" />
        </form>
      </div>

    </div>
  )
}


export default Hero
