import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Common/Header";
import Footer from "../Common/Footer";

// Images
import image from "../assets/img/mountain-bg.jpg";
import m1 from "../assets/img/kona-process-2019.jpg";
import m2 from "../assets/img/kona-satori-2019.jpg";
import m3 from "../assets/img/gt-force-2019.jpg";
import m4 from "../assets/img/marin-hawk-hill-2020.jpg";
import m5 from "../assets/img/marin-san-quentin-2020.jpg";

class Mountain extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header
            title="Shop/bikes/mountain"
            image={image}
            titlemain="mountain"
          />
          <div className="bike-type-container">
            <div className="bike-type-name">
              <h3 style={{ padding: "50px 0 0 50px" }}>Mountain</h3>
              <div className="bike-models-wrapper">
                <Link
                  to="/konaprocess"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m1} alt="Kona Process" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Kona Process 153 CR 27.5"</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2019</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$4,999.00</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/konasatori"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m2} alt="Kona Satori" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Kona Satori </h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2019</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$3,499.00</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/marinhawk"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m4} alt="Marin Hawk" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Marin Hawk Hill 1</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4> 2020</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$1,599.00</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/gtforce"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m3} alt="GT Force" />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>GT Force Elite 27.5"</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2019</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$3,150.00</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/marinsan"
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  <div className="bike-model-wrapper" id="bmw-margin">
                    <div className="bike-model-img">
                      <img src={m5} alt="Marin San Quentin " />
                    </div>
                    <div className="bike-model-desc">
                      <div className="bike-model-name">
                        <h3>Marin San Quentin 2</h3>
                      </div>
                      <div className="bike-model-year">
                        <h4>2020</h4>
                      </div>
                      <div className="bike-model-price">
                        <h3>$1,949.99</h3>
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

export default Mountain;
