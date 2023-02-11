import React from "react";
import "./stylex.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content-container">
        <div className="about-us">
          <h4>About Us</h4>
          <p>
            Rubixe™ is a global technology company specializing in disruptive
            technologies – Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA), BlockChain and Internet of Things
            (IoT). Rubixe mission to enable businesses to leverage the full
            potential of disruptive technologies to stay competitive in the
            market.
          </p>
        </div>

        <div className="menus">
          <h4>Menus</h4>
          <div>
            <p>Home</p>
            <p>Services</p>
            <p>Products</p>
            <p>career</p>
          </div>
        </div>

        <div className="learn-more">
          <h4>Learn More</h4>
          <p>About</p>
          <p>Contact Us</p>
        </div>

        <div className="address">
          <h4>Address</h4>
          <p>
            Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
            Karnataka 560068
          </p>
          <p>Phone: 0804-717-8999</p>
          <p>Email: hi@rubixe.com</p>

          <h6>SOCIAL MEDIA</h6>
          <div className="social-media">
            <div className="social-icon-container">
              <FaFacebookF className="social-icon1" />
            </div>

            <div className="social-icon-container">
              <FaLinkedinIn className="social-icon2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
