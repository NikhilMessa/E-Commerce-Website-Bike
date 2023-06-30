import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

// Images
import image from "../assets/img/bikes-bg.jpg";
import m1 from "../assets/img/kona-process-2019.jpg";
import m2 from "../assets/img/kona-satori-2019.jpg";
import m3 from "../assets/img/gt-force-2019.jpg";
import m4 from "../assets/img/marin-hawk-hill-2020.jpg";
import m5 from "../assets/img/marin-san-quentin-2020.jpg";

import m6 from "../assets/img/gt-labomba-bmx.jpg";

import m7 from "../assets/img/m20-e-bike.jpg";
import m8 from "../assets/img/m30-e-bike.jpg";
import m9 from "../assets/img/wild-fs-h30.jpg";
import m10 from "../assets/img/b-b-10d.jpg";
import m11 from "../assets/img/b-ejoy-9d.jpg";

class Bikes extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header title="Shop/bikes" titlemain="bikes" image={image} />
          <div className="container-div">
            <div className="container-left">
              <div className="shortcut">
                <h3>Short Cuts</h3>
                <br />
                <h3>Category</h3>
                <div className="bikes-category">
                  <div className="bike-category">
                    <Link
                      to="/mountain"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <h4>+Mountain</h4>
                    </Link>
                    <div className="category-dropdown">
                      <ul>
                        <Link
                          to="/konaprocess"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Kona Process</li>
                        </Link>
                        <Link
                          to="/konasatori"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Kona Satori</li>
                        </Link>
                        <Link
                          to="/marinhawk"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Marin Hawk</li>
                        </Link>
                        <Link
                          to="/gtforce"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>GT Force Elite</li>
                        </Link>
                        <Link
                          to="/marinsan"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Marin San Quentin</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                  <div className="bike-category">
                    <Link
                      to="/bmx"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <h4>+BMX</h4>
                    </Link>
                    <div className="category-dropdown">
                      <ul>
                        <Link
                          to="/gtlabomba"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>GT Labomba Pro</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                  <div className="bike-category">
                    <Link
                      to="/electric"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <h4>+Electric</h4>
                    </Link>
                    <div className="category-dropdown">
                      <ul>
                        <Link
                          to="/m20"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Orbea Gain M20</li>
                        </Link>
                        <Link
                          to="/m30"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Orbea Gain M30</li>
                        </Link>
                        <Link
                          to="/h30"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Orbea Wild H30</li>
                        </Link>
                        <Link
                          to="/10d"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Benno Boost E 10D</li>
                        </Link>
                        <Link
                          to="/ejoy9d"
                          style={{ textDecoration: "none", color: "#222" }}
                        >
                          <li>Benno EJOY 9D</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  Bikes manufactured and sold by Jensonusa are guaranteed for
                  quality and performance. We stand by our bikes and aim to
                  produce the highest quality products. Our bikes are made for
                  riders, by riders.
                </p>
              </div>
            </div>
            <div className="container-right">
              <div className="bike-type-container">
                <div className="bike-type-name">
                  <h3>Mountain</h3>
                  <div className="bike-models-wrapper">
                    <Link
                      to="/konaprocess"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <div className="bike-model-wrapper">
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
                      <div className="bike-model-wrapper">
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
                      <div className="bike-model-wrapper">
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
                      <div className="bike-model-wrapper">
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
                      <div className="bike-model-wrapper">
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
                <div className="bike-type-name">
                  <h3>BMX</h3>
                  <div className="bike-models-wrapper">
                    <Link
                      to="/gtlabomba"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <div className="bike-model-wrapper">
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
                <div className="bike-type-name">
                  <h3>Electric</h3>
                  <div className="bike-models-wrapper">
                    <Link
                      to="/m20"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <div className="bike-model-wrapper">
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
                      <div className="bike-model-wrapper">
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
                            <h3>2,699.99</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/h30"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <div className="bike-model-wrapper">
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
                      <div className="bike-model-wrapper">
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
                      <div className="bike-model-wrapper">
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bikes;
