import * as React from 'react';
import { motion } from "framer-motion";
function Header() {
  return (
    <div>
      <div className='flex absolute top-0 text-white '>
      <motion.p whileHover={{scale:1.2}}className='bg-black m-2 p-5 bg-opacity-10 rounded-md'>Daily</motion.p>
      </div>
        <div class="page"  className='grid absolute m-2 top-0 right-0 text-white bg-black p-5 bg-opacity-10 rounded-md'>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto'>Dashboard</motion.p>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto mt-5'>Journal</motion.p>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto mt-5'>Profile</motion.p>
        </div>
    </div>
  )
}

export default Header;
