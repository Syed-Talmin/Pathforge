import React from 'react'
import { useContext } from 'react'
import  {RaodmapContext} from '../context/RaodmapContext'
import RmCard from '../Components/RmCard'
import { Link } from 'react-router-dom'

const MyLearning = () => {

   const { saveRoadmap } = useContext(RaodmapContext)
   
  return (
    <div className='py-20 h-full min-h-screen'>
    <h1 className='text-xl font-semibold text-center uppercase tracking-tight mb-5'>My Learning</h1>
     <div className='flex w-full h-full flex-wrap items-center justify-center gap-4'>
       { saveRoadmap.length>0 ? saveRoadmap.map((el,idx)=>(
              <RmCard id={idx} key={idx} el={el} isMyLrn={true}/>     
        )) : <h1 className='text-sm text-red-500 font-semibold text-center uppercase tracking-tight mb-5'>No Saved Roadmap Found , <Link className='text-blue-400 underline' to="/roadmap">See Roadmaps</Link></h1>}
     </div>
 </div>
  )
}

export default MyLearning