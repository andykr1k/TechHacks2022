import * as React from 'react';
import logo from '../assets/rbanimoji.png'
import { motion } from 'framer-motion'
function Footer() {
  return (
    <div className='flex absolute justify-center items-center bottom-0'>
        <motion.img whileHover={{scale:1.2}} className='w-20' src={logo} alt="Logo" />
        <p className='text-sm font-bold'> Made by Andrew Krikorian </p>
    </div>
  )
}

export default Footer;
