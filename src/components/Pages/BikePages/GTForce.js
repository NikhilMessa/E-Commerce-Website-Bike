import React, { Component } from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/gtforce.jpg";

class GTForce extends Component {
  render() {
    return (
      <PageLayout
        model="gt force elite"
        type="Shop/mountain"
        price="$3,150"
        image={image}
      />
    );
  }
}

export default GTForce;
