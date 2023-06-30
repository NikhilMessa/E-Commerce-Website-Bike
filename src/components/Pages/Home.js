import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import YTVideo from "../Common/YTVideo";

import image1 from "../assets/img/mainhelmet.png";
import image2 from "../assets/img/mainjersey.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home-cover-wrapper">
            <div className="home-cover-img"></div>
            <div className="home-cover-text">
              <div className="home-cover-top-text">
                <h1>We have the works</h1>
                <p>It's all fun and game until you catch too much air</p>
                <Link
                  to="/konaprocess"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "10px 20px",
                    backgroundColor: "gray",
                    borderRadius: "20px",
                  }}
                >
                  Process 153
                </Link>
              </div>
              <div className="home-cover-bottom-text">
                <p>Take a deeper look at</p>
                <p>
                  <strong>Kona Process 153 CR 27.5"</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="home-content-wrapper">
            <div className="promotion">
              <div className="promotion-top">
                <YTVideo url="https://www.youtube.com/watch?v=fVeC9nUSRw8" />
              </div>
              <div className="promotion-bottom">
                <div className="promotion-left-container">
                  <div className="helmet-promotion">
                    <h3>Helmets on sale</h3>
                    <p>Save upto 67% on Select Helmets</p>
                    <Link
                      to="/helmet"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "10px 20px",
                        backgroundColor: "gray",
                        width: "120px",
                        margin: "20px 0",
                        fontSize: "12px",
                        textTransform: "uppercase",
                      }}
                    >
                      Shop Now
                    </Link>
                  </div>
                  <img src={image1} alt="Helmet" />
                </div>
                <div className="promotion-right-container">
                  <div className="jersey-promotion">
                    <h3>Jersey on Sale</h3>
                    <p>Closeout Deals from TLD, Fox & More</p>
                    <Link
                      to="/jersey"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "10px 20px",
                        backgroundColor: "gray",
                        width: "120px",
                        margin: "20px 0",
                        fontSize: "12px",
                        textTransform: "uppercase",
                      }}
                    >
                      Shop Now
                    </Link>
                  </div>
                  <img src={image2} alt="Jersey" />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
