import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md"
import { createBrowserRouter , Link, RouterProvider } from 'react-router-dom';

const Navbar = () => {
let MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "About",
    link: "/About",

  },
  {
    id: 3,
    name: "Projects",
    link: "/project",
  },

  {
    id: 4,
    name: "Blogs",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact us",
    link: "/Contactus",
  },
];

  let [open, setOpen] =useState(false);
  
  return (
    <div className='fixed z-[999] w-full px-16 py-0 md:flex  bg-sky-blue justify-between'>
     <div className='logo cursor-pointer flex items-center w-20 h-16  md:ml-[-2em]'>
      <img src="logo.png" alt="" srcset="" />
     </div>
     {/* Menu icon */}
     <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer text-black md:hidden w-14 h-14 font-extrabold'>
                {
                    open ?  <MdClose /> : <CiMenuFries />
                }
            </div>
            
     <div className={`links md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-sky-blue cursor-pointer font-Tauri   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-36 transition-all duration-500 ease-in ${open ? 'left-0' : 'left-[-800px]'}`}>
        {MenuLinks.map((item, index)=>
        <Link to={item.link}>
        <h1  key={index} className={`text-lg text-zinc-900  captalize md:ml-8 md:my-0 my-7 ${index === 4 && "  md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"}`}>{item.name}</h1>
        </Link>
        )
        }
     </div>
    </div>
  )
}

export default Navbar