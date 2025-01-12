import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../../hooks/useFetch';


export const MovieList = ({title , apiPath }) => {
  const {data : movies} = useFetch(apiPath);

  useEffect(()=>{
     if (title) {
      document.title = title; 
    } else {
      console.error("Title is undefined"); 
    }
  }, [title]);

  const navigator = useNavigate();

  

  return (

    <div>
      <main className='container mx-auto'>
      {
      title === "Your Guide to Great Movies" ? (
      <div className='bg-slate-100 p-10 my-5 rounded-sm mt-20'>
        <h3 className='font-semibold text-blue-600'>Welcome to MovieHunt</h3>
        <p className='my-4'>Discover movies you&apos;ll love with personalized suggestions , curated collections and quick searches - your guide to finding great films</p>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-md' onClick={()=>navigator("/movies/upcoming")}>Explore now</button>
      </div>
      ) : ""
    }
        <h5 className='text-red-700 font-medium py-6 border-b text-lg px-5'>{title}</h5>

        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center px-2'>

          {
            movies.map((movie)=>{
              return <Card key={movie.id} movies = {movie}/>
            })
          }
      
          
          

        </div>
      </main>
    </div>
  )
}


