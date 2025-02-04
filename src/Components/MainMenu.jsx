import React from 'react'
import { Link } from 'react-router-dom'
const MainMenu = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
        <Link to="/array">Array</Link>
        <Link to="/stack">Stack</Link>
        <Link to="/queue">Queue</Link>
        <Link to="/linked-list">Linked List</Link>      
    </div>
  )
}

export default MainMenu