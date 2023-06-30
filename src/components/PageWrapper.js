import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageWrapper extends Component {
  mobileSearchHandle = () => {
    if (window.screen.width <= 500) {
      document
        .querySelector(".mobileSearch")
        .classList.toggle("mobileSearchActive");
    }
  };

  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className="nav-top">
            <div className="guidance">
              <p>Expert Guidance (888) 888-8888</p>
            </div>
            <div className="ship-details">
              <p>Free shiping over $60*</p>
            </div>
            <div className="signin">
              <p> US Dollar(USD)</p>
              <Link to="/signin"> Sign In/Sign Up</Link>
            </div>
          </div>
          <div className="nav-bottom">
            <Link to="/">
              <div className="logo"></div>
            </Link>
            <div className="search-bar">
              <input type="text" placeholder="Search"></input>
              <i class="fas fa-search" onClick={this.mobileSearchHandle}></i>
            </div>
            <div className="nav-links">
              <Link to="/cart">
                <i class="fas fa-shopping-cart" style={{ color: "black" }}></i>
              </Link>
            </div>
          </div>
          <div className="mobileSearch">
            <div>
              <input type="text" placeholder="Search" />
              <i class="fas fa-search"></i>
              <i class="fas fa-times" onClick={this.mobileSearchHandle}></i>
            </div>
          </div>
        </div>
        <div className="menu">
          <Link to="/bikes">Bikes</Link>
          <Link to="/mountain">Mountain</Link>
          <Link to="/bmx">BMX</Link>
          <Link to="/electric">Electric</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
