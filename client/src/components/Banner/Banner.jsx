import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="list-left">
        <a href="">LOCATIONS</a>
        <a href="">FOOD & DRIKS</a>
        <a href="">WHAT'S ON</a>
      </div>
      <div className="logo">
        <img
          src="https://www.draughtslondon.com/wp-content/uploads/2022/04/draught-logo-new-blue.png"
          alt=""
        />
      </div>
      <div className="list-right">
        <a href="">events</a>
        <a href="">games library</a>
        <a href="">book</a>
      </div>
    </div>
  );
};

export default Banner;
