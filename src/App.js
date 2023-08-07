import Confirm from "./Confirm";
import Continue from "./Continue";
import "./App.css";
import frontcard from "./image/bg-card-front.png";
import backcard from "./image/bg-card-back.png";
import cardlogo from "./image/card-logo.svg";
import backgrounimage from "./image/bg-main-desktop.png";
import { useState } from "react";

function App() {
  return (
    <div>
      <img className="backgroundimage" src={backgrounimage} />
      <header>
        <div className="maincard">
          <img className="backcard" src={backcard} />
          <p className="cvc">000</p>
        </div>
        <div className="imagediv">
          <img className="frontcard" src={frontcard} />
          <div className="frontcardtext">
            <img className="cardlogo" src={cardlogo} />
            <p className="cardnumber1">0000 0000 0000 0000</p>
            <div className="nameanddate">
              <p className="name1">JANE APPLESEED</p>
              <p className="date1">00/00</p>
            </div>
          </div>
        </div>
      </header>
      <Confirm />
      {/* <Continue /> */}
    </div>
  );
}

export default App;
