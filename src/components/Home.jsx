import React from 'react'
import { useState } from 'react'
import Mainhome from './Mainhome'
import Namehead from './Namehead'
import Navbar from './Navbar'
import './styles/home.css'


const Home = () => {
   const [navh,setNavh] =useState(false);
   const [content,setcontent] =useState("Home");
  return (
    <div id='homebox'> 
    <Namehead nav={navh} changeNav={setNavh} /> 
    {
      navh && <Navbar  changeNav={setcontent} /> 
    }
    <Mainhome content={content}  />
    </div>
 
    
  )
}

export default Home