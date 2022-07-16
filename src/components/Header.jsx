import * as React from 'react';

function Header() {
  return (
    <div>
      <div className='flex absolute m-2 top-0 text-white bg-slate-500 p-5'>
        <p>Your Daily Journal</p>
      </div>
        <div className='flex absolute m-2 top-0 right-0 text-white bg-slate-500 p-5'>
            <p className='m-auto mr-5'>Home</p>
            <p className='m-auto mr-5'>Journal</p>
            <p className='m-auto mr-5'>Profile</p>
        </div>
    </div>
  )
}

export default Header;
