import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav className='bg-black'>
        <ul className='flex gap-[1rem] text-white'>
           <Link to="/"><li className='text-xl text-white'>Home</li></Link>
           <Link to="/about"><li className='text-xl'>About</li></Link>
           <Link to="/service"><li className='text-xl'>Service</li></Link>
           <Link to="/contact"><li className='text-xl'>Contant</li></Link>
            
            
        </ul>
      </nav>
    </div>
  )
}
