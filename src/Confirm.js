import "./Confirm.css";
import React, { useState } from "react";

function Card() {
  const MyForm = () => {
    const [cvc, setCvc] = useState("");
    const [cvcVerified, setCvcVerified] = useState(null);

    const handleCvcChange = (e) => {
      setCvc(e.target.value);
      setCvcVerified(null);
    };

    const [date, setDate] = useState("");
    const [dateVerified, setDateVerified] = useState(null);

    const handleDateChange = (e) => {
      setDate(e.target.value);
      setDateVerified(null);
    };

    const handleConfirmClick = () => {
      const cvcRegex = /^\d{3}$/;
      const isCvcValid = cvcRegex.test(cvc);
      setCvcVerified(isCvcValid);

      const dateRegex = /^\d{2}$/;
      const isDateValid = dateRegex.test(date);
      setDateVerified(isDateValid);
    };
  };
  return (
    <div className="inputdiv">
      <div className="cardholderdiv">
        <p className="cardholder">CARDHOLDER NAME</p>
        <input
          placeholder="e.g. Jane Appleseed"
          type="text"
          className="inputname"
        ></input>
      </div>
      <div className="cardnumberdiv">
        <p className="cardnumber">CARD NUMBER</p>
        <input
          placeholder="e.g. 1234 5678 9123 0000"
          tupe="number"
          className="inputnumber"
        ></input>
        <p className="errornumber">Wrong format, numbers only</p>
      </div>
      <div className="carddatediv">
        <p className="carddate">EXP. DATE (MM.YY) CVC</p>
        <div className="datediv">
          <input
            onChange={handleDateChange}
            placeholder="MM"
            className="mm"
          ></input>
          <input placeholder="YY" className="yy"></input>
          <input
            onChange={handleCvcChange}
            placeholder="123"
            className="cvc1"
          ></input>
        </div>
      </div>
      <div className="errordatecvc">
        {dateVerified === false && (
          <p className="errordate" style={{ color: "red" }}>
            Can’t be blank
          </p>
        )}

        {cvcVerified === false && (
          <p className="errorcvc" style={{ color: "red" }}>
            Can’t be blank
          </p>
        )}
      </div>
      <button onClick={handleConfirmClick} className="button">
        Confirm
      </button>
    </div>
  );
}

export default Card;
