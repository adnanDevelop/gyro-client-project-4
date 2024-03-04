import React from "react";
import logo from "../images/dark-logo.png";

function LogIn() {
  return (
    <div className="login contact">
      <div className="login_logo">
        <img src={logo} />
      </div>
      <div className="login-section">
        <form>
          <h2>Log In</h2>
          <div className="input_section">
            <h4>Username</h4>
            <input type="text" />
          </div>
          <div className="input_section">
            <h4>Password</h4>
            <input type="password" />
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="login-box">
          <h2>
            Don't <br /> have an <br /> account?
          </h2>
          <a href="#">Apply Now</a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
