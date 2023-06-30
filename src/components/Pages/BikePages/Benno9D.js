import React from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/benno9d.jpg";

const Benno9D = () => {
  return (
    <PageLayout
      model="benno ejoy 9d e-bike"
      type="Shop/electric"
      price="$3,399.99"
      image={image}
    />
  );
};

export default Benno9D;
