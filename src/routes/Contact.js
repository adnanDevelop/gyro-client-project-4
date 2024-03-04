import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_header">
        <h2>Contact Us</h2>
        <p>
          Our Customer Service staff will be happy to answer any questions you
          may have. Please use the form below to reach us.
        </p>
      </div>
      <div className="contact-section">
        <form>
          <div className="input_section">
            <h4>Name</h4>
            <input type="text" />
          </div>
          <div className="input_section">
            <h4>Email</h4>
            <input type="password" />
          </div>
          <div className="input_section">
            <h4>Email</h4>
            <textarea></textarea>
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="timing_section">
          <p>
            Our regular office hours are Monday -{" "}
            <strong>Friday, 8:00 AM – 8:00 PM ET.</strong>{" "}
          </p>
          <p>
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
