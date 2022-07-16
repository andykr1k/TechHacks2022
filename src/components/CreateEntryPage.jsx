import * as React from 'react';

function CreateEntryPage() {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='class="page" flex justify-center items-center bg-black h-3/4 w-3/4 rounded-full bg-opacity-10'>
        <h1 className='text-white text-3xl'> Create An Entry! </h1>
        <input type="text" name="name" />
      </div>
    </div>
  )
}

export default CreateEntryPage;
