import * as React from 'react';
import logo from '../assets/rbanimoji.png'

function Home() {
  return (
    <div className='grid place-items-center h-screen bg-slate-400'>
        <img src={logo} alt={"Logo"} />
    </div>
  )
}

export default Home;
