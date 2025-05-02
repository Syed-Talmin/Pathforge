import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RaodmapContext } from '../context/RaodmapContext';
import { toast } from 'react-toastify';

const AiRoadmapDetails = () => {

  const { state } = useLocation();
  const { roadmap } = state || {}; 
  const [savedBtn, setSavedBtn] = useState(false);
   const {saveRoadmap,setSaveRoadmap} = useContext(RaodmapContext)


  roadmap[roadmap.length - 1].id = Date.now();

  
  
  const saveRoadmapHandler = () => {

    if (isRoadmapSaved()) {
      alert("Roadmap already exists");
      return;
    }
    toast.success("Roadmap saved successfully")
    setSaveRoadmap((prev) => [...prev, roadmap]);
  };

  useEffect(() => {
    setSavedBtn(isRoadmapSaved());
  }
  , [saveRoadmap, roadmap]);

  const isRoadmapSaved = () => {
    const alreadyExists = saveRoadmap.some(
      (e) => e[e.length - 1]?.id == roadmap[roadmap.length - 1]?.id
    );
    return alreadyExists;
  }
  return (
    <div className="py-20 px-4 md:flex md:items-center md:justify-center">
    <div className="md:p-5 md:w-fit">{
        roadmap.map((el,idx)=>(
          idx !== roadmap.length - 1 && (
            <div key={idx}>
                {idx==0 ? <h2 className='text-2xl mb-5 font-bold uppercase'>{el}</h2>: <li className='text-xl py-2 font-semibold'>{el.skill}</li>} 
                {el?.topic?.map((e,index)=>(
                   <div key={index} className='flex gap-3 p-2 items-center'>
                     <label className='text-sm' htmlFor={e.name}>- {e.name}</label>
                   </div>
                ))}
            </div>
          )
        ))
    }
    <div className='flex items-center justify-center mt-10'>
      {
        savedBtn ? <button className='py-2 px-8 rounded-md bg-[#3c6bb8] text-white' disabled>Saved</button> : 
        <button onClick={saveRoadmapHandler} className='py-2 px-8 rounded-md bg-[#3b82f6] text-white'>
        Save
      </button>
      }
      </div>
   
  </div>
</div>
  )
}

export default AiRoadmapDetails