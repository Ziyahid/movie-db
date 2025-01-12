import React from 'react'
import { Routes , Route } from 'react-router-dom'
import {MovieDetails, MovieList, PageNotFound, Search } from '../pages'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path="/" element = {<MovieList title="Your Guide to Great Movies" apiPath="movie/now_playing" />}/>
        <Route path="movie/popular" element = {<MovieList title="Popular Movies" apiPath="movie/popular" />}/>
        <Route path="movie/top" element = {<MovieList title="Top Rated Movies" apiPath="movie/top_rated" />}/>
        <Route path="movie/upcoming" element = {<MovieList title="Upcoming Movies" apiPath="movie/upcoming" />}/>
        <Route path='movie/:id' element={<MovieDetails/>}/>
        <Route path='search' element={<Search apiPath="search/movie"/>}/>

        <Route path='*' element={<PageNotFound/>}/>
        
    </Routes>
    </>
  )
}

export default AllRoute