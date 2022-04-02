import React from "react";
import SearchFieldOneWay from "../SearchFieldOneWay/SearchFieldOneWay";
import "./FlightSearch.scss";

const FlightSearch = () => {
  return (
    <div className="flight-search">
      <div className="radios">
        <div className="radio-item">
          <lable className="custom-radio-btn">
            <input type="radio" name="flight-type" value="one-way" />
            <span className="checkmark"></span>
          </lable>
          <span className="radio-text">One Way</span>
        </div>
        <div className="radio-item">
          <lable className="custom-radio-btn">
            <input type="radio" name="flight-type" value="round-way" />
            <span className="checkmark"></span>
          </lable>
          <span className="radio-text">One Way</span>
        </div>
        <div className="radio-item">
          <lable className="custom-radio-btn">
            <input type="radio" name="flight-type" value="multi-way" />
            <span className="checkmark"></span>
          </lable>
          <span className="radio-text">One Way</span>
        </div>
      </div>
      <SearchFieldOneWay />
    </div>
  );
};

export default FlightSearch;
