import "./Confirm.css";
import Continue from "./Continue";
import React, { useState } from "react";

function Card() {
  const [showcard, setShowcard] = useState(false);
  const [name, setName] = useState("");
  const [nameVerified, setNameverified] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameverified(null);
  };

  const [number, setNumber] = useState("");
  const [numberVerified, setNumberverified] = useState(null);

  const handleNumberChange = async (e) => {
    if (e.target.value.length === 4) {
      e.target.value += " ";
    } else if (e.target.value.length === 9) {
      e.target.value += " ";
    } else if (e.target.value.length === 14) {
      e.target.value += " ";
    }
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
    const isCvcValid = cvcRegex.test(cvc);
    if (cvc === "") {
      setCvcVerified("");
    } else {
      setCvcVerified(isCvcValid);
    }

    const nameRegex = /^[A-Za-z\s'-]+$/;
    const isNmaevalid = nameRegex.test(name);
    setNameverified(isNmaevalid);

    const numberRegex = /^(?:\d{4}\s){3}\d{4}$/;
    const isNumbervalid = numberRegex.test(number);
    setNumberverified(isNumbervalid);

    const yearRegex = /^(?:2[3-9]|[3-9]\d)$/;
    const isYearValid = yearRegex.test(year);
    setYearverified(isYearValid);

    const dateRegex = /^(0?[1-9]|1[0-2])$/;
    const isDateValid = dateRegex.test(date);
    setDateVerified(isDateValid);

    if (
      isNmaevalid &&
      isNumbervalid &&
      isDateValid &&
      isCvcValid &&
      isYearValid
    ) {
      setShowcard(true);
    }
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
    <div>
      {showcard === true && <Continue />}
      <div className={showcard ? "inputdiv remove" : "inputdiv"}>
        <div className="cardholderdiv">
          <p className="cardholder">CARDHOLDER NAME</p>
          <input
            onChange={handleNameChange}
            placeholder="e.g. Jane Appleseed"
            className="inputname"
            style={nameinputstyle}
          ></input>
        </div>
        <div className="cardnumberdiv">
          <p className="cardnumber">CARD NUMBER</p>
          <input
            type="text"
            onChange={handleNumberChange}
            placeholder="e.g. 1234 5678 9123 0000"
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
              type="number"
              onChange={handleYearChange}
              placeholder="YY"
              className="yy"
              style={yearinputstyle}
            ></input>
            <input
              type="number"
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
    </div>
  );
}

export default Card;
