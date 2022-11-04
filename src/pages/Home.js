import React from "react";
import Timer from "../components/Timer/Timer";
import "./pages.css";

const Home = () => {
  return (
    <>
      <div className="main-app">
        <div className="app-title">
          <h1 className="title">Car Show 2022.</h1>
        </div>
        <Timer />
      </div>
    </>
  );
};

export default Home;
