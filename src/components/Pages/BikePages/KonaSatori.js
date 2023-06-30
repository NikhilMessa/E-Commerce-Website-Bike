import React, { Component } from "react";

import PageLayout from "./Common/PageLayout";

// Image
import image from "../../assets/img/konasatori.jpg";

class KonaSatori extends Component {
  render() {
    return (
      <div>
        <PageLayout
          model="kona satori 153"
          type="Shop/mountain"
          price="$3,499"
          image={image}
        />
      </div>
    );
  }
}

export default KonaSatori;
