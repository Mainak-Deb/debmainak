import React from "react";
import './styles/Oldterminal.css';
import Typetext from './Typetext'


const Oldterminal = (props) => {
    const text=props.text;
    const image=props.image;
  return (
    <div>
        
      <main>
        <section class="hero has-dflex-center">
          <div class="lx-container-60">
            <div class="lx-row">
              <div class="box-border">
                <div class="overlay"></div>
                <div class="box">
                  <div class="code">
                    <p><Typetext text={text}  speed={100}/> </p>
                    <img className="imgcls" src={image} alt="" />
                    <p class="cursor-blink">
                      &gt;&nbsp;<b>|</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Oldterminal;
