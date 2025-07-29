import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>LOGO</h1>
          <div className="header--nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
