import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-white text-2xl font-medium px-5 bg-black'>
       <h1>Hello <br/> <span className='text-3xl font-semibold'>Nikesh</span> </h1> 
       <button className='bg-red-600 px-5 py-2 rounded-sm text-lg font-medium' >Logout</button>
    </div>
  )
}

export default Header