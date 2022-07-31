import React, { useState } from "react";
import "./styles/Homepart.css";
import mainakimage from "./images/mainak.png";
import indiaimage from "./images/india.jpeg";
import Typewriter from "typewriter-effect";
import { useRef, useEffect } from "react";

const Homepart = () => {
  const wlcm = `
  hello every one i am Mainak Deb, wishing you a good day
  `;

  const whoami = `
  Hello i am Deb, Mainak Deb
  The creator of that website
  Thank you for visiting my website❤️
  I am a 21 years old  studen
  currently pursuing Bachelor of technology in computer science,
  I love web development and I am also a like game development and image processing,
  I also love to solve Data Structures and Algorithms problems
  My prefferable language is python, java, javascript
  `;
  const [text, setText] = useState();
  const [text2, setText2] = useState();

  useEffect(() => {
    let count1 = 0;
    let count2 = 0;
    setInterval(() => {
      setText(wlcm.slice(0, Math.min(count1, wlcm.length)));
      setText2(whoami.slice(0, Math.min(count1, wlcm.length)));
      count1++;
      count2++;
    }, 1000);
  }, []);

  return (
    <div className="main">
      <div className="imagebox">
        <img className="myimg" src={mainakimage} />
        <div className="welcome">
          <h3>Welcome to my website</h3>
          <p className="output">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(wlcm)
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(wlcm)
                  .start();
              }}
            />
          </p>
        </div>
        <div className="who">
          <h3>Who am i? </h3>
          <p className="output">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(whoami)
                  .pauseFor(500)
                  .deleteAll()
                  .typeString(whoami)
                  .start();
              }}
            />
          </p>
        </div>
        <div className="why">
          <h3>Job Role I want </h3>
          <p className="output">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full-Stack Developer")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Full-Stack Developper")
                  .start();
              }}
            />
          </p>
          <p className="output">
          <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Backend Developer")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Backend Developper")
                  .start();
              }}
            />

          </p>
          <p className="output">
          <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Python Developper")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Python Developper")
                  .start();
              }}
            />
            </p>
          <p className="output">
          <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Development Engineer")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Software Development Engineer")
                  .start();
              }}
            />
            </p>
        </div>
        <h3>My languages </h3>
        <p className="output"><Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("English")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("English")
                  .start();
              }}
            /></p>
        <p className="output"><Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Bengali")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Bengali")
                  .start();
              }}
            /></p>
        <p className="output"><Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hindi")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Hindi")
                  .start();
              }}
            /></p>
        <h3>I am from </h3>
        <img className="indimg" src={indiaimage} />
      </div>
    </div>
  );
};

export default Homepart;
