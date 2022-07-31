import React from 'react'
import Homepart from './Homepart'
import Skills from './Skills'
import './styles/Mainhome.css'
import Projects from './Projects'
import Experience from './Experience'
import Acheivements from './Acheivements'
import About from './About'




const Mainhome = (props) => {
  return (
    <>
    <div className='mainhomediv' >
        {
            props.content==='Home' && <Homepart /> 
        } 
        {
            props.content==='Skills' && <Skills /> 
        } 
        {
            props.content==='Projects' && <Projects /> 
        } 
        {
            props.content==='Experience' && <Experience /> 
        } 
        {
            props.content==='Acheivements' && <Acheivements /> 
        } 
        {
            props.content==='About' && <About /> 
        } 
    </div>
        
    </>
    
  )
}

export default Mainhome