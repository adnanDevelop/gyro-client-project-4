import React, { useState } from "react";
import logo from "../images/home-logo.jpeg";
import vector from "../images/Vector.png";

function HomePage() {
  return (
    <div className="homepage">
      <div className="home_logo">
        <img src={logo} alt="" />
      </div>
      <div className="home-img">
        <img src={vector} />
        <div className="home-content">
          <p>It’s easy. <br/> It’s convenient. <br/> It’s cost effective. </p>
          <h4>GyroGoGo</h4>
          <button type="button">apply now</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
