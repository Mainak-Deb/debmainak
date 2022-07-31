import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/Codefont.css";

const Codefont = () => {
  const hackcode = useRef(null);

  var textString = `.
  .
  192.168.89.191

rooe

-i: nmap

Starting Nmap 6.40 ( http://nmap.org ) at 2022-07-29 16:16 EDT
mass dns: warning: Unable to determine any DNS servers. Reverse DNS is disabled
Try using --system-dns or specify valid servers with --dns-servers
Nmap scan report for 192.168.89.191
Host is up (0.012s tatency) .
Not shown: 982 closed ports
PORT STATE SERVICE
21/tcp              open ftp 455.6.7.9.0
21/tcp              open ftp 455.6.2.9.0
25/tcp              open sp 455.6.7.9.0
25/tcp              open smtp 455.6.4.9.0
53/tcp              open 455.6.7.5.0

      _,     ,_
    .'/  ,_   \'.
   |  \__( >__/  |
   \             /
    '-..__ __..-'
jgs      /_\
connecting Mainak
wait..
wait...


'##::::'##::::'###::::'####:'##::: ##::::'###::::'##:::'##:
 ###::'###:::'## ##:::. ##:: ###:: ##:::'## ##::: ##::'##::
 ####'####::'##:. ##::: ##:: ####: ##::'##:. ##:: ##:'##:::
 ## ### ##:'##:::. ##:: ##:: ## ## ##:'##:::. ##: #####::::
 ##. #: ##: #########:: ##:: ##. ####: #########: ##. ##:::
 ##:.:: ##: ##.... ##:: ##:: ##:. ###: ##.... ##: ##:. ##::
 ##:::: ##: ##:::: ##:'####: ##::. ##: ##:::: ##: ##::. ##:
..:::::..::..:::::..::....::..::::..::..:::::..::..::::..::

#include<wait,h>
Hello i am Deb, Mainak Deb
The creator of that website
Thank you for visiting my website❤️
I am a 21 years old CS studen



oops
Connection Abboart

53/tcp              open domain 455.6.7.9.0
80/tcp              open 455.6.7.9.0
80/tcp              open http 465.6.3.9.0
llO/tcp             open pop 255.6.7.9.0
135/                open pop3 155.6.7.9.0
llO/tcp             open pop3 455.6.7.9.0
135/tcp             open msrpc 155.6.7.9.0
135/tcp             open msrpc 455.6.7.9.0
connection abborted
sorry..............
.
/
.
/
wait, we are back
redirecting you to the mainak

  ...`;

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
        //console.log(postNode);
        hackcode.current.appendChild(postNode);
        //console.log(count, prev);
        prev = count;
        count = count + 1;
        if(count === textString.length-2){
          //setbstate(true);
          window.location.href = "/home";
        }
      }

    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
  <>
 
    <div id="mainhtml">
      <div className="hacking-animation">
        <p className="hacking-animation__text" ref={hackcode}>
          <span> Hello</span>
        </p>
      </div>
      { bstate &&
        <Link className="hackstart" type="button" to={"/"}  >Click Me!</Link>}
    </div>
    
    </>
  );
};

export default Codefont;
