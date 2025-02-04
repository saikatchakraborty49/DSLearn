import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center text-2xl'>
        <NavLink to="/array"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3" : "bg-sky-200 border-2 p-3"}
        >Array</NavLink>
        <NavLink to="/stack"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3" : "bg-sky-200 border-2 p-3"}
        >Stack</NavLink>
        <NavLink to="/queue"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3" : "bg-sky-200 border-2 p-3"}
        >Queue</NavLink>
        <NavLink to="/linked-list"
           className={({ isActive }) => isActive ? "bg-black text-yellow-300 font-bold p-3" : "bg-sky-200 border-2 p-3"}
        >Linked List</NavLink>
    </div>
  )
}

export default Navbar