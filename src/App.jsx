import React from 'react'
import {Header  , Footer}from "./components"
import AllRoute from './routes/AllRoute'
import { MovieDetails } from './pages'



const App = () => {
  return (
    <>
    <div>
      <Header/>
      <AllRoute/>
      <Footer/>
    </div>
    </>
  )
}

export default App
