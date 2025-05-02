import React, { useEffect } from 'react'
import { useContext } from 'react'
import  {RaodmapContext} from '../context/RaodmapContext'
import RmCard from '../Components/RmCard'

const PreBuildRoadmap = () => {

  const { preRoadmap } = useContext(RaodmapContext)

  return (
    <div className='py-20 h-full min-h-screen'>
      <h1 className='text-xl font-semibold text-center uppercase tracking-tight mb-5'>Roadmaps</h1>
       <div className='flex w-full h-full flex-wrap items-center justify-center gap-10'>
           {
            preRoadmap.map((el,id)=>(
              <RmCard key={id} id={id} el={el}/>     
            ))
            
          } 
       </div>
    </div>
  )
}

export default PreBuildRoadmap