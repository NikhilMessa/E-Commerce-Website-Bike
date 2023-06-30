import React, { Component } from "react";
import PromotionLayout from "../Common/PromotionLayout";
import Footer from "../Common/Footer";

import image from "../assets/img/mainhelmet.png";

class Helmet extends Component {
  render() {
    return (
      <div>
        <PromotionLayout
          title="sixsixone comp"
          head="HELMET"
          price="$100.00"
          discount="$79.99"
          save="20%"
          image={image}
        />
        <div className="container">
          <div className="model-description">
            <p>
              The SixSixOne Comp is the perfect helmet for any entry level
              gravity rider. It features a lightweight polycarbonate shell,
              large vents for maximum airflow, and a large eye port to accompany
              any set of goggles. The Comp Helmet has been a staple in the
              SixSixOne lineup for many years because its affordable, safe, and
              stylish.
            </p>
          </div>
          <div className="model-features">
            <h2>FEATURES</h2>
            <ul>
              <li>Adjustable and replaceable visor</li>
              <li>Lightweight polycarbonate shell</li>
              <li>Large vents provide cold air intake and heat exhaust</li>
              <li>
                Large eyeport for great field of vision and the accommodating of
                goggles
              </li>
              <li>Complies to standards: CPSC, CE: 1078, AS/NZS 2064</li>
            </ul>
          </div>
          <div className="model-specification">
            <table className="size-table">
              <h2>SIZE TABLE</h2>
              <div>
                <tr>
                  <th>SIZE(CM)</th>
                  <th>SMALL</th>
                  <th>MEDIUM</th>
                  <th>LARGE</th>
                  <th>EXTRA LARGE</th>
                </tr>
                <tr>
                  <th>HEAD CIRCUMFERENCE</th>
                  <td>55-56</td>
                  <td>57-59</td>
                  <td>59-60</td>
                  <td>60-62</td>
                </tr>
              </div>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Helmet;
