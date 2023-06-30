import React, { Component } from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/OrbeaM.jpg";

class OrbeaM20 extends Component {
  render() {
    return (
      <PageLayout
        model="Orbea Gain M30 e-bike"
        type="Shop/electric"
        price="$2,699.00"
        image={image}
      />
    );
  }
}

export default OrbeaM20;
