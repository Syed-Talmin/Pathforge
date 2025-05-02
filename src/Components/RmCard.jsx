import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RaodmapContext } from '../context/RaodmapContext'
import { toast } from 'react-toastify'

const RmCard = ({el,isMyLrn=false}) => {

  const [savedBtn,setSavedBtn] = useState(false)
  
  const {isDark,saveRoadmap,setSaveRoadmap}=useContext(RaodmapContext)
  

   const saveRoadmapHandler = (getRoadmap) => {
  
      if (isRoadmapSaved(getRoadmap)) {
        alert("Roadmap already exists");
        return;
      }
      toast.success("Roadmap saved successfully")
      setSaveRoadmap((prev) => [...prev, getRoadmap]);
    };

  const deleteRoadmapHandler = (elem) => {
    const updatedRoadmap = saveRoadmap.filter((e) => e[e.length - 1]?.id !== elem[elem.length - 1]?.id);
    toast.success("Roadmap deleted successfully")
    setSaveRoadmap(updatedRoadmap);
  }

    useEffect(() => {
      setSavedBtn(isRoadmapSaved(el));
    }
    , [saveRoadmap]);
  
    const isRoadmapSaved = (getRoadmap) => {
      const alreadyExists = saveRoadmap.some(
        (e) => e[e.length - 1]?.id == getRoadmap[getRoadmap.length - 1]?.id
      );
  
      return alreadyExists;
    }

  return (
    <div className={`w-70 p-3 rounded-md shadow-sm border-1 border-zinc-500 hover:shadow-lg ${isDark?"bg-[#27282e] shadow-gray-950":`bg-[#f1f1f1] shadow-zinc-300`} flex flex-col items-start transition duration-500`}>
            <h2 className='text-sm font-semibold uppercase'>{el[0]}</h2>
          <div className='flex flex-col mt-3 flex-wrap '>
             { el.map((e,idx)=> idx!==0 && idx<4 && <h4 key={idx} className='text-xs uppercase'>{e.skill},</h4> )}
             </div>
             <div className='w-full mt-3 flex items-center justify-between'>
                <Link to={isMyLrn?`/learning/${el[el.length-1]?.id}`:`/roadmap/${el[el.length-1]?.id}`} className='py-2 text-xs px-8 rounded-md border-1 border-zinc-500'>View</Link>
                {
                  isMyLrn?<button onClick={()=>{
                    deleteRoadmapHandler(el)
                  }} className='py-2 text-xs px-8 rounded-md bg-red-800 text-white'>Delete</button>:
                  (savedBtn?<button disabled className='py-2 cursor-pointer text-xs px-8 rounded-md bg-[#3b82f6] opacity-80 text-white'>Saved</button>:<button onClick={()=>{
                    saveRoadmapHandler(el)
                  }} className='py-2 cursor-pointer text-xs px-8 rounded-md bg-[#3b82f6]  text-white'>Save</button>)
                }
                
             </div>
        </div>
  )
}

export default RmCard