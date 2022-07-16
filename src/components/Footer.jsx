import * as React from 'react';
import logo from '../assets/rbanimoji.png'

function Footer() {
  return (
    <div className='flex absolute justify-center items-center bottom-0'>
        <img className='w-20' src={logo} alt="Logo" />
        <p className='text-sm font-bold' >Made by Andrew Krikorian (@andykr1k)</p>
    </div>
  )
}

export default Footer;
