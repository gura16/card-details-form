import "./Confirm.css";
import React, { useState } from "react";

function Card() {
  const [name, setName] = useState("");
  const [nameVerified, setNameverified] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameverified(null);
  };

  const [number, setNumber] = useState("");
  const [numberVerified, setNumberverified] = useState(null);

  const handleNumberCange = (e) => {
    setNumber(e.target.value);
    setNumberverified(null);
  };

  const [cvc, setCvc] = useState("");
  const [cvcVerified, setCvcVerified] = useState(null);

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
    setCvcVerified(null);
  };

  const [year, setYear] = useState("");
  const [yearVerified, setYearverified] = useState(null);

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setYearverified(null);
  };

  const [date, setDate] = useState("");
  const [dateVerified, setDateVerified] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setDateVerified(null);
  };

  const handleConfirmClick = () => {
    const cvcRegex = /^\d{3}$/;
    if (cvc === "") {
      setCvcVerified("");
    } else {
      const isCvcValid = cvcRegex.test(cvc);
      setCvcVerified(isCvcValid);
    }

    const nameRegex = /^[A-Za-z\s'-]+$/;
    const isNmaevalid = nameRegex.test(name);
    setNameverified(isNmaevalid);

    const numberRegex = /^[0-9]{20}$/;
    const isNumbervalid = numberRegex.test(number);
    setNumberverified(isNumbervalid);

    const yearRegex = /^\d{4}$/;
    const isYearValid = yearRegex.test(year);
    setYearverified(isYearValid);

    const dateRegex = /^(0?[1-9]|1[0-2])$/;
    const isDateValid = dateRegex.test(date);
    setDateVerified(isDateValid);
  };

  const nameinputstyle = {
    outline:
      nameVerified === false || nameVerified === ""
        ? "2px solid #FF5050"
        : "none",
  };

  const numberinputstyle = {
    outline:
      numberVerified === false || yearVerified === ""
        ? "2px solid #FF5050"
        : "none",
  };

  const yearinputstyle = {
    outline:
      yearVerified === false || yearVerified === ""
        ? "2px solid #FF5050"
        : "none",
  };

  const dateinputstyle = {
    outline:
      dateVerified === false || dateVerified === ""
        ? "2px solid #FF5050"
        : "none",
  };
  const cvcinputstyle = {
    outline:
      cvcVerified === false || cvcVerified === ""
        ? "2px solid #FF5050"
        : "none",
  };

  return (
    <div className="inputdiv">
      <div className="cardholderdiv">
        <p className="cardholder">CARDHOLDER NAME</p>
        <input
          onChange={handleNameChange}
          placeholder="e.g. Jane Appleseed"
          type="text"
          className="inputname"
          style={nameinputstyle}
        ></input>
      </div>
      <div className="cardnumberdiv">
        <p className="cardnumber">CARD NUMBER</p>
        <input
          onChange={handleNumberCange}
          placeholder="e.g. 1234 5678 9123 0000"
          tupe="number"
          className="inputnumber"
          style={numberinputstyle}
        ></input>
        {numberVerified === false && (
          <p className="errornumber" style={{ color: "red" }}>
            Wrong format, numbers only
          </p>
        )}
      </div>
      <div className="carddatediv">
        <p className="carddate">EXP. DATE (MM.YY) CVC</p>
        <div className="datediv">
          <input
            type="number"
            onChange={handleDateChange}
            placeholder="MM"
            className="mm"
            style={dateinputstyle}
          ></input>
          <input
            onChange={handleYearChange}
            placeholder="YY"
            className="yy"
            style={yearinputstyle}
          ></input>
          <input
            onChange={handleCvcChange}
            placeholder="cvc"
            className="cvc1"
            style={cvcinputstyle}
          ></input>
        </div>
      </div>
      <div className="errordatecvc">
        {dateVerified === false && (
          <p className="errordate" style={{ color: "red" }}>
            Can’t be blank
          </p>
        )}
        {yearVerified === false && (
          <p className="errordate" style={{ color: "red" }}>
            Can’t be blank
          </p>
        )}

        {cvcVerified === "" && (
          <p className="errorcvc" style={{ color: "red" }}>
            Can’t be blank
          </p>
        )}
        {cvcVerified === false && (
          <p className="errorcvc" style={{ color: "red" }}>
            3 numbers only
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
