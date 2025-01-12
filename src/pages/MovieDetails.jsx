import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaUsers, FaStar } from "react-icons/fa"; 
import { formatMin } from '../../utils/util';

export const MovieDetails = () => {  
    const params = useParams();
    const [movie , setMovie] = useState([]);
    const key = import.meta.env.VITE_API_KEY ;
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
    const img = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`:"https://placehold.co/400x600"
 
     useEffect(()=>{
         async function fetchMovies(){
             fetch(url)
             .then((res)=>res.json())
             .then((jsonData) => setMovie(jsonData))
         }
         fetchMovies();
     },[]) ;

     useEffect(()=>{
        document.title = `${movie.title}`
     });

     console.log(movie)

     return(
        <div className='container mt-20 mx-auto flex flex-col md:flex-row gap-10 items-center'>
            <div className='w-[80%] md:w-[50%] md:h-[500px]'>
                <img src={img} className='w-full h-full object-contain rounded-md'  />
                
            </div> 
            <div className='w-[75%]'>

            <h3 className='text-blue-600 text-lg'>{movie.title}</h3>
            <p>{movie.overview}</p>
            { movie.genres ?(
                <p className='flex gap-3 mt-3 flex-wrap'>
                {movie.genres.map((genre) => (
                     <span key={genre.id} className='bg-red-700 text-white rounded-lg px-2 py-1 text-sm'>{genre.name}</span>
                ))}
            </p>): ""
                
                }

                <p className='mt-2'>
                     <FaStar className="text-yellow-500 inline" size={15} /> {movie.vote_average} |
                     <FaUsers className="text-green-500 inline mx-2" size={20} /> {movie.vote_count}
                     
                </p>
                <table className='table border-collapse border text-left w-[300px] mt-3 mb-6'>
                    <tbody>
                        <tr>
                            <th className='border-r border-b p-3 '>Runtime</th>
                            <td className='border-b '>{formatMin(movie.runtime)}</td>
                        </tr>

                        <tr>
                            <th className='border-r border-b p-3 '>Revenue</th>
                            <td className='border-b '>{movie.revenue}</td>
                        </tr>

                        <tr>
                            <th className='border-r border-b p-3'>Budget</th>
                            <td className='border-b'>{movie.budget}</td>
                        </tr>

                        <tr>
                            <th className='border-r p-3'>Release Date</th>
                            <td>{movie.release_date}</td>
                        </tr>
                    </tbody>


                </table>

                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank' className='bg-amber-300 p-2 mt-32 rounded-md font-bold hover:bg-amber-400'>View in Imdb</a>

            </div>
        </div>
     )


}





