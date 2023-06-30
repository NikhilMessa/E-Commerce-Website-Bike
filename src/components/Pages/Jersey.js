import React, { Component } from "react";
import PromotionLayout from "../Common/PromotionLayout";
import Footer from "../Common/Footer";

import image from "../assets/img/mainjersey.png";

class Jersey extends Component {
  render() {
    return (
      <div>
        <PromotionLayout
          title="super d"
          head="JERSEY"
          price="$46.00"
          discount="$14.99"
          save="67%"
          image={image}
        />
        <div className="container">
          <div className="model-description">
            <p>
              Fly designed the Radium Jersey to perform well in a multitude of
              settings. It features long sleeve Lycra gussets, and comfortable
              flat lock stitching. The Polygiene odor control technology keeps
              you feeling fresh, the performance fit feels light on your body. A
              tagless printed collar prevents irritation, and the v-neck cut is
              non-obtrusive when you're getting technical.
            </p>
          </div>
          <div className="model-features">
            <h2>FEATURES</h2>
            <ul>
              <li>Polygiene® odor control technology</li>
              <li>Hidden zipper pocket with internal optics wipe</li>
              <li>Tagless printed collar</li>
              <li>V-neck collar</li>
            </ul>
          </div>
          <div className="model-specification">
            <table className="size-table">
              <h2>SIZE TABLE</h2>
              <div>
                <tr>
                  <th>SIZE(IN)</th>
                  <th>SMALL</th>
                  <th>MEDIUM</th>
                  <th>LARGE</th>
                  <th>EXTRA LARGE</th>
                </tr>
                <tr>
                  <th>CHEST</th>
                  <td>34-35</td>
                  <td>36-38</td>
                  <td>40-42</td>
                  <td>44-46</td>
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

export default Jersey;
