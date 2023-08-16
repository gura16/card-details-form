import "./continue.css";
import icon from "./image/icon-complete.svg";

function Continue() {
  return (
    <div>
      <div className="continuediv">
        <img className="icon" src={icon} alt="icon" />
        <p className="thankyou">THANK YOU!</p>
        <p className="add">We’ve added your card details</p>
        <button className="button1">Continue</button>
      </div>
    </div>
  );
}

export default Continue;
