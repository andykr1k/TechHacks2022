import * as React from 'react';
import { ChatRoom } from '../App'
function GeneralChat() {
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center'>
        <div>
          <h1 className='text-white text-2xl top-0 m-5'> General Chatroom </h1>
            <div className='grid place-items-center'>
              <ChatRoom/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralChat;
