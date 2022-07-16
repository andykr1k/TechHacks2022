import * as React from 'react';
import { SignIn } from '../App'
import logo from '../assets/rbanimoji.png'
import { motion } from 'framer-motion'
import '../App.css';
function SignInPage() {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='flex justify-center items-center'>
        <div>
          <SignIn />
        </div>
      </div>
      <div className='flex absolute justify-center items-center bottom-0 left-0 m-2'>
        <motion.img whileHover={{scale:1.2}} className='w-20 rounded-full' src={logo} />
    </div>
    </div>
  )
}

export default SignInPage;
