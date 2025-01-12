import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../../hooks/useFetch';

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : movies} = useFetch(apiPath , queryTerm);

  useEffect(()=>{
    document.title = `Search result for ${queryTerm}`
  })


  return (
    <main className='container mx-auto mt-[60px]'>
       <h5 className='text-red-700 font-medium py-6 border-b text-lg px-5'>{movies.length == 0 ? `No result found for ${queryTerm}`:`Search result for ${queryTerm}`}</h5>
      
              <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center px-2'>
              
                        {
                          movies.map((movie)=>{
                            return <Card key={movie.id} movies = {movie}/>
                          })
                        }
                    
                        
                        
              
                      </div>
    </main>
  )
}


