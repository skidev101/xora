import React from 'react'
import ClickSpark from './Components/ClickSpark'
import Header from './Components/Header'
import Hero from './Components/Hero'

const App = () => {
  
  return (
    <div>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header />
        <Hero />
      </ClickSpark>
    </div>
  )
}


export default App