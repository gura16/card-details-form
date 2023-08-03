import Confirm from "./Confirm";
import "./App.css";
import frontcard from "./image/bg-card-front.png";
import backcard from "./image/bg-card-back.png";

function App() {
  return (
    <div>
      <header>
        <div className="maincard">
          <img className="backcard" src={backcard} />
          <p className="cvc">000</p>
        </div>
        <div className="imagediv">
          <img className="frontcard" src={frontcard} />
        </div>
      </header>
      <Confirm />
    </div>
  );
}

export default App;
