import React, { Component } from "react";
import Footer from "../Common/Footer";

class CreateAccount extends Component {
  render() {
    return (
      <div>
        <div className="create-acc-wrapper">
          <div className="create-container">
            <h3>Create An Account</h3>
            <p>This will allow you to:</p>
            <ul>
              <li>Save billing and shiping details for faster checkout.</li>
              <li>
                Complete your rider profile to recieve JensonUSA news and
                updates.
              </li>
              <li>Archive purchases and order history.</li>
              <li>Register purchased bikes and warranties.</li>
            </ul>
            <div className="ca-form">
              <form>
                <div className="ca-form-part">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" required />
                </div>
                <div className="ca-form-part">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" required />
                </div>
                <div className="ca-form-part">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Used for Signin*"
                  />
                </div>
                <div className="ca-form-part">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" required />
                </div>
                <div className="ca-form-part">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" required />
                </div>
                <div className="ca-form-part">
                  <div className="ca-checkbox">
                    <input type="checkbox" id="rem" />
                    <label htmlFor="rem">
                      Sign me up to recieve email offers and updates
                    </label>
                  </div>
                </div>
                <div className="ca-form-part">
                  <div className="ca-checkbox">
                    <input type="checkbox" id="tc" />
                    <label htmlFor="tc">
                      I accept the JensonUSA Terms and Condition
                    </label>
                  </div>
                </div>
                <div className="ca-form-part">
                  <div className="ca-checkbox">
                    <input type="checkbox" id="tu" />
                    <label htmlFor="tu">
                      I accept the JensonUSA Terms of Use
                    </label>
                  </div>
                </div>
                <div className="ca-form-part">
                  <div className="submit-button">
                    <input type="submit" value="SUBMIT" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreateAccount;
