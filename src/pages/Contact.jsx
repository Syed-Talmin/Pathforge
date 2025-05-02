import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen '>
        <form className='border-1 flex flex-col p-10 items-center justify-center' action={`https://getform.io/f/${import.meta.env.VITE_CONTACT_KEY}`} method="POST">
            <input type="text" name="name" placeholder='Name' className='w-full border-2 border-gray-300 rounded-md p-2 m-2' />
            <input type="email" name="email" placeholder='Email' className='w-full border-2 border-gray-300 rounded-md p-2 m-2' />
            <textarea type="text" name="message" placeholder='Message' className='w-full border-2 border-gray-300 rounded-md p-2 m-2' />
            <button type="submit" className=' bg-blue-500 text-white py-2 px-10 mt-10 rounded-md'>Send</button>
        </form>
    </div>
  )
}

export default Contact