import React from "react";
import Buttons from "../components/button/Buttons";

import "./pages.css";
const About = () => {
  return (
    <>
      <div className="about-bg"></div>
      <div className="about">
        <div className="action">
          <div className="about-text-section">
            <h1 className="about-title">Reserve your place</h1>
          </div>

          <Buttons />
        </div>
      </div>
    </>
  );
};

export default About;
