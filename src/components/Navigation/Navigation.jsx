import React from "react";
import "./Navigation.scss";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
  return (
    <nav className="app__nav">
      <img src={logo} alt="" className="app__nav-logo" />
      <a href="#signin" className="app__nav-button">
        Sign In
      </a>
    </nav>
  );
};

export default Navigation;
