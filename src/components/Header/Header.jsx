import React from "react";
import FlightSearch from "../FlightSearch/FlightSearch";
import Navigation from "../Navigation/Navigation";
import SearchNavigationTab from "../SearchNavigationTab/SearchNavigationTab";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header">
      <Navigation />
      <SearchNavigationTab />
      <FlightSearch />
    </div>
  );
};

export default Header;
