import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../Common/Footer";

class Signin extends Component {
  render() {
    return (
      <div>
        <div className="sign-container">
          <div className="signin-container">
            <h3>Sign In to your account</h3>
            <p>
              Welcome to the new JensonUSA.com. If you had an existing account
              with us, you will need to reset your password to use it. Simply
              select 'Forgot Your Password?' below to do so.
            </p>
            <div className="signin-input-container">
              <label>EMAIL</label>
              <input type="email" required />
              <label>PASSWORD</label>
              <input type="password" required />
              <div style={{ margin: "20px 0" }}>
                <input
                  type="checkbox"
                  id="Remember-Me"
                  style={{ marginRight: "10px" }}
                />
                <label for="Remember-me">Remember Me</label>
              </div>
              <Link
                to="/"
                style={{
                  fontSize: "12px",
                  textDecoration: "none",
                  color: "#222",
                }}
              >
                Forgot Password?
              </Link>
              <Link
                to="/"
                style={{
                  margin: "50px 0",
                  padding: "10px 20px",
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#222",
                  width: "100px",
                }}
              >
                SIGN IN
              </Link>
            </div>
          </div>
          <div className="signup-container">
            <h3 style={{ textTransform: "uppercase" }}>Create an Account</h3>
            <p>This will allow you to:</p>
            <ul>
              <li>Save billing and shipping details for faster checkout.</li>
              <li>
                Complete your rider profile to receive Specialized news and
                product updates.
              </li>
              <li>Archive purchases and order history.</li>
              <li>Register purchased bikes and warranties.</li>
            </ul>
            <Link
              to="/createaccount"
              style={{
                padding: "10px 20px",
                textDecoration: "none",
                color: "white",
                backgroundColor: "#222",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              Create Account
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signin;
