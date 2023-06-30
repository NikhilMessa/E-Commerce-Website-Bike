import React, { Component } from "react";

import PageLayout from "./Common/PageLayout";

// Image
import image from "../../assets/img/konaprocess.jpg";

class KonaProcess extends Component {
  render() {
    return (
      <div>
        <PageLayout
          model="kona process 153"
          type="Shop/mountain"
          price="$4,999"
          image={image}
        />
      </div>
    );
  }
}

export default KonaProcess;
