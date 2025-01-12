import React, { useState } from 'react'
import { FilmIcon } from "@heroicons/react/solid";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';




export const Header = () => {
  const [openMenuBar , setOpenMenuBar] = useState(false);
  const navigator = useNavigate();

  const openMenu = ()=>{
    setOpenMenuBar(!openMenuBar)

  }

  const handleSearch = (e)=>{

    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();

    return navigator(`/search?q=${queryTerm}`)

  }

  return (
    <nav className='bg-blue-500 w-full h-14 text-white flex items-center  px-10 gap-5 justify-between fixed top-0'>

    {/* Logo  */}
      <NavLink to="/" className='text-lg font-bold'><FilmIcon className="h-6 w-6 text-white inline mr-2" />
      Movie Hunt</NavLink>

      <button onClick={openMenu} className='md:hidden'> {openMenuBar ? <FaTimes className="h-6 w-6 text-white" />:<FaBars className="h-6 w-6 text-white " />}</button>

{/* Desktop Menu */}

      <div className="hidden md:flex justify-between items-center flex-1 ">
         <ul className='flex gap-5'>
          <li><NavLink className={({isActive})=>
          isActive ? 
        "text-white" : "text-gray-300"} to="/">Home</NavLink></li>
          <li><NavLink to="movie/top" className={({isActive})=>
          isActive ? 
        "text-white" : "text-gray-300"}>Top Rated</NavLink></li>
          <li><NavLink to="movie/popular" className={({isActive})=>
          isActive ? 
        "text-white" : "text-gray-300"}>Popular</NavLink></li>
          <li><NavLink to="movie/upcoming" className={({isActive})=>
          isActive ? 
        "text-white" : "text-gray-300"}>Upcoming</NavLink></li>
        </ul>
        <form onSubmit={handleSearch}>
          <input className='px-4 py-2 rounded-md  outline-none border-none text-black' type="text" placeholder='Search' name='search' />
        </form>
      </div>

      
          

        <div className={`bg-blue-500 top-full left-0 w-full shadow-md absolute md:hidden text-left py-6 overflow-hidden transition-all duration-300 ease-in-out  ${openMenuBar ? "max-h-[300px] opacity-100": "max-h-0 opacity-0" }`}>
         <ul className='flex flex-col gap-3 p-4 '>
         <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="movie/top">Top Rated</NavLink></li>
          <li><NavLink to="movie/popular">Popular</NavLink></li>
          <li><NavLink to="movie/upcoming">Upcoming</NavLink></li>
        </ul>
        <form onSubmit={handleSearch} className='w-full px-2'>
          <input className='px-4 py-2 rounded-md w-full mt-6 border-none text-black outline-none' type="text" name='search' placeholder='Search' />
        </form>
      </div>
    
      

    </nav>
  )
}

