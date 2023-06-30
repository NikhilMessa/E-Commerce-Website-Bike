import React, { Component } from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/marinsan.jpg";

class MarinSan extends Component {
  render() {
    return (
      <div>
        <PageLayout
          model="marin san quentin 2"
          type="Shop/mountain"
          price="$1,949.99"
          image={image}
        />
      </div>
    );
  }
}

export default MarinSan;
