import React from "react";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div className="container">
        <div className="cart">
          <div className="cart-heading">
            <h2>Shopping Cart</h2>
            <Link to="/bikes" style={{ textDecoration: "none", color: "#222" }}>
              Continue Shopping
            </Link>
          </div>
          <div className="cart-body">
            <h3>Your Shopping is Empty</h3>
            <p>There are no products in the cart</p>
            <p>Check out your wishlist item</p>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                backgroundColor: "#222",
                color: "white",
                padding: "10px 20px",
                margin: "20px",
              }}
            >
              View WishList
            </Link>
            <Link to="/bikes" style={{ color: "#222" }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
