import React, { useState } from "react";
import "./styles/Homepart.css";
import mainakimage from "./images/mainak.png";
import indiaimage from "./images/india.jpeg";
import Typewriter from "typewriter-effect";
import { useRef, useEffect } from "react";
import Typetext from "./Typetext";



const Homepart = () => {
  const wlcm = `
  hello every one i am Mainak Deb, wishing you a good day
  `;

  const whoami = `
 > Hello i am Deb, Mainak Deb
 > The creator of that website
 > Thank you for visiting my website❤️
 > I am a 21 years old  studen
 > currently pursuing Bachelor of technology in computer science,
 > I love web development and I am also a like game development and image processing,
 > I also love to solve Data Structures and Algorithms problems
 > My prefferable language is python, java, javascript
  `;
const planguages = `
  > I have experience in following languages
  > > Python
  > > Java
  > > C
  > > JavaScript
  > > C++
  > > PL/SQL
  `;

  const jobrole=  `
  > full stack developer
  > Python Developper
  > backend developer
  > frontend developer
  > Software Development Engineer
  > I Practice Data Structures and algorithm problems daily
  > I also have experience in following technologies
  > > React
  > > Nodejs
  > > Express
  > > MongoDB
  > > MySQL
  > > HTML
  > > CSS
  > > Bootstrap
  > > Python
  > > Git
  > > Github
  > > Django
  > > OpenCV
  > > Pygame
  > > P5.js
  > > Flask
  > > dbSQL
  
  `
const mothertounge=`
  > My mothertounge is Bengali
  > I am a good speaker of English
  > I am also fluent in Hindi
  `;
  return (
    <div className="main">
      <div className="imagebox">
        <img className="myimg" src={mainakimage} />
        <div className="qsbox">
          <h3>Welcome to my website</h3>
          <div  className="smalltype" >
            <Typetext text={wlcm}  speed={100}/>
          </div>
          
        </div>
        <div className="qsbox">
          <h3>Who am i? </h3>
          <div  className="smalltype" >
            <Typetext text={whoami}  speed={100}/>
          </div>
        </div>
        <div className="qsbox">
          <h3>Job Role I want </h3>
          <div  className="smalltype" >
            <Typetext text={jobrole}  speed={100}/>
          </div>
        </div>
        <div className="qsbox">
        <h3>My languages </h3>
        <div  className="smalltype" >
            <Typetext text={planguages}  speed={100}/>
          </div>
        </div>
        <div className="qsbox">
        <h3>My languages </h3>
        <div  className="smalltype" >
            <Typetext text={mothertounge}  speed={100}/>
          </div>
        </div>
        <h3>I am from </h3>
        <img className="indimg" src={indiaimage} />
      </div>
    </div>
  );
};

export default Homepart;
