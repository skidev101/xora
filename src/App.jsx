import React from 'react'
import ClickSpark from './Components/ClickSpark'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { motion } from 'framer-motion'

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
        <motion.div initial={{ opacity:0, y:30 }}
         animate={{ opacity:1, y:0 }}
         transition={{ duration:1, delay:0.3}}>
          <Hero />
        </motion.div>
      </ClickSpark>
    </div>
  )
}


export default App
