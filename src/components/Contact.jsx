import React from 'react'
import './styles/Contact.css'

import Form from './Form'

const Contact = () => {
  return (
    <div>
      <div className="card">
        <h1 className="section-heading"><small>HELLO!</small><br/>CONTACT ME HERE</h1>
        <hr className=""/>
        <p className="large">
          Gmail id: <a  href="mailto:debmainak37@gmail.com"> debmainak37@gmail.com</a>
        </p>
        <p className="large">
          Whatsapp No: <a className='contactlink' href=""> 9088553155</a>
        </p>
        
        <p className="large">
          Phone no: <a className='contactlink' href=""> 7003812954</a>   
        </p>
        <p className="large">
          LinkedIn Id: <a href="https://www.linkedin.com/in/mainak-deb-36875a1b7/">mainak-deb-36875a1b7</a> 
        </p>
        <p className="large">
          Facebook Id: <a  href="https://www.facebook.com/mainak.deb.794/">mainak.deb.794</a> 
        </p>
        <p className="large">
          Instagram Id: <a  href="https://www.instagram.com/stark_techie/">stark_techie</a>
        </p>
        <p className="large">
          Twitter Id: <a href="https://twitter.com/Mainak_D_Stark">Mainak_D_Stark</a> 
        </p>
        <p className="large">
          Github Id: <a  href="https://github.com/Mainak-Deb">Mainak-Deb</a> 
        </p>
      </div>
      <Form />
    </div>
  )
}

export default Contact