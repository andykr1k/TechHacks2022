import * as React from 'react';
import { motion } from "framer-motion";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Header() {
  return (
    <div>
        <div className='grid absolute m-5 top-0 left-0 text-white bg-black bg-opacity-10 p-3 rounded-md text-xs'>
          <motion.p whileHover={{scale:1.2}}className='text-xs'>The Daily</motion.p>
        </div>
        <div class="page"  className='grid absolute m-5 top-0 right-0 text-white bg-black p-2 bg-opacity-10 rounded-md invisible md:visible'>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto'>Dashboard</motion.p>
            <motion.p whileHover={{scale:1.2, rotate:10}}className='m-auto mt-5'>Journal</motion.p>
            <motion.a href="/" whileHover={{scale:1.2, rotate:10}}className='m-auto mt-5'>Profile</motion.a>
        </div>
        <Dropdown className='grid absolute m-5 top-0 right-0 text-white bg-black p-3 bg-opacity-10 rounded-md visible md:invisible text-xs' id="dropdown-basic-button">
          <Dropdown.Toggle id="dropdown-autoclose-true"> Menu </Dropdown.Toggle>
          <Dropdown.Menu className='grid'>
          <Dropdown.Item className='mt-3' href="/" active>Home</Dropdown.Item>
            <Dropdown.Item className='mt-3' href="/">Profile</Dropdown.Item>
            <Dropdown.Item className='mt-3' href="/action-3">Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Header;
