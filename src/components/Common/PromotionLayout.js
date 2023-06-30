import React, { Component } from "react";
import { Link } from "react-router-dom";

class PromotionLayout extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h5 style={{ padding: "30px 0", textTransform: "uppercase" }}>
            Shop / {this.props.head} / {this.props.title}
          </h5>
          <div className="model-image">
            <img src={this.props.image} alt="Item" />
          </div>
          <div className="model-head">
            <div className="model-head-left">
              <h4 style={{ textTransform: "uppercase" }}>{this.props.title}</h4>
            </div>
            <div className="model-head-right">
              <select className="model-size-selector">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#d32e2e",
                  padding: "10px 20px",
                  fontWeigh: "500",
                  textTransform: "uppercase",
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
          <div className="model-mid">
            <div className="model-price">
              <strike style={{ color: "rgb(180, 20, 20)", fontSize: "16px" }}>
                {this.props.price}
              </strike>
              <br />
              {this.props.discount}
              <p style={{ color: "rgb(180, 20, 20)", fontSize: "16px" }}>
                Save {this.props.save}
              </p>
            </div>
            <div className="model-availability">in stock</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PromotionLayout;
