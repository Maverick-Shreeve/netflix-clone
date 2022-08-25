import React from 'react'

const Navbar = () => {
  return (
    
     <div className='flex items-center justify-between p-4 z-[100] w-full absolute'> 
     
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
        <button>Sign In</button>
        <button>Sign Up</button>
    </div>

  )
}

export default Navbar;