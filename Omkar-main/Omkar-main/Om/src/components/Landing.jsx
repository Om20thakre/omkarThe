import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import About from './About/About';

const Landing = () => {
  return (
    <div className='w-full h-screen bg-sky-blue pt-1'> 
   
    <div className="textStructure mt-52 px-20">
      {['Frontend', 'Developer.'].map((item, index)=>{
        return <div className="masker ">
        <h1 className="text-[8vw] leading-[6vw]  tracking-normal font-Bebas text-Grass">
          {item}
        </h1>
        </div>

      })}
        
       
    </div>  
    
    <div className="  mt-7 cursor-pointer text-zinc-900 font-Tauri justify-between flex text-center py-5 px-20 ">
      {["Social-Media"].map((item, index)=><p className='text-md font-light tracking-tighter leading-none'>{item}</p>)}
      <div className="start flex items-center gap-5">
        <div className='px-4 py-2 border-[2px]  border-zinc-900 font-light rounded-full text-sm capitalize'>start the project</div>
        <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px]  border-zinc-900'>
          <span className='rotate-[45deg]'>
          <FaArrowUpLong />
            </span>
            </div>
       </div>
    </div>
  
     
    </div>  
   
  )
}

export default Landing
