import React from "react";
import "./SearchFieldOneWay.scss";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const SearchFieldOneWay = () => {
  return (
    <div className="search__field_main">
      <div className="search__field-one-way">
        <span className="arrow">
          <HiOutlineArrowNarrowRight className="arrow-item-2" />
          <HiOutlineArrowNarrowLeft className="arrow-item-1" />
        </span>
        <div className="search-form from">
          <span className="lable">From</span>
          <h4 className="value">Dhaka</h4>
          <span className="sub-lable">
            Hazrat Shah Jalal International Airport
          </span>
        </div>

        <div className="search-form">
          <span className="lable">From</span>
          <h4 className="value">Chittagong</h4>
          <span className="sub-lable">
            CGP, Shah Amanat International Airport
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchFieldOneWay;
