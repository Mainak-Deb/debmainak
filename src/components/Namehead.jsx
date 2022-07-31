import React, { useState } from 'react'
import { useEffect } from 'react';
import './styles/Namehead.css'


const Namehead = (props) => {
    const [Text,setText] =useState("Mainak Deb");
    const changeNav=props.changeNav;
    const nav=props.nav;

    function alterNavState(){
        changeNav(!nav);
    }

    useEffect(()=>{
        setInterval(()=>{
          let nt=""
          for(let i=0;i<Text.length;i++){
              if(Math.random()>0.5){
                  nt+=Text[i].toUpperCase()
              }else{
                  nt+=Text[i]
              }
          }
            setText(nt);
        }
        ,1000);
    }
    ,[]);


  return (
    <div className='neonbox'>

      <button className='neonbutton' onClick={alterNavState}  >
            {Text}
      </button>

    </div>
    
  )
}

export default Namehead