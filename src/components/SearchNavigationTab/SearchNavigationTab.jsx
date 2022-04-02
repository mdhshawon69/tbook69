import React, { useState } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { RiHotelFill, RiBusFill } from "react-icons/ri";
import { GiIsland } from "react-icons/gi";
import "./SearchNavigationTab.scss";

const SearchNavigationTab = () => {
  const [active, setActive] = useState(1);
  const activeStyle = {
    borderBottom: "2px solid #fccd03",
  };
  const svgColor = {
    color: "#10aed2",
  };
  return (
    <div className="app__search_nav">
      <div className="app__search-tab">
        <div
          className="tab-item"
          style={active === 1 ? activeStyle : null}
          onClick={() => setActive(1)}
        >
          <MdFlightTakeoff style={active === 1 ? svgColor : null} /> Flight
        </div>
        <div
          className="tab-item"
          style={active === 2 ? activeStyle : null}
          onClick={() => setActive(2)}
        >
          <RiHotelFill style={active === 2 ? svgColor : null} /> Hotel
        </div>
        <div
          className="tab-item"
          style={active === 3 ? activeStyle : null}
          onClick={() => setActive(3)}
        >
          <GiIsland style={active === 3 ? svgColor : null} /> Tour
        </div>
        <div
          className="tab-item"
          style={active === 4 ? activeStyle : null}
          onClick={() => setActive(4)}
        >
          <RiBusFill style={active === 4 ? svgColor : null} /> Bus
        </div>
      </div>
    </div>
  );
};

export default SearchNavigationTab;
