import * as React from 'react';
import { motion } from "framer-motion";
function Header() {
  return (
    <div>
      <div className='flex absolute m-2 top-0 text-white p-5'>
      <motion.p whileHover={{scale:1.2}}className='m-auto'>Daily</motion.p>
      </div>
        <div class="page"  className='grid absolute m-2 top-0 right-0 text-white bg-black p-5 bg-opacity-10'>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto'>Dashboard</motion.p>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto mt-5'>Journal</motion.p>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto mt-5'>Profile</motion.p>
        </div>
    </div>
  )
}

export default Header;
