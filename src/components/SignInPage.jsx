import * as React from 'react';
import { SignIn } from '../App'
import '../App.css';
function SignInPage() {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='flex justify-center items-center'>
        <div>
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default SignInPage;
