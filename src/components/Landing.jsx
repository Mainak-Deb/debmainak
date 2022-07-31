import React, { useEffect, useState } from "react";
import "./styles/Landing.css";
import { Link } from "react-router-dom";


const Landing = () => {
  const [text, settext] = useState("Hello World");
  const [text2, settext2] = useState(null);

  const finaltext = "<Mainak Deb/>";
  const characters =
    "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function randomstr() {
    let n = Math.random();
    n = n * characters.length;
    n = Math.floor(n);
    let out = characters[n];
    return out;
  }


  useEffect(() => {
    let count = 0;
    if (text !== finaltext) {
      setInterval(() => {
        let str = "";
        for (let i = parseInt(count); i < finaltext.length; i++) {
          str += randomstr();
        }
        //console.log();
        settext(finaltext.slice(0, parseInt(count)) + str);
        if (count >= finaltext.length - 4) {
          settext2(`Click to continue`);
        }
        console.log(count)
        count = count + 0.1;
      }, 50);
    }
  }, []);

  return (
    <>
      <div id="main">
        <div id="displayout">
          <div id="output">{text}</div>
          <Link to={"/fun"} id="output2">
          {text2} 
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
