import React from 'react'
import './styles/Retroscreen.css'
import Typetext from './Typetext'
const Retroscreen = (props) => {
    const {header, text} = props

  return (
    <div className='retromain'>
        <div className='retroscreen'>
            <h1 class="glowFlicker">{header}</h1>
            <p><Typetext text={text}  speed={100}/> </p>
        </div>
    </div>
  )
}

export default Retroscreen