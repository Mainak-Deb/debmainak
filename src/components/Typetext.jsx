import React, { useState,useEffect } from 'react'
import { useRef } from 'react';
import "./styles/Codefont.css";


const Typetext = (props) => {
  const speed=parseInt(props.speed);
  const textString= props.text;
  const hackcode = useRef(null);
  const [bstate, setbstate] = useState(false);
  useEffect(() => {
    let prev = -1;
    let count = 0;
    hackcode.current.innerHTML = "";
    setbstate(false);
    const interval = setInterval(() => {
      if (count < textString.length && prev !== count) {
        let postNode = document.createElement("span");
        postNode.innerText = textString[count];
        postNode.classList.add("hacking-animation__character");
        hackcode.current.appendChild(postNode);
        prev = count;
        count = count + 1;
      }

    }, speed);
    return () => clearInterval(interval);
  }, []);
  return (
    <div >
        <p  ref={hackcode}>
          <span> Hello</span>
        </p>
    </div>

  )
}

export default Typetext