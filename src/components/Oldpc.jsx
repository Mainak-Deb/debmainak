import React from "react";
import "./styles/Oldpc.css";
const Oldpc = () => {
  return (
    <>
      <div classNameName="center">
        <div className="screenBackground">
          <div className="behind"></div>
        </div>
        <div className="screenBox">
          <div className="frame">
            <div className="screenBox2">
              <div className="screenBox3">
                <div className="screen">
                  <div className="output"></div>
                </div>
              </div>
            </div>
            <div className="bottomFrame">
              <div className="fan"></div>
              <img
                className="logo"
                src="http://www.icone-png.com/png/52/51692.png"
              />
              <div className="powerButton">
                <div className="powerIcon"></div>
              </div>
              <div className="powerLight lightOff"></div>
            </div>
          </div>
        </div>
        <div className="screenFoot"></div>
        <div className="computer">
          <div className="computerFrame">
            <div className="computerFan1"></div>
            <div className="computerFan2"></div>
            <div className="screw1"></div>
            <div className="screw2"></div>
            <div className="computerFrame2">
              <div className="floppy">
                <div className="fingerGrip"></div>
                <div className="slot"></div>
              </div>
              <div className="socket1"></div>
              <div className="socket2"></div>
            </div>
            <div className="screw3"></div>
            <div className="screw4"></div>
            <div className="screw5"></div>
            <div className="powerButton">
              <div className="buttonSlide">
                <div className="computerButton computerButtonOff"></div>
              </div>
              <div className="offIndicator"></div>
              <div className="onIndicator"></div>
            </div>
            <div classNameName="powerLight lightOff"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oldpc;
