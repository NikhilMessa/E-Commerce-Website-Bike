import React, { Component } from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/gtlabomba.png";

class GTLabomba extends Component {
  render() {
    return (
      <div>
        <PageLayout
          model="gt labomba"
          type="Shop/bmx"
          price="$1,260.00"
          image={image}
        />
      </div>
    );
  }
}

export default GTLabomba;
