import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa"; 

export const Card = ({movies}) => {

  const {poster_path , overview, title , id , vote_average , vote_count} = movies;
  const img = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}`:"https://placehold.co/400x600"
  return (
    <div className='border mt-5 w-[300px] p-2' title={title}>
      <div className='w-full object-cover'>
      <Link to={`/movie/${id}`}><img src={img} alt="" /></Link>
      </div>
      <div className='p-2'>

        <h5 className='text-blue-600 text-overflow-1'>{title}</h5>
        <p className='text-overflow-2'>{overview}</p>

        <div className='mt-4 flex items-center justify-between '>
          <Link to={`/movie/${id}`} className='text-blue-600 bg-transparent  border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md transition-colors  px-2 py-1'>Read More</Link>

          <small className='flex items-center gap-1'>
          <FaStar className="text-yellow-500 inline" size={15} /> {vote_average} | {vote_count}
          
          </small>
        </div>

      </div>
    </div>
  )
}

