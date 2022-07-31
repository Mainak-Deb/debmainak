import React from 'react'
import './styles/Navbar.css'


const Navbar = (props) => {

  function setnav(e) {
    console.log(e.target.id)
    props.changeNav(e.target.id)
  }


  return (
    <div className="bg">
        <div className="date">
            <div id="Home" onClick={setnav}  >Home</div>
            <div id="Skills"   onClick={setnav}    >Skills</div>
            <div id="Projects"  onClick={setnav}>Projects</div>
        </div>
        <div className="time">
            <div id="Experience" onClick={setnav}>Experience</div>
            <div id="Acheivements" onClick={setnav}>Acheivements</div>
            <div id="About" onClick={setnav}>About</div>
        </div>
    </div>
  )
}

export default Navbar