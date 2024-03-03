import React from "react";

function Contact() {
  return (
    <div className="contact-section">
      <div className="login_logo">
        <h2>Contact Us</h2>
        <p>
          Our Customer Service staff will be happy to answer any questions you
          may have. Please use the form below to reach us.
        </p>
      </div>
      <div className="login-section">
        <form>
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
        <div className="timing_section">
          <p>
            Our regular office hours are Monday - Friday, 8:00 AM – 8:00 PM ET.{" "}
            <br />
            Members will receive a 24-hour emergency service number in their
            rental confirmation.
          </p>
        </div>
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

export default Contact;
