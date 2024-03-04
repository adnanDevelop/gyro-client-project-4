import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className={`navbar ${isOpen ? "navbar-active" : ""}`}>
          <h1>Welcome</h1>
          <div
            className={`hamburger-menu ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="nav_logo">
            <Link
              to="/login"
              className={`nav_link ${
                activeLink === "login" ? "active_link" : ""
              }`}
              onClick={() => setActiveLink("login")}
            >
              Log In
            </Link>
          </div>

          <nav className="nav-menu">
            <ul>
              <li>
                <Link
                  className={`nav_link ${
                    activeLink === "faq" ? "active_link" : ""
                  }`}
                  to="/faq"
                  onClick={() => setActiveLink("faq")}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className={`nav_link ${
                    activeLink === "contact" ? "active_link" : ""
                  }`}
                  onClick={() => setActiveLink("contact")}
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  className={`nav_link ${
                    activeLink === "about" ? "active_link" : ""
                  }`}
                  onClick={() => setActiveLink("about")}
                >
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* MOBILE NAVBAR */}
        <div className={`navbar-responsive ${isOpen ? "nav-active" : ""}`}>
          <h1 style={{ textTransform: "uppercase" }}>Welcome</h1>
          {/* NAVBAR LOGO */}
          <div
            className={`hamburger-menu ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="nav_logo">
            <Link to="/login" className="nav_link" onClick={() => { setIsOpen(false)}}>
              Log In
            </Link>
          </div>
          {/* NAVBAR LINK */}
          <nav className="nav-menu">
            <ul>
              <li>
                <Link
                  className={`nav_link ${
                    activeLink === "faq" ? "active_link" : ""
                  }`}
                  to="/faq"
                  onClick={() => {
                    setActiveLink("faq")
                    setIsOpen(false)
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className={`nav_link ${
                    activeLink === "contact" ? "active_link" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("contact")
                    setIsOpen(false)
                  }}
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  className={`nav_link ${
                    activeLink === "about" ? "active_link" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("about")
                    setIsOpen(false)
                  }}
                >
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
