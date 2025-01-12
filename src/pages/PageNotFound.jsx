import React from 'react'
import notFound from "../assets/notfound.jpg"
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (

    <div className='flex flex-col justify-center items-center' >
      <img src={notFound} alt="" className='w-full h-[80vh] object-contain'  />
      <Link to="/" className='bg-red-700 p-2 rounded-md text-white'>Go to Home</Link>
    </div>
  )
}

