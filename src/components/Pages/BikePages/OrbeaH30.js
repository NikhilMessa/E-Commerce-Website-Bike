import React, { Component } from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/OrbeaH30.jpg";

class OrbeaH30 extends Component {
  render() {
    return (
      <PageLayout
        model="Orbea wild fs h30 e-bike"
        type="Shop/electric"
        price="$4,999.00"
        image={image}
      />
    );
  }
}

export default OrbeaH30;
