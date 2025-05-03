import React from 'react'
import { useState, useEffect } from 'react'
import { fetchApi } from '../api/aiApi';
import { useNavigate } from 'react-router-dom';

const RoadmapForm = () => {
    const [goal, setGoal] = useState("");
    const [roadmap, setRoadmap] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setGoal(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setGoal("");
        setError(null);
        if(goal.trim()===""){
            setLoading(false)
            return;
        }
        
        try{
                const data = await fetchApi(goal);
                console.log(data);
                
                if (data) {
                    setRoadmap(data);
                } else {
                    setError("Unreachable, No data received. Please try again.");
                }
            }catch(err){
                setError("An error occurred while generating the roadmap. Please try again.");
            }
            finally{
                setLoading(false);
            }
        }
        
        useEffect(() => {
            if (roadmap) {
              navigate("/Ai/roadmap", { state: { roadmap } });
            }
          }, [roadmap]);
          
        if (loading) {
            return <div className='flex items-center justify-center h-screen bg-[#2d2d2d68]'>
                    <div className="spin w-13 h-13 rounded-full border-r-3 border-l-3 border-t-3"></div>
            </div>;
        }
        if (error) {
            return <div className='flex text-xl p-10 items-center justify-center h-screen text-center text-red-500'>{error}</div>;
        }

  return (
    <div className='pt-20 px-4'>
        <div className='w-full h-full flex items-start mt-30 justify-center'>
            <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-4xl font-bold uppercase'>Create Your Own <span className='italic text-[#3b82f6]'>Roadmap</span></h1>
            <p className='text-lg uppercase tracking-tight mt-2 text-[#6b7280]'>AI Powered customized learning paths for your goals.</p>
            <form onSubmit={submitHandler} className='flex flex-col gap-4 mt-6'>
                <input
                value={goal}
                onChange={handleInputChange}
                 type="text" placeholder="ENTER YOUR GOAL" className="border p-2 rounded-md outline-none" />
                <button type='submit' className='text-sm px-8 py-2 bg-[#3b82f6] border-1 border-zinc-800 text-white rounded-md hover:bg-[#2563eb] transition duration-300 uppercase'>Generate Roadmap</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default RoadmapForm