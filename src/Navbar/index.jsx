import React from "react";
import Logo from "../assets/rubixeLogo.png";
import "./styles.css";

const index = () => {
  return (
    <div id="navbar">
      <div className="navbar-items-container">
        <div className="logo-container">
          <img src={Logo} className="logo" />
          <div className="logo-name-container">
            <h3>Rubixe</h3>
            <p>Disruptive Technologies of work</p>
          </div>
        </div>

        <div className="navbar-links">
          <ul className="list-items">
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>AI Internship</li>
            <li>Career</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact US</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
