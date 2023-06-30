import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

// Images
import image from "../assets/img/electric-bg.jpg";
import m7 from "../assets/img/m20-e-bike.jpg";
import m8 from "../assets/img/m30-e-bike.jpg";
import m9 from "../assets/img/wild-fs-h30.jpg";
import m10 from "../assets/img/b-b-10d.jpg";
import m11 from "../assets/img/b-ejoy-9d.jpg";

class Electric extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header
            title="Shop/bikes/electric"
            titlemain="electric"
            image={image}
          />
          <div className="bike-type-container">
            <div className="bike-type-name">
              <h3 style={{ padding: "50px 0 0 50px" }}>Electric</h3>
              <div className="bike-models-wrapper">
                <Link
                  to="/m20"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m7} alt="M20" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Orbea Gain M20 E-Bike</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2019</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$4,799.00</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/m30"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m8} alt="M30" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Orbea Gain M30 E-Bike</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2019</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$2,699.99</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/h30"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m9} alt="H30" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Orbea Wild FS H30</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4> 2020</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$4,999.00</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/10d"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m10} alt="GT Force" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Benno Boost E 10D E-Bike</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2019</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$3,999.99</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/ejoy9d"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m11} alt="Marin San Quentin " />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Benno Ejoy 9D E-Bike</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2020</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$3,399.99</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Electric;
