import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'

const Navbar = () => {
const [isOpen,setIsOpen]=useState(false)
  return (
   <nav>
      {/* <img src={logo} className='w-[100px] p-2'/>  */}
      <div className='flex justify-end'>
         <button className='md:hidden p-2'
            onClick={()=>{
               setIsOpen(!isOpen)
            }}
         >
            {isOpen?<X size={30}/>:<Menu size={30}/>}
         </button>
      </div>
      <div className={`flex flex-col justify-center text-2xl ${isOpen?'block':'hidden'} md:flex md:flex-row pt-2`}>
        <NavLink to="/array"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3 rounded" : "hover:bg-gray-300 p-3 rounded"}
           >Array</NavLink>
        <NavLink to="/stack"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3 rounded" : "hover:bg-gray-300 p-3 rounded"}
        >Stack</NavLink>
        <NavLink to="/queue"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3 rounded" : "hover:bg-gray-300 p-3 rounded"}
           >Queue</NavLink>
        <NavLink to="/linked-list"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3 rounded" : "hover:bg-gray-300 p-3 rounded"}
           >Linked List</NavLink>
    </div>
    {/* <div className='w-[42vh]'></div> */}
   </nav>
  )
}

export default Navbar
