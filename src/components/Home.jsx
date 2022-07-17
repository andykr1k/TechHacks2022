import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from '../assets/rbanimoji.png'
import { motion } from 'framer-motion'
function Home() {
  return (
      <motion.div intial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0, transition: {duration: 1}}}>
        <div className='h-screen'>
          <div className='flex justify-center items-center text-center'>
            <div>
              <h1 className='text-white text-2xl top-0 m-5'> Home </h1>
                <div className='grid place-items-center mt-10'>
                  
                </div>
            </div>
          </div>
        </div>
      </motion.div>
  )
}

export default Home;
