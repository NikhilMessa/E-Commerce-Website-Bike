import React, { Component } from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/marinhawk.jpg";

class MarinHawk extends Component {
  render() {
    return (
      <div>
        <PageLayout
          model="marin hawk hill 1"
          type="Shop/mountain"
          price="$1,599"
          image={image}
        />
      </div>
    );
  }
}

export default MarinHawk;
