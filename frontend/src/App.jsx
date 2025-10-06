import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import RegisterPage from "./RegisterPage";
import { FaMapMarkerAlt } from "react-icons/fa";
import LogoutPage from "./LogoutPage";
import AnimatedCounter from "./AnimatedCounter";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/all")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge animate-slide-up">
              Established Since 2025
            </div>
            <h1 className="hero-title animate-slide-up">
              <span className="highlight">
                Government Lost & Found &nbsp; Portal &nbsp;
              </span>
            </h1>
            <p className="hero-subtitle animate-slide-up">
              Helping citizens reconnect with their lost belongings. Whether
              it's a misplaced ID, valuable item, or personal possession — our
              platform ensures a secure and transparent way to report, search,
              and recover what matters most.
            </p>
            <div className="hero-buttons animate-slide-up">
              <a href="#contact" className="btn-primary nounderline">
                Contact Us
              </a>
              <a href="#menu" className="btn-secondary nounderline">
                Lost Items
              </a>
            </div>
            <div className="hero-stats animate-slide-up">
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={10} duration={1500} />
                </div>
                <div className="stat-label">Years of Service</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={12000} duration={2500} />
                </div>
                <div className="stat-label">Items Recovered</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={15000} duration={2500} />
                </div>
                <div className="stat-label">Reports Submitted</div>
              </div>
            </div>
          </div>
          <div className="hero-image animate-slide-up">
            <div className="coffee-showcase">
              <img
                src="https://thumbs.dreamstime.com/b/man-returning-lost-wallet-to-found-service-worker-people-helping-finding-stuff-cartoon-young-female-concept-flat-vector-200147444.jpg"
                alt="Coffee Shop"
                className="hero-coffee-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header animate-slide-up">
            <div className="section-badge">Our Aim</div>
            <h2 className="section-title">
              About Our <span className="highlight">Mission</span>
            </h2>
            <p className="section-subtitle animate-slide-up">
              Established to assist citizens in reuniting with their lost
              belongings, our platform ensures every report is handled with
              care, transparency, and efficiency. We connect finders and owners
              through a secure and reliable system backed by government support.
            </p>
          </div>

          <div className="about-content">
            <div className="about-image animate-slide-left">
              <div className="image-wrapper">
                <img
                  src="https://media.istockphoto.com/id/488555298/photo/lost-and-found.jpg?s=612x612&w=0&k=20&c=t1rrjljx3esYNaz8r_mv-jGLpMlEkum0IgH2TMBcZkw="
                  alt="Coffee beans and roasting"
                  className="main-about-img"
                />
                <div className="image-overlay"></div>
                <div className="experience-badge">
                  <div className="years">10+</div>
                  <div className="text">Years of Excellence</div>
                </div>
              </div>
              <div className="about-gallery">
                <img
                  src="https://media.istockphoto.com/id/491483592/photo/lone-suitcase-in-waiting-area.jpg?s=612x612&w=0&k=20&c=EfUC8CpDguuWKTAGntswQ1UTbiwES-M7kRSfRLFCFjE="
                  alt="Coffee preparation"
                  className="gallery-img animate-slide-up"
                />
                <img
                  src="https://media.istockphoto.com/id/1220068466/photo/suitcase-with-lost-sticker-on-an-airport-baggage-conveyor-or-baggage-claim-transporter.jpg?s=612x612&w=0&k=20&c=w7Gz-4ntwjAPlOtHjpx36gSCk1HzcmWPNZF3kENRvSc="
                  alt="Cappuccino art"
                  className="gallery-img animate-slide-up"
                />
              </div>
            </div>

            <div className="about-text animate-slide-right">
              <div className="features">
                <div className="feature animate-slide-up">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-content">
                    <h3>Verified Submissions</h3>
                    <p>
                      All lost and found reports are reviewed and verified by
                      our official team to ensure accuracy and legitimacy.
                    </p>
                  </div>
                </div>
                <div className="feature animate-slide-up">
                  <div className="feature-icon">📍</div>
                  <div className="feature-content">
                    <h3>Location Tracking</h3>
                    <p>
                      Easily pin where your item was lost or found to help
                      others identify and return belongings faster.
                    </p>
                  </div>
                </div>
                <div className="feature animate-slide-up">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-content">
                    <h3>Citizen Support</h3>
                    <p>
                      A platform built for and by the community — promoting
                      honesty and helping reunite people with their possessions.
                    </p>
                  </div>
                </div>
                <div className="feature animate-slide-up">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-content">
                    <h3>Secure & Private</h3>
                    <p>
                      Your personal information is protected and only shared
                      when necessary to connect rightful owners with found
                      items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-badge">Reported Items</div>
            <h2 className="section-title">
              Recently <span className="highlight">Reported&nbsp;</span>Items
            </h2>
            <p className="section-subtitle">
              Below are the items you have reported as lost. Our team is
              actively working to assist in locating and returning them to you.
            </p>
          </div>

          {/* Items Grid */}
          <div className="menu-grid">
            {items.length === 0 ? (
              <p className="loading">Loading items...</p>
            ) : (
              items.map((item) => (
                <div className="menu-card" key={item._id || item.name}>
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-location">
                      <FaMapMarkerAlt /> <strong>Location Lost:</strong>{" "}
                      {item.locationlost}
                    </p>

                    <Link to={`/product/${item._id}`} className="btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-background"></div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section animate-slide-up">
              <div className="footer-logo">
                <div className="logo-icon">🏛️</div>
                <span className="logo-text">Lost & Found</span>
              </div>
              <p className="footer-description">
                Serving citizens with trust, transparency, and care through a
                secure government-backed Lost & Found system that helps reunite
                people with their belongings.
              </p>
            </div>

            <div className="footer-section animate-slide-up">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Lost & Found Department, 150 ft Ring Road, Rajkot</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>77777 99999</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>contact@lost&found.gov.in</span>
                </div>
              </div>
            </div>

            <div className="footer-section animate-slide-up">
              <h4>Opening Hours</h4>
              <div className="hours">
                <div className="hour-item special">
                  <span className="day">Monday - Friday</span>
                  <p className="time">&nbsp;9:00 AM - 6:00 PM</p>
                </div>

                <div className="hour-item special">
                  <span className="day">Holidays</span>
                  <span className="time">9:00 AM - 12:00 PM</span>
                </div>
              </div>
            </div>

            <p>&copy; 2025 Lost & Found. All rights reserved.</p>
            <p className="powered-by">
              Crafted by{" "}
              <a href="https://in.linkedin.com/in/heetgokani">Heet Gokani ❤️</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
