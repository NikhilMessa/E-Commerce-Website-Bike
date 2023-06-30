import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Common/Header";
import Footer from "../Common/Footer";

// Images
import image from "../assets/img/bmx-bg.jpg";
import m6 from "../assets/img/gt-labomba-bmx.jpg";

class BMX extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header title="Shop/bikes/bmx" titlemain="bmx" image={image} />
          <div className="bike-type-container">
            <div className="bike-type-name">
              <h3 style={{ padding: "50px 0 0 50px" }}>BMX</h3>
              <div className="bike-models-wrapper">
                <Link
                  to="/gtlabomba"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m6} alt="GT Labomba" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>GT Labomba Pro</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2020</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$1,260.00</h3>
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

export default BMX;
