import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../App';


function SettingsPage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center text-center'>
        <div>
          <h1 className='text-white text-2xl top-0 m-5'> Settings </h1>
            <div className='grid place-items-center mt-10'>
              <h1>{auth.currentUser.displayName}</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage;
