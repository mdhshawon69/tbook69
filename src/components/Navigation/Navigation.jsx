import React, { useState } from "react";
import "./Navigation.scss";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
  const [changeBg, setChangeBg] = useState(false);

  const changeBgfunc = () => {
    if (window.innerWidth <= 400 && window.scrollY >= 60) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };

  window.addEventListener("scroll", changeBgfunc);

  return (
    <nav className={changeBg ? "app__nav changeBg" : "app__nav"}>
      <div className="container">
        <img src={logo} alt="" className="app__nav-logo" />
        <a href="#signin" className="app__nav-button">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
