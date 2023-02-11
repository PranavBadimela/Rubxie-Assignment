import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";
import SecondaryFooter from "../SecondaryFooter";
import Footer from "../Footer";
import lo from "../assets/rubixeLogo.png";
import { GrSystem } from "react-icons/gr";
import { BiChip } from "react-icons/bi";
import { GiBrain, GiTeacher } from "react-icons/gi";
import { BsPersonLinesFill } from "react-icons/bs";

import "./styles.css";

const HomePage = () => {
  return (
    <div id="home-page">
      <Navbar />
      <div className="cover-page-image">
        <div className="cover-page-title">
          <h1>
            TECH <br />
            <span>For</span>
            TEENS
          </h1>
          <p>
            Carving Future
            <br />
            Technology Professionals <br /> Out Of Young Minds
          </p>
        </div>
      </div>

      <div className="who-we-are-container">
        <h3>Who We Are</h3>
        <div className="who-we-are-content">
          <div>
            <p className="who-we-are-description">
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT).
            </p>
            <p className="who-we-are-description">
              Rubixe mission to enable businesses to leverage the full potential
              of disruptive technologies to stay competitive in the market.At
              Rubixe™, we make your business more efficient, more predictable
              and more effective.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dnaarhl5b/image/upload/v1676055259/Young-team-working-together-in-a-meeting-room_rgbb8z.jpg"
            alt="meeting"
            className="meeting-image"
          />
        </div>
      </div>

      <div className="where-we-started-container">
        <div className="where-we-started-nav-description">
          <h3 style={{ color: "#fff" }}>where we started</h3>
          <p className="white-description">
            We Started in 2008, providing technology solutions based in the
            Netherlands, founders of Rubixe™ have gained expertise in
            cutting-edge technology through delivering several smart city
            solutions for European Commission (EC) projects.
          </p>
        </div>
      </div>

      <div className="where-we-started-content-container">
        <div className="where-we-started-content">
          <h4 className="where-we-started-heading">
            TECH FOR TEENS-A RUBIXE INITIATIVE
          </h4>
          <div className="where-we-started-cards">
            <div className="where-we-started-card1">
              <div className="number1">
                <h3 style={{ color: "#2d2e82" }}>01</h3>
              </div>

              <div className="card-content">
                <GrSystem className="icon" style={{ color: "#2d2e82" }} />
                <p className="black-description">
                  Introducing AI to children in an age appropriate manner.
                </p>
              </div>
            </div>

            <div className="where-we-started-card2">
              <div className="number2">
                <h3 style={{ color: "#932557" }}>02</h3>
              </div>

              <div className="card-content">
                <p className="black-description">
                  Gain awareness on AI and build an interactive story around it
                </p>
                <BiChip className="icon1" style={{ color: "#932557" }} />
              </div>
            </div>

            <div className="where-we-started-card3">
              <div className="number1">
                <h3 style={{ color: "#e94e1d" }}>03</h3>
              </div>

              <div className="card-content">
                <GiBrain className="icon" style={{ color: "#e94e1d" }} />
                <p className="black-description">
                  Acquire programming skills in a user-friendly format
                </p>
              </div>
            </div>

            <div className="where-we-started-card4">
              <div className="number2">
                <h3 style={{ color: "#175937" }}>04</h3>
              </div>

              <div className="card-content">
                <p className="black-description">
                  Exposure to mini projects on diverse topics
                </p>
                <BsPersonLinesFill
                  className="icon1"
                  style={{ color: "#175937" }}
                />
              </div>
            </div>

            <div className="where-we-started-card5">
              <div className="number1">
                <h3 style={{ color: "#b67e36" }}>05</h3>
              </div>

              <div className="card-content">
                <GiTeacher className="icon" style={{ color: "#b67e36" }} />
                <p className="black-description">
                  Train the teachers programme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
      <SecondaryFooter />
    </div>
  );
};

export default HomePage;
