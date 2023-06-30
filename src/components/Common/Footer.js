import React, { Component } from "react";
import { Link } from "react-router-dom";

import image from "../assets/img/GearAdvisors.jpg";
import imageftr from "../assets/img/ftr-logo.png";
import logo from "../assets/img/cog.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <img
            className="cog"
            src={logo}
            alt="logo"
            style={{
              height: "60px",
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="footer-top">
            <div className="footer-left">
              <div className="advisor-img">
                <img src={image} alt="GearAdvisors" />
              </div>
              <div className="advisor-text">
                <h1>NEED GEAR ADVICE?</h1>
                <p>Our Gear Advisors are Ready to Help</p>
                <br />
                <div className="contact-details">
                  <i class="fas fa-phone-alt"></i>
                  <p>(888) 888 - 8888</p>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <h1>EMAIL SPECIALS</h1>
              <p>Sign up for our weekly newsletter delivered via email.</p>
              <div class="newsletter">
                <form action="#">
                  <input type="text" placeholder="Enter your email here" />
                  <input type="submit" value="Sign Up" />
                </form>
              </div>
            </div>
          </div>
          <div className="footer-mid">
            <div className="features">
              <div className="feature">
                <h2>SHOP WITH</h2>
                <h1>CONFIDENCE</h1>
                <p>
                  <i>TrustPilot Score: 4.7/5</i>
                </p>
              </div>
              <div className="feature">
                <h1>PREMIER</h1>
                <h1>BRANDS</h1>
              </div>
              <div className="feature">
                <h1>FREE OVER $60*</h1>
                <h1>SHIPPING</h1>
              </div>
              <div className="feature">
                <h1 style={{ fontWeight: "600" }}>365 DAY</h1>
                <h1>RETURNS</h1>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="bottom-top">
              <div className="bt-parts">
                <div className="bt-part">
                  <h4>Customer Care</h4>
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <p>My Account</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Order History</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Gift Card</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Wish List</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Help Desk</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Returns</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Waranty</p>
                  </Link>
                </div>
                <div className="bt-part">
                  <h4>Our Culture</h4>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Contact Us</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Store Location</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Community</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Affiliate Program</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Policies</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Accessibility</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Terms of Use</p>
                  </Link>
                </div>
                <div className="bt-part">
                  <h4>Company</h4>
                  <Link to="/aboutus" style={{ textDecoration: "none" }}>
                    <p>About Us</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Events</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Gear Advisors</p>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <p>Careers</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bottom-bottom">
              <div className="punch-line">
                <h1>Keep Pedaling</h1>
              </div>
              <div className="links">
                <a href="www.facebook.com/JensonUSA">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="www.instagram.com/Jensonusa">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="www.twitter.com/JensonUSA">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
              <div className="ftr-logo">
                <img src={imageftr} alt="JensonUSA" />
              </div>
            </div>
          </div>
          <div className="ftr-bottom-line">
            <div className="black-line"></div>
            <div className="red-line"></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
