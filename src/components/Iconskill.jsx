import React from 'react'
import Typetext from './Typetext'
import './styles/Iconskill.css'

const Iconskill = (props) => {
    const icon=props.icon;
    const text=props.text;
    return (
        <div  className='iconbox'>
            <div  className='iconupper'>
                <div className='iconround'>
                    <img src={icon} alt="" />
                </div>
            </div>
           
            <div className='iconlower'>
            <hr />
                <Typetext  text={text} speed={1000} />
            </div>
        </div>
    )
}

export default Iconskill