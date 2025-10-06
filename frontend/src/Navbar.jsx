import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/user/logout", {
        method: "POST",
      });
    } catch (err) {
      console.error("Logout failed", err);
    }
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/logout");
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo animate-fade-in">
          <div className="logo-icon">
            <img
              src="https://images.seeklogo.com/logo-png/4/2/emblem-of-india-logo-png_seeklogo-47357.png"
              className="logo"
              alt="logo"
            />
          </div>
          <span className="logo-text">Lost & Found Portal</span>
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="nav-menu">
          <li>
            <a href="#home" className="nav-link animate-fade-in">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link animate-fade-in">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="nav-link animate-fade-in">
              Lost Items
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link animate-fade-in">
              Contact Us
            </a>
          </li>

          {!isLoggedIn ? (
            <li>
              <Link to="/login" className="nav-link animate-fade-in green">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
                className="nav-link animate-fade-in red"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          id="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
