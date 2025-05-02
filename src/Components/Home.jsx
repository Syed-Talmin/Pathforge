import React from 'react'
import { Link } from 'react-router-dom'
import {fetchApi} from '../api/aiApi'

const Home = () => {
  const fetchData = async () => {
    const data = await fetchApi("frontend developer");
    console.log(data);
  }
  return (
    <div className='w-full h-screen p-4 flex items-center justify-center'>
       <div className='flex flex-col items-center justify-center text-center'>
       <h1 className='text-4xl font-bold uppercase'>Find The Perfect <span className='italic text-[#3b82f6]'>Roadmap</span> for Your Career.</h1>
       <p className='text-lg uppercase tracking-tight mt-2 text-[#6b7280]'>AI Powered customized learning paths for your goals.</p>
       <div className='flex flex-col gap-4 mt-6'>
             <Link to="/roadmap" className='text-sm px-8 py-2 rounded-md border-1 uppercase'>Explore Roadmaps</Link >
            <Link to="/create-with-ai" className='text-sm px-8 py-2 bg-[#3b82f6] border-1 border-zinc-800 text-white rounded-md hover:bg-[#2563eb] transition duration-300 uppercase'>Create With Ai</Link>
       </div>
       </div>
    </div>
  )
}

export default Home