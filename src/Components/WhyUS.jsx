import React, { useEffect } from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { BsHourglassSplit } from "react-icons/bs";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const WhyUS = () => {

    useEffect(() => {
        
        gsap.to(".line1",{
            height:"24rem",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".timeline1",
                start:'top 50%',
                end:"top 10%",
                scrub:true,
            },
        })
        gsap.fromTo(".why1",{opacity:0,y:100},{
            opacity:1,
            y:0,
            ease:"power4",
            scrollTrigger:{
                trigger:".timeline1",
                start:'top 15%',
                end:"10% top",
                scrub:true,
            },
        })
        gsap.to(".line2",{
            height:"24rem",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".timeline2",
                start:'top 50%',
                end:"top 10%",
                scrub:true,
            }
        })
        gsap.fromTo(".why2",{opacity:0,y:100},{
            opacity:1,
            y:0,
            ease:"power4",
            scrollTrigger:{
                trigger:".timeline2",
                start:'top 15%',
                end:"10% top",
                scrub:true,
            },
        })
        gsap.to(".line3",{
            height:"24rem",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".timeline3",
                start:'top 50%',
                end:"top 10%",
                scrub:true,
            }
        })
        gsap.fromTo(".why3",{opacity:0,y:100},{
            opacity:1,
            y:0,
            ease:"power4",
            scrollTrigger:{
                trigger:".timeline3",
                start:'top 15%',
                end:"10% top",
                scrub:true,
            },
        })
    }, [])
    

  return (
    <div className='w-full h-full'>
        <h2 className='text-xl tracking-tight font-bold uppercase text-center'>Why choose Us</h2>
        <div className='w-full pb-20 mt-5 flex flex-col gap-5 items-center justify-center'>
                <div className="timeline1 w-[1px] h-96 bg-zinc-300 relative">
                    <div className="start absolute top-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#3b82f6]"></div>
                    <div className="line1 absolute top-0 left-0 w-full h-0 bg-[#3b82f6]"></div>
                    <div className="cricle absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              <div className="wrap w-full h-full overflow-hidden">
              <div className='why1 w-full p-4 flex flex-col items-center gap-2 justify-center'>
                     <TbTargetArrow className='text-5xl'/>  
                    <h2 className='text-xl font-semibold uppercase'> Personalized Roadmaps</h2>
                    <p className='w-3/4 text-center text-[#6b7280]'>Get a customized learning journey designed to match your goals, skills, and interests — making sure every step takes you closer to success.</p>
                </div>
              </div>
                <div className="timeline2 w-[1px] h-96 bg-zinc-300 relative">
                    <div className="line2 absolute top-0 left-0 w-full h-0 bg-[#3b82f6]"></div>
                    <div className="cricle absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <div className="wrap w-full h-full overflow-hidden">
                <div className='why2 w-full p-4 flex flex-col items-center gap-2 justify-center'>
                <GiProgression className='text-5xl' />
                    <h2 className='text-xl font-semibold uppercase'>Track Your Progress</h2>
                    <p className='w-3/4 text-center text-[#6b7280]'>Stay motivated by tracking your achievements and milestones with real-time insights and detailed reports.</p>
                </div>
                </div>
                <div className="timeline3 w-[1px] h-96 bg-zinc-300 relative">
                    <div className="line3 absolute top-0 left-0 w-full h-0 bg-[#3b82f6]"></div>
                    <div className="cricle absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <div className="wrap w-full h-full overflow-hidden">
                <div className='why3 w-full p-4 flex flex-col items-center gap-2 justify-center'>
                    <BsHourglassSplit className='text-5xl' />
                    <h2 className='text-xl font-semibold uppercase'> Learn at Your Pace</h2>
                    <p className='w-3/4 text-center text-[#6b7280]'>Whether you want to speed up or take it slow, learn whenever and however it suits you, with full flexibility.</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default WhyUS