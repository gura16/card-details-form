import "./Confirm.css";
function Card() {
  return (
    <div className="inputdiv">
      <div className="cardholderdiv">
        <p className="cardholder">CARDHOLDER NAME</p>
        <input type="text" className="inputname"></input>
      </div>
      <div className="cardnumberdiv">
        <p className="cardnumber">CARD NUMBER</p>
        <input tupe="number" className="inputnumber"></input>
      </div>
      <div className="carddatediv">
        <p className="carddate">EXP. DATE (MM.YY) CVC</p>
        <div className="datediv">
          <input placeholder="MM" className="mm"></input>
          <input placeholder="YY" className="yy"></input>
          <input placeholder="123" className="cvc"></input>
        </div>
      </div>
      <button className="button">Confirm</button>
    </div>
  );
}

export default Card;
