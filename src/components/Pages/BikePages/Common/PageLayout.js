import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../../../Common/Footer";

class PageLayout extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h5 style={{ padding: "30px 0", textTransform: "uppercase" }}>
            {this.props.type} / {this.props.model}
          </h5>
          <div className="model-image">
            <img src={this.props.image} alt="konaprocess" />
          </div>
          <div className="model-head">
            <div className="model-head-left">
              <h4 style={{ textTransform: "uppercase" }}>{this.props.model}</h4>
            </div>
            <div className="model-head-right">
              <select className="model-size-selector">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#d32e2e",
                  padding: "10px 20px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                Add To Cart
              </Link>
            </div>
          </div>
          <div className="model-mid">
            <div className="model-price">{this.props.price}</div>
            <div className="model-availability">in stock</div>
          </div>
          <div className="model-description">
            <p>
              You want a bike that goes up efficiently and still descends like
              an animal. One that you don’t have to worry about flipping
              switches on just to continue your ride. Evolved from its
              predecessor’s highly-regarded descending characteristics, the
              all-new Process 153 is stiff, smooth, and an absolute rocket.
            </p>
            <p>
              Designed to be lightweight and built to demanding standards. The
              Process 153 is built around a Kona DH Carbon frame w/6061 aluminum
              chainstays and features the Beamer Independent Suspension Design.
              Built to be off-the-top progressive, Beamer Independent Suspension
              helps the bike stay higher in the travel and recover from hits
              quicker. The Process is instilled with what Kona product managers
              like to call “pure shock movement”, whereby the shock is protected
              from side load. Designed to be highly tunable and extremely
              durable.
            </p>
            <p>
              If you are looking for a bike that can handle everything you want
              to ride, the Kona Process needs to be your next bike. From fast
              flowy single track to steep rocky chutes and everything in
              between, the Process is ready to handle it all. Push your riding
              further and attack the trail with more confidence than ever
              before.
            </p>
          </div>
          <div className="model-features">
            <h2>FEATURES</h2>
            <ul>
              <li>
                Rock Shox suspension front and rear smooths out the rough trail
                in front of you
              </li>
              <li>
                SRAM Guide R hydraulic brakes provide exceptional and consistent
                stopping power
              </li>
              <li>
                Kona DH Carbon frame creates a lightweight frame that can
                withstand the rigors of All-Mountain riding.
              </li>
              <li>
                Boost dropouts gives a boost to strength and riding
                characteristics
              </li>
              <li>
                Beamer Independent Suspension with 153mm of travel can handle
                the big hits
              </li>
              <li>
                27.5” wheels maintain high rolling speeds while maintaining
                agility
              </li>
            </ul>
          </div>
          <div className="model-specification">
            <table className="spec-table">
              <h2>SPECIFICATION</h2>
              <tr>
                <th>FRAME</th>
                <td>
                  Kona DH Carbon w/ 6061 Aluminum Chain Stays 153mm Travel
                </td>
              </tr>
              <tr>
                <th>FORK</th>
                <td>RockShox Lyrik RC DebonAir 160mm Tapered 110mm Spacing</td>
              </tr>
              <tr>
                <th>REAR SHOCK</th>
                <td>RockShox Deluxe RCT Trunnion</td>
              </tr>
              <tr>
                <th>HEADSET</th>
                <td>FSA Orbit 1.5 E ZS</td>
              </tr>
              <tr>
                <th>SHIFTERS</th>
                <td>SRAM GX-Eagle</td>
              </tr>
              <tr>
                <th>REAR DERAILLEUR</th>
                <td>SRAM GX-Eagle 12-speed</td>
              </tr>
              <tr>
                <th>CRANKSET</th>
                <td>SRAM NX Eagle</td>
              </tr>
              <tr>
                <th>BOTTOM BRACKET</th>
                <td>SRAM</td>
              </tr>
              <tr>
                <th>PEDALS</th>
                <td>N/A</td>
              </tr>
              <tr>
                <th>CHAIN</th>
                <td>SRAM GX-Eagle</td>
              </tr>
              <tr>
                <th>CASSETTE</th>
                <td>SRAM GX-Eagle 10-50t 12spd</td>
              </tr>
              <tr>
                <th>BRAKES</th>
                <td>SRAM Guide R</td>
              </tr>
              <tr>
                <th>WHEELSET</th>
                <td>WTB KOM Trail i29 27.5” TCS rims</td>
              </tr>
              <tr>
                <th>TIRES</th>
                <td>
                  Maxxis Minion DHF EXO TR 3C 27.5x2.5" WT / Maxxis Minion DHF
                  EXO TR 3C 27.5x2.3"
                </td>
              </tr>
              <tr>
                <th>HANDLEBAR</th>
                <td>Kona 35 Handlebar, 780mm width</td>
              </tr>
              <tr>
                <th>STEM</th>
                <td>Kona 35 Stem, 50mm length</td>
              </tr>
              <tr>
                <th>GRIPS</th>
                <td>Kona Key Grip</td>
              </tr>
              <tr>
                <th>SEATPOST</th>
                <td>Rock Shox Reverb w/ Remote Lever 31.6mm</td>
              </tr>
              <tr>
                <th>SEATCLAMP</th>
                <td>Kona Clamp</td>
              </tr>
              <tr>
                <th>SADDLE</th>
                <td>WTB Volt Pro</td>
              </tr>
              <tr>
                <th>INTENDED USE</th>
                <td>Enduro, All-mountain</td>
              </tr>
              <tr>
                <th>WEIGHT</th>
                <td>N/A</td>
              </tr>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PageLayout;
