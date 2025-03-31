import { useState } from "react";
import iconArrow from "../assets/icon-arrow.svg";

function Input({ date, setDate, errors, onCalculate }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate(prev => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    onCalculate();
  };

  return (
    <div className="user-input">
      <div className="input-date">
        <h4 className="text">DAY</h4>
        <input
          className={`input-text ${errors.day ? "error" : ""}`}
          type="text"
          name="day"
          placeholder="DD"
          value={date.day}
          onChange={handleChange}
        />
        <p className="error-message" id="day-error" style={{ visibility: errors.day ? "visible" : "hidden" }}>
          {errors.day}
        </p>
      </div>

      <div className="input-date">
        <h4 className="text">MONTH</h4>
        <input
          className={`input-text ${errors.month ? "error" : ""}`}
          type="text"
          name="month"
          placeholder="MM"
          value={date.month}
          onChange={handleChange}
        />
        <p className="error-message" id="month-error" style={{ visibility: errors.month ? "visible" : "hidden" }}>
          {errors.month}
        </p>
      </div>

      <div className="input-date">
        <h4 className="text">YEAR</h4>
        <input
          className={`input-text ${errors.year ? "error" : ""}`}
          type="text"
          name="year"
          placeholder="YYYY"
          value={date.year}
          onChange={handleChange}
        />
        <p className="error-message" id="year-error" style={{ visibility: errors.year ? "visible" : "hidden" }}>
          {errors.year}
        </p>
      </div>

      <img className="arrow" src={iconArrow} alt="Calculate" onClick={handleClick} />
    </div>
  );
}

export default Input;